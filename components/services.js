async function ProjectImg() {
    let response = await fetch('data.json')
    let data = await response.json()

    let counter1 = Math.floor(Math.random() * 20)
    let counter2 = Math.floor(Math.random() * 20)
    let counter3 = Math.floor(Math.random() * 20)
    let counter4 = Math.floor(Math.random() * 20)
    let counter5 = Math.floor(Math.random() * 20)
    let counter6 = Math.floor(Math.random() * 20)

    document.getElementById("services1").setAttribute("src", data.Image[counter1])
    document.getElementById("services2").setAttribute("src", data.Image[counter2])
    document.getElementById("services3").setAttribute("src", data.Image[counter3])
    document.getElementById("services4").setAttribute("src", data.Image[counter4])
    document.getElementById("services5").setAttribute("src", data.Image[counter5])
    document.getElementById("services6").setAttribute("src", data.Image[counter6])
}
async function LoadText() {
    let response = await fetch('http://numbersapi.com/random/?json')
    let data = await response.json()
    document.getElementById("Far").innerHTML = data.text;
}

const Display = () => {

    setInterval(() => {
        LoadText()
        ProjectImg()
    }, 5000)
}

// document.onload(Display())
