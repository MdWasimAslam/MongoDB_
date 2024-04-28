// DataTypes in MongoDB
// 1. String - The most commonly used datatype to store the data.
// 2. Integer - Used to store numerical values.
// 3. Boolean - Used to store boolean values.
// 4. Double - Used to store floating-point values.
// 5. Arrays - Used to store arrays or list or multiple values into one key.
// 6. Object - Used to store embedded documents.
// 7. Null - Used to store null values.
// 8. Timestamp - Used to store timestamp.  
// 9. Date - Used to store date or time.
// 10. Object ID - Used to store the document’s ID.
// 11. Binary Data - Used to store binary data.
// 12. Regular Expression - Used to store regular expression.
// 13. Code - Used to store JavaScript code.
// 14. Symbol - Used to store a symbol.
// 15. Min/Max Keys - Used to compare a value against the lowest and highest BSON elements.
// 16. Code with Scope - Used to store JavaScript code with a scope.


// Connect to your MongoDB server

// Create the "datatypes" collection
db.createCollection("datatypes")

// Insert sample data for each data type
db.datatypes.insertMany([
  {
    "string": "This is a string"
  },
  {
    "integer": 42
  },
  {
    "boolean": true
  },
  {
    "double": 3.14
  },
  {
    "array": [1, 2, 3, 4, 5]
  },
  {
    "object": {"key": "value"}
  },
  {
    "nullValue": null
  },
  {
    "timestamp": Timestamp(0, 0)
  },
  {
    "date": ISODate("2024-04-27T00:00:00Z")
  },
  {
    "objectId": ObjectId()
  },
  {
    "binaryData": new BinData(0, "abc123")
  },
  {
    "regularExpression": /pattern/
  },
  {
    "code": function() { return "Hello, world!"; }
  },
  {
    "symbol": Symbol("example")
  },
  {
    "minKey": MinKey(),
    "maxKey": MaxKey()
  },
  {
    "codeWithScope": {
      "code": function() { return "Hello, world!"; },
      "scope": {"variable": 42}
    }
  }
])

// Check the contents of the "datatypes" collection
db.datatypes.find().pretty()

// find the type of the field
typeof db.datatypes.findOne().string

