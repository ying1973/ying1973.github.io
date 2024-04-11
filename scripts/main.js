//let myHeading = document.querySelector("h2");
//myHeading.textContent = "Hello world!";

let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/H5KS`5CSX82.png") {
      myImage.setAttribute("src", "images/%RAW8T03Q005U~D74[41VMU.png");
    } else {
      myImage.setAttribute("src", "images/H5KS`5CSX82.png");
    }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
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