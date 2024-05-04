const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let isDarkMode = true
let isLightMode = false
let generateBtn = document.getElementById("generate-btn")
let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
let title1 = document.getElementById("title1")
let colorBtn = document.getElementById("color-btn")


function changeColor(){
    if(isLightMode === true){
        isDarkMode = true
        isLightMode = false
        document.body.style.backgroundColor = "#ECFDF5";
        colorBtn.style.backgroundColor ="#10B981";
        title1.style.color = "black";
        colorBtn.textContent = "dark Mode"
    } else if(isDarkMode === true) {
        isDarkMode = false
        isLightMode = true
        document.body.style.backgroundColor = "#1F2937";
        colorBtn.style.backgroundColor = "#273549";
        title1.style.color = "white";
        colorBtn.textContent = "light Mode";
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