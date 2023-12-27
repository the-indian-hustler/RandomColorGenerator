const getColor = () =>{
//hexadecimal code

const randomNumber = Math.floor(Math.random() * 16777215);
const randomCode = "#" + randomNumber.toString(16);
document.body.style.backgroundColor = randomCode; 
document.getElementById("color").innerText = randomCode;
console.log(randomNumber);
//to automatically copy the random color code to clipboard
navigator.clipboard.writeText(randomCode);

}

//this is event call, when the button is clicked
document.getElementById("click").addEventListener("click",getColor);

getColor();//to get color at the page loading so that one color is present already i.e, initial call