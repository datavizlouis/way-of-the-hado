# Memories

- **External origins:** the site's allowed-origins list was empty when the app was scaffolded, so nothing external can load. Every image, font and sprite is inlined as a data URI in `hado-assets.js` (data URIs also keep canvases untainted for WebGL); audio ships as files and plays through `<audio>`. Don't route `<audio>` through WebAudio: cross-origin media turns silent.
- **No viewport units:** inside a dashboard the iframe is as tall as the zone, so the page scrolls in the parent and `vh` is meaningless. Section heights are fixed pixels. `IntersectionObserver` still reports what's on screen and is used to pause off-screen animation.
- **Placeholder art:** the user chose "placeholder + asset slots". Capcom sprites, logo and music are not bundled; the user drops their own into `app/assets/` (see its README).
- **Franchise figures:** the researcher couldn't open primary pages and relied on search snippets, so many rows are marked "secondary" in the Note column. Verify against Capcom IR before sharing widely.
- **Story order:** the chapters run chronologically (IV, then V, then III, then 6), not in release order.
