//Insert a single data 
db.students.insertOne({'name':'vinod',age:29})

// Inserting multiple data into collection 
db.students.insertMany([{"name":'bimara',age:20},{'name':'arjun',age:24}])

// Get all data from the collection
db.students.find()