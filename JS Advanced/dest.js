// let vehicles=['car','bike','scooty','taxi']
// const [one,two,three,four]=vehicles
// console.log(one)
// console.log(two)
// console.log(three)
// console.log(four)


// const numbers = [1, 2];
// const [first, second, third = 10] = numbers;
// console.log(first);  
// console.log(second); 
// console.log(third);


// let data=[15,[5,10],30]
// let [one,[two,three],four]=data
// console.log(one)
// console.log(two)
// console.log(three)
// console.log(four)


// let a = 5;
// let b = 10;
// [a, b] = [b, a]
// console.log(a)
// console.log(b)



// let a=[187,256,378,4,457,767,5]
// let[one,two,three,...rest]=a
// console.log(one)
// console.log(two)
// console.log(three)
// console.log(...rest)


//object destructure

// let data={
//     names:"Divya",
//     age:21,
//     place:"Thiituvilai"
// }
// let {names,age,place}=data
// console.log(names)
// console.log(age)
// console.log(place)

// const person = {
//     name: 'Bob',
//     age: 30,
//     city: 'Los Angeles'
//   };
  
//   const { name: fullName, age: yearsOld, city: location } = person;
  
//   console.log(fullName);  
//   console.log(yearsOld);  
//   console.log(location);

// const person = {
//     name: 'Charlie',
//     city: 'Chicago'
//   };
  
//   const { name, age = 40, city } = person;
  
//   console.log(name);  
//   console.log(age);  
//   console.log(city);

// const user = {
//     id: 1,
//     name: 'David',
//     address: {
//       street: '123 Main St',
//       city: 'Miami',
//       country: 'USA'
//     }
//   };
  
//   const { name, address: { city, country } } = user;
  
//   console.log(name);    
//   console.log(city);     
//   console.log(country);


// const person = {
//     name: 'Eva',
//     age: 35,
//     city: 'San Francisco',
//     job: 'Developer'
//   };
  
//   const { name, age, ...otherDetails } = person;
  
//   console.log(name);         
//   console.log(age);          
//   console.log(otherDetails);

// const person = {
//     name: 'Alice',
//     age: 30,
//     city: 'Paris'
//   };
  

//   const keys = Object.values(person);
  
//   console.log(keys);

const person = {
    name: 'Bob',
    age: 30,
    city: 'Los Angeles'
  };
  
  const keys = Object.keys(person);
  console.log(keys)
  
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = person[key]; 
    console.log(`${key}: ${value}`);
  }



