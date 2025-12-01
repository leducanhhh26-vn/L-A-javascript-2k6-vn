console.log("hello video 44");

const sv1 = {
    username : "Lê Đức Anh ",
    score    : 10
}

const sv2 = {
    username : "Chó béo 2k6",
    score    : 9
}

const sv3 = {
    username : "Bro Lê",
    score    : 9.8
}

const sinhvien = [sv1 , sv2 , sv3];

console.log("Check Sinh Viên : ", sinhvien);

// sinhvien.forEach( (item , index) => {
//     console.log("Chỉ số index = " , index , "And  Name : " , item.username);
//     console.log("Điểm =  " , item.score);
//  }
//     )

// Dùng vòng lặp for ... in với object 

const leducanh = {
    email : "leducanhhh26@gmail.com",
    aaddress : "VietNam",
    Phone : "0329610306"
}

// for (let key in leducanh) {
// console.log(key, leducanh[key]);
// }

// Dùng vòng lặp for ... of với object 

// for (let value of Object.values(leducanh)) {
// console.log(value);
// }

for (let value of Object.entries(leducanh)) {
console.log(value);
}

for (let [key, value] of Object.entries(leducanh)) {
console.log(key, value);
}