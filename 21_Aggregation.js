// Find all students who is male
[

    {
      $match: {
        gender:'Male'
      }
    }
    
  ]


// Group all students by their age 
[

    {
      $group: {
        _id: '$age',
      }
    }
    
  ]


  // group all students by age and show their name per age group
  [

    {
      $group: {
        _id: '$age',
        name:{
          $push:"$name"
        }
      }
    }
    
  ]

  // Group all students by age and show the complete data of each student per age group
  [
    {
      $group: {
        _id: '$age',
              fullData:{
          $push:"$$ROOT"
        }
      }
    }
  ]


  // Group all students per age group and show the count of students per age group
  [

    {
      $group: {
        _id: '$age',
        count:{
          $sum:1
        }
      }
    }
    
  ]


  // Find the total count of the document
  [
  
    {
      $count: 'totalCount'
    }
    
  ]

  // Give count of per age of male students
  [
    {
      $match: {
        gender: "Male",
      },
    },
    {
      $group: {
        _id: "$age",
        MaleCount: {
          $sum: 1,
        },
      },
    },
  ]



  // Count the maximum age of the male students
  [
    {
      $match: {
        gender:'Male'
      }
    },
    {
      $group: {
        _id: "$age",
        ageCount: {
          $sum: 1
        }
      }
    },
    {
      $sort: {
        ageCount: 1
      }
    },
    {
      $group: {
        _id: null,
        maxAge: {
          $max: '$ageCount'
        }
      }
    }
    
  ]

// Find average age of all students
[
  {
    $group: {
      _id: null,
      AverageAge: {
        $avg: "$age"
      }
    }
  }
]


// find total subjects of all students
[
  {
    $unwind: {
      path: "$subjects",
      
    }
  },
  {
    $group: {
      _id: null,
        allSubjects:{
        $addToSet:"$subjects"
      }
    }
  }
]