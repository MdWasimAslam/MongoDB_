// How many users are active?
[
    {
      $match: {
        isActive:true
      }
    },
    {
      $count: 'activeUsers'
    }
  ]


// Calculate the average age of all users
[
    {
      $group: {
        _id: null,
              avgAge:{
          $avg:"$age"
        }
      }
    }
  ]


// Calculate average age based on gender
[
    {
      $group: {
        _id: "$gender",
              avgAge:{
          $avg:"$age"
        }
      }
    }
  ]

// get the top 3 favourite fruit of users
[
    {
      $group: {
        _id: "$favoriteFruit",
              count:{
          $sum:1
        }
      },
    },
    {
      $sort: {
        count: -1
      }
    }
  ]



  