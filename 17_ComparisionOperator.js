// Find all student whose age is 20
db.students.find({age:{$eq:20}})


// Finding student with age 23
db.students.find({age:23})

// Find all students whose age is greater than 22
db.students.find({age:{$gt:22}})

// Find all student whose age is greater than or equal to 23
db.students.find({age:{$gte:23}})


// Find all student whose age is less than or equal to 21 
db.students.find({age:{$lte:21}})

// Find all student whose age is less than 22
db.students.find({age:{$lt:22}})

// Find all student whose age is not equal to 23
db.students.find({age:{$ne:23}})

//Find all students whose age is 20 equals to 20 and 24
db.students.find({age: {$in: [20,24]} })


// find all students whose age is not quals to 20 , 22 and 24
db.students.find({age: {$nin: [20,22,24]} })


// Find all students whose hobby is traveling 
db.students.find({hobby:'Traveling'})


// Find all students who does not have Adhaar card
db.students.find({'identity.hasAdhaarCard':false})

