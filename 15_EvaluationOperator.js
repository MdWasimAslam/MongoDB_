// Expr operator in mongoDB -   


// Create Text Index for search 
db.students.createIndex({name:'text'})


// Search for text
db.students.find({$text:{$search:'James'}})


// Using Regex to find data of James
db.students.find({ name: { $regex: /\bJames\b/ } })
