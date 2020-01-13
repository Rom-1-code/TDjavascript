function boucle() {
    var tableau = new Array(3);
    for (i = 0; i < 3; i++) {
        tableau[i] = i * i;
    }
    alert(tableau);
}

function boucle2() {
    var longueur = prompt("Sairsir longueur");
    var tableau = new Array();
    for (i = 0; i < longueur; i++) {
        tableau[i] = i * i;
    }

    alert(tableau);
}