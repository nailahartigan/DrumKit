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

const boom = document.getElementById("boom")
const clap = document.getElementById("clap")
const hihat = document.getElementById("hihat")
const kick = document.getElementById("kick")
const openhat = document.getElementById("openhat")
const ride = document.getElementById("ride")
const snare = document.getElementById("snare")
const tink = document.getElementById("tink")
const tom = document.getElementById("tom")


a.addEventListener("click", (e) => {
    boom.play(e)
})

s.addEventListener("click", (e) => {
    clap.play(e)
})

d.addEventListener("click", (e) => {
    hihat.play(e)
})

f.addEventListener("click", (e) => {
    kick.play(e)
})

g.addEventListener("click", (e) => {
    openhat.play(e)
})

h.addEventListener("click", (e) => {
    ride.play(e)
})

j.addEventListener("click", () => {
    snare.play
})

k.addEventListener("click", () => {
    tink.play
})

l.addEventListener("click", () => {
    tom.play
})