async function BlogImg() {
    let response = await fetch('data.json')
    let data = await response.json()
    let counter1 = Math.floor(Math.random() * 20)
    let counter2 = Math.floor(Math.random() * 20)
    let counter3 = Math.floor(Math.random() * 20)

    document.getElementById("BlogImg1").setAttribute("src", data.Image[counter1])
    document.getElementById("BlogImg2").setAttribute("src", data.Image[counter2])
    document.getElementById("BlogImg3").setAttribute("src", data.Image[counter3])
}
async function LoadText() {
    let response = await fetch('http://numbersapi.com/random/?json')
    let data = await response.json()
    document.getElementById("Far").innerHTML = data.text;
}

const Display = () => {

    setInterval(() => {
        LoadText()
        BlogImg()
    }, 5000)
}

// document.onload(Display())