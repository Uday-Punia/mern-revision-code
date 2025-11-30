/*
OBJECTS : - 
 Store information in key and values 
 key must be unique
 values may be duplicate
 mutuable data type
*/


//Object declaration type 1
// var emp={
//     id:1010,
//     name:"Uday Punia",
//     dsg:"Front end web developer",
//     salary:189000,
//     city:"Gurugram"
// }
// console.log(emp)


//Object declaration type 2
// let a={}
// a.id=46564
// a.name="Uday Punia"
// a.dsg="Front end developer"
// a.salary=6456464
// a.city="Haridwar"
// console.log(a)

//Object declaration type 3
// let a=new Object()
// a.id=563566
// a.name="Uday Punia"
// a.dsg="Front end developer"
// a.salary=6456464
// a.city="Haridwar"
// console.log(a)

//Accessing the objects 
// console.log(a.name)
// console.log(a["name"])
// console.log(a['name'])
// console.log(a)


// for(let i in a){
//     console.log(`${i}:${a[i]}`)
// }

//Adding the element in the object
// a.email="udaypunia9027@gmail.com"
// console.log(a)

//deleting the element from the object
// delete a.email
// console.log(a)

//Nesting of object 
// let a ={
//     name:{
//         saluatation:"Mr",
//         firstname:"Uday",
//         lastname:"Punia"
//     },
//     address:{
//         addressLine1:"Mohalla Teliyan Jwalapur Haridwar",
//         addressLine2:{
//             city:"Jwalapur",
//             state:"Uttarakhand",
//             District:"Haridwar"
//         },
//         pincode:249407
//     },
//     Designation:"Front end developer",
//     Salary:116618
// }
// console.log(a)
// console.log(a.address)
// console.log(a.address.addressLine1)
// console.log(a.address.addressLine1.addressLine2)

// const {addressLine1,addressLine2}=a.address
// const ar=a.address
// console.log(ar)

// const {city}=a.address.addressLine2.city
// const cityName=a.address.addressLine2.city
// console.log(cityName)

//Adding items to the object
// a.salary_breakdown={
//     TA:50000,
//     HRA:55500,
//     DA:5556,
//     MD:5562
// }
// console.log(a)

//Deleting item from the object
// delete a.salary_breakdown
// console.log(a)


//Creating functions in object called methods

// let a ={
//     name:{
//         saluatation:"Mr",
//         firstname:"Uday",
//         lastname:"Punia"
//     },
//     address:{
//         addressLine1:"Mohalla Teliyan Jwalapur Haridwar",
//         addressLine2:{
//             city:"Jwalapur",
//             state:"Uttarakhand",
//             District:"Haridwar"
//         },
//         pincode:249407
//     },
//     Designation:"Front end developer",
//     Salary:116618,
//     incometax(){
//         this.incometax=this.Salary*15/100;
//         this.gross=this.Salary-this.incometax; 
//         console.log(`Total income tax that you have to pay to goverment ${this.incometax}`)   
//     },
//     display(){
//         console.log(`My name is ${this.name.firstname} and i am ${this.Designation} and my salary is around ${this.Salary} without deduction of income tax from and i am from ${this.address.addressLine1}`)
//     },
//     Gross_salary:()=>console.log(`My total salary is around ${a.gross}`)
// }
// a.incometax()   
// a.display()
// a.Gross_salary()


//Getter Setter :  we use the get and set to get rid from the the method switching Overhead problem function call overhead problem actual execution time of a function is less than the function switching
// var emp={
//     id:1001,
//     name:"Uday Punia",
//     set salary(amount){
//         this.totalsalary=amount
//     },
//     get display(){
//         console.log(`the total salary i have is ${this.totalsalary}`)
//     }
// } 
// emp.salary=500000
// emp.display 


//Object Constructor : Basically creating a function with some parameters and in that function there we use this keyword and in this in the function and then we create a object basically and print the value of the object

// var a=function(name,id,salary,dsg){
//     this.name=name
//     this.id=id
//     this.salary=salary
//     this.dsg=dsg
// }
// var emp1=new a("Uday",1001,152643,"Front end developer")
// var emp2=new a("Uday",1001,152643,"Front end developer")
// var emp3=new a("Uday",1001,152643,"Front end developer")
// console.log(emp1)
// console.log(emp2)
// console.log(emp3)

//Object prototype

// var employee_data=function(id,name,salary,city,dsg){
//     this.id=id
//     this.name=name
//     this.salary=salary
//     this.city=city
//     this.dsg=dsg
// }
// employee_data.prototype.gender="Male"
// const emp1=new employee_data(10001,"Uday Punia",546466,"Haridwar","Frontend developer")

// employee_data.prototype.display=function(){
//     console.log(
//         `
//     id:${this.id}
//     name:${this.name}
//     salary:${this.salary}
//     city:${this.city}
//     dsg:${this.dsg}
//     gender:${this.gender}
//         `
//     )
// }

// emp1.display()

//Object.keys() : Return all the keys of the object
const a ={
    id:101,
    name:"Uday Punia",
    salary:50000,
    city:"Haridwar",
    dsg:"Front end developer",
    gender:"Male"
}
console.log(Object.keys(a))
//Object.values() : Return all the values of the object
console.log(Object.values(a))
//Object.entries() : Return all the entries of the object
console.log(Object.entries(a))
