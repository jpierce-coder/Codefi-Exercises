
//exercise 4
let students = ['John', 'Jane', 'Jimmy'];

for (let i = 0; i < students.length; i++) {
    console.log(students[i])
}

// exercise 5
let people = [
    {
      name: "James",
      age: 34
    }, 
    {
      name: "John",
      age: 43
    },
    {
      name: "Jane",
      age: 23
    }
  ]


  for (let i = 0; i < people.length; i++) {
    if (people[i].name === 'John') {
        console.log('I found John!')
    } else if (people[i].name === 'Jane') {
        console.log('Hey Jane, do you know where John is?');
    } else {
        console.log('Hey do you happen to know someone by the name of John?');
    }
  }