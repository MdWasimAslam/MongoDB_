// Find all students with their name and age - the empty object in the first argument of find() is the query object, and the second object is the projection object. The _id is always returned unless explicitly excluded.
db.students.find({},{name:1,age:1})

// Find all students with only their name but exclude the _id field - when we add _id:0, it will exclude the _id field from the result.
db.students.find({},{name:1,_id:0})