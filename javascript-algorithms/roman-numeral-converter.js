/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

    I, V, X,  L,   C,   D, and    M, standing respectively for 
    1, 5, 10, 50, 100, 500, and 1,000.

*/

function convertToRoman(num) {

    var units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var thousands = ["", "M", "MM", "MMM", "MMMM", "IV", "V", "VM", "VMM", "VMMM", "IX"];

    var mil = (num-(num%1000))/1000;
    var resMil = num%1000;
    var cen = (resMil-(resMil%100))/100;
    var resCen = num%100;
    var dec = (resCen-(resCen%10))/10;
    var uni = resCen%10;

    let numberUnit = units[uni]
    let numberTens = tens[dec]
    let numberHundreds = hundreds[cen]
    let numberThousands = thousands[mil]

    num = numberThousands + numberHundreds + numberTens + numberUnit

    return num;
}

convertToRoman(6908);