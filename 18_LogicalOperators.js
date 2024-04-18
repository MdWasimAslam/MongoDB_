//find all students whose age is greater than 20 and less than 22
db.students.find({$and: [ {age: {$gte:20}}, {age: {$lte:22}} ]})


//find all students whose age is either 20 or 24
db.students.find({$or: [ {age:20}, {age:24} ]})

//Find all students whose age is not 20,24 and 22
db.students.find({$nor: [ {age:20}, {age:24}, {age:22} ]})


