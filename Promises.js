// function getData(){
//     return new Promise((resovle, reject) => {
//         let suscess  = true;
//         setTimeout(() =>{
//             if(suscess){
//                 resovle("Data Recived")
//             }else{
//                 reject("Failed to Recive Data")  

//             }
//         }, 2000)
//     })
  
// }
// document.getElementById("btn2").addEventListener("click",function(){
//     console.log("Fetching data...");
//     getData()
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
// })

// function mypromisise(){
//     return new Promise((resolve, reject)  => {
//         let pass  = true;
//         if(pass){
//             resolve("you killed the exam")
//         } else {
//             reject("you failed the exam")
//        }
//       })
//     }
//     document.getElementById("btn").addEventListener("click", function() {
//       myPromise()
//         .then(message => alert(message)) 
//         .catch(error => alert(error));    
//     });
   function myPromise() {
      return new Promise((resolve, reject) => {
        let pass = true

        if (pass) {
          resolve("You passed the test!")
        } else {
          reject(" You failed the test!")
        }
      })
    }
    document.getElementById("btn").addEventListener("click", function() {
      myPromise()
        .then(message => alert(message))   
        .catch(error => alert(error))
    })
    