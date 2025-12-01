console.log("hello video 43 with javascript ");

const person = {
    name1 : "Lê Đức Anh",
    age  : 19,
}

console.log("Person Before : ", person);

// get data :
console.log("Tuổi. : ", person.age);
console.log("Tên : ", person["name1"]);

// set data :
person.address = "TPHCM";
person["language"] = "Vietnamese";

// delete data :
delete person.address;

console.log("Person After : " , person);