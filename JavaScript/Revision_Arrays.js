// Arrays:
// -- collection of hertrogenious items arrangement in contigous order 
// -- can contain duplicate items
// -- can contain different type of value
// -- mutable data type i.e it support updation i.e insertion deletion EventCounts.


/* Types of method to intialize the array basically */

/*1st type of create an array using array literal style */
// var a=[10,20,30,50,60,6,6,9,"uday","punia","$@#@%3"]
// console.log(a)

/*2nd type to create the array is using empty array*/
// var a=[]
// a[0]="Uday Punia"
// console.log(a)

/*3rd type using the array constructor */
// var a=Array(10,20,30,40,50,60,70,80,90)
// console.log(a)
// a.push(100)
// console.log(a)


/*4 th type using the empty array constructor */
// var a=Array()
// a.push(122)
// a.push(122)
// a.push(122)
// a.push(122)
// a.push(122)
// a.push(122)
// a.push(122)
// a.push(122)
// console.log(a)


/*Accessing the elements using loops */
var a=[10,20,30,40,50,60,70,80,90,100]

/*1st Accessing using for in loop */
// for(i in a){
//     console.log(a[i])
// }


/*2st Accessing using for of loop */
// for(i of a){
//     console.log(i)
// }


/*3rd Accessing the elements usign the simple for loop */
// for(let i=0;i<a.length;i++){
//     console.log(a[i])
// }

/*4th Accessing the array using the while loop */
// var i=0;
// while(i<a.length){
//     console.log(a[i])
//     i++
// }


/*5th Accessing the array using the do while loop */
// do{
//     console.log(a[i])
//     i++
// }while(i<a.length)


// toString() convert array into string 
// Use the .join() as a seprator
// console.log(a.toString())
// console.log(a.join("="))   




/*
Array properties 

push() : insert one or more elements in the last of the array and return the updated length of the array
pop() : delete one or more elements from the last of the arrya and return the updated last element of the array
unshift() : insert one or more than one elements in the starting of the array and return the updated length of the array
shift() : delete one or more than one elements from the starting of the array and return the deleted element from the array
delete() : it delete an item from array and leave empty space
 */

// console.log(`Updated length of the array is ${a.push(110)}`)
// console.log(`Updated length of the array is ${a.pop(110)}`)
// console.log(`Inserting the value 110 in the starting of the array now the lenght of the array is ${a.unshift(110)} and now the updated array is looks like ${a}`)
// console.log(`deleting the the value 110 in the starting of the array now the lenght of the array is ${a.shift()} and now the updated is array is look like ${a}`)

// delete(a[2])
// console.log(a)

// a.splice(2,5)
// console.log(a)

// a.splice(1,0,11,12,13,14,15)
// console.log(a)

//Basically we can use the splice method the deletetion and insertion both in deletion a.splice(where to start , how many element , add the elements seprate them by commas)

//slice() return the copy of a section of an array for both start and end a negative index can be used to indicate an offset second to last element of the array
// console.log(a.slice(3))

//concat() Contains two or more arrays this method return a new array without modifying any exisiting arrays

// var a=[1,2,3,6,5,6,6,3,3,3,3,45]
// var b=['Uday','Punia','Mern','Ducat','Noida']
// console.log(a.concat(b))


//Keys(): return an iterable object which contains all indexed of an array
// for(let i of a.keys())
// console.log(i)
//values(): return an iterable object which contains all values of an array
// for(let i of a.values())
// console.log(i)

// entries(): return an iterable object which contains all value and indexes of an array
// for(let i of a.entries())
// console.log(i)

//includes() : Return true if the array have that element 
// console.log(a.includes(12))
// console.log(a.includes(20))
// console.log(a.includes(10))

//indexof : return the lowest index of an element and returns -1 if element not found
var b=[12,23,5,6,8,6,3,7,1,30,12,3,6,3,6,8,2,5]
// console.log(b.indexOf(10))

//lastindexOf() : return the last index of the element other wise return -1
// console.log(b.lastIndexOf(12))
// console.log(b.lastIndexOf(102))

//reverse() : basically it is use to reverse an array this approach is use to reverse an array
// console.log(b)
// var c=b.reverse()
// console.log(c)

//Array Destructuring
// var c=[1001,"Uday","Punia","Front-end Developer","Salary","Jwalapur","Haridwar"]
// var [id,firstName,lastName,dsg,salary,place,state]=c;
// console.log(`
//     Employee id : ${id}
//     First Name : ${firstName}
//     Last Name : ${lastName}
//     Designation : ${dsg}
//     Salary : ${salary}
//     Place : ${place}
//     City : ${state}
//     `)


var a=[10,20,30,40,50,42,23,56]
var b=[1,2,3,4,55,6,7,8,9,10]


// //Map function higher order function    
// console.log(a.map((x)=>x*5))
// console.log(a.map((x)=>x/2))

// //Filter function higher order function
// console.log(a.filter((x)=>x>15))


//Reduce
// console.log(a.reduce((acc,curr)=>acc+curr))
// console.log(b.reduce((acc,curr)=>{
//     if(acc<curr){
//         acc=curr
//     }
//     return acc
// }))


// const arr=[
//     {firstname:'Uday',lastname:'Punia',age:22,salary:500000},
//     {firstname:'Avish',lastname:'Tyagi',age:22,salary:150000},
//     {firstname:'Nishant',lastname:'Gola',age:22,salary:350000},
//     {firstname:'Amit',lastname:'Tyagi',age:22,salary:250000},
//     {firstname:'Tarun',lastname:'Dhiman',age:22,salary:300000},
//     {firstname:'Uday',lastname:'Sharma',age:22,salary:200000}
// ]

// const output=arr.filter((x)=>x.salary>200000).map((x)=>x.firstname)
// console.log(output)


