// objects in js are like dictionaries in python. They also have a key value pair.

const allUsers = [
    {
      firstName: "Amit",
      gender: "male",
    },
    {
      firstName: "Ashish",
      gender: "male",
    },
    {
      firstName: "Priya",
      gender: "female",
    },
  ];

  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].gender == "male") {
      console.log(allUsers[i].firstName);
    }
  }
