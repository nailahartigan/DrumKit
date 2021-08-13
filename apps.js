
// Assigning letter variables 

const a = document.getElementById("a")
const s = document.getElementById("s")
const d = document.getElementById("d")
const f = document.getElementById("f")
const g = document.getElementById("g")
const h = document.getElementById("h")
const j = document.getElementById("j")
const k = document.getElementById("k")
const l = document.getElementById("l")

// Assigning Sound variables

const boom = new Audio("sounds/boom.wav")
const clap = new Audio("sounds/clap.wav")
const hihat = new Audio("sounds/hihat.wav")
const kick = new Audio("sounds/kick.wav")
const openhat = new Audio("sounds/openhat.wav")
const ride = new Audio("sounds/ride.wav")
const snare = new Audio("sounds/snare.wav")
const tink = new Audio("sounds/tink.wav")
const tom = new Audio("sounds/tom.wav")


// Click events

a.addEventListener("click", () => {
    boom.play()
})

s.addEventListener("click", () => {
    clap.play()
})

d.addEventListener("click", () => {
    hihat.play()
})

f.addEventListener("click", () => {
    kick.play()
})

g.addEventListener("click", () => {
    openhat.play()
})

h.addEventListener("click", () => {
    ride.play()
})

j.addEventListener("click", () => {
    snare.play()
})

k.addEventListener("click", () => {
    tink.play()
})

l.addEventListener("click", () => {
    tom.play()
})

// Press events

window.addEventListener("keydown", (event) => {
    if (event.key === "a") {
        boom.play()
    } else if (event.key === "s") {
        clap.play()
    } else if (event.key === "d") {
        hihat.play()
    } else if (event.key === "f") {
        kick.play()
    } else if (event.key === "g") {
        openhat.play()
    } else if (event.key === "h") {
        ride.play()
    } else if (event.key === "j") {
        snare.play()
    } else if (event.key === "k") {
        tink.play()
    } else if (event.key === "l") {
        tom.play()
    }
})


