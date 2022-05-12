let wuerfel1
let wuerfel2
let punktestand
let rundenzahl

function wuerfeln(){
    wuerfel1 = Math.round(Math.floor()*6 + 1)
    wuerfel2 = Math.round(Math.floor()*6 + 1)
    document.getElementById("W1").innerHTML= "Wurf 1: " + wuerfel1
}