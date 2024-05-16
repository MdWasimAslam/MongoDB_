//Find all documents whose price is 69
db.products.find({'price':{$eq:69}})


// Find all documents whose price is not 69
db.products.find({'price':{$ne:69}})

// find all documents whose price is greater than 1600
db.products.find({'price':{$gt:1600}})

// find all documents whose price is less than 100
db.products.find({'price':{$lt:100}})

// Find all documents whose price is either 69 or 90
db.products.find({'price':{$in:[69,90]}})