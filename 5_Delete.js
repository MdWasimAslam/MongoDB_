// Delete the student whose name is Baju
db.students.deleteOne({name:"Baju"})


// Delete all students whose age is 19
db.students.deleteMany({age:19})

// Delete all students
db.students.deleteMany({})