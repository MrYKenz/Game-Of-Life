# Game of Life in Vanilla JS
Mathematician John Conway's Game of Life created with no javascript libraries- using HTML5 Canvas and related JS functions.
Allows for drawing with mouse pointer to create / kill cells using mouseEvents.
Stop and Run buttons added to give time to draw create populations because single cells die with each frame (or second).

:rocket: [Click For Demo](https://cellular-automaton.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/90844a6d-fabf-4ec8-882e-1f1768646c58/deploy-status)](https://app.netlify.com/sites/cellular-automaton/deploys)

### This is a cellular automaton simulation with the following rules:
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with fewer than two live neighbours dies, as if by underpopulation.
- Any live cell with more than three live neighbours dies, as if by overpopulation.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

Read more here: [Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

🦠 Created in memory of John Conway (RIP 2020) who recently passed away from the Corona Virus