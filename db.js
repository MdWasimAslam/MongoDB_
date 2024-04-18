db.students.insertMany([
    { 
      name: "John", 
      age: 20, 
      hobby: ["Reading", "Gaming"], 
      identity: { hasPanCard: false, hasAdhaarCard: true } 
    },
    { 
      name: "Emma", 
      age: 22, 
      hobby: ["Painting", "Cooking"], 
      identity: { hasPanCard: false, hasAdhaarCard: true } 
    },
    { 
      name: "Michael", 
      age: 21, 
      hobby: ["Sports", "Music"], 
      identity: { hasPanCard: false, hasAdhaarCard: true } 
    },
    { 
      name: "Sophia", 
      age: 19, 
      hobby: ["Music", "Dancing"], 
      identity: { hasPanCard: false, hasAdhaarCard: true } 
    },
    { 
      name: "William", 
      age: 23, 
      hobby: ["Cooking", "Traveling"], 
      identity: { hasPanCard: false, hasAdhaarCard: true } 
    },
    { 
      name: "Olivia", 
      age: 20, 
      hobby: ["Gardening", "Reading"], 
      identity: { hasPanCard: false, hasAdhaarCard: true } 
    },
    { 
      name: "James", 
      age: 24, 
      hobby: ["Traveling", "Photography"], 
      identity: { hasPanCard: false, hasAdhaarCard: false },
      hasMacbook: true,
      experince: [
        {
          company: 'KPMG'
        },
        {
          company: 'Azure'
        }
      ]
    },
    { 
      name: "Ava", 
      age: 22, 
      hobby: ["Photography", "Hiking"], 
      identity: { hasPanCard: false, hasAdhaarCard: true },
      experince: {
        company: 'Amazon'
      }
    },
    { 
      name: "Benjamin", 
      age: 21, 
      hobby: ["Dancing", "Cooking"], 
      identity: { hasPanCard: false, hasAdhaarCard: true } 
    },
    { 
      name: "Isabella", 
      age: 20, 
      hobby: ["Cooking", "Painting"], 
      identity: { hasPanCard: false, hasAdhaarCard: true },
      experince: {
        company: 'Google'
      }
    }
  ]);
  