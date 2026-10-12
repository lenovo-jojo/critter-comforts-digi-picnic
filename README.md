# Jolie's Virtual Picnic — Neocities practice

[Visit the live site](https://joliesarro.neocities.org/)

An interactive personal webpage built as HTML practice with substantial AI assistance. I took an HTML course in college and used this project to explore a more playful interface than a conventional page of links.

## What to explore

The picnic scene uses clickable objects to open camera, laptop, and phone overlays. It includes avatar animation, dialogue, music controls, and layered CSS composition.

## Implementation

- HTML provides the scene objects, overlay frames, and media controls.
- CSS uses absolute positioning, viewport-relative sizing, hover effects, transforms, and keyframe animation.
- JavaScript coordinates overlays, media interaction, dialogue, and avatar image buffering.
- A `prefers-reduced-motion` rule disables several decorative animations.

[Source snapshot](source/index.html) was fetched from the public homepage on October 12, 2026. It is an inspection snapshot, not a complete local mirror: dependent pages, styles, images, and third-party media are not included. Use the live site to see the complete experience.

## My role and AI assistance

I directed the scene concept, visual choices, and interaction ideas. AI helped substantially with the HTML, CSS, and JavaScript implementation. The project reflects practice and iteration; it is not presented as production-grade frontend engineering.

## Technical review and next improvements

Source inspection confirms overlay event handlers, percentage/viewport sizing, media embeds, and reduced-motion rules. Browser interaction, accessibility, and mobile layout still need a full audit.

The next improvements are keyboard-accessible scene controls, focus management for overlays, responsive composition on narrow screens, and a reduced-motion review of JavaScript-driven behavior. Third-party media availability and embed restrictions can affect the experience.
