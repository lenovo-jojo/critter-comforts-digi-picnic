# digital picnic

**[visit the live site →](https://joliesarro.neocities.org/)**

a playful personal website: hang out with an animated character on a picnic blanket, put music on, and poke around a virtual laptop and phone. plain html, css, and javascript, hosted on neocities.

## explore

- **the character:** chat in typed speech bubbles with per-letter animalese sounds. replies come from a small language model (qwen3 1.7b) running entirely in your browser through webllm (needs webgpu).
- **the laptop:** a draggable, resizable desktop with tarot, snake, a magic 8 ball, a message board saved in your browser, and a tv. window layout is remembered.
- **the phone:** social links.
- **music, themes, weather:** soundcloud controls, four color themes, and a weather illustration for a city you choose.

## interesting bits

- **an in-browser ai companion:** the model runs in a web worker. it's given the visitor's local time, what music is playing, and the last 8 messages. replies over 60 words are regenerated once, then split into bubbles of 20 words or fewer.
- **a little desktop os:** windows drag, resize, and restore their positions from localstorage. the whole desktop can go fullscreen.
- **no backend:** everything is static. preferences and chat stay in the visitor's browser.

## run locally

```sh
python3 -m http.server 8000 --directory source
```

open http://localhost:8000. serve `source/` as the web root so absolute paths resolve. embeds need internet access.

```sh
python3 scripts/check_site.py
```

checks for missing local assets and, if node.js is installed, inline javascript syntax.

## next

- keyboard access and focus management for scene objects and overlays.
- mobile layout.
- smaller images and gifs, and splitting the large inline scripts into files.

## credits

i designed the concept, character, art direction, palette, and writing; the code was written with ai assistance. third-party scripts, sounds, and embeds belong to their owners. © jojo, all rights reserved; see [license](LICENSE).
