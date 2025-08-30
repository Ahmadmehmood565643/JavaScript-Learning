// const btn = document.getElementById("myBtn");
// const msg = document.getElementById("message");
// console.log(btn)
// btn.addEventListener("click", function () {
//   msg.innerText = " You clicked the button!";
// });
// window.onload  =function(){
//     const btn = document.getElementById("myBtn")
//     const msg = document.getElementById("message")
//      btn.addEventListener("click", function() {
//       msg.textContent = " You clicked the button!";
//     });
// }

// ⚡ Most beginners put <script> in the <head> but forget to wait for HTML to load.
// 👉 Easiest solution: Always put <script> just before </body> when practicing.

// EventBublling

// const parent = document.getElementById("parent");
// const child = document.getElementById("child");
// const btn = document.getElementById("myBtn");

// parent.addEventListener("click", function () {
//   alert("Parent DIV clicked!");
// });

// child.addEventListener("click", function () {
//   alert("Child DIV clicked!");
// });

// btn.addEventListener("click", function (event) {
//   alert("Button clicked!");
 
// });


// parent.addEventListener("click", function (){
//     this.alert("Parent Div clicked");
// })
// child.addEventListener("click", function (){
//     alert("Child DIV clicked");
// })
// btn.addEventListener("click", function (event){
//     alert("Button Clik")
//     event.stopPropagation();   
// })

