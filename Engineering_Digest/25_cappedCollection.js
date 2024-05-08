// Capped Collection 

// Syntax - db.createCollection("logs",{capped:true,max:4,size:1000000})

// so this collection will have only 4 data and it should contain 1000000 bytes of data, if there is new data inserted as 5th then the oldest data will be deleted which is first one