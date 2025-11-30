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

let a ={
    name:{
        saluatation:"Mr",
        firstname:"Uday",
        lastname:"Punia"
    },
    address:{
        addressLine1:"Mohalla Teliyan Jwalapur Haridwar",
        addressLine2:{
            city:"Jwalapur",
            state:"Uttarakhand",
            District:"Haridwar"
        },
        pincode:249407
    },
    Designation:"Front end developer",
    Salary:116618,
    incometax(){
        this.incometax=this.Salary*15/100;
        this.gross=this.Salary-this.incometax; 
        console.log(`Total income tax that you have to pay to goverment ${this.incometax}`)   
    },
    display(){
        console.log(`My name is ${this.name.firstname} and i am ${this.Designation} and my salary is around ${this.Salary} without deduction of income tax from and i am from ${this.address.addressLine1}`)
    },
    Gross_salary:()=>console.log(`My total salary is around ${a.gross}`)
}
a.incometax()   
a.display()
a.Gross_salary()