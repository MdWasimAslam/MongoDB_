// By default insert operations are in ordered true state which means that if any of the data has issue the the rest after that will not execute as well.
// If the option ordered false is selected then all the right operations will execute and the error operation will only break;

// Simple example - teh issue here is the id which is already present in the collectionf or some other data
db.students.insertMany([{"name":'Yoyo',age:12,_id:ObjectId('6645138f2226b809c027ea58')},{'name':'kiki',age:10}],{ordered:false})