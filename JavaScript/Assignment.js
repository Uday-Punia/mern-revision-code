// function dayName() {
//     var dayNum = Number(prompt("Enter the day number :"))
//     switch (dayNum) {
//         case 1:
//             document.writeln("Monday")
//             break;
//         case 2:
//             document.writeln("Tuesday")
//             break;
//         case 3:
//             document.writeln("Wednesday")
//             break;
//         case 4:
//             document.writeln("Thrusday")
//             break;
//         case 5:
//             document.writeln("Friday")
//             break;
//         case 6:
//             document.writeln("Saturday")
//             break;
//         case 7:
//             document.writeln("Sunday")
//             break;
//         default:
//             document.writeln("Enter a valid number")
//     }
// }
// dayName()


// function monthNumber() {
//     var monthNum = Number(prompt("Enter the month number : "))
//     switch (monthNum) {
//         case 1:
//             document.writeln("January 31 days")
//             break;
//         case 2:
//             document.writeln("February 28 days or 29 days")
//             break;
//         case 3:
//             document.writeln("March 31 days")
//             break;
//         case 4:
//             document.writeln("April 30 days")
//             break;
//         case 5:
//             document.writeln("May 31 days")
//             break;
//         case 6:
//             document.writeln("June 30days")
//             break;
//         case 7:
//             document.writeln("July 31days")
//             break;
//         case 8:
//             document.writeln("August 31 days")
//             break;
//         case 9:
//             document.writeln("September 30 days")
//             break;
//         case 10:
//             document.writeln("October 31 days")
//             break;
//         case 11:
//             document.writeln("November 30 days")
//             break;
//         case 12:
//             document.writeln("December 31 days")
//             break;
//         default:
//             document.writeln("Invalid Input")
//     }
// }
// monthNumber()

// function simpleCal() {
//     var op = prompt("Enter \n '+' for addition \n'-' for substraction \n '*' for multiplication \n '/' for division \n '**' for Power \n '%' for Remainder")
//     var a = Number(prompt("Enter First Number : "))
//     var b = Number(prompt("Enter Second Number : "))
//     switch (op) {
//         case '+':
//             document.writeln(`Addition ${a} + ${b} = ${a + b}`)
//             break;
//         case '-':
//             document.writeln(`Substraction ${a} - ${b} = ${a - b}`)
//             break;
//         case '*':
//             document.writeln(`Multiplication ${a} * ${b} = ${a * b}`)
//             break;
//         case '/':
//             document.writeln(`Division ${a} / ${b} = ${a / b}`)
//             break;
//         case '%':
//             document.writeln(`Remainder ${a} % ${b} = ${a % b}`)
//             break;
//         case '**':
//             document.writeln(`Power ${a} ** ${b} = ${a ** b}`)
//             break;
//         default:
//             document.writeln("Invalid Input")
//     }
// }
// simpleCal()

// function test() {
//     var ch = prompt("Enter any character : ")
//     if (ch.length != 1) {
//         document.writeln("Invalid Entry")
//     }
//     else {
//         if (ch >= 'a' && ch <= 'z') {
//             if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
//                 document.writeln(`Entered character ${ch} is a Lowercase Vowel`)
//             }
//             else {
//                 document.writeln(`Entered character ${ch} is a Lowercase Consonant`)
//             }
//         }
//         else if (ch >= 'A' && ch <= 'Z') {
//             if (ch == "A" || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
//                 document.writeln(`Entered character ${ch} is a Uppercase Vowel`)
//             }
//             else {
//                 document.writeln(`Entered character ${ch} is a Uppercase Consonant`)
//             }
//         }
//         else if (ch >= '0' && ch <= '9') {
//             document.writeln(`Entered Character ${ch} is a digit`)
//         }
//         else {
//             document.writeln(`Entered Character ${ch} is a Special character`)
//         }
//     }
// }
// test()

// function nSum(){
//     var a=Number(prompt("Enter the first number of a Range:"))
//     var b=Number(prompt("Enter the second number of a Range:"))
//     var sum=0
//     for(var i=a;i<=b;i++){
//         sum+=i;
//     }
//     return sum;
// }
// document.writeln(`The sum of natural numbers within a range is = ${nSum()}`)

// function sumEvenOdd(){
//     var a=Number(prompt("Enter the first number of range:"))
//     var b=Number(prompt("Enter the second number of range:"))
//     var sum_even=0
//     var sum_odd=0
//     for(var i=a;i<=b;i++){
//         if(i%2==0){
//             sum_even+=i
//         }
//         else{
//             sum_odd+=i
//         }
//     }

//     return [sum_even,sum_odd]
// }
// document.writeln(`[Even_Sum,Odd_Sum] = ${sumEvenOdd()}`)


// function factorial(){
//     var a=Number(prompt("Enter the number to check the factorial"))
//     var fact=1;
//     for(var i=1;i<=a;i++){
//         fact*=i;
//     }
//     return fact
// }
// document.write(`Factorial of given number is ${factorial()}`)

// function perfect(){
//     var a=Number(prompt("Enter the number to check whether the number is perfect number or not"))
//     var sum_div=0
//     for(let i=1;i<a;i++){
//         if(a%i==0){
//             sum_div+=i;
//         }
//     }
//     if(sum_div==a){
//         return true;
//     }
//     else
//         return false
// }
// document.writeln(`Is perfect number = ${perfect()}`)


// function prime(a){
//      if (a <= 1) {
//         console.log(`Entered number ${a} is not a prime number`);
//         return;
//     }
//     let isprime=true;
//     for(let i=2;i<Math.sqrt(a);i++){
//         if(a%i==0){
//             isprime=false;
//         }
//     }
//     if(isprime){
//         console.log("Entered number is Prime")
//     }
//     else{
//         console.log("Entered Number is not a prime")
//     }
// }
// prime(5)
// prime(6)


// function digitEvenOdd(a){
//     var even_sum=0;
//     var odd_sum=0;
//     while(a>0){
//         var r=a%10
//         if(r%2==0){
//             even_sum+=r
//         }
//         else{
//             odd_sum+=r
//         }
//         a=parseInt(a/10)
//     }
//     return [even_sum,odd_sum];
// }
// console.log(`The sum of even numbers and odd numbers of a specific number [even_sum,odd_sum] ${digitEvenOdd(97996)}`)

// function digitsOddEven(a){
//     var even_digits=0;
//     var odd_digits=0;
//     while(a>0){
//         let r=a%10
//         if(r%2==0){
//             even_digits++;
//         }
//         else{
//             odd_digits++;
//         }
//         a=parseInt(a/10)
//     }
//     return [even_digits,odd_digits]
// }
// console.log(`the total even and odd digits in a number is [Even_digits,Odd_digits] : ${digitsOddEven(9236)}`)

// function reverse(a){
//     var rev=0
//     while(a>0){
//         let r=a%10
//         rev=rev*10+r
//         a=parseInt(a/10)
//     }
//     return rev
// }
// console.log(reverse(6464))


// function neon(a){
//     var i=a*a
//     let rev=0
//     while(i>0){
//         let r=i%10
//         rev=rev+r
//         i=parseInt(i/10)
//     }
//     if(rev==a){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(neon(9))

// function armStrong(a){
//     var rev=0
//     var b=a
//     while(b>0){
//         let r=b%10
//         rev=rev+r**3
//         b=parseInt(b/10)
//     }
//     if(rev==a){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(armStrong(153))
// console.log(armStrong(15))
// console.log(armStrong(13))
// console.log(armStrong(13))
// console.log(armStrong(53))

// function palindrome(a){
//     var rev=0
//     var b=a
//     while(a>0){
//         let r=a%10
//         rev=rev*10+r
//         a=parseInt(a/10)
//     }
//     if(rev==b){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(palindrome(1221))
// console.log(palindrome(21))
// console.log(palindrome(121))

// function magicalNumber(a){
//     var num=a
//     var b=0 
//     while(a!=0){
//         let r=a%10
//         b+=r
//         a=parseInt(a/10)
//     }
//     var rev=0
//     var sumofdigit=b
//     while(b!=0){
//         let remaider=b%10
//         rev=rev*10+remaider
//         b=parseInt(b/10)
//     }
//     if(rev*sumofdigit==num){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(magicalNumber(81))
// console.log(magicalNumber(66))
// console.log(magicalNumber(1458))
// console.log(magicalNumber(1729))


// function perfectNumInRange(a, b) {
//     for (let i = a; i <= b; i++) {
//         let sum = 0;

//         for (let num = 1; num <= i / 2; num++) {
//             if (i % num == 0) {
//                 sum += num;
//             }
//         }

//         if (sum == i && i != 0) {
//             console.log(`${i} is a Perfect Number`);
//         }
//     }
// }

// perfectNumInRange(1, 1000);


// function palindromeInRange(a,b){
//     for(let i=a;i<=b;i++){
//         let rev=0
//         let start=i
//         while(start!=0){
//             let r=start%10
//             rev=rev*10+r
//             start=parseInt(start/10)
//         }
//         if(rev==i){
//             console.log(`${i}`)
//         }
//     }
// }
// palindromeInRange(1,1000)

// function palindromeInRange(a,b){
//     var count=0
//     for(let i=a;i<=b;i++){
//         let rev=0
//         let start=i
//         while(start!=0){
//             let r=start%10
//             rev=rev*10+r
//             start=parseInt(start/10)
//         }
//         if(rev==i){
//             count++;
//         }
//     }
//     console.log(`Total number of palindrome from ${a} to ${b} is ${count}`)
// }
// palindromeInRange(1,1000)

// function armstrongNumberRange(a,b){
//     var count=0
//     for(let i=a;i<=b;i++){
//         let num=i
//         var rev=0
//         while(num!=0){
//             let r=num%10
//             rev=rev+r**3
//             num=parseInt(num/10)
//         }
//         if(rev==i){
//             console.log(`${i}`)
//             count++
//         }
//     }
//     console.log(`Total number of armstrong number is ${count}`)
// }
// armstrongNumberRange(1,1000)

// function magicalNumberInRange(a,b){
//     for(i=a;i<=b;i++){
//         let sum_of_number=0
//         let c=i
//         while(c!=0){
//             let r=c%10
//             sum_of_number=sum_of_number+r
//             c=parseInt(c/10)
//         }
//         let rev = sum_of_number
//         let reverse_sum_digit=0
//         while(rev!=0){
//             let r=rev%10
//             reverse_sum_digit=reverse_sum_digit*10+r
//             rev=parseInt(rev/10)
//         }
//         if(sum_of_number*reverse_sum_digit==i){
//             console.log(`${i}`)
//         }
//     }
// }
// magicalNumberInRange(1,10000)


// function primeInRange(a,b){
//      var count=0
//     for(let i=a;i<=b;i++){
       
//         for(let j=2;j<=Math.sqrt(i);j++){
//             if(j%i!=0){
//                 console.log(`${i}`)
//                 count++
//             }
//         }
//     }
//     console.log(`Total number of prime numbers is ${count}`)
// }


// function primeInRange(a, b) {
//     let count = 0;

//    for(let num=a;num<=b;num++){
//     let flag=false
//     for(let i=2;i<=Math.sqrt(num);i++){
//         if(num%i==0){
//             flag=true
//             break
//         }
//     }
//     if(flag==false && num>=2){
//         count++
//         console.log(`${num}`)
//     }
//    }
//    console.log(`Total number of prime number ${count}`)
// }
// primeInRange(1,20)4

//Self invoked function
// ((a,b) =>console.log(a+b))(10,20)

//For Each
//Using Arrow function
// var a=[10,20,30,40,50,60,70,80,90,100]
// a.forEach((x)=>console.log(x*5) )


//Reduce()
// var a=[10,20,30,40,50,60,70,80,90,100]
// console.log(a.reduce((x,y)=>x*y))

//Sort()
// var a=[10,20,30,40,50,60,70,80,90,100]
// console.log(a.sort((x,y)=>x-y)) //Ascending order
// console.log(a.sort((x,y)=>y-x)) //Descending order

//String
/*
Collection of characters or Sequence of characters or Array of characters
*/
var a="Uday Punia"
var b='Uday Punia'
var c=`My name is 
Uday Punia
Jaat`
//using for loop 
// for(let i=0;i<a.length;i++){
//     console.log(a[i])
// }

//Using while loop
// let i=0
// while(i<a.length){
//     console.log(a[i])
//     i++
// }


//Using do while loop
// let i=0
// do{
//     console.log(a[i])
//     i++
// }
// while(i<a.length)

//Using for in loop
// for(let i in a){
// console.log(a[i])
// }

//Using for of loop 
// for(let i of a){
//     console.log(i)
// }

//Recursion function 
function test(){
    let i=0
    i++
    console.log("Upper part of recursi")
}