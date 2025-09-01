document.getElementById("btn2").addEventListener("click", function() {
      let count = 0;
      setInterval(() => {
        count++;
        console.log("Count: " + count)
        }, 1000);
    })