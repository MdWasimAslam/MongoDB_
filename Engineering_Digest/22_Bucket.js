// Categorize students based on their ages into three buckets
[
    {
      $match: {
        gender:'Male'      
      }
    },
    {
      $bucket: {
        groupBy: '$age',
        boundaries: [0,35,40 ],
        default: 'Greater than 40',
        output: {
          count:{
            $sum:1
          }
        }
      }
    }
  ]