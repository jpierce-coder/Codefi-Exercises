function multiplesFunction(x,y) {
    let multiplesArray = [];
    let i = x;
    while (multiplesArray.length < y) {
        multiplesArray.push(i);
        i = i + x
    }
    return multiplesArray;
};



console.log(multiplesFunction(17, 6));
// arrayOfMultiples(7, 5)    ➞    [7, 14, 21, 28, 35]



// console.log(arrayofAdditions(10, 5))
// // [11, 12, 13, 14, 15]

// function arrayofAdditions(x, y){
//     let additionsArray = [];

//     let i = 1;                         BEST PRACTICE
//     while(i <= y){                     BEST PRACTICE
//         additionsArray.push(i+x);      BEST PRACTICE
//        i++;                            BEST PRACTICE
//     }                                  BEST PRACTICE
    
//     return additionsArray;
// }

// Iteration 1
// i = 0

// Iteration 2
// i = 1

// arrayOfMultiples(7, 5)    ➞    [7, 14, 21, 28, 35]

// 7
// 5 
// 7 14 21 28 35

// arrayOfMultiples(12, 10)    ➞    [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6)    ➞    [17, 34, 51, 68, 85, 102]