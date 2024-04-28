//sample data 
db.emp.insertMany([
    {
      "name": "John Doe",
      "experience": [
        {
          "company": "Google",
          "duration": 2
        }
      ]
    },
    {
      "name": "Jane Smith",
      "experience": [
        {
          "company": "Microsoft",
          "duration": 4
        },
        {
          "company": "Apple",
          "duration": 1
        }
      ]
    },
    {
      "name": "Michael Johnson",
      "experience": [
        {
          "company": "Amazon",
          "duration": 5
        },
        {
          "company": "Facebook",
          "duration": 2
        },
        {
          "company": "Google",
          "duration": 3
        }
      ]
    },
    {
      "name": "Emily Brown",
      "experience": [
        {
          "company": "Uber",
          "duration": 2
        }
      ]
    },
    {
      "name": "David Wilson",
      "experience": [
        {
          "company": "Netflix",
          "duration": 6
        },
        {
          "company": "Tesla",
          "duration": 3
        }
      ]
    }
  ]
  )



  // find employees who have experience of 1 year in any company
  db.emp.find({ experience:{$elemMatch:{ duration:{$lte:1} }} })


  // Find employees who have worked in only 1 company
  db.emp.find({experience:{$size:1}})


  // Find all employess wo have atleast worked with a company for a year and add field called "neglect: true" to first matching company
  db.emp.updateMany({experience:{$elemMatch:{duration:{$lte:1}}}},  { $set:{ "experience.$.neglect":true  } } )


  // Find all employees who have worked in 1 company for 1 year and add field called "neglect: true" to all its companies
  db.emp.updateMany({experience:{$elemMatch:{duration:{$lte:1}}}},  { $set:{ "experience.$[].neglect":true  } } )


    // Find all employees who have worked in 1 company for 1 year and add field called "neglect: 1" to all matching companies
  db.emp.updateMany({experience:{$elemMatch:{duration:{$lte:1}}}},  { $set:{ "experience.$[e].neglect":1  } }, { arrayFilters:[{"e.duration" : {$lte:1}}] } )


  // Add new data in array of experince for an employee
  db.emp.updateOne({_id: ObjectId('662e1abc70cdab7ce79ab529')} , {$push:{experience:{company:'Amazon',duration:1}}} )


  // Add new data in array of experince for an employee only if the company does not exist
  db.emp.updateOne({_id: ObjectId('662e1abc70cdab7ce79ab529')} , {$addToSet:{experience:{company:'Amazon',duration:1}}} )


  // Remove data from array of object
  db.emp.updateOne({_id: ObjectId('662e1abc70cdab7ce79ab529')}  , {$pull:{experience:{ company: 'Netflix',
      duration: 6}} })


//remove last element from array
db.emp.updateOne({_id: ObjectId('662e1abc70cdab7ce79ab529')}  , {$pop:{experience:1}})


// Remove first element from array
db.emp.updateOne({_id: ObjectId('662e1abc70cdab7ce79ab527')} ,{ $pop:{experience:-1} } )