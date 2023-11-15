let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";


let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("我最喜欢巧克力冰淇淋了。");
} else {
  alert("但是巧克力才是我的最爱呀……");
}

function multiply(num1, num2) {
    let result = num1 * num2;
    alert(result)
}

// document.querySelector("html").addEventListener("click", () => {
//     multiply(20, 30)
// });

let myImage = document.querySelector("img");

myImage.onclick = () => {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "https://th.bing.com/th/id/OIP.sS6n5eh_Yc61OaOW6e1cDAHaHG?pid=ImgDet&rs=1") {
    myImage.setAttribute("src", "images/2.jpeg");
  } else {
    myImage.setAttribute("src", "https://th.bing.com/th/id/OIP.sS6n5eh_Yc61OaOW6e1cDAHaHG?pid=ImgDet&rs=1");
  }
};

let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");

// function setUserName() {
//     let myName = prompt("请输入你的名字。");
//     localStorage.setItem("name", myName);
//     myHeading.textContent = "Mozilla 酷毙了，" + myName;
// }

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
}  
  

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

myButton.onclick = function () {
    setUserName();
};  
  