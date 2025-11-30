console.log("change array by map with javascript ");

const myclass = [ "Lê " , 10 , 8, 7, 3 , 5 ];

// myclass.forEach( (value , index ) => {
//     console.log("value = " , value , "index = " , index ); 
//  }
// )

console.log("=======================");

const myclass2 = myclass.map( (value , index ) => {
    return value * 3;
}
)

const othermyclass2 = myclass.map( (value , index) => value * 2);
console.log(myclass);
console.log(myclass2);
console.log(othermyclass2);