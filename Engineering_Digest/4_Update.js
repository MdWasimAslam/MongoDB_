// find a student name raj and update its age to 39
db.students.updateOne({name:'raj'},{$set:{age:37}})

// Update all students whose age is 21 to 24
db.students.updateMany({age:21},{$set:{age:24}})


// Add new field called internship with value true to student whose name is raj
db.students.updateMany({name:"raj"},{$set:{internship:true}})


// Add new field called internship with value true to all student whose age is greater than or equal to 24
db.students.updateMany({age:{$gte:24}},{$set:{internship:true}})


// Find students who have worked with 3 or more companies
db.students.find({ $and:[ {experience:{$exists:true}},{ $expr: { $gte: [{ $size:"$experience"} , 3 ] } } ]})


// find the students whose hobbies is reading and music
db.students.find({hobbies:{$all:['reading','music']}}) // $all operator - each element should be there in the result document
// $in Operator - should match with any one of the elements



// Sample dataset
db.products.insertMany([
    {
      "_id": 1,
      "products": [
        {"name": "Apple", "quantity": 5},
        {"name": "Banana", "quantity": 3}
      ]
    },
    {
      "_id": 2,
      "products": [
        {"name": "Orange", "quantity": 7},
        {"name": "Mango", "quantity": 10}
      ]
    },
    {
      "_id": 3,
      "products": [
        {"name": "Pineapple", "quantity": 2},
        {"name": "Grapes", "quantity": 6},
        {"name": "Strawberry", "quantity": 4}
      ]
    },
    {
      "_id": 4,
      "products": [
        {"name": "Blueberry", "quantity": 8},
        {"name": "Raspberry", "quantity": 3},
        {"name": "Watermelon", "quantity": 1}
      ]
    },
    {
      "_id": 5,
      "products": [
        {"name": "Apple", "quantity": 2},
        {"name": "Banana", "quantity": 6}
      ]
    }
  ]
  )



  // Find all the document which has apple with quantity more then 3
  db.products.find({ products:{$elemMatch:{quantity:{$gte:3},name:'Apple'}} })


  // List all the fruits name in the document
  [
  
    {
      $unwind: {
        path: '$products',  
      }
    },
   {
     $group: {
       _id: null,
       Fruits:{
         $addToSet:'$products.name'
       }
      
     }
   }
   
 ]


 //What are the names and quantities of all products?
 [
  
    {
      $unwind: {
        path: '$products',  
      }
    },
   {
     $group: {
       _id: "$products.name",
       quantity:{
         $sum:1
       }
      
     }
   }
   
 ]


 // List fruits name and their total quantity
 [
    {
      $unwind: {
        path: "$products",
       
      }
    },
    {
      $group: {
        _id: "$products.name",
              quantity:{
          $sum:'$products.quantity'
        }
      }
    }
    
  ]


//What is the total quantity of all products?

[
    {
      $unwind: {
        path: "$products",
       
      }
    },
    {
      $group: {
        _id: "$products.name",
        Quantity: {
          $sum: '$products.quantity'
        }
      }
    },
    {
      $group: {
        _id: null,
        Total: {
          $sum: '$Quantity'
        }
      }
    }
  
    
  ]


  // Find the lowest quantity product
  [
    {
      $unwind: "$products"
    },
    {
      $group: {
        _id: "$products.name",
        Quantity: {
          $sum: 1
        }
      }
    },
    {
      $sort: {
        Quantity: 1
      }
    },
    {
      $limit: 1
    }
  ]

  // Average quantity of all products
  [
    {
      $unwind: "$products"
    },
    {
      $group: {
        _id: "$products.name",
        Quantity: {
          $sum: 1
        }
      }
    },
    {
      $group: {
        _id: null,
        avgQuantity: {
          $avg: '$Quantity'
        }
      }
    }
    
  ]

  // Find the product with name watermelon and its quantity
  [
    {
      $unwind: "$products"
    },
    {
      $group: {
        _id: "$products.name",
        Quantity: {
          $sum: 1
        }
      }
    },
    {
      $match: {
        _id:'Watermelon'
      }
    }
    
  ]