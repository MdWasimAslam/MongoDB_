// How many users has enim as one of their tags?

[
    {
      $match: {
        tags:'enim'
      }
    },
    {
      $count: 'userCount'
    }
    
  ]

// Find all users who have the tag 'velit' and are inActive get name and age of those users
[
    {
      $match: {
        isActive:false,
        tags:'velit'
      }
    },
    {
      $project: {
        name:1,
        age:1
      }
    }
    
  ]

// find users who have registered most recently
[

    {
      $sort: {
        registered: -1
      }
    },
    {
      $project: {
        name:1,
        registered:1
      }
    }
    
  ]


// Categorize users by their favourite fruit
[

    {
      $group: {
        _id: '$favoriteFruit',
        userCount:{
          $push:'$name'
        }
      }
    }
    
  ]


// get all users with tags enim and id 
[

    {
      $match: {
        tags: {$all:["enim","id"]}
      }
    }
    
  ]


  // List user count based on country
  [

    {
      $addFields: {
        'country': "$company.location.country"
      }
    },
    {
      $group: {
        _id: '$country',
        userCount: {
          $sum: 1
        }
      }
    }
    
  ]


// List the company based on USA and their user count
[
    {
      $match: {
        "company.location.country":'USA'
      }
    },
    {
      $group: {
        _id: "$company.title",
        userCount: {
          $sum: 1
        }
      }
    }
  ]


  // Lookup basic example
  [
    {
      $lookup: {
        from: "books",
        localField: "_id",
        foreignField: "author_id",
        as: "result"
      }
    }
  ]