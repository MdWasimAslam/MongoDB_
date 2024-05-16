//Count the files whose priceis eq to 70
db.products.find({'price':{$eq:70}}).count()

// Get only 2 documents whose price is equal to 70
db.products.find({'price':{$eq:70}}).limit(2)


//get only two documents but skip the first data from the result
db.products.find({'price':{$eq:70}}).limit(2).skip(1)


//get data in assending order
db.products.find({'price':{$gt:1250}}).limit(4).sort({'price':1})

