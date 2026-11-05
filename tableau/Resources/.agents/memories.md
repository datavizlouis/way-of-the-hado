# Memories

- **External origins:** the site's allowed-origins list was empty when the app was scaffolded, so nothing external can load. Every image, font and sprite is inlined as a data URI in `hado-assets.js` (data URIs also keep canvases untainted for WebGL); audio ships as files and plays through `<audio>`. Don't route `<audio>` through WebAudio: cross-origin media turns silent.
- **No viewport units:** inside a dashboard the iframe is as tall as the zone, so the page scrolls in the parent and `vh` is meaningless. Section heights are fixed pixels. `IntersectionObserver` still reports what's on screen and is used to pause off-screen animation.
- **Artwork:** the user supplied Super SF2 sprite sheets (Lord Zymeth), select portraits (Phatman) and select-screen parts (GaryCXJK) for a non-commercial project, and wants them credited. The footer credits all three. The images and everything cut from them stay out of git; only the scripts and mappings are committed. The logo, fonts and music are still placeholders.
- **The user's select-screen preferences:** borderless, player 1 only, no full-body sprite next to the portrait, no volume or mute controls, music changes automatically with the selected fighter, and text optically centred on the equaliser.
- **Roster change:** Balrog's second move is Dash Uppercut, because Turn Punch isn't on his sheet.
- **Franchise figures:** the researcher couldn't open primary pages and relied on search snippets, so many rows are marked "secondary" in the Note column. Verify against Capcom IR before sharing widely.
- **Story order:** the chapters run chronologically (IV, then V, then III, then 6), not in release order.
