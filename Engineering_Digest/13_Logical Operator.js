// Logical Operator - AND, OR, NOT

// Find all student whose age is greater than 19 and less than 22
db.students.find({ $and: [ {age:{$gt:19}} , {age:{$lt:22}}  ]  })


// Find all student whose age is 20 and gender is female
db.students.find( { $and: [  {age:20} , { gender:"Female" } ] } )


// Find all student who has grade A with subject Math
db.students.find( { $and: [ {grade:'A'} , {subjects:'Math' } ]  })


// Find all student who has subject math or grade A
db.students.find( {$or: [ {grade:'A'} , { subjects:'Math'} ]  } )

// Find all student whose age is not 19 
db.students.find( { $nor: [ {age:19} ] } )

// Difference between nor and not operator - 
// not operator is used to negate the expression
// nor operator is used to negate the whole expression


// Find all student whose age is not 19,20,22
db.students.find( { age: { $not: { $in: [19,20,22] } } } )