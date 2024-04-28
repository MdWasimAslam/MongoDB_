
// Create the "books" collection
db.createCollection("books")

// Insert 2 sample documents into the "books" collection
db.books.insertMany([
  {
    _id: 1,
   name:"A",
   Age: 30
  },
  {
    _id: 2,
    name:"B",
    Age: 31
  }
  
])

// When adding ordered: false, the insertMany() method will not stop the insertion of documents if it encounters an error.
db.books.insertMany([
  {
    _id: 3,
    name:"C",
    Age: 32
  },
  {
    _id: 1, // here is the error because we have already inserted a document with the same _id with name "A"
    name:"E", 
    Age: 33
  },
  {
    _id: 5,
    name:"D",
    Age: 34
  }
], {ordered: false})





