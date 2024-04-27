//insert one new student into the students collection
db.students.insertOne({name:"raj",age:29})

//insert many new students into the students collection
db.students.insertMany(
    [
        {name:"raju",age:39},
        {name:'Baju',age:38}
    ]
)