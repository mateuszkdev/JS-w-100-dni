
// deklaracja osoby z podaniem wieku i stażu
const osoba = {
    wiek: 26,
    staz: 5
}

//sprawdzenie czy wiek jest wiekszy od 25 i czy staz jest wiekszy od 4
if(osoba.wiek > 25 && osoba.staz > 4){

    console.log("Witaj!")

} else { // jezeli nie 

    if(osoba.wiek <= 25){ // sprawdzenie czy to wiek zawinił, czy jest mniejszy LUB równy 25

        console.log("Nie ukończyłeś jeszcze 25 lat!")

    } else if(osoba.staz <= 4){ // w przeciwnym razie jezeli staz jest mniejszy lub równy 4, to znaczy że to on zawinił

        console.log("Twój staż jest za mały! Wymagane więcej niż 4 lata")

    } else { // w przeciwnym razie, żaden warunek nie zwrócił true a to oznacza że dane wejściowe są złe

        console.log("Złe dane?!")

    }

}