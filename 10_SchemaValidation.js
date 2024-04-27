// Create a schema 
db.createCollection("books",{
    validator:{
        $jsonSchema:{
            required:["name","price"],
            properties:{
                name:{
                    bsonType:"string",
                    description:"must be a string and is required"
                },
                price:{
                    bsonType:"int",
                    description:"must be an integer and is required"
                }
            }
        }
    },
    validationAction:'error'
});


// Modify the schema 
db.runCommand({
    collMod:"books",
    validator:{
        $jsonSchema:{
            required:["name","price","author"],
            properties:{
                name:{
                    bsonType:"string",
                    description:"must be a string and is required"
                },
                price:{
                    bsonType:"int",
                    description:"must be an integer and is required"
                },
                author:{
                    bsonType:"string",
                    description:"must be a string and is required"
                }
            }
        }
    },
    validationAction:'error'
});

db.books.insertOne({name:'Ikigai',price:120,author:"mary"})
