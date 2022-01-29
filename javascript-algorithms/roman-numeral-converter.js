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
    var thousands = ["", "M", "MM", "MMM", "MMMM"];

    var numberUnit = 0
    var numberTens = 0
    var numberHundreds = 0
    var numberThousands = 0

    var mil = (num-(num%1000))/1000;
    var cen = (num-(num%100))/100;
    var res = num%100;
    var dec = (res-(res%10))/10;
    var uni = res%10;

    console.log(mil, cen, dec, uni)

    var romanNumber = ''

    // return roman;
}

convertToRoman(6908);