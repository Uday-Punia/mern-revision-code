var data = [
  "Nitin","Amit","Sumit","Mohan","Tarun","Amit","Amit","Amit","Amit",
  "Amit","Amit","Amit","Amit","Amit","Amit","Amit","Sumit","Sumit",
  "Sumit","Sumit","Sumit","Sumit","Sumit","Sumit","Sumit","Sumit",
  "Nitin","Nitin","Nitin","Nitin","Nitin","Nitin","Nitin","Nitin",
  "Nitin","Nitin","Nitin","Nitin","Nitin","Nitin","Nitin","Nitin",
  "Nitin","Nitin","Mohan","Mohan","Mohan","Mohan","Tarun","Tarun",
  "Tarun","Tarun","Tarun","Tarun","Tarun","Tarun","Tarun","Tarun",
  "Tarun","Tarun","Tarun","Tarun","Tarun","Tarun","Tarun","Tarun",
  "Tarun","Tarun","Tarun","Tarun"
];
var countObj = {};

for (let name of data) {
    countObj[name] = (countObj[name] || 0) + 1;
}

console.log(countObj);
// var nitin_count=0
// var amit_count=0
// var sumit_count=0
// var mohan_count=0
// var tarun_count=0
// for(let i of data){
//     if(i=="Nitin"){
//         nitin_count++;
//     }
//     else if(i=="Amit"){
//         amit_count++;
//     }
//     else if(i=="Sumit"){
//         sumit_count++;
//     }
//     else if(i=="Mohan"){
//         mohan_count++;
//     }
//     else if(i=="Tarun"){
//         tarun_count++;
//     }
// }

// console.log(`The total number of Nitin name in array is : ${nitin_count}`)
// console.log(`The total number of Amit name in array is : ${amit_count}`)
// console.log(`The total number of Sumit name in array is : ${sumit_count}`)
// console.log(`The total number of Mohan name in array is : ${mohan_count}`)
// console.log(`The total number of Tarun name in array is : ${tarun_count}`)
