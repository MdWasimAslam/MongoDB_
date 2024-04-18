// Find all students who haMacbook field 
db.students.find({ hasMacbook:{$exists:true} })

// Find all students who do not have Macbook field
db.students.find({ hasMacbook:{$exists:false} })