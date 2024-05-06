// Lookup is like joins 

[
    {
      $lookup: {
        from: 'customers',
        localField: 'customer_id',
        foreignField: 'customer_id',
        as: 'result'
      }
    },
    {
      $addFields: {
        customerInfo:{
          $arrayElemAt:['$result',0]
        } 
      }
    }
  ]



// Get those field whose matching data in customer table is present - INNER JOIN
[
    {
      $lookup: {
        from: 'customers',
        localField: 'customer_id',
        foreignField: 'customer_id',
        as: 'result'
      }
    },
    {
      $addFields: {
        customerInfo:{
          $arrayElemAt:["$result",0]
        }
      }
    },
    {
      $match: {
        $expr: { $ne : [{$size:"$result"},0] }
      }
    }
    
  ]