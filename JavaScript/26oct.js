//Nested if else to find smallest number among three numbers
/*var a=Number(prompt("Enter first number:"));
var b=Number(prompt("Enter second number:"));
var c=Number(prompt("Enter third number:"));
if(a<b){
    if(a<c){
        document.writeln(`a = ${a}is the smallest number`);
    }
    else{
        document.writeln(`c = ${c}is the smallest number`);     
    }
}
else{
    if(b<c){
        document.writeln(`b = ${b}is the smallest number`); 
    }
    else{
        document.writeln(`c= ${c}is the smallest number`);     
    }
}*/


//1. Wap to check whether the number is divisible by 2 and 3 Or 2 or 3 
/* var a=Number(prompt("Enter the number to check whether the number is divisible by 2 and 3"));
if(a%2==0){
    if(a%3==0){
        document.writeln(`${a} is divisble by 2 and 3 both`)
    }
    else{
        document.writeln(`${a} is divisible by only 2 `)
    }
}
else{
    if(a%3==0){
        document.writeln(`${a} is divisible by 3 only`)
    }
    else{
        document.writeln(`${a} is not divisible by 2  nor 3 `)
    }
} */

// 2. Wap to check whether the year is leap year or not 
/*
let year = prompt("Enter a year:");

// Convert input to number
year = Number(year);

// Check leap year condition using nested if-else
if (year % 4 === 0) {
  // If divisible by 4
  if (year % 100 === 0) {
    // If divisible by 100
    if (year % 400 === 0) {
      alert(year + " is a Leap Year!");
    } else {
      alert(year + " is NOT a Leap Year!");
    }
  } else {
    // If not divisible by 100
    alert(year + " is a Leap Year!");
  }
} else {
  // If not divisible by 4
  alert(year + " is NOT a Leap Year!");
} */

// var year = Number(prompt("Enter the number of the year : "))
// if(year%100==0){
//   if(year%400==0){
//     document.writeln(`${year} is a leap year`)
//   }
//   else{
//     document.writeln(`${year} is not a leap year`)
//   }
// }
// else{
//   if(year%4==0){
//     document.writeln(`${year} is a leap year`)
//   }
//   else{
//     document.writeln(`${year} is not a leap year`)
//   }

// }

// var year = Number(prompt("Enter the Year Number"))
// if(year%4==0 && year%100!=0 && year%400==0){
//   document.writeln(`${year} is a leap year`)
// }
// else{
//   document.writeln(`${year} is not a leap year`)
// }

//IF else if ladder to find smallest number among three numbers
/* var a=Number(prompt("Enter first number:"));
var b=Number(prompt("Enter second number:"));
var c=Number(prompt("Enter third number:"));
var d=Number(prompt("Enter fourth number:"));
var e=Number(prompt("Enter fifth number:"));
if(a>=b && a>=c && a>=d && a>=e){
    document.writeln(`${a} is the greatest number`)
}
else if(b>=c && b>=d && b>=e){
    document.writeln(`${b} is the greatest number`)
}
else if(c>=d && c>=e){
    document.writeln(`${c} is the greates number`)
}
else if(d>=e){
    document.writeln(`${d} is the greatest number`)
}
else{
    document.writeln(`${e} is the greatest number`)
}*/
//1.Wap to print the day name when user enter a day number
/*
var a=Number(prompt("Enter the number of the day "));
if(a==1){
    document.writeln(`Monday`)
}
else if(a==2){
    document.writeln(`Tuesday`)
}
else if(a==3){
    document.writeln(`Wednesday`)
}
else if(a==4){
    document.writeln(`Thrusday`)
}
else if(a==5){
    document.writeln(`Friday`)
}
else if(a==6){
    document.writeln(`Saturday`)
}
else if(a==7){
    document.writeln(`Sunday`)
}
else{
    document.writeln(`Invalid number enterd`)
} */

//2.Wap to print number of days in a month when user enter the a month number
/*var a=Number(prompt("Enter the number of the Month "));
if(a==1){
    document.writeln(`January`)
}
else if(a==2){
    document.writeln(`February`)
}
else if(a==3){
    document.writeln(`March`)
}
else if(a==4){
    document.writeln(`April`)
}
else if(a==5){
    document.writeln(`May`)
}
else if(a==6){
    document.writeln(`June`)
}
else if(a==7){
    document.writeln(`July`)
}

else if(a==8){
    document.writeln(`August`)
}

else if(a==9){
    document.writeln(`September`)
}

else if(a==10){
    document.writeln(`October`)
}

else if(a==11){
    document.writeln(`November`)
}
else if(a==12){
    document.writeln(`December`)
}

else{
    document.writeln(`Invalid number enterd`)
} */


//Switch case 


//1.Wap to print the day name when user enter a day number

/*
var a = Number(prompt("Enter the number of the day:"));

switch (a) {
  case 1:
    document.writeln("Monday");
    break;

  case 2:
    document.writeln("Tuesday");
    break;

  case 3:
    document.writeln("Wednesday");
    break;

  case 4:
    document.writeln("Thursday");
    break;

  case 5:
    document.writeln("Friday");
    break;

  case 6:
    document.writeln("Saturday");
    break;

  case 7:
    document.writeln("Sunday");
    break;

  default:
    document.writeln("Invalid number entered");
}*/

//2.Wap to print number of days in a month when user enter the a month number
/*
var a = Number(prompt("Enter the number of the Month (1–12):"));

switch (a) {
  case 1:
    document.writeln("January - 31 days");
    break;
  case 2:
    document.writeln("February - 28 or 29 days");
    break;
  case 3:
    document.writeln("March - 31 days");
    break;
  case 4:
    document.writeln("April - 30 days");
    break;
  case 5:
    document.writeln("May - 31 days");
    break;
  case 6:
    document.writeln("June - 30 days");
    break;
  case 7:
    document.writeln("July - 31 days");
    break;
  case 8:
    document.writeln("August - 31 days");
    break;
  case 9:
    document.writeln("September - 30 days");
    break; 
  case 10:
    document.writeln("October - 31 days");
    break;
  case 11:
    document.writeln("November - 30 days");
    break;
  case 12:
    document.writeln("December - 31 days");
    break;
  default:
    document.writeln("Invalid month number entered");
}
*/

// 3.WAP to make a simple calculator

// var a = Number(prompt("Enter first number"))
// var b = Number(prompt("Enter the second number"))
// let c = prompt("Enter the what you want to do to this number")
// switch(c){
//   case '+':
//     document.writeln("The additon of these number is " ,a+b)
//     break;
//   case '-':
//     document.writeln("The additon of these number is " ,a-b)
//     break;
//   case '*':
//     document.writeln("The additon of these number is " ,a*b)
//     break;
//   case '/':
//     document.writeln("The additon of these number is " ,a/b)
//     break;
//   case '%':
//     document.writeln("The additon of these number is " ,a%b)
//     break;
//   default:
//     document.writeln("The entered thing is invalid ")
    
// }


// let a = prompt(`Enter the character to check what is the character name`)
// let ch=a.toLowerCase()
// switch(true){
//   case (ch=='a' || ch=='e'|| ch=='i' || ch=='o'|| ch=='u'):
//     document.writeln(`${ch} is a lower case vowel`)
//     break;
//   case (ch>='a' && ch<='z'):
//     document.writeln(`${a} is a lower case consonant`)
//     break;
//   case (a=='A' || a=='E'|| a=='I' || a=='O'|| a=='U'):
//     document.writeln(`${a} is a Upper case vowel`)
//     break;
//   case (a>='A' && a<='Z'):
//     document.writeln(`${a} is Upper case consonant`)
//     break;
//   case(a>=0 && a<=9):
//   document.writeln(`${a} is a digit`)
//   break;
//   case(a==" "):
//   document.writeln(`it is a space`)
//   break;
//   default:
//     document.writeln(`${a} Given character is a special character`)
// }


/*For loop
for (intialization;condition;increment){
---------------
---------------
code
-------------------
-------------
}


*/


//1.Wap to sum of n natural number using for loop
// var a=Number(prompt("Enter the First number"))
// var b=Number(prompt("Enter the Second number"))
// var sum=0;
// for(let c=a;c<=b;c++){
//   sum+=c;

// }
// document.writeln(`${sum} the total Sum of n natural number`)


//2.Wap to print sum of even number and odd natural number in specific range
// var a = Number(prompt("Enter the first number"))
// var b = Number(prompt("Enter the second number"))
// var sum_even=0;
// var sum_odd=0;
// for(var c=a;c<=b;c++){
//   if(c%2==0){
//     sum_even+=c;
//   }
//   else if(c%2!=0){
//     sum_odd+=c;
//   }
// }
// document.writeln(`${sum_even} The sum of even numbers`)
// document.writeln(`${sum_odd} The sum of odd numbers`)

//3.Wap to print the sum of any factorial
// var a=Number(prompt("Enter the number to check the factorial"))
// var factorial=1;
// for(var b=a;b>=1;b--){
//   factorial*=b;
// }
// document.writeln(`${factorial} the factorial of the given number ${a}`)

//4.Wap to check whether the number is the perfect number or not 
// var a=Number(prompt(`Enter the number to check whether the number is the perfect number or not`))
// var sum=0;
// for(var c=1;c<=a-1;c++){
//   if(a%c==0){
//     sum+=c
//     // document.writeln(sum)
//   }
// }
// if(sum==a){
//   document.writeln(`${a} is the perfect number `)
// }
// else{
//   document.writeln(`${a} is not a perfect number`)
// }