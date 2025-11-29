console.log("video 33");

// Phạm vi biến scope :

// 1) Phạm vi toàn cục (global scope) :

let globalVar = "Tôi là biến toàn cục";
function show() {
console.log(globalVar); // Truy cập được
}
show();
console.log(globalVar); // Truy cập được

// 2) Phạm vi hàm     ( function scope).

function sayHi() {
let name1 = "Lê Đức Anh";
console.log("Hi " + name1);
// 3) Phạm vi khối    ( block scope).

if (true) {
let x = 10;
const y = 20;
console.log(x, y); // ✅ Truy cập được
}

console.log(x);   // ❌ Lỗi: x is not defined


}
sayHi();
console.log(name1); // ❌ Lỗi: name is not defined

// 3) Phạm vi khối    ( block scope).

