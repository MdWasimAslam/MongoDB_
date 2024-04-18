//find all the students whose hobby  is Hiking
db.students.find({hobby:'Hiking'})


// Find all students who has worked with google
db.students.find( { 'experince.company':'Google' } )


// Find all students who has worked with Amazon
db.students.find( { 'experince.company':'Amazon'} ).count()


// Find students who has working with 2 companys 
db.students.find( { experince: { $size:2}} )

// Size Operator is used to find the number of elements in an array