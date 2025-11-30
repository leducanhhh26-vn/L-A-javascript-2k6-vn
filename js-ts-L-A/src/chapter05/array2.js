console.log("Hello array2 ");

let colors = ["red" , "brown" , "blue "];

console.log(`colors[0] : ${colors[0]}
             colors[1]  : ${colors[1]}
             colors[2]  : ${colors[2]}`);

console.log(colors[1000]);

   colors[2] = "chó béo 2k6";

console.log("before" , colors);

// Thêm phần tử vào cuối mảng : dùng push()    !!!
 
colors.push(true , 123 );

// Thêm phần tử vào đầu mảng  : dùng unshift() !!!

colors.unshift(null);

// Xoá phần tử cuối mảng :  dùng pop() !!!

colors.pop();

// Xoá phần tử đầu mảng : dùng shift() !!! 

colors.shift();

console.log("after" , colors);

