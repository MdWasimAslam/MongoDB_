// Find all data in the students collection - by default it returns first 20 documents
db.students.find()

// Find all students whose age is 20
db.students.find({age:20})

//find only one student whose age is 20
db.students.findOne({age:20})


//difference between find and findOne
// Find - returns all the documents that match the query criteria - it returns a cursor for iteration
// FindOne - returns only the first document that matches the query criteria - it returns a document



// Find all the name of the students - we can use forEach to iterate over the cursor
db.students.find().forEach((x)=>printjson(x.name)) 

// We cannot iterate findOne as it returns a document and not a cursor


// Find all students whose age is greater than 20
db.students.find({age:{$gt:20}})

// find all students whose age is less than 20
db.students.find({age:{$lt:20}})


// count the number of students whose age is greater than 20
db.students.find({age:{$gt:20}}).count()


//find all students whose age is graeter than 20 and less than 22
db.students.find({age:{$gt:20,$lt:22}})


//toArray() - converts the cursor to an array - returns all the documents that match the query criteria without any limit
db.students.find().toArray()



