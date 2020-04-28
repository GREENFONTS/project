// let name = document.getElementById("Name1")
// let email = document.getElementById("Email")
// let tel = document.getElementById("tel")
// let message = document.getElementById("message")

// let linkButton = document.getElementById('whatsappbtn')

// let usermessage = {
//     Name: name.value,
//     Email: email.value,
//     Tel: tel.value,
//     Message: message.value
// }

// function handleChange() {
//     usermessage.Name = name.value
//     usermessage.Email = email.value
//     usermessage.Tel = tel.value
//     usermessage.Message = message.value
// }
// let whatsappSend = linkButton.addEventListener('click', () => {
//     services.href = `https://wa.me/2348132030908?text=${JSON.stringify(usermessage)}`

// })

async function LoadText() {
    let response = await fetch('http://numbersapi.com/random/?json')
    let data = await response.json()
    document.getElementById("Far").innerHTML = data.text;    
}


async function MenImg(){
    let response = await fetch('data.json')
    let data =  await response.json()
    let counter = Math.floor(Math.random() * 2)
   
    document.getElementById("img").setAttribute("src", data.Men[counter])
}


 const Display = () => {
    
    setInterval( () => { 
        LoadText();
        MenImg()
 }, 5000)   
}

// document.onload(Display())

let bigText = document.getElementById("jumbo-text")
let holder = "";
let insertText = "Greenfonts a <br> Free-lance Developer, <br> U Think it, <br> We Develop it"
let count = 0;
function animationText() {
    if (holder != insertText) {
        holder += insertText[count]
        document.getElementById("jumbo-text").innerHTML = holder;
        count++;
        console.log(holder);
    }
    else {
        holder = "";
        count = 0;
    }
}
setInterval(function () {
    animationText();
}, 200)