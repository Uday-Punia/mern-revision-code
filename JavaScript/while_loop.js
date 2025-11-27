
// var num=Number(prompt("Enter the number through which you need the sum of even and odd digits"))
// var even_sum=0
// var odd_sum=0
// var i=0
// while(i<=num){
//     if(i%2==0){
//         even_sum=even_sum+i
//         i++
//     }
//     else{
//         odd_sum=odd_sum+i
//         i++
//     }
// }
// document.writeln(`The sum of even digits ${even_sum} and sum of odd digits ${odd_sum}`)


// var a=Number(prompt("Enter the number to get the total odd number and even number in between "))
// var even_digits=0;
// var odd_digits=0;
// var i=1;
// while(i<=a){
//     if(i%2==0){
//         even_digits+=1;
//         document.writeln(`the even number is ${i} <br>`)
//         i++
//     }
//     else{
//         odd_digits+=1;
//         document.writeln(`the odd number is ${i} <br>`)
//         i++
//     }
// }
// document.writeln(`the total numbers of odd digits is ${odd_digits} and the total numbers of even digits is ${even_digits}`)

// var a=Number(prompt("Enter the number to reverse"))
// var rev=0;
// while(a!=0){
//     let r=a%10
//     rev=rev*10+r
//     a=parseInt(a=a/10)
// }
// document.writeln(`Reverse is ${rev}`)


// var num=Number(prompt("Enter the number to check whether the number is neon or not"));
// var sq=num*num;
// var r=0;
// while(sq!=0){
//     r+=sq%10;
//     sq=parseInt(sq/10);
// }
// if (r === num) {
//     document.writeln(`Entered number is a Neon number`);
// } else {
//     document.writeln(`Entered number is NOT a Neon number`);
// }

/*REVISION */

/*WAP to check which number is the smallest number among three numbers */
// var a=Number(prompt("Enter the first Number"))
// var b=Number(prompt("Enter the Second Number"))
// var c=Number(prompt("Enter the Third Number"))

// if(a<b){
//     if(a<c)
//     {
//         document.writeln(`${a} is the smallest`)
//     }
//     else{
//         document.writeln(`${c} is the smallest`)
//     }
// }
// else{
//     if(b<c)
//         document.writeln(`${b} is the smallest`)
//     else
//         document.writeln(`${c} is the smallest`)
// }


/*WAP to check whether the number is divisible by 2 and 3  Both Or 2 or 3  */
// var a=Number(prompt("Enter the number to check whether the number is divisible by 2 and 3 or 2 or 3 "))

// if(a%2==0){
//     if(a%3==0){
//         document.writeln(`${a} is divisble by 2 and 3 both`)
//     }
//     else{
//         document.writeln(`${a} is divisble by 2 only`)
//     }
// }
// else{
//     if(a%3==0){
//         document.writeln(`${a} is only divisible by 3 only`)
//     }
//     else{
//         document.writeln(`${a} is not divisible by 2 nor 3`)
//     }
// }

/*Wap to check whether the year is a leap year or not */
// var a = Number(prompt("Enter the year to check whether it is a leap year or not:"));

// if (a % 400 === 0) {
//   document.writeln(`${a} is a leap year (divisible by 400)`);
// } 
// else {
//   if (a % 100 === 0) {
//     document.writeln(`${a} is NOT a leap year (divisible by 100 but not 400)`);
//   } 
//   else {
//     if (a % 4 === 0) {
//       document.writeln(`${a} is a leap year (divisible by 4)`);
//     } 
//     else {
//       document.writeln(`${a} is NOT a leap year`);
//     }
//   }
// }


// If–Else Questions
// Write a program to check whether a number is even or odd.

// var a=Number(prompt("Enter the number to check whether the number is even or odd"))
// if(a%2==0){
//     document.writeln(`Entered ${a} number is even number`)
// }
// else{
//     document.writeln(`Entered ${a} number is not an even number`)
// }
// a % 2 == 0 ? document.writeln(`Entered ${a} number is even number`) : document.writeln(`Entered ${a} number is not an even number`);




// Check if a number is positive, negative, or zero.
// var a=Number(prompt("Enter the number to check whether the number number is positive, negative, or zero."))
// a<=0?document.writeln(`Entered number ${a} is a negative number or zero`) : document.writeln(`${a} is a positive number`)




// Take age as input and check if a person is eligible to vote.

// var a=Number(prompt("Enter the age to check whether you are eligible to vote or not ?"))
// a>=18?document.writeln(`your age is ${a} you are eligible to vote`):document.writeln(`your age is ${a} you are not eligible to vote`)   


// Take two numbers and print the greater one.
// var a=Number(prompt("Enter the number a : "))
// var b=Number(prompt("Enter the number b : "))

// a<b?document.writeln(`${b} a is greater `):document.writeln(`${a} is greater`)


// Take marks as input and print grade (A, B, C, D, or Fail).

// Check whether a given year is a leap year or not.

// Take temperature as input and print “Hot”, “Warm”, or “Cold”.

// Check if a given number is divisible by 5 or not.

// Take a character and check if it’s a vowel or consonant.

// Check if a given number is even and greater than 10 at the same time.

// Nested If–Else Questions

// Find the largest among three numbers.

// Check if a character is alphabet, digit, or special symbol.

// Check whether a person is a child, teenager, adult, or senior citizen based on age.

// Determine the type of triangle (equilateral, isosceles, or scalene) from its sides.

// Calculate electricity bill:

// If units ≤ 100 → no charge

// 100–200 → ₹5/unit

// 200 → ₹10/unit

// Check if a student passes or fails based on marks in 3 subjects (all must be ≥40).

// Input time in 24-hour format and print “Good Morning”, “Good Afternoon”, or “Good Night”.

// Check if a number is divisible by both 3 and 5, only 3, only 5, or none.

// Take a year and check whether it’s a century leap year or not.

// Take a number and check if it’s positive even, positive odd, negative even, or negative odd.

/*if else if ladder*/


/*Wap to check the week day name as per the user entered the number of the week  */
// var a=Number(prompt("Enter the number of the day to check the name of the day :"))


// if(a==7){
//     document.writeln("Sunday")
// }
// else if(a==1){
//     document.writeln("Monday")
// }
// else if(a==2){
//     document.writeln("Tuesday")
// }
// else if(a==3){
//     document.writeln("Wednesday")
// }
// else if(a==4){
//     document.writeln("Thrusday")
// }
// else if(a==5){
//     document.writeln("Friday")
// }
// else if(a==6){
//     document.writeln("Saturday")
// }
// else{
//     document.write("Invalid number entered")
// }

/*Wap to Print the number of days in a month when user enter the number of the month */
// var a=Number(prompt("Enter the number of the month to check the name of the month and how many days that month have :"))

// if(a==1){
//     document.writeln("Jan 31 days")
// }
// else if(a==2){
//     document.writeln("Feb 28 days and 29 days")
// }
// else if(a==3){
//     document.writeln("Mar 31 days")
// }
// else if(a==4){
//     document.writeln("April 30 days")
// }
// else if(a==5){
//     document.writeln("May 31 days")
// }
// else if(a==6){
//     document.writeln("June 30 days")
// }
// else if(a==7){
//     document.writeln("July 31 days")
// }
// else if(a==8){
//     document.writeln("August 31 days")
// }
// else if(a==9){
//     document.writeln("September 30 days")
// }
// else if(a==10){
//     document.writeln("October 31 days")
// }
// else if(a==11){
//     document.writeln("November 30 days")
// }
// else if(a==12){
//     document.writeln("December 31 days")
// }
// else{
//     document.write("Invalid number entered")
// }


/*Wap to make a simple calculator*/
// var a=Number(prompt("Enter the first number : "))
// var b=Number(prompt("Enter the second number : "))
// var sign=prompt("Enter + for addition , - for substraction , * for Multiplication , / for division , ** for power, % for remainder")

// if(sign=='+'){
//     document.writeln(`${a} + ${b} =${a+b}`)
// }
// else if(sign=='-'){
//     document.writeln(`${a} - ${b} =${a-b}`)
// }
// else if(sign=='*'){
//     document.writeln(`${a} * ${b} =${a*b}`)
// }
// else if(sign=='/'){
//     document.writeln(`${a} / ${b} =${a/b}`)
// }
// else if(sign=='**'){
//     document.writeln(`${a} ** ${b} =${a**b}`)
// }
// else if(sign=='%'){
//     document.writeln(`${a} % ${b} =${a%b}`)
// }
// else{
//     document.writeln(`Invalid Sign`)
// }

/*Wap to check whether the entered character is lowercase vowel upper case vowel lower case consonant upper case consonant digit space any special character */

// var a=prompt("Enter the character : ")

// if(a.length!=1){
//     document.writeln(`Enter character is invalid `)
// }
// else if(a>='a' && a<='z'){
//     if(a=='a' || a=='e' || a=='i' || a=='o' || a=='u')
//         document.writeln(`${a} is a lowercase vowel`)
//     else
//          document.writeln(`${a} is a lowercase consonant`)
// }
// else if(a>='A' && a<='Z'){
//     if(a=='A' || a=='E' || a=='I' || a=='O' || a=='U')
//         document.writeln(`${a} is a Uppercase vowel`)
//     else
//          document.writeln(`${a} is a Uppercase consonant`)
// }
// else if(a>= '0' && a<='9'){
//     document.writeln(`${a} is a digit`)
// }
// else if(a==' ')
// {
//     document.writeln(`${a}is a space`)
// }
// else if(a=='$' || a=='@'){
//     document.writeln(`${a} is a special character`)
// }
// else{
//     document.writeln("Invalid choice :")
// }

// for (let i=10;i;i-2){
//     console.log(`Hello world ${i}`)
// }


// for(let i=1;i<=10;i=++i){
//     console.log(`Hello world ${i}`)
// }

// for(let i=1;i<=10;i=i++){
//     console.log(`Hello World ${i}`)
// }               

/*WAP to print the sum of n natural number in a specific range */

// var start=Number(prompt("Enter the first number : "))
// var end=Number(prompt("Enter the Second number : "))
// var sum=0;
// var count=0;
// for(let i=start;i<end;i++){
//     sum+=i;
//     count++;
// }
// document.writeln(`Sum of ${count} in between ${start} and ${end} is : ${sum} `)

/*WAP to print the sum of even and odd natural number with in a range */
// var start=Number(prompt("Enter the first Number : "))
// var end=Number(prompt("Enter the second Number : "))
// var sum_even=0;
// var sum_odd=0;
// for(let i=start;i<=end;i++){
// if(i%2==0){
//     sum_even+=i
// }
// else{
//     sum_odd+=i

// }
// }
// document.writeln(`The sum of Even : ${sum_even} `)
// document.writeln(`The sum of Odd : ${sum_odd} `)

/*WAP to check whether the number is perfect number or not ? */

// var a=Number(prompt("Enter the number to check whether the number is perfect number or not : "))
// var sum=0;
// for(let i=1;i<a;i++){
//     if(a%i==0){
//         sum+=i;
//     }

// }
// if(sum==a){
//     document.writeln(`Entered number ${a} is a Perfect number`)
// }
// else{
//     document.writeln(`Entered number ${a} is not a Perfect number`)
// }

/*WAP to check whether the number is prime number or not  */
// var a = Number(prompt("Enter the number to check whether the number is prime number or not ? : "))
// var count = 0;
// for (let i = 1; i <= a; i++) {
//     if (a % i == 0) {
//         count++;
//     }
// }
// if (count != 2) {
//     document.writeln(`${a} is not a prime number`)
// }
// else {
//     document.writeln(`${a} is the prime number`)
// }

// var isprime=true;
// if(a<=1){
//     isprime=false;
// }
// else{
//     for(var i=2;i<=Math.sqrt(a);i++){
//         if(a%i==0){
//             isprime=false;
//             break;
//         }
//     }
// }
// if(isprime==true){
//     document.writeln(`Entered number${a} is a prime number`)
// }
// else{
//     document.writeln(`Entered number${a} is not  a prime number`)
// }

/*wap to print the sum of the febonacci series from a point to another point  */
// var number=Number(prompt("Enter the number : "))
// var a=0;
// var b=1;
// var sum=a+b;
// while(sum<=number){
//     a=b
//     b=sum
//     sum=a+b
// }
// document.writeln(`The sum of n terms till the ${number} is  ${sum}`)

/*Wap to calculate the sum of the number */

// var a=Number(prompt("Enter the number :"))
// var num=a;
// var sum=0;
// while(num!=0){
//     let rev=num%10
//     sum+=rev
//     num=parseInt(num/10)
// }
// document.writeln(`The sum of the given number ${a} is ${sum}`)

/*Wap to reverse a number */
// var a = Number(prompt("Enter the number :"))
// var num=a;
// var rev=0;
// while(num!=0){
//     let r=num%10
//     rev=rev*10+r
//     num=parseInt(num/10)
// }
// document.writeln(`The reverse of the given string ${a} is ${rev}`)

/*Wap to calculate the sum of even and odd digits from a specific range */
// var a=Number(prompt("Enter the first number :"))
// var b=Number(prompt("Enter the second number:"))
// var sum_even=0;
// var sum_odd=0;
// while(a<=b){
//     if(a%2==0){
//         sum_even+=a;
//         a++;
//     }
//     else{
//         sum_odd+=a;
//         a++;
//     }
// }
// document.writeln(`The sum of even number  ${sum_even} <br>`)
// document.writeln(`The sum of odd number   ${sum_odd} `)

/*Wap to calculate the even and odd digits in a nummber */
// var a=Number(prompt("Enter the first number :"))
// var b=Number(prompt("Enter the second number:"))
// var digits_even=0;
// var digits_odd=0;
// while(a<b){
//     if(a%2==0){

//         digits_even++;
//         a++
//     }
//     else{

//         digits_odd++;
//         a++
//     }
// }
// document.writeln(`The number of even number  ${digits_even} <br>`)
// document.writeln(`The number of odd number   ${digits_odd} `)


/*Wap to reverse a number */
// var a=Number(prompt("Enter the number to get the reverse of the number:"))
// var num=a;
// var rev=0;
// while(num!=0){
//     let r=num%10
//     rev=rev*10+r
//     num=parseInt(num/10)
// }
// document.writeln(`The rev of the given number ${a} is ${rev} `)

/*Wap to check whether the number is palindrome or not  */
// var a=Number(prompt("Enter the number to check whether the number is palindrome or not :"))
// var num=a
// var rev=0
// while(num!=0){
//     let r=num%10
//     rev=rev*10+r
//     num=parseInt(num/10)
// }
// if(rev==a){
//     document.writeln(`The given number ${a} is a palindrome`)
// }
// else{
//     document.writeln(`The given number ${a} is not a palindrome`)
// }

/*Wap to check whether the number is neon number or not */
// var a=Number(prompt("Enter the number to check whether the number is neon or not :"))
// var num=a**2;
// var rev=0;
// while(num!=0){
//     let r=num%10
//     rev+=r
//     num=parseInt(num/10)
// }
// if(a==rev){
//     document.writeln(`The given number ${a} is a neon number`)
// }
// else{
//     document.writeln(`The given number ${a} is not a neon number`)
// }

/*Wap to check whether the number is armstrong number or not ..*/
// var a=Number(prompt("Enter the number to check whether the number is armstrong number or not : "))
// var num=a;
// var sum=0;
// while(num!=0){
//     let r=num%10
//     sum=sum+r**3
//     num=parseInt(num/10)
// }
// if(sum==a){
//     document.writeln(`Entered number ${a} is an Armstrong number`)
// }
// else{
//     document.writeln(`Entered number ${a} not a Armstrong number`)
// }

/*Wap to check whether the number is magical number or not  */
// var a = Number(prompt("Enter a number to check whether the number is magical number or not : "))
// var num = a
// var rev_sum = 0
// while (num != 0) {
//     let r = num % 10
//     rev_sum += r
//     num = parseInt(num / 10)
// }
// console.log(`${rev_sum}`)
// var num=rev_sum
// var rev_rev_sum=0;
// while(num!=0){
//     let r=num%10
//     rev_rev_sum=rev_rev_sum*10+r
//     num=parseInt(num/10)
// }
// if(rev_sum*rev_rev_sum==a){
//     document.writeln(`${a} is a magical number`)
// }
// else{
//     document.writeln(`${a} is not a magical number`)
// }

/*Wap to check whether the number is perfect number or not */
// var a=Number(prompt("Enter the number to check whether the number is perfect number or not ? "))
// let i=1;
// let sum = 0;

// do {
//     if (a % i == 0) {
//         sum += i;
//     }
//     i++;
// } while (i < a);

// if (sum == a) {
//     document.writeln(`${a} is a Perfect Number`);
// } else {
//     document.writeln(`${a} is NOT a Perfect Number`);
// }

/*Wap to print and count all palindrome numbers in a range*/











/*Patterns*/
/*
*****
***** 
*****
*****
 */
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         process.stdout.write("*")
//     }
//     console.log( )
// }


/*
12345
12345
12345
12345
12345
*/
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         process.stdout.write(`${j}`)
//     }
//     console.log()
// }

/*
12345
23456
34567
45678
56789
*/
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         process.stdout.write(`${j+i-1}`)
//     }
//     console.log()
// }

/*
11111
00000
11111
00000
11111
 */

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         process.stdout.write(`${i%2}`)
//     }
//     console.log()
// }

/*
10101
10101
10101
10101
10101
*/
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         process.stdout.write(`${j%2}`)
//     }
//     console.log()
// }

/*
AAAAA
BBBBB
CCCCC
DDDDD
EEEEE
 */
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         process.stdout.write(`${String.fromCharCode(i+64)}`)
//     }
//     console.log()
// }


/*
ABCDE
ABCDE
ABCDE
ABCDE
ABCDE
 */
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         process.stdout.write(`${String.fromCharCode(j+64)}`)
//     }
//     console.log()
// }

/*
ABCDE
BCDEF
CDEFG
DEFGH
ERGHI */
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         process.stdout.write(`${String.fromCharCode(i+j+63)}`)
//     }
//     console.log()
// }

/*
A
AB
ABC
ABCD
ABCDE */
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(`${String.fromCharCode(64+j)}`)
//     }
//     console.log()
// }

/*
A
BB
CCC
DDDD
EEEEE
 */

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(`${String.fromCharCode(64+i)}`)
//     }
//     console.log()
// }

/*
A
BC
CDE
DEFG
EFGHI */
// for(let i =1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(`${String.fromCharCode(i+j+63)}`)
//     }
//     console.log()
// }

/*
12345
*****
12345
*****
12345
*/
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         process.stdout.write(`${i%2==0?"*":j}`)
//     }
//     console.log()
// }

/*
1*3*5
1*3*5
1*3*5
1*3*5
 */

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         process.stdout.write(`${j%2==0?"*":j}`)
//     }
//     console.log()
// }

/*
*
**
***
****
*****
 */
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write("*")
//     }
//     console.log()
// }

/*
1
12
123
1234
12345
*/
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(`${j}`)
//     }
//     console.log()
// }

/*
1
22
333
4444
55555
 */
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(`${i}`)
//     }
//     console.log()
// }

/*
1
23
234
3456
45678 */
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(`${i+j-1}`)
//     }
//     console.log()
// }

/*
1
00
111
0000
11111
 */
// for (let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(`${i%2}`)
//     }
//     console.log()
// }


/*
1
10
101
1010
10101

*/
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(`${j%2==0 ? 0 : 1}`)
//     }
//     console.log()
// }

/*
1
01
101
0101
10101
 */
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(`${(i+j-1)%2 == 0 ? 0 : 1 }`)
//     }
//     console.log()
// }

/*
1
**
123
****
12345
 */
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(`${i%2==0 ? "*" : j}`)
//     }
//     console.log()
// }

/*
1
1*
1*3
1*3*
1*3*5
*/
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(`${j % 2 == 0 ? "*" : j}`)
//     }
//     console.log()
// }


/*
1
12
333
1234
55555
*/
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(`${i % 2 == 0 ? j : i}`)
//     }
//     console.log()
// }


/*
A
BC
CDE
DEFG
EFGHI
 */

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(`${String.fromCharCode(63+i+j)}`)
//     }
//     console.log()
// }

/*
*****
****
***
**
*
 */
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=6-i;j++){
//         process.stdout.write("*")
//     }
//     console.log()
// }

/*
    *
   **
  ***
 ****
*****   
 */
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5-i;j++){
//         process.stdout.write(" ")
//     }
//     for(let k=1;k<=i;k++){
//         process.stdout.write("*")
//     }
//     console.log()
// }


/*
    *
   ***
  *****
 *******
*********
*/

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5-i;j++){
//         process.stdout.write(" ")
//     }
//     for(let k=1;k<=i;k++){
//         process.stdout.write("*")
//     }

// }

/*
*****
*****
*****
*****
 */

// for(var i=1;i<=5;i++){
//     for(var j=1;j<=5;j++){
//         process.stdout.write("*")
//     }
//     console.log()
// }


/*
*****
*   *
*   *
*****
 */
// let rows = 4;
// let cols = 5;

// for (let i = 1; i <= rows; i++) {
//     let line = "";
//     for (let j = 1; j <= cols; j++) {
//         if (i == 1 || i == rows || j == 1 || j == cols) {
//             line += "*";
//         } else {
//             line += " ";
//         }
//     }
//     console.log(line);
// }


/*

*
**
***
****

 */

// for(var i=1;i<=5;i++){
//     for(var j=1;j<=i;j++){
//         process.stdout.write("*")
//     }
//     console.log()
// }


/*
******
****
***
**
*
 */
// for(var i=1;i<=5;i++){
//     for(var j=i;j<=5;j++){
//         process.stdout.write("*")
//     }
//     console.log()
// }


/*
   *
  **
 ***
****
 */

// for(var i=1;i<=5;i++){
//     for(var j=i;j<=5;j++){
//         process.stdout.write(" ")
//     }
//     for(var k=1;k<=i;k++){
//         process.stdout.write("*")
//     }
//     console.log()
// }

/*
*
**
***
****
***
**
*

*/

// for(var i=1;i<=5;i++){
//     for(var j=1;j<=i;j++){
//         process.stdout.write("*")
//     }
//         console.log()
// }
// for(var a=1;a<=4;a++){
//     for(var b=a;b<=4;b++){
//         process.stdout.write("*")
//     }
//     console.log()
// }



/*
   *
  ***
 *****
*******

*/
// for(var a=1;a<=5;a++){
//     for(var b=1;b<=5-a;b++){
//         process.stdout.write(" ")
//     }
//     for(var c=1;c<=2*a-1;c++){
//         process.stdout.write("*")
//     }
//     console.log()
// }



// var a=[]
// a[0]=1
// a[1]=

// console.log(a)

// var a=Array(10)
// a[1]=44
// a[2]=44
// a[3]=44
// a[4]=44
// a[5]=44
// a[6]=44
// a[7]=44
// a[8]=44
// a[9]=44
// a[10]=44
// a[11]=44
// console.log(a)


// var a=[]
// a[0]=55;
// a[1]=550;
// console.log(a)

// // var a=[11,22,3,,22,3,3,3,,3,]
// var a=Array(22,10,20,30,30,"Uday")
// console.log(a.toString())

// a.push(5)
// console.log(a.join("/"))


// a.pop()
// console.log(a)

// a.unshift(55,66,66,99,100)
// console.log(a)
// a.shift()
// console.log(a)

//   delete a[1]
//   console.log(a)
// a.splice(3,1,66)
// console.log(a)


// var b=Array(10,20,30,40,50,60,70,80,90,100,110,120,130,140)
// for(let i of a){
//     console.log(i)
// }

// for(let i in a){
//     console.log(a[i])
// }
// console.log(b.slice(3,10))
// console.log(a.includes(55))
// console.log(a.indexOf(66))
// console.log(a.lastIndexOf(55))
// console.log(a.reverse())


// function fun(){
//     var a=10;
//     var b=12;
//     var sum=a+b;
//     console.log(sum)
// }
// fun()

// function fun(a,b){
//     var sum=a+b;
//     return sum;
// }
// console.log(fun(5,6))