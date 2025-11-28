var a = "Uday Punia"
var b = 'Haridwar Uttarakhand'
var c = `Front end web development engineering`
// console.log(a)
// console.log(b)


//Accessing String
//Using while loop
// let i=0
// while(i<a.length)
// {
//     console.log(a[i])
//     i++
// }

//Using do while loop
// let i=0;
// do{
// console.log(a[i])
// i++
// }while(i<a.length)

//Using for loop
// for(let i=0;i<a.length;i++){
//     console.log(a[i])
// }

//Using the for of loop
// for(i of a){
//     console.log(i)
// }

//Using the for in loop
// for(i in a){
//     console.log(a[i])
// }


//Strings Methods :-

//CharAt() : Return character at any specific index, -ve index is not allowed
// console.log(a.charAt(0))
// console.log(a.charAt(5))
// console.log(a.charAt(8))
// console.log(a.charAt(9))
// console.log(a.charAt(15))

// at() : Return character at any specific index -ve index is allowed (Relased in JS 2022)
// console.log(a.at(0))
// console.log(a.at(5))
// console.log(a.at(8))
// console.log(a.at(9))
// console.log(a.at(-5))


// CharCodeAt() : Return Unicode of first charcter of string if no argument is provided  , else return unicode of particular index value

// for(let i=0;i<=20000;i++){
//     console.log(`${i} = ${String.fromCharCode(i)}`)
// }

//indexof() : Return the index of the character first index and return -1 if not present
// console.log(a.indexOf("P"))
// console.log(a.indexOf(" "))
// console.log(a.indexOf("U"))
// console.log(a.indexOf("a"))

//LastindexOf() : Return the last index of the string basically and return -1 if not present
// console.log(a.lastIndexOf("a"))
// console.log(a.lastIndexOf(" "))

//inclues() : Returns True if the particular character or string is present otherwise right false
// console.log(a.includes("day"))
// console.log(a.includes("aday"))
// console.log(a.includes("Punia"))

//search() :Return the first index of the substring otherwise return the -1
// console.log(a.search("Puni"))
// console.log(a.search("ia"))
// console.log(a.search("a"))


//Copy a string into another string lets say we have a as an string and now we are copy that string into the var b okay then we will print the original string and the duplicate string
// var b=a
// console.log(`Original String is ${a}`)
// console.log(`Duplicate String is ${b}`)

//concat() : it is used to merg the two strings basically lets take the copy string concatination \
// var b=a
// var c=a.concat(b)
// console.log(c)

//startsWith() : Check whether a string start with specific string or not
// console.log(a.startsWith("U"))
// console.log(a.startsWith("Ud"))

//endsWith() : Check whether a string ends with specific string or not
// console.log(a.endsWith("a"))
// console.log(a.endsWith("ia"))
// console.log(a.endsWith("nia"))
// console.log(a.endsWith("unia"))
// console.log(a.endsWith("Punia"))
// console.log(a.endsWith("y Punia"))

// //toUpperCase() :
// console.log(a.toUpperCase())
// //toLocalUpperCase()
// console.log(a.toLocaleUpperCase())
// //toLowerCase()
// console.log(a.toLowerCase())
// //toLocalLowerCase()
// console.log(a.toLocaleLowerCase())

//repeat() :When we have to repeat the string we use repeat()
// console.log(a.repeat(50))

//replace : It is used to replace the current string with another string
//replaceAll : It is used to replace all in the string
// console.log(a.replaceAll("Uday","Udham"))
// console.log(a.replace("Uday","Udham"))

//split()
// console.log(a.split(" ").reverse().join())

//trim() : Remove all leading white space characters from string from both side
var b="  chaudhary ji  "
// console.log(b.trim())

//trimStart() : Remove all the white space from the starting of the string
// console.log(b.trimStart())

//trimEnd() : Remove all the white space from the end of the string 
// console.log(b.trimEnd())

//to localCompare
