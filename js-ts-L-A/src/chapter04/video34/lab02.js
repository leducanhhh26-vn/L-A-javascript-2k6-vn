console.log("video 34")

// 1.Tạo hàm tinhTrungBinh(toan, van, anh)
// - Hàm nhận vào 3 điểm số (sử dụng tham số).
// - Trả về điểm trung bình (sử dụng return).

const tinhTrungBinh = (a, b, c) => {
            return (a + b + c) / 3;
}
 

const toan = 9;
const van  = 8;
const anh  = 7;


// 2.Tạo hàm xepLoai(diemTB)
// Dựa vào điểm trung bình, xếp loại học sinh:
// Từ 9 → "Xuất sắc"
// Từ 8 và nhỏ hơn 9 → "Giỏi"
// Từ 6.5 và nhỏ hơn 8→ "Khá"
// Còn lại → "Trung bình"
// Dùng if / else if / else để thực hiện

const diemtrungbinh = tinhTrungBinh(toan,van,anh);

const xeploai = (a) =>
{
if ( a >= 9 ) {
    return "xuất sắc";
    }
  else if ( a >= 8 && a < 9 ) {
    return "Giỏi";
} else if ( a < 8 && a >= 6.5 ) {
    return "Khá";
} else {
    return "Trung Bình";
}
}


const kq = xeploai(diemtrungbinh);

console.log(`
  Điểm Trung Bình : ${diemtrungbinh}
  xếp Loại : ${kq}    
    `)