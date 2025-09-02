// 
let a  = prompt("Enter a first num");
let b  = prompt("Enter a 2nd num");

console.log(" Processing...");

try {
  if (isNaN(a) || isNaN(b)) {
    throw new SyntaxError("Sorry this is not allowed");
  }

  let sum = parseInt(a) + parseInt(b);

  // Error purposely create kiya (x undefined hai)
  console.log("the sum is", sum * x);

  console.log("the sum is", sum);

} catch (error) {
  console.log(" Error pakra gaya:", error.message);

} finally {
  console.log(" Process finished (close/cleanup)");
}



