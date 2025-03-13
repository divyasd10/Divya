//TASK 1
// let a = [1, 2, 3, 4, 5];
// let b = [];
// function num() {
//   for (let i = 0; i < a.length; i++) {
//     b.push(a[i] * a[i]);
//   }
// console.log(b)
// }
// num()

// Arrow function: TASK:1
// let a=[1,2,3,4,5]
// let b=a.map(x=>x*x)
// console.log(b)

//spread operator- TASK :2
//     const obj1 = { a: 1, b: 2 };
//     const obj2 = { c: 3, d: 4 };
//     const obj3 = { e: 5, f: 6 };
//    let res={...obj1,...obj2,...obj3}
//    console.log(res)

// TASK-2
// function spread() {
//   const obj1 = { a: 1, b: 2 };
//   const obj2 = { c: 3, d: 4 };
//   const obj3 = { e: 5, f: 6 };
//   let res = { ...obj1, ...obj2, ...obj3 };
//   console.log(res);
// }
// spread();

//TASK-3
// const students = [
//     { name: 'Alice', score: 85 },
//     { name: 'Bob', score: 92 },
//     { name: 'Charlie', score: 78 }
//     ];
//     let Score = students.find(student => student.name === 'Bob').score
//     console.log(Score)

// TASK-3
// function find() {
//   const students = [
//     { name: "Alice", score: 85 },
//     { name: "Bob", score: 92 },
//     { name: "Charlie", score: 78 },
//   ];
//   let Score = students.find((student) => student.name === "Bob").score;
//   console.log(Score);
// }
// find();

//TASK-3
// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
//   ];
//   const bobAge = people.map(person => person.name === 'Bob' && person.age).filter(age => age);
//   console.log(bobAge);

//TASK-4
//  let num=[1, 2, 2, 3, 4, 4, 5]
//  let res = [...new Set(num)]
//  console.log(res)

// TASK-4
//  let num=[1, 2, 2, 3, 4, 4, 5]
//  let res = num.filter((item, index) => num.indexOf(item) === index)
//  console.log(res)

//TASK-5
//  let arr=['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape']
//  let res=arr.filter(array=>array.length>5)
//  console.log(res);


// TASK-5
//  function length(){
//  let arr=['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape']
//  let res=arr.filter(array=>array.length>5)
//  console.log(res);
//  }
//  length();


//TASK-6
// let num=[1, 2, 3, 4, 5]
// let res=num.reduce((acc,cur)=>acc*cur,1)
// console.log(res)


//Task 7
// using firstindexof 2
// const numbers = [1, 2, 3, 2, 4, 2, 5]
// const index = numbers.indexOf(2)
// const num=numbers.lastIndexOf(2)
// console.log("FirstIndex"+ ":"+index +","+ "LastIndex"+ ":" +num)


// Task 7
// const num = [1, 2, 3, 2, 4, 2, 5];
// const index = num.indexOf(2);
// const nums = num.lastIndexOf(2);
// const result = {
//   firstIndex: index,
//   lastIndex: nums,
// };
// console.log(result);

//TASK-8
// let arr=[1, 2, 3]
// let res=Array.isArray(arr)
// console.log(res)
// let str='hello'
// let res1=Array.isArray(str)
// console.log(res1)


//Task-9
// let word='The quick brown fox jumps over the lazy dog'
// let result=word.includes('fox')
// console.log(result);


//TASK-10
// let arr = ['apple', 'banana', 'cherry'];
// let res = arr.keys();
// for (let value of res) {
// console.log(value);
// }
  
//TASK-10
// let str = 'Hello, World!';
// for (let char of str) {
  //     console.log(char);
// }

//TASH-11
// let arr='apple banana apple grape apple'
// let res=arr.replaceAll('apple','orange')
// console.log(res)

// TASK-12
//  let arr= ['apple', 'banana', 'cherry']
//  let res=arr.includes('banana')
//  console.log(res)



// TASK:16
// function destruct(){
// let obj={ name: 'Alice', age: 25, city: 'New York' }
// let {name,age,city}=obj
// console.log(name)
// console.log(age)
// console.log(city)
// }
// destruct()

// TASK:19
// function reduce(){
//   let num=[1, 2, 3, 4, 5]
//   let res=num.reduce((acc,cur)=>acc+=cur)
//   console.log(res)
//   }
//   reduce()

//TASK-20
// function reduce(){
//   let num=[1, 2, 3, 4, 5]
//   let res=num.reduce((acc,cur)=>acc*cur)
//   console.log(res)
// }
// reduce()

// Task 21: 
 // function reduce(){
 //   let num=[1, 2, 3, 4, 5]
 