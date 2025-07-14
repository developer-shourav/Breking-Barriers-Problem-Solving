/* 


4. Task: Sorting Objects
Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.





*/


const cars = [
  { make: 'Toyota', model: 'Corolla', year: 2020 },
  { make: 'Honda', model: 'Civic', year: 2018 },
  { make: 'Ford', model: 'Mustang', year: 2022 },
  { make: 'Chevrolet', model: 'Camaro', year: 2019 }
];

// ---------------Function to sort cars by year in ascending order
function sortCars(carArray) {
  return carArray.sort((a, b) => a.year - b.year);
}

// ---------------Run the function and print the result
const sortedCars = sortCars(cars);
console.log(sortedCars);
