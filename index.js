//Arrays//
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//booleans//
let isDarkMode = true
let isLightMode = false

//DOM variables//
let generateBtn = document.getElementById("generate-btn")
let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
let title1 = document.getElementById("title1")
let colorBtn = document.getElementById("color-btn")

//functions//
function changeColor(){
    if(isDarkMode === true){
        document.body.style.backgroundColor = "#ECFDF5";
        colorBtn.style.backgroundColor ="#10B981";
        title1.style.color = "black";
        colorBtn.textContent = "light mode";
        isDarkMode = false
        isLightMode = true
    } else if(isLightMode === true) {
        document.body.style.backgroundColor = "#1F2937";
        colorBtn.style.backgroundColor = "#273549";
        title1.style.color = "white";
        colorBtn.textContent = "dark mode"
        isDarkMode = true
        isLightMode = false
       }
}

function generatePasswords(){
    password = "";
    length = 15;
    for(i = 0; i <= length; i++){
        let randomCharacter = Math.floor(Math.random()* characters.length)
        password += characters[randomCharacter]
    }
    return password
}

function render(){
    password1.textContent = generatePasswords()
    password2.textContent = generatePasswords()
}