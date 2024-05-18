//Find products whose price is under 100 and name is Diamond Ring
db.products.find({$and:[{"price":{$gt:100}},{"name":"Diamond Ring"}]})

// We can achive the above result 
db.products.find({"name":'Diamond Ring','price':{$gt:100}}) // By Default if there is two data in find teh monggo treats it as AND operation


// Find all documents whose price is 200 or the name is diamond ring
db.products.find({$or:[{'price':{$gt:200}},{'name':'Diamond Ring'}]});


// Find all the document whose price is neither 2000 and not its name diamond ring
db.products.find({$nor:[{'price':{$gt:2000}},{'name':'Diamond Ring'}]}) // this basically returns all data apart from the condition's ones

// find all the documents whose price is equals to 200
db.products.find({'price':{$eq:200}})

// find all the documents whose price is not equals to 200
db.products.find({'price':{$ne:200}})

// find all the documents whose price is not greater than 100
db.products.find({'price':{$not:{$gt:100}}})
