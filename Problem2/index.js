/* 


2. Task: Object Manipulation
Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.


*/


// ------------Sample array of book objects
const books = [
  { title: 'The Alchemist', author: 'Paulo Coelho', year: 1988 },
  { title: '1984 When we Love each other', author: 'George Orwell', year: 1949 },
  { title: 'Sapiens', author: 'Yuval Noah Harari', year: 2011 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
];

// ------------Function to return only the book titles
function getBookTitles(bookArray) {
  return bookArray.map(book => book.title);
}

// ------------Run the function and print the result
const bookTitles = getBookTitles(books);
console.log(bookTitles);
