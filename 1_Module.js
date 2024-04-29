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


  // Find total number of males and females
  [
    {
      $group: {
        _id: "$gender",
        count:{
          $sum:1
        }
      }
    }
  ]


  // Which country has the highest number of registered users
  [
    {
      $group: {
        _id: "$company.location.country",
        count: {
          $sum: 1,
        },
      },
    },
    {
      $sort: {
        count: -1
      }
    },
    {
      $limit: 1
    }
  ]


  // Count number of users based on eyeColor
  [
    {
      $group: {
        _id: "$eyeColor",
          count:{
            $sum:1
          }
      }
    }
  ]


  // what is the average number of tags per user
  [
    {
      $unwind: '$tags'
    },
    {
      $group: {
        _id: "$_id",
        tagsCount: {
          $sum:1
        }
      }
    },
    {
      $group: {
        _id: null,
        avg: {
          $avg: "$tagsCount"
        }
      }
    }
  ]

  