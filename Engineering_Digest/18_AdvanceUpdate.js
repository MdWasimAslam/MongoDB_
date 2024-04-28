//Inc - Increment Operator

// Update all students age by 2
db.students.updateMany({},{$inc:{age:2}})


// Increase the age of student with the given id to 24
db.students.updateOne({_id: ObjectId('662cc2cfb883e6aa46267297')},{$max:{age:24}})

// decrease the age of the student with the given id to 16
db.students.updateOne({_id: ObjectId('662cc2cfb883e6aa46267297')},{$min:{age:16}})

// Multiply the age of the student with the given id by 2
db.students.updateOne({_id: ObjectId('662cc2cfb883e6aa4626728c')},{$mul:{age:2}})


// Remove grade field from a student with the given id
db.students.updateOne({_id: ObjectId('662cc2cfb883e6aa4626728c'),},{$unset:{grade:1}})

// Rename all the students age field to studentaAge
db.students.updateMany({},{$rename:{age:'studentAge'}})

// Update a student name Golu with age 24 if it does not exists then add the student
db.students.updateOne({name:'Golu'},{$set:{age:24}},{upsert:true})