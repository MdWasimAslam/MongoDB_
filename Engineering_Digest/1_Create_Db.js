

// Select the database to use.
use('school');

// Insert a few documents into the students collection.
db.students.insertMany([
    {
      "student_id": 1,
      "name": "John Doe",
      "age": 20,
      "gender": "Male",
      "grade": "A",
      "subjects": ["Math", "Physics", "English"]
    },
    {
      "student_id": 2,
      "name": "Jane Smith",
      "age": 19,
      "gender": "Female",
      "grade": "B",
      "subjects": ["Biology", "Chemistry", "History"]
    },
    {
      "student_id": 3,
      "name": "Michael Johnson",
      "age": 21,
      "gender": "Male",
      "grade": "C",
      "subjects": ["Computer Science", "Math", "Physics"]
    },
    {
      "student_id": 4,
      "name": "Emily Davis",
      "age": 20,
      "gender": "Female",
      "grade": "A",
      "subjects": ["English", "Art", "Music"]
    },
    {
      "student_id": 5,
      "name": "David Wilson",
      "age": 22,
      "gender": "Male",
      "grade": "B",
      "subjects": ["History", "Economics", "Geography"]
    },
    {
      "student_id": 6,
      "name": "Sarah Brown",
      "age": 19,
      "gender": "Female",
      "grade": "C",
      "subjects": ["Chemistry", "Biology", "Math"]
    },
    {
      "student_id": 7,
      "name": "Christopher Lee",
      "age": 20,
      "gender": "Male",
      "grade": "A",
      "subjects": ["Physics", "Computer Science", "Math"]
    },
    {
      "student_id": 8,
      "name": "Amanda Martinez",
      "age": 21,
      "gender": "Female",
      "grade": "B",
      "subjects": ["English", "History", "Geography"]
    },
    {
      "student_id": 9,
      "name": "Daniel Taylor",
      "age": 22,
      "gender": "Male",
      "grade": "C",
      "subjects": ["Art", "Music", "Economics"]
    },
    {
      "student_id": 10,
      "name": "Melissa Anderson",
      "age": 20,
      "gender": "Female",
      "grade": "A",
      "subjects": ["Math", "Chemistry", "Biology"]
    },
    {
      "student_id": 11,
      "name": "James Rodriguez",
      "age": 19,
      "gender": "Male",
      "grade": "B",
      "subjects": ["History", "Geography", "Economics"]
    },
    {
      "student_id": 12,
      "name": "Jennifer Lopez",
      "age": 21,
      "gender": "Female",
      "grade": "C",
      "subjects": ["Music", "English", "Art"]
    },
    {
      "student_id": 13,
      "name": "Robert Harris",
      "age": 22,
      "gender": "Male",
      "grade": "A",
      "subjects": ["Computer Science", "Physics", "Math"]
    },
    {
      "student_id": 14,
      "name": "Megan Clark",
      "age": 20,
      "gender": "Female",
      "grade": "B",
      "subjects": ["Biology", "Chemistry", "History"]
    },
    {
      "student_id": 15,
      "name": "Ryan Young",
      "age": 19,
      "gender": "Male",
      "grade": "C",
      "subjects": ["Geography", "Economics", "English"]
    },
    {
      "student_id": 16,
      "name": "Ashley Turner",
      "age": 21,
      "gender": "Female",
      "grade": "A",
      "subjects": ["Math", "Physics", "Chemistry"]
    },
    {
      "student_id": 17,
      "name": "Kevin Martin",
      "age": 22,
      "gender": "Male",
      "grade": "B",
      "subjects": ["History", "Biology", "Computer Science"]
    },
    {
      "student_id": 18,
      "name": "Laura King",
      "age": 20,
      "gender": "Female",
      "grade": "C",
      "subjects": ["Music", "Art", "Geography"]
    },
    {
      "student_id": 19,
      "name": "Justin Stewart",
      "age": 19,
      "gender": "Male",
      "grade": "A",
      "subjects": ["English", "History", "Economics"]
    },
    {
      "student_id": 20,
      "name": "Emma Rivera",
      "age": 21,
      "gender": "Female",
      "grade": "B",
      "subjects": ["Chemistry", "Math", "Physics"]
    },
    {
      "student_id": 21,
      "name": "Brandon Wright",
      "age": 22,
      "gender": "Male",
      "grade": "C",
      "subjects": ["Biology", "Music", "Computer Science"]
    },
    {
      "student_id": 22,
      "name": "Hannah Lopez",
      "age": 20,
      "gender": "Female",
      "grade": "A",
      "subjects": ["Physics", "Chemistry", "Biology"]
    },
    {
      "student_id": 23,
      "name": "Nicholas Perez",
      "age": 19,
      "gender": "Male",
      "grade": "B",
      "subjects": ["Economics", "Geography", "History"]
    },
    {
      "student_id": 24,
      "name": "Olivia Hernandez",
      "age": 21,
      "gender": "Female",
      "grade": "C",
      "subjects": ["Art", "English", "Math"]
    },
    {
      "student_id": 25,
      "name": "Matthew Sanchez",
      "age": 22,
      "gender": "Male",
      "grade": "A",
      "subjects": ["Computer Science", "Physics", "Chemistry"]
    },
    {
      "student_id": 26,
      "name": "Lauren Mitchell",
      "age": 20,
      "gender": "Female",
      "grade": "B",
      "subjects": ["Biology", "History", "Music"]
    },
    {
      "student_id": 27,
      "name": "Christopher Lopez",
      "age": 19,
      "gender": "Male",
      "grade": "C",
      "subjects": ["Geography", "English", "Art"]
    },
    {
      "student_id": 28,
      "name": "Samantha Scott",
      "age": 21,
      "gender": "Female",
      "grade": "A",
      "subjects": ["Math", "Chemistry", "Computer Science"]
    },
    {
      "student_id": 29,
      "name": "Joshua Green",
      "age": 22,
      "gender": "Male",
      "grade": "B",
      "subjects": ["History", "Economics", "Physics"]
    },
    {
      "student_id": 30,
      "name": "Nicole Adams",
      "age": 20,
      "gender": "Female",
      "grade": "C",
      "subjects": ["Music", "Biology", "Chemistry"]
    }
  ]
  )