

// for-loop
// for(let i=0; i<=numberArray.length; i++ ){
//     console.log(i, numberArray[i]);
// }

// for-of
// for(elem of numberArray) {
//     console.log(elem);
// }

// forEach loop
// numberArray.forEach(ele => {
//      console.log(ele, "foreach");
// });

// map
const numberArray = [10,20,30,40];
const newArr = numberArray.map((ele)=> {
    return ele*2;
});
// console.log(numberArray);
// console.log(newArr);

// filter array
const numberArrayfilter = [10,20,30,40];
const newArrfil = numberArrayfilter.filter((ele)=> {
    return ele > 20;
});
// console.log(numberArrayfilter);
// console.log(newArrfil);

const numberArrayfind = [10,20,30,40];
const newArrfind = numberArrayfind.find((ele)=> {
    return ele > 20;
});
// console.log(numberArrayfilter);
// console.log(newArrfind);



const myArr = [1,2,3,4];
// let sum = 0;
// myArr.forEach((res)=>{
//    sum = sum + res;
// });
// Reduce Method
const reduceArray  = myArr.reduce((sum, res) => {
      return sum + res;
},0);

// console.log(reduceArray);
