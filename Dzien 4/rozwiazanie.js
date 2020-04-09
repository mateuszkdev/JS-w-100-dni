
//deklaracja stałej PLN
const PLN = parseFloat(prompt("Podaj kwotę w PLN:")) 

// deklaracja obiektu 'waluty' a w nim wartość euro i usd w stosunku do PLN
const waluty = {
    EURO: 5.20,
    USD: 4.30
}

// deklaracja obiektu 'wynik', w nim przeliczone waluty na podstawie kwoty w PLN
const wynik = {
    EURO: PLN/waluty.EURO,
    USD: PLN/waluty.USD
}

// wypisanie na ekran wyniku ( zapis z ES6 )
document.write(`Euro: ${wynik.EURO} <br> Dolar: ${wynik.USD}`)
