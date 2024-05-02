db.students.bulkWrite([
    {
      updateOne: {
        filter: { _id: ObjectId('662cc2cfb883e6aa4626728e') },
        update: {
          $set: {
            experience: [
              { company: "Google", duration: "2 years" },
              { company: "Microsoft", duration: "1 year" }
            ]
          }
        }
      }
    },
    {
      updateOne: {
        filter: { _id: ObjectId('662cc2cfb883e6aa46267297') },
        update: {
          $set: {
            experience: [
              { company: "Microsoft", duration: "3 years" },
              { company: "Amazon", duration: "2 years" }
            ]
          }
        }
      }
    }
  ])



// find students who have experience in Microsoft
db.students.find({'experience.company':'Microsoft'})

// How many students have worked in Microsoft
db.students.find({'experience.company':'Microsoft'}).count()

// 2nd Approach
db.students.find({'experience.company':'Microsoft'}).size()


// count() counts on the server side without retrieving the actual documents, while size() counts on the client side after retrieving the documents.

db.students.updateOne({_id:ObjectId('662cc2cfb883e6aa46267297')},{$set:{experience:[{company:'Apple',duration:4}]}})

// How many students have worked with 1 companies
db.students.find({experience:{$size:1}})


// How many students have worked with 3 companies
db.students.find( { $and: [ {experience:{$exists:true}}, { $expr:{$gte: [ {$size:"$experience"}, 3 ] } } ]  } )


// How many students have subject Math and Chemistry
db.students.find({subjects:{ $all: [ "Math","Chemistry" ]   }})

//2nd Approach - could be either Math or Chemistry
db.students.find({subjects:{ $in: [ "Math","Chemistry" ]   }})



// Sample Data
db.products.insertMany([
    {
      products: [
        { fruit: "Apple", quantity: 10 },
        { fruit: "Banana", quantity: 20 },
        { fruit: "Orange", quantity: 15 }
      ]
    },
    {
      products: [
        { fruit: "Apple", quantity: 12 },
        { fruit: "Banana", quantity: 8 },
        { fruit: "Orange", quantity: 5 }
      ]
    }
  ])


// Find products where quantity is less than 12 and name is Apple
db.products.find( { products:{$elemMatch:{quantity:{$gt:10},fruit:'Apple'}}} )


// When using $elemMatch, the query will return the document if any of the elements in the array match the condition.
// syntax of $elemMatch is { <field>: { $elemMatch: { <query1>, <query2>, ... } } }







// --------- Revision ------

db.students.insertMany([
  {
    "name": "John Doe",
    "age": 20,
    "hobbies": ["reading", "sports", "music"],
    "experience": [
      {"company": "Google", "duration": 2},
      {"company": "Microsoft", "duration": 1}
    ],
    "identity": {"hasPancard": true, "hasAadharcard": true}
  },
  {
    "name": "Jane Smith",
    "age": 22,
    "hobbies": ["painting", "traveling", "cooking"],
    "experience": [
      {"company": "Amazon", "duration": 3},
      {"company": "Microsoft", "duration": 2}
    ],
    "identity": {"hasPancard": true, "hasAadharcard": false}
  },
  {
    "name": "Michael Johnson",
    "age": 21,
    "hobbies": ["coding", "gardening", "photography"],
    "experience": [
      {"company": "Apple", "duration": 1.5}
    ],
    "identity": {"hasPancard": false, "hasAadharcard": true}
  },
  {
    "name": "Emily Davis",
    "age": 23,
    "hobbies": ["dancing", "yoga", "volunteering"],
    "experience": [
      {"company": "Tesla", "duration": 2},
      {"company": "SpaceX", "duration": 1}
    ],
    "identity": {"hasPancard": true, "hasAadharcard": true}
  },
  {
    "name": "William Brown",
    "age": 19,
    "hobbies": ["gaming", "cooking", "playing guitar"],
    "experience": [
      {"company": "Amazon", "duration": 1},
      {"company": "Microsoft", "duration": 0.5}
    ],
    "identity": {"hasPancard": true, "hasAadharcard": false}
  },
])

// Find students whose hobbies is cooking
db.students.find({hobbies:'cooking'});


// Find students who has experienced in Amazon
db.students.find({'experience.company':'Amazon'})


// How many students have worked in Microsoft
db.students.find({'experience.company':'Microsoft'}).count()


// Find students who have worked in only 1 company
db.students.find({ experience:{$size:1} })