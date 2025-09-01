//  function greet(name, callback) {
//       console.log("Hello " + name);
//       callback();  // call the function passed
//     }

function greet(name, callback) {
      console.log("Hello " + name)
      callback()
    }

    function goodbye() {
      console.log("Goodbye!")
    }

    document.getElementById("btn").addEventListener("click", function() {
      greet("Ahmad", goodbye)
    })