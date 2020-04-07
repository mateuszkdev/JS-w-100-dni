// Informacja → w rozwiązaniu nie ma pliku HTML'a ponieważ to już umiesz ogarnąc sam :')

/// przykladowe tablice
let ponad = ["Marek", "Michał", "Sebastian"]

let ponizej = ["Marcel", "Konrad"]

const imie = prompt("Jak masz na imię?")

const wiek = parseInt(prompt("Ile masz lat?"))

if(wike > 21){

    ponad.push(`${imie}`)

    document.write(`Masz więcej niż 21 lat <br> Osoby powyzej 21 lat: ${ponad} <br> Osoby poniżej 21 lat: ${ponizej}`)

} else {


    ponizej.push(`${imie}`)

    document.write(`Masz mniej niż 21 lat <br> Osoby poniżej 21 lat: ${ponizej} <br> Osoby powyżej 21 lat: ${ponad}`)

}