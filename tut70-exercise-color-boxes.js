/**
 * 📼 Video 70 — Exercise: Color the Boxes (Random Colors)
 * 🗂️ File: tut70-exercise-color-boxes.js
 */

 // -----------------------------------------------------------------------------
 // Core
 // [ ] 🟦 Build a grid of boxes from JS (no hardcoded HTML)
 // [ ] 🎨 Generate random colors
 // [ ] 🖱️ Change color on hover/click
 // [ ] 🔢 Display HEX/RGB of current color somewhere near the box

 // -----------------------------------------------------------------------------
 // Mini-Tasks
 // [ ] 🧭 Add a "Randomize All" button
 // [ ] 🧲 Add a "Lock" toggle on a box to keep its color

 // -----------------------------------------------------------------------------
 // Practice Ideas
 // - Add copy-to-clipboard for color code
 // - Save/restore palette from localStorage
 // -----------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  console.log("Script.js initializing")

  let boxes = document.querySelector(".container").children

  function getRandomColor() {
    let val1 = Math.ceil(Math.random() * 255)
    let val2 = Math.ceil(Math.random() * 255)
    let val3 = Math.ceil(Math.random() * 255)
    return `rgb(${val1}, ${val2}, ${val3})`
  }

  Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
    e.innerText = "Box" // add label text inside
  })
})

