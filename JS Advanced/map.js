
      //     name="Divya"
      // console.log(` Name:${name}`)

      // Embedding Expression inside Template Literal
      // let a=10
      // let b=10
      // let result=`${a}+${b}=${a+b}`
      // console.log(result)

      //Multiline strring
      // let output=`now iam learning
      // advanced javascript
      // and react`
      // console.log(output)

      //nesting
      // let name="Divya"
      // let age=21
      // let  place="Thittuvilai"
      // let output=`My name is ${name} and
      // My age is ${age},
      // I am from ${place},
      // In 2030 I am ${age+5} years old`
      // console.log(output)

      //using object
      // let details={
      //     name:"Divya",
      //     age:21,
      //     place:'Thittuvilai'}
      //     let result=`My name is ${details.name} and My age is ${details.age} and I from ${details.place}`
      //     console.log(result)

      //spread operator
      // let  a=[1,2,3,4,5]
      // let num=[...a, 6,7,8,9,10]
      // console.log(num)

      // copy array
      // let a=[1,2,3,4,5]
      // let b=[...a]
      // console.log(b)

      //copy object
      //    let obj={a:1,b:2}
      //    let obj1={...obj}
      //    console.log(obj1)

      //merge object
      // let obj={a:1,b:2}
      // let obj1={c:3,d:4}
      // let obj2={...obj,...obj1}
      // console.log(obj2)

      //spread with object
      // let details={name:'Divya',age:21}
      // let result={...details,place:'Thittuvilai', CGPA:'77'}
      // console.log(result)
      // let a={name:'Divya',age:21}
      // let b={...a}
      // console.log({...b,place:'Thittuvilai',CGPA:'77'})

      //  merge array
      // let a=[1,2,3,4,5]
      // let b=[6,7,8,9,10]
      // let c=[...a,...b]
      // console.log(c)

      // Spreading Elements in Function Calls
      // function sum(a,b,c){
      //     return a+b+c
      //     }
      // const nums=[1,2,3]
      // console.log(sum("The value of the sum is" ,...nums))

      // rest operator
      // let a=[187,256,378,4,5]
      // let[one,two,three,...rest]=a
      // console.log(one)
      // console.log(two)
      // console.log(three)
      // console.log(rest)

      // // rest operator using object
      // let obj={name:'Divya',Gender:'Female',age:21,place:'Thittuvilai',martialstatus:'unmarried'}
      // let{age,...a}=obj
      // console.log(age)
      // console.log(a)

      // map() function
      // let arr=[1,2,3,4,5]
      // let a=arr.map(user=>user)
      //  console.log(a)

      //multiple the value in map()
      //  let arr=[1,2,3,4,5]
      //  let a=arr.map(user=>user*5)
      //  console.log(a)

      // first lettershould be uppercase
      // let cars=['audi','bmw','mercedes', 'toyota','ford','volvo']
      // let a=cars.map(user=>user[0].toUpperCase()+user.slice(1))
      // console.log(a)

      // let cars=['audi','bmw','mercedes', 'toyota','ford','volvo']
      // let a=cars.map(user=>user.toUpperCase())
      // console.log(a)

      //print the name only using map function
      // let data=[
      //     {name:'Divya',age:21,place:"Thittuvilai"}
      // ]
      // let a=data.map(user=>user.name)
      // let b=data.map(user=>user.age)
      // let c=data.map(user=>user.place)
      // console.log(a)
      // console.log(b)
      // console.log(c)

      
      //Expression evaluation
      // let a=10
      // let b=20
      // let result=`${a>b ?'a is greater':'b is greater'}`
      // console.log(result)
      
      // using index number
      // const num=[10,20,3,40,50]
      // const finalnum=num.map((number,index)=>`${index+1}:${number}`)
      // console.log(finalnum)


      
      // return the odd*2 even/2
        //  let num=[5,10,15,20,25]
        //   let a=num.map(user=>user%2==0?user/2:user*2)
        //   console.log(a)

      // using if else condition in map function
    //   let num = [5, 10, 15, 20, 25]
    //   let result = num.map(user => {
    //     if (user % 2 == 0) {
    //         return user / 2
    //         }
    //         else {
    //             return user * 2
    //             }
    //             })
    //             console.log(result)

    // nested array 
  //  let num=[[1,2],[3,4],[4,5]]
  //  let result=num.map(user=>user.map(user1=>user1*2))
  //  .flat()
  //  console.log(result)
   