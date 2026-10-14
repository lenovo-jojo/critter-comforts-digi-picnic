# jolie's digital picnic — neocities

[visit the live site](https://joliesarro.neocities.org/)

an interactive personal webpage built as html practice with substantial ai assistance. i took an html course in college and used this project to explore a more playful interface than a conventional page of links.

## what to explore

the picnic scene uses clickable objects to open camera, laptop, and phone overlays. it includes avatar animation, dialogue, music controls, and layered css composition.

## implementation

- html provides the scene objects, overlay frames, and media controls.
- css uses absolute positioning, viewport-relative sizing, hover effects, transforms, and keyframe animation.
- javascript coordinates overlays, media interaction, dialogue, and avatar image buffering.
- a `prefers-reduced-motion` rule disables several decorative animations.

[source snapshot](source/index.html) was fetched from the public homepage on october 12, 2026. it is an inspection snapshot, not a complete local mirror: dependent pages, styles, images, and third-party media are not included. use the live site to see the complete experience.

## my role and ai assistance

i directed the scene concept, visual choices, and interaction ideas. ai helped substantially with the html, css, and javascript implementation. the project reflects practice and iteration; it is not presented as production-grade frontend engineering.

## technical review and next improvements

source inspection confirms overlay event handlers, percentage/viewport sizing, media embeds, and reduced-motion rules. browser interaction, accessibility, and mobile layout still need a full audit.

the next improvements are keyboard-accessible scene controls, focus management for overlays, responsive composition on narrow screens, and a reduced-motion review of javascript-driven behavior. third-party media availability and embed restrictions can affect the experience.
