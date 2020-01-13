var tab = ['-2', '1', '4'];

function soustrait(x) {
    if (x >= 0) {
        return resultat = x - 2;
    } else {
        return resultat = "Nombre négatif";
    }
    alert(resultat);
}

function affiche() {
    alert(soustrait(tab[0]));
    alert(soustrait(tab[tab.length - 1]));
}