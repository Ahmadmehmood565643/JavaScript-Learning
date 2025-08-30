// const btn = document.getElementById("startTimeout")
// const msg = document.getElementById("timeoutMsg")
// btn.addEventListener("click", function (){
//     msg.innerText ="hey Js fellow"
// })
//  setTimeout(() => {
//     msg.innerText = "✅ setTimeout finished!";
//   }, 3000)
// });
const btn = document.getElementById("startTimeout");
const msg = document.getElementById("timeoutMsg");

btn.addEventListener("click", function () {
  msg.innerText = " Waiting 3 seconds...";
  
  setTimeout(() => {
    msg.innerText = " setTimeout finished!";
  }, 3000);
});
