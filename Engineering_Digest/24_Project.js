// Get only single field from the collection
[
    {
      $project: {
        customer_id:1
      }
    }
  ]


  // get all product but change its field name to item
  [
    {
      $project: {
        item:"$product"
      }
    }
  ]