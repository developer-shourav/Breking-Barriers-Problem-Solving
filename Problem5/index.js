/* 

5. Task: Find and Modify
Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.



*/


const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Robin', age: 16 },
  { name: 'Charlie', age: 28 }
];

// ----------------Function to find a person by name and update their age
function updatePersonAge(peopleArray, targetName, newAge) {
  const person = peopleArray.find(p => p.name === targetName);
  if (person) {
    person.age = newAge;
  }
  return peopleArray;
}

// ----------------Run the function and print the result
const updatedPeople = updatePersonAge(people, 'Bob', 35);
console.log(updatedPeople);
