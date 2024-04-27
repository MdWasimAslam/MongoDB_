// Comparision Operators in MongoDB
// 1. $eq: Matches values that are equal to a specified value.
// 2. $gt: Matches values that are greater than a specified value.
// 3. $gte: Matches values that are greater than or equal to a specified value.
// 4. $lt: Matches values that are less than a specified value.
// 5. $lte: Matches values that are less than or equal to a specified value.
// 6. $ne: Matches all values that are not equal to a specified value.
// 7. $in: Matches any of the values specified in an array.
// 8. $nin: Matches none of the values specified in an array.




// Find all the student whose age is 20
db.students.find({age:20})

// can do like this also
db.students.find({age:{$eq:20}})


// Find all student whose age is not 20
db.students.find({age:{$ne:20}})

// Find all student whose age is greater than 20
db.students.find({age:{$gt:20}})

// Find all student whose age is less than  20
db.students.find({age:{$lt:20}})


// find students whose ages are 19 or 21 
db.students.find({age:{$in:[19,21]}})

// Find student whose name is Emma Rivera or Justin Stewart
db.students.find({name:{$in:["Emma Rivera","Justin Stewart"]}})

//Find all maths students
db.students.find({"subjects":"Math"})


//Updating a student with sub data
db.students.updateOne({student_id:20},{$set:{"identity.hasAdhaar":true}})


// Finding the student who has Adhaar card
db.students.find({'identity.hasAdhaar':true});