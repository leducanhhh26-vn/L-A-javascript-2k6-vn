console.log("hello dom 4");

// Change HTML by javascript : 

const mybuttonelement = document.getElementById("mybtn");
const mybackelement  = document.getElementById("backbtn");

const mytextelement  = document.getElementById("mytext");




mybuttonelement.addEventListener("click", () => {
    console.log("you click my buttom");
    // mytextelement.innerText = "just content with chó béo 2k6";
    mytextelement.innerHTML = "<strong>Chào bạn,</strong> <em>học lập trình với hoidanit!</em>";
}
)


mybackelement.addEventListener("click", () => {
    mytextelement.innerText = "hello dom 4 with HTML";
}
)

