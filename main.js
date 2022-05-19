let wuerfel1
let wuerfel2
let punktestand1 = 0
let punktestand2 = 0
let spielerAnDerReihe = 1
let rundenzahl1 = 0
let rundenzahl2 = 0

function wuerfeln(){
    if(spielerAnDerReihe === 1)
    {
        wuerfel1 = Math.floor(Math.random() * 6 + 1)
        wuerfel2 = Math.floor(Math.random() * 6 + 1)
        switch (wuerfel1){
            case 1 : document.getElementById("B1").src = "img/1.png";
            break
            case 2 : document.getElementById("B1").src = "img/2.png";
            break
            case 3 : document.getElementById("B1").src = "img/3.png";
            break
            case 4 : document.getElementById("B1").src = "img/4.png";
            break
            case 5 : document.getElementById("B1").src = "img/5.png";
            break
            case 6 : document.getElementById("B1").src = "img/6.png"
        }
        switch (wuerfel2){
            case 1 : document.getElementById("B2").src = "img/1.png";
            break
            case 2 : document.getElementById("B2").src = "img/2.png";
            break
            case 3 : document.getElementById("B2").src = "img/3.png";
            break
            case 4 : document.getElementById("B2").src = "img/4.png";
            break
            case 5 : document.getElementById("B2").src = "img/5.png";
            break
            case 6 : document.getElementById("B2").src = "img/6.png"
        }
        document.getElementById("W1").innerHTML = "Wurf 1: " + wuerfel1
        document.getElementById("W2").innerHTML = "Wurf 2: " + wuerfel2
        rundenzahl1 = rundenzahl1 + 1
        if (wuerfel1 + wuerfel2 === 7) {
            spielerAnDerReihe = 2
            alert("Spieler 2 ist an der Reihe!")
            rundenzahl1 = rundenzahl1 - 1
        } else {
            punktestand1 = punktestand1 + wuerfel1 + wuerfel2
            document.getElementById("PS").innerHTML = "Punktestand: " + punktestand1
        }
        document.getElementById("WZ").innerHTML = "Anzahl der Runde: " + rundenzahl1
    } else if (spielerAnDerReihe === 2){
        wuerfel1 = Math.floor(Math.random() * 6 + 1)
        wuerfel2 = Math.floor(Math.random() * 6 + 1)
        switch (wuerfel1){
            case 1 : document.getElementById("B1").src = "img/1.png";
                break
            case 2 : document.getElementById("B1").src = "img/2.png";
                break
            case 3 : document.getElementById("B1").src = "img/3.png";
                break
            case 4 : document.getElementById("B1").src = "img/4.png";
                break
            case 5 : document.getElementById("B1").src = "img/5.png";
                break
            case 6 : document.getElementById("B1").src = "img/6.png"
        }
        switch (wuerfel2){
            case 1 : document.getElementById("B2").src = "img/1.png";
                break
            case 2 : document.getElementById("B2").src = "img/2.png";
                break
            case 3 : document.getElementById("B2").src = "img/3.png";
                break
            case 4 : document.getElementById("B2").src = "img/4.png";
                break
            case 5 : document.getElementById("B2").src = "img/5.png";
                break
            case 6 : document.getElementById("B2").src = "img/6.png"
        }
        document.getElementById("W1").innerHTML = "Wurf 1: " + wuerfel1
        document.getElementById("W2").innerHTML = "Wurf 2: " + wuerfel2
        rundenzahl2 = rundenzahl2 + 1
        if (wuerfel1 + wuerfel2 === 7) {
            rundenzahl2 = rundenzahl2 - 1
            auswerten()
        } else {
            punktestand2 = punktestand2 + wuerfel1 + wuerfel2
            document.getElementById("PS").innerHTML = "Punktestand: " + punktestand2
        }
        document.getElementById("WZ").innerHTML = "Anzahl der Runde: " + rundenzahl2
    }
}

function rundeBeenden(){
    if (spielerAnDerReihe === 1) {
        spielerAnDerReihe = 2
        alert("Spieler 2 ist an der Reihe!")
    } else if (spielerAnDerReihe === 2){
        auswerten()
    }
}

function neuesSpiel(){
    location.reload()
}

function auswerten(){
    if (punktestand1 < punktestand2){
        alert("Spieler 2 hat gewonnen!")
    } else if (punktestand1 > punktestand2){
        alert("Spieler 1 hat gewonnen!")
    } else if (punktestand1 === punktestand2){
        alert("Unendschieden!")
    } else {


        if (rundenzahl1 > rundenzahl2) {
            alert("Spieler 2 hat gewonnen.")
        } else if (rundenzahl2 > rundenzahl1) {
            alert("Spieler 1 hat gewonnen!")
        } else if (rundenzahl1 === rundenzahl2) {
            alert("Unentschieden!")
        }
    }
    alert("Danke fürs mitmachen. Bitte Spiel neustarten.")
}

function botSpiel(){
    if (spielerAnDerReihe === 1) {
        wuerfel1 = Math.floor(Math.random() * 6 + 1)
        wuerfel2 = Math.floor(Math.random() * 6 + 1)
        switch (wuerfel1){
            case 1 : document.getElementById("B1").src = "img/1.png";
                break
            case 2 : document.getElementById("B1").src = "img/2.png";
                break
            case 3 : document.getElementById("B1").src = "img/3.png";
                break
            case 4 : document.getElementById("B1").src = "img/4.png";
                break
            case 5 : document.getElementById("B1").src = "img/5.png";
                break
            case 6 : document.getElementById("B1").src = "img/6.png"
        }
        switch (wuerfel2){
            case 1 : document.getElementById("B2").src = "img/1.png";
                break
            case 2 : document.getElementById("B2").src = "img/2.png";
                break
            case 3 : document.getElementById("B2").src = "img/3.png";
                break
            case 4 : document.getElementById("B2").src = "img/4.png";
                break
            case 5 : document.getElementById("B2").src = "img/5.png";
                break
            case 6 : document.getElementById("B2").src = "img/6.png"
        }
        document.getElementById("W1").innerHTML = "Wurf 1: " + wuerfel1
        document.getElementById("W2").innerHTML = "Wurf 2: " + wuerfel2
        rundenzahl1 = rundenzahl1 + 1
        if (wuerfel1 + wuerfel2 === 7) {
            spielerAnDerReihe = 2
            alert("Spieler 2 ist an der Reihe!")
            rundenzahl1 = rundenzahl1 - 1
        } else {
            punktestand1 = punktestand1 + wuerfel1 + wuerfel2
            document.getElementById("PS").innerHTML = "Punktestand: " + punktestand1
        }
        document.getElementById("WZ").innerHTML = "Anzahl der Runde: " + rundenzahl1
    }
    setTimeout(1)

}