"""Check local references and inline JS without fetching remote content."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import re, shutil, subprocess, tempfile, sys
ROOT = Path(__file__).resolve().parents[1] / "source"
issues = []
class References(HTMLParser):
    def __init__(self, page):
        super().__init__(); self.page = page
    def handle_starttag(self, tag, attrs):
        for key, value in attrs:
            if key not in {"src", "href", "poster"} or not value: continue
            url = urlsplit(value)
            if url.scheme or url.netloc or not url.path: continue
            target = (ROOT / unquote(url.path).lstrip("/")) if url.path.startswith("/") else self.page.parent / unquote(url.path)
            if not target.exists() and not target.with_suffix(".html").exists():
                issues.append(f"{self.page.name}: missing {url.path}")
node = shutil.which("node")
for page in sorted(ROOT.glob("*.html")):
    source = page.read_text(encoding="utf-8")
    References(page).feed(source)
    if node:
        for index, (attrs, script) in enumerate(re.findall(r"<script\b([^>]*)>(.*?)</script>", source, re.S | re.I)):
            # importmap and JSON blocks are data, not JavaScript
            if not script.strip() or re.search(r"type=[\"']?(importmap|application/(ld\+)?json)", attrs, re.I): continue
            with tempfile.NamedTemporaryFile(suffix=".mjs", mode="w", encoding="utf-8") as temp:
                temp.write(script); temp.flush()
                result = subprocess.run([node, "--check", temp.name], capture_output=True, text=True)
                if result.returncode: issues.append(f"{page.name} script {index}: {result.stderr}")
if issues:
    print("\n".join(issues)); sys.exit(1)
print("Local HTML references and inline JavaScript checks passed." if node else "Local HTML references passed; install Node.js for JS syntax checks.")
