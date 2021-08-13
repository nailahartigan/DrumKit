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


a.addEventListener("click", () => {
    a.play = "boom"
})

s.addEventListener("click", () => {
    s.play = "clap"
})

d.addEventListener("click", () => {
    d.play = "hihat"
})

f.addEventListener("click", () => {
    f.play = "kick"
})

g.addEventListener("click", () => {
    g.play = "openhat"
})

h.addEventListener("click", () => {
    h.play = "ride"
})

j.addEventListener("click", () => {
    j.play = "snare"
})

k.addEventListener("click", () => {
    k.play = "tink"
})

l.addEventListener("click", () => {
    l.play = "tom"
})