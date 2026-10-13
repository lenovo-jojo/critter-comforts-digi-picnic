# digi picnic

[Visit digi picnic](https://joliesarro.neocities.org/)

A playful personal website: hang out with an animated character, put music on, and explore a virtual laptop and phone. Built with HTML, CSS, and JavaScript and hosted on Neocities.

## Explore

- **Picnic character:** typed dialogue, character animation, per-letter voice sounds, and an inline conversation input.
- **Laptop:** tarot, Snake, a random Magic 8 Ball, browser-local chat messages, and an Archive.org TV playlist.
- **Desktop windows:** drag and resize every app; save open windows, dimensions, positions, and TV selection locally. The whole OS can open fullscreen.
- **Phone:** social links and LinkedIn.
- **Music:** SoundCloud controls in the bottom bar, with a remembered, nonblocking aux choice.
- **Themes:** click the bottom-left symbol to cycle bow (blue/pink), moon (black/white), light bulb (white/black), and glasses (black/green). The selected theme is remembered locally.
- **Desktop companion:** the homepage character, animations, and inline chat at the bottom right, opposite the post-it.
- **Weather:** visitor-selected city weather illustration and temperature from Open-Meteo; the city is remembered locally.

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

The site is static. Laptop chat messages and visitor preferences use localStorage in each visitor’s browser; messages are not a shared guestbook. Character conversation uses Qwen3 1.7B in a browser worker through WebLLM, with visitor-local time, actual music state, site context, and the last 12 conversation messages. Replies are validated at 60 words maximum and displayed in queued bubbles of at most 20 words; truncated or invalid replies receive one regeneration attempt. Clicking the character advances queued bubbles or requests a contextual continuation. Animalese sounds and the existing talking sprites remain browser-local. The model downloads on the first conversation request and requires WebGPU. Conversation history stays in memory and resets on reload. The OS character waits for a click and dismisses unattended bubbles. Camera view uses the existing pixel backdrop with a responsive photo gallery. The TV playlist is a saved selection of Archive.org items; third-party availability can change.

## Creative direction and AI assistance

Jolie directed the picnic concept, character, palette, wording, and interactions. AI substantially assisted with implementation and iteration. This is an evolving personal project, with further accessibility and mobile work planned.

## Next improvements

- Keyboard access and focus management for scene objects and overlays.
- Mobile composition and browser compatibility checks.
- More reliable character conversations and an optional shared guestbook backend.
- Review dependencies and attribution before reusing or redistributing assets.
