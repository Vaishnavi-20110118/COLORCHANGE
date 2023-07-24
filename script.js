const changeText = () => {
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,1)),url('https://img.freepik.com/premium-photo/silhouettes-concert-with-purple-neon-lights_27550-2704.jpg?w=360')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML = "ON THE FLOOR BABY!!!"
    }, 200)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(255, 29, 29, 0.3), rgba(231, 80, 236, 0.479)),url('.https://img.freepik.com/premium-photo/silhouettes-concert-with-purple-neon-lights_27550-2704.jpg?w=360')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML = "HIT IT HARD BABY"
    }, 400)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(2, 255, 213, 0.3), rgba(255, 23, 23)),url('https://img.freepik.com/premium-photo/silhouettes-concert-with-purple-neon-lights_27550-2704.jpg?w=360')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML = "ROCK THE PARTY BABY!!!"
    }, 600)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(255, 0, 0, 0.3), rgb(3, 255, 45)),url('https://img.freepik.com/premium-photo/silhouettes-concert-with-purple-neon-lights_27550-2704.jpg?w=360')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML = "LET'S ROCK AND ROLL"
    }, 800)
}

setInterval(changeText, 900)