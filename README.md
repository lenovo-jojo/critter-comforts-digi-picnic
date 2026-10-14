# digital picnic

[visit digi picnic](https://joliesarro.neocities.org/)

a playful personal website: hang out with an animated character, put music on, and explore a virtual laptop and phone. built with html, css, and javascript and hosted on neocities.

## explore

- **picnic character:** typed dialogue, character animation, per-letter voice sounds, and an inline conversation input.
- **laptop:** tarot, snake, a random magic 8 ball, browser-local chat messages, and an archive.org tv playlist.
- **desktop windows:** drag and resize every app; save open windows, dimensions, positions, and tv selection locally. the whole os can open fullscreen.
- **phone:** social links and linkedin.
- **music:** soundcloud controls in the bottom bar, with a remembered, nonblocking aux choice.
- **themes:** click the bottom-left symbol to cycle bow (blue/pink), moon (black/white), light bulb (white/black), and glasses (black/green). the selected theme is remembered locally.
- **desktop companion:** the homepage character, animations, and inline chat at the bottom right, opposite the post-it.
- **weather:** visitor-selected city weather illustration and temperature from open-meteo; the city is remembered locally.

## run locally

the complete site is in `source/`, including the images, audio, styles, and dependent pages from the neocities export. the homepage and active laptop include the latest edits.

```sh
python3 -m http.server 8000 --directory source
```

open http://localhost:8000. serve this folder as the web root so absolute asset paths resolve. external embeds need internet access.

## check changes

```sh
python3 scripts/check_site.py
```

the checker reports missing local assets and checks inline javascript syntax when node.js is installed. also inspect the picnic and laptop in a browser at desktop and mobile widths before publishing.

## hosting and behavior

upload the contents of `source/` to neocities, preserving paths. this repository does not automatically deploy or contain hosting credentials.

the site is static. laptop chat messages and visitor preferences use localstorage in each visitor’s browser; messages are not a shared guestbook. character conversation uses qwen3 1.7b in a browser worker through webllm, with visitor-local time, actual music state, site context, and the last 8 conversation messages. replies are validated at 60 words maximum and displayed in queued bubbles of at most 20 words; truncated or invalid replies receive one regeneration attempt. clicking the character advances queued bubbles or requests a contextual continuation. animalese sounds and the existing talking sprites remain browser-local. the model starts loading when chat opens and is shared between the homepage and laptop and requires webgpu. conversation history stays in memory and resets on reload. the os character waits for a click and dismisses unattended bubbles. camera view uses the existing pixel backdrop with a responsive photo gallery. the tv playlist is a saved selection of archive.org items; third-party availability can change.

## creative direction and ai assistance

jolie directed the picnic concept, character, palette, wording, and interactions. ai substantially assisted with implementation and iteration. this is an evolving personal project, with further accessibility and mobile work planned.

## next improvements

- keyboard access and focus management for scene objects and overlays.
- mobile composition and browser compatibility checks.
- more reliable character conversations and an optional shared guestbook backend.
- review dependencies and attribution before reusing or redistributing assets.

### tv library

the tv browser offers jolie’s selected main picks and a password-gated private collection containing only non-main titles. studio ghibli and peanuts each have a title dropdown. peanuts exposes the individual specials and documentary extras from its decade collection; alternate uploads and dubs appear in a version selector. the source playlist snapshot contains 53 uploads from 2026-10-13. `source/tv-library.json` retains original upload names and catalog selections, including direct file selections within collections. playback is saved per archive upload and file, and the last selected special restores on reopening. unidentified uploads stay labeled as unidentified. the refresh control reads the latest published website catalog; it does not automatically import later archive playlist changes. the `cctv` password is an interface gate, not private hosting.

source refreshed from the neocities export supplied on october 14, 2026. all 32 exported files are included; the tv catalog and local checker are maintained alongside them.
