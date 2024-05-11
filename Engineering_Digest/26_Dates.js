// Insert one data with date 2003-04-19 and time 17:20:23 + UTC time zone

db.students.insertOne({name:'Babu',dob:ISODate('2003-04-19T17:20:23+02:00')})


// Find all students who is born after 2003
db.students.find({dob:{$gte:ISODate('2003-01-01')}})


// List all students based on year
[
    {
      $group: {
        _id: {$year:'$dob'},
        students:{
          $push:'$name'
        }
      }
    }
  ]

  
  // Find the day of month 
  [
 
    {
      $project: {
        dayOfMonth:{$dayOfMonth:'$dob'} 
      }
    }
  ]
  

  // Find day of year
  [
 
    {
      $project: {
        dayOfYear:{$dayOfYear:'$dob'} 
      }
    }
  ]

  // Find day of week
  [
 
    {
      $project: {
        dayOfWeek:{$dayOfWeek:'$dob'} 
      }
    }
  ]
    
  
  // Insert a new data with current date
  db.students.insertOne({name:'leo',dob:new Date()})


  // Formating date 
  [
 
    {
      $project: {
        name:1,
        dob:{$dateToString:{format:'%d/%m/%Y',date:"$dob"}}
      }
    }
  ]
  