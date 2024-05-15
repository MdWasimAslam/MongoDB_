// Find all documents
db.students.find()


// Find all data with name kiki
db.students.find({"name":'kiki'})

// find only one data with name kiki
db.students.findOne({"name":'kiki'})


// Find all data without default limit
db.students.find().toArray()