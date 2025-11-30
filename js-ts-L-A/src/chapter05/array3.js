console.log("array3");

// Duyệt mảng với for bằng javascript : Kiểu truyền thống !

const myclass = ["Lê Đức Anh" , "Chó béo 2k6" , "Bro Lê" , 2 , 6 , 2006 ];

console.log(myclass , myclass.length);

// for (let i = 0 ; i < myclass.length ; i++ ) {
//     console.log(" i = " , i , "and value = " , myclass[i]);
// }

// console.log("=============");

// for (let i = 1 ; i <= myclass.length ; i++ ) { 
//     console.log(" i = " , i , "and value = " , myclass[i-1]);
// }

// Duyệt mảng với kiểu for - each : 

// 1) Dùng với kiểu function truyền thống. :

myclass.forEach(function(value,index){
    console.log("value = ", value , "index = ", index);
})

console.log(" =================== ");

myclass.forEach( (value , index) => {
    console.log("Value = " , value , " index = " , index );
} )