console.log("hello video 32");

const sum = (a , b , c) => {
    console.log("run before");
    if (typeof a !== "number" ) {
        console.log("Lê Đức Anh");
        return 0;
    }
    return a + b + c; 
    console.log("run after");
}

console.log(sum("l","Đ","A"));