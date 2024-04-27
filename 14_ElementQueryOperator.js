db.students.updateOne({name:'Emma Rivera'},{$set:{hasMacbook:true}})

// fInd all the students who has hasMacbook field
db.students.find({ hasMacbook:{$exists:true} })

// Find all the students who has not hasMacbook field and the value is true
db.students.find({hasMacbook:{$exists:true, $eq:true }})

// find all students who has not hasMacbook field and has the value in boolean - 8 is for boolean
db.students.find({hasMacbook:{$exists:true, $type:8}})