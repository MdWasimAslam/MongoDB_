// find a student name raj and update its age to 39
db.students.updateOne({name:'raj'},{$set:{age:37}})

// Update all students whose age is 21 to 24
db.students.updateMany({age:21},{$set:{age:24}})


// Add new field called internship with value true to student whose name is raj
db.students.updateMany({name:"raj"},{$set:{internship:true}})


// Add new field called internship with value true to all student whose age is greater than or equal to 24
db.students.updateMany({age:{$gte:24}},{$set:{internship:true}})