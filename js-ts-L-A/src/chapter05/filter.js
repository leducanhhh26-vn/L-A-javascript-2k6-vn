console.log("filter in javascript video 41");

const ages = [1 , 2 , 3 , 16, 20];


const agesx2 = ages.map( (value , index ) => value * 2 );

// const agesthan18 = ages.filter((value , index) => value < 18 );

const agesthan18 = ages.filter( (value, index) => {
    return value > 18;
} )

console.log( "original : " , ages );
console.log( "agesx2 : " , agesx2 );
console.log( "agesthan18 : ", agesthan18);