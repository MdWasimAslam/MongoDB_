//indexing in mongoDb - to improve the performance of the query
//indexing is the process of creating an index on a field in a collection

//Indexing Drawback
//1. Indexes consume a lot of storage
//2. Indexes slow down the write operations

// Create Index
db.emp.createIndex({name:1})

// See all created indexes
db.emp.getIndexes()


// Drop Index
db.emp.dropIndex('name_1')
