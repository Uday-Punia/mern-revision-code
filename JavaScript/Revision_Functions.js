//Functions is the building block of any program by which we can divide our large program into smaller parts

//There  are mainly four types of functions that are present 
/*
1.Functions with return value without parameter
2.Function with return value with parameter
3.Functions without return value with parameter
4.Function without return value without parameter 
*/

// 1.Functions with return value without parameter
// function fun(){
//     let a=10
//     let b=50
//     return a+b;
// }
// console.log(fun())



// 2.Functions with return value with parameter
// function fun(a,b){
//     return a+b;
// }
// console.log(fun(1,2))

//3.Functions without return value and with parameter
// function fun(a,b){
//     console.log(a+b);
// }
// fun(4,5)

//4.Functions without return value and without parameter
// function fun(){
//     let a=22;
//     let b=55;
//     console.log(a+b)
// }
// fun()

//Types to represent the function basically there are three types through which we can represent or intitalize the function 
//1.Regular Funcation
// function fun(a,b){
//     return a+b
// }
// console.log(fun(4,5))

//2.Annonymous Functions

// var c= function(a,b){
//     return a+b
// }
// console.log(c(5,6))

//3.Fat Arrow Function

// var c=(a,b) => console.log(a+b)
// c(2,45)


//Higher order function and callback function

// var radius=[1,2,3,4,5]

// //Callback function 
// const area=function(radius){
//     return Math.PI*radius*radius
// }
// const cirumference=(radius)=>{
//     return 2*Math.PI*radius
// }

//Higher Order Function 
// const higherOrderFunctionCalculate = function (radius,logic)
// {
//     let output=[]
//     for(let i of radius){
//         output.push(logic(i))
//     }
//     console.log(output)
// }

// higherOrderFunctionCalculate(radius,area)
// higherOrderFunctionCalculate(radius,cirumference)


//Self invoked function
// (function (a,b){
//     console.log(a+b);
// })(5,6);





// const radiusArray=[3,5,2,6,5]

// const area=( )=>{
//     let output=[]
//     for(let r of radiusArray){
//         output.push(Math.PI*r*r)
//     }
//     console.log(output)
// }
// area()


// function factorial(n) {
//   if (n === 1) return 1; // base case

//   return n * factorial(n - 1); // recursive call
// }

// console.log(factorial(5)); // 120

