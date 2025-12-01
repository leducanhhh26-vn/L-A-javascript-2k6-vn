console.log("hello video lab03");


const sp1 = {
    name : "mouse",
    price : 200 ,
    instock : true
}

const sp2 = {
    name : "banphim",
    price : 100 ,
    instock : false
}

const sp3 = {
    name : "laptop",
    price : 2000 ,
    instock : true
}

const sp4 = {
    name : "computer",
    price : 10000,
    instock : false
}

const sp5 = {
    name : "ao" ,
    price : 4000 ,
    instock : true
}

const products = [sp1, sp2 ,sp3 ,sp4 ,sp5];

console.log("Original products : " , products );

const firstnamesp1 = products[0];

// 1). In ra sản phẩm đầu tiên :

console.log(" Tên của sản phẩm đầu tiên là : ",firstnamesp1.name);

// 2). Thay đổi giá sản phẩm thứ hai thành 150 và in ra danh sách tất cả sản phẩm :

const products1 = [sp1 , {name : sp2.name
    , price : 150 , instock : false
 } , sp3 , sp4 , sp5 ];

console.log("Mảng mới : " , products1);

console.log("=======================");

// 3. Thêm một sản phẩm mới vào cuối mảng và in ra danh sách tất cả sản phẩm :

const sp6 = {
    name : "quan" ,
    price : 600 ,
    instock : false
}

products.push(sp6);

console.log("Mảng sau khi thêm : ", products);

console.log("==================")

// 4. Xoá sản phẩm cuối cùng ra khỏi danh sách và in ra danh sách tất cả sản phẩm :

products.pop();

console.log("Mảng sau khi xoá : ", products);

console.log("=================");

// 5. Dùng for ... Each để in ra tất cả sản phẩm : 

products.forEach((value, index) => {
    console.log("index = " , index , "value = " , value.name);
})

console.log("=================");

// 6. Dùng map() để tạo mảng mới chỉ chứa giá sản phẩm :

const newmang = products.map( (value , index ) => {
   return value.price;
} )

console.log(newmang);

console.log("====================");

// 7. Dùng filter() để lấy các sản phẩm còn hàng (instock = true ) :

const mang2 = products.filter( (value, index) => {
        return value.instock === true;
} )

console.log(mang2);

console.log("=================");

// 8. Dùng for ... in để duyệt qua thuộc tính của sản phẩm đầu tiên :

for ( let key in sp1 ) {
    console.log(key , sp1[key]);
}