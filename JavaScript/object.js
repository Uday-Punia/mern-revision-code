//Object literal 
//Object intialization
// var a={
//     id:1001,
//     name:"uday punia",
//     designation : "Front end developer",
//     salary : 189000,
// }
// console.log(a)


//Creating objects using simple curly braces

// var a={}
// a.id=44;
// a['name']='uday'
// a["city"]="Haridwar"
// a[`state`]=`Uttarakhand`
// console.log(a)

//Creating object using new Object()

// var a=new Object()
// a.id=123
// a["name"]="Uday Punia"
// a['city']='Haridwar'
// a['Pincode']='249407'
// console.log(a.Pincode)

//Accessing items from an existing object

// var a={
//     id:4545,
//     name:"Uday Punia",
//     city:"Haridwar",
//     pincode:"249407",
//     state:"Uttarakhand"
// }
// for(let i in a)
// {
//     console.log(a[i])
// }

//Adding items an existing object
// var obj={
//     id:555,
//     Name:"uday",
//     Course:"MERN STACK",
//     Duration:"6 months"
// } 
// obj.Surname="Chaudhary"
// console.log(obj)
// delete obj.id
// console.log(obj)

//Nesting of Objects

// var emp={
//     id:210060101169,
//     Name:"Uday Punia",
//     Address:{
//         AddressLine1:{
//             building_name:"44 South street",
//             Floor:45
//         },
//         AddressLine2:{
//             Locality:"Banglore near star city",
//             city:"Banglore",
//             State:"Karnataka"
//         }
//     },
//     Salary:250000
// }
// console.log(emp)
// console.log(emp.Address)
// console.log(emp.Address.AddressLine1)
// console.log(emp.Address.AddressLine2)
// console.log(emp.Address.AddressLine2.State)

//Functions in objects are called method:


// var obj={
//     id:1432,
//     Division:"First",
//     Course:"Btech CSE",
//     Passing:"2025",
//     Salary:189200,
//     calculate:function(){
//         this.ta = this.Salary*5;
//         this.gross= this.ta + this.Salary
//         console.log(`The total salary adding ta is ${this.gross}`)
//     }

// }
// obj.calculate()

// var a={
//     id : 1456,
//     name:"uday",
//     class:"a",
//     calculate(num){
//         this.salary=num
//     },
//     display(){
//         console.log(`Your per hour salary is like :  ${this.salary} `)
//     }
// }
// a.calculate(700)
// a.display()

    // var a={
    //     id:1111,
    //     name:"Uday",
    //     set setSalary(Package){
    //         this.salary=Package
    //     },
    //     get display(){
    //         console.log(`The total package is of ${this.salary}`)
    //     }
    // }
    // a.setSalary=2500000
    // a.display

    