const wiek = parseInt(prompt("Podaj wiek")) // deklaracja stałej wiek ( int ) liczba całkowita

let ile // deklaracja zmiennej lokalnej ile ( potrzebna do szybszego obliczenia ile zostalo do 18 lat LUB od ilu lat sie ma 18 lat)

if(wike >= 18){

    ile = wiek - 18 // przypisanie bez deklaracji bo zrobiliśmy to już w czesniej 
    document.write(`Jesteś pełnoletni od ${ile} lat!`)    

} else {

    ile = 18 - wiek 
    document.write(`Nie jesteś pełnoletni! Ale będziesz za ${ile} lat!`)
                   // UWAGA, taki zapis napisu, to formatowanie tekstu dodane w ecma script 2016 ( ES6 )
                   // zastępuje on zapis taki: ("Nie jesteś pełnoletni! Ale będziesz za" + ile + "lat!")
                   // ważne aby zapisywać w ` czyli " cudzysłów " który znajduje się pod ESC na klawiaturze.

}
