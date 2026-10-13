# digi picnic

[Visit digi picnic](https://joliesarro.neocities.org/)

A playful personal website: hang out with an animated character, put music on, and explore a virtual laptop and phone. Built with HTML, CSS, and JavaScript and hosted on Neocities.

## Explore

- **Picnic character:** typed dialogue, character animation, per-letter voice sounds, and an inline conversation input.
- **Laptop:** tarot, Snake, a random Magic 8 Ball, browser-local chat messages, and an Archive.org TV playlist.
- **Video popout:** drag to move or resize, fullscreen, and remembered layout.
- **Phone:** social links and LinkedIn.
- **Music:** SoundCloud controls with a remembered, nonblocking aux choice.

## Run locally

The complete site is in `source/`, including the images, audio, styles, and dependent pages from the Neocities export. The homepage and active laptop include the latest edits.

```sh
python3 -m http.server 8000 --directory source
```

Open http://localhost:8000. Serve this folder as the web root so absolute asset paths resolve. External embeds need internet access.

## Check changes

```sh
python3 scripts/check_site.py
```

The checker reports missing local assets and checks inline JavaScript syntax when Node.js is installed. Also inspect the picnic and laptop in a browser at desktop and mobile widths before publishing.

## Hosting and behavior

Upload the contents of `source/` to Neocities, preserving paths. This repository does not automatically deploy or contain hosting credentials.

The site is static. Laptop chat messages and visitor preferences use localStorage in each visitor’s browser; messages are not a shared guestbook. Character chat combines guided responses with an optional SmolLM2 360M model through WebLLM. The model downloads only when needed and requires WebGPU; its conversational ability is limited. The TV playlist is a saved selection of Archive.org items; third-party availability can change.

## Creative direction and AI assistance

Jolie directed the picnic concept, character, palette, wording, and interactions. AI substantially assisted with implementation and iteration. This is an evolving personal project, with further accessibility and mobile work planned.

## Next improvements

- Keyboard access and focus management for scene objects and overlays.
- Mobile composition and browser compatibility checks.
- More reliable character conversations and an optional shared guestbook backend.
- Review dependencies and attribution before reusing or redistributing assets.
