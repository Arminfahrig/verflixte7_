//Intitialisierung der eigenen Variablen:
let wuerfel1 = 0
let wuerfel2 = 0
let punktestand1 = 0
let punktestand2 = 0
let spielerAnDerReihe = 1
let rundenzahl1 = 0
let rundenzahl2 = 0
let gewinneS2 = 0
let gewinneS1 = 0
let rundeUnentschieden = 0
// Funktion würfeln steuert den gesammten Spielverlauf, durch Knopfdruck ausgelöst, wird Spiel gestartet.
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
            case 6 : document.getElementById("B1").src = "img/6.png";
        }                            //für den Platzhalter des ersten Bildes, wird ein passendes Bild, entsprechend der Augenzahl eingefügt.
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
        }                             //für den Platzhalter des ersten Bildes, wird ein passendes Bild, entsprechend der Augenzahl eingefügt.
        document.getElementById("W1").innerHTML = "Wurf 1: " + wuerfel1
        document.getElementById("W2").innerHTML = "Wurf 2: " + wuerfel2 //Würfelzahlen werden ausgegeben
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
            case 6 : document.getElementById("B1").src = "img/6.png";
                break
            case 0 :
                     document.getElementById("B1").src = "img/0.png"
        }                                  //für den Platzhalter des ersten Bildes, wird ein passendes Bild, entsprechend der Augenzahl eingefügt.
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
                break
            case 0 :
                     document.getElementById("B2").src = "img/0.png"
        }                                 //für den Platzhalter des ersten Bildes, wird ein passendes Bild, entsprechend der Augenzahl eingefügt.
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
/*
function neuesSpiel(){
    location.reload()
}
*/
function neuesSpiel(){
    punktestand1 = 0
    punktestand2 = 0
    spielerAnDerReihe = 1
    rundenzahl1 = 0
    rundenzahl2 = 0
    document.getElementById("W1").innerHTML= "Würfel 1: " + 0
    document.getElementById("W2").innerHTML= "Würfel 2: " + 0
    document.getElementById("WZ").innerHTML= "Punktestand: " + 0
    document.getElementById("PS").innerHTML= "Anzahl der Runden: " + 0

        document.getElementById("B1").src = "img/0.png"

        document.getElementById("B2").src = "img/0.png"

}              //Beim auslösen der Funktion neuesSpiel wird die Seite nicht neu geladen, sonder die Variablen werden zurückgesetzt.
               //So wird die einbindung der Spielhistorie gewährleistet.



function auswerten(){
    if (punktestand1 < punktestand2){
        alert("Spieler 2 hat gewonnen!")
        gewinneS2 = gewinneS2 + 1
    } else if (punktestand1 > punktestand2){
        alert("Spieler 1 hat gewonnen!")
        gewinneS1 = gewinneS1 + 1
    } else if (punktestand1 === punktestand2) {
        alert("Unendschieden!")
    } else {


        if (rundenzahl1 > rundenzahl2) {
            alert("Spieler 2 hat gewonnen.")
            gewinneS2 = gewinneS2 + 1
        } else if (rundenzahl2 > rundenzahl1) {
            alert("Spieler 1 hat gewonnen!")
            gewinneS1 = gewinneS1 + 1
        } else if (rundenzahl1 === rundenzahl2) {
            alert("Unentschieden!")
            rundeUnentschieden = rundeUnentschieden + 1
        }
        }
    alert("Danke fürs mitmachen. Bitte Spiel neustarten.")
    document.getElementById("GS1").innerHTML= "Spieler1 hat " + gewinneS1 + " mal gewonnen!"
    document.getElementById("GS2").innerHTML= "Spieler2 hat " + gewinneS2 + " mal gewonnen"
    document.getElementById("SU").innerHTML= "Es wurde " + rundeUnentschieden + " untentschieden gespielt."
}

function botSpieltWeiter() {
    if (spielerAnDerReihe === 1) {
        wuerfel1 = Math.floor(Math.random() * 6 + 1)
        wuerfel2 = Math.floor(Math.random() * 6 + 1)
        switch (wuerfel1) {
            case 1 :
                document.getElementById("B1").src = "img/1.png";
                break
            case 2 :
                document.getElementById("B1").src = "img/2.png";
                break
            case 3 :
                document.getElementById("B1").src = "img/3.png";
                break
            case 4 :
                document.getElementById("B1").src = "img/4.png";
                break
            case 5 :
                document.getElementById("B1").src = "img/5.png";
                break
            case 6 :
                document.getElementById("B1").src = "img/6.png";
                break
            case 0 :
                document.getElementById("B1").src = "img/0.png"
        }
        switch (wuerfel2) {
            case 1 :
                document.getElementById("B2").src = "img/1.png";
                break
            case 2 :
                document.getElementById("B2").src = "img/2.png";
                break
            case 3 :
                document.getElementById("B2").src = "img/3.png";
                break
            case 4 :
                document.getElementById("B2").src = "img/4.png";
                break
            case 5 :
                document.getElementById("B2").src = "img/5.png";
                break
            case 6 :
                document.getElementById("B2").src = "img/6.png";
                break
            case 0 :
                document.getElementById("B2").src = "img/0.png"
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
            if (spielerAnDerReihe === 1){setTimeout(botSpiel, 1000)  //Da der timeout in Milisekunden angegeben wird entspricht 1000 einer Sekunde.
}
}

    function botSpiel() {
        if (spielerAnDerReihe === 1 && punktestand1 / rundenzahl1 > 9 ) {
            rundeBeenden()
        } else if (punktestand1 > 100) {
            rundeBeenden()
        }else{
            botSpieltWeiter()
        }
    }


    function botSchwerer(){
    punktestand1 = punktestand1 + 20
        document.getElementById("PS").innerHTML = "Punktestand: " + punktestand1
    }