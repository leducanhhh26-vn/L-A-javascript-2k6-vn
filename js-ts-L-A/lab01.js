console.log("Lab_01")

// FullName : tên đầy đủ (String).

const fullname = "Lê Đức Anh";

// birthYear : Năm Sinh (Number).

const birthYear = "2006";

// isStudent : true/false.

const isStudent = true;

const today = new Date();
const currentYear = today.getFullYear();
const calculatedAge = currentYear - birthYear;

// Tên  : [FULL NAME]
// Tuổi : [calculatedAge]
// Sinh Viên : [Đúng / Sai]

console.log(`
Tên  : ${fullname}
Tuổi : ${calculatedAge}
Sinh Viên : ${isStudent}   
    `);


console.log( "=======")
console.log("Tên", fullname)
console.log("Tuổi", calculatedAge)
console.log("Sinh Viên", isStudent)


