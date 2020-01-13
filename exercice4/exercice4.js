var tab = ['-2', '1', '4'];
console.log(tab.length);

function Additionne(X) {

    return X + 2;
}

function Affiche() {
    alert(Additionne(tab[0]));
    alert(Additionne(tab[tab.length - 1]));

}