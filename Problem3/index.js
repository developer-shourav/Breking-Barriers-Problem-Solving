/* 
3. Task: Function Composition
Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.



*/


function makeSquare(num) {
  return num * num;
}

function makeDouble(num) {
  return num * 2;
}

function addFive(num) {
  return num + 5;
}

// ----------------Composed function: square → double → add 5
function composedFunction(num) {
  return addFive(makeDouble(makeSquare(num)));
}

// --------------Test the composed function
const result = composedFunction(3); 
console.log(result);
