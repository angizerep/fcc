/** 
Palindrome Checker

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both 
forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters 
(punctuation, spaces and symbols) and turn everything into 
the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, 
RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 
2A3 3a2, and 2_A3*3#A2. 

*/

// palindrome("È1 Y4 ë8");

// palindrome("eye") //should return a boolean.

// palindrome("eye") //should return true.

// palindrome("_eye") //should return true.

// palindrome("race car") //should return true.

// palindrome("not a palindrome") //should return false.

// palindrome("A man, a plan, a canal. Panama") //should return true.

// palindrome("never odd or even") //should return true.

// palindrome("nope") //should return false.

// palindrome("almostomla") //should return false.

// palindrome("My age is 0, 0 si ega ym.") //should return true.

// palindrome("1 eye for of 1 eye.") //should return false. //NO ME DA

// palindrome("0_0 (: /-\ :) 0-0") //should return true.

// palindrome("five|\_/|four") //should return false.


function palindrome(str) {

    let areEquals = false;
    // var stringWithoutDiacritics = removeDiacritics(str);
    // // console.log(' stringWithoutDiacritics ', stringWithoutDiacritics)

    // var stringWithoutNumbers = stringWithoutDiacritics.replace(/[0-9]/g, '');
    // // console.log(' stringWithoutNumbers ', stringWithoutNumbers)

    // var stringWithoutSpaces = stringWithoutNumbers.replace(/ /g, '');
    // // console.log(' stringWithoutSpaces ', stringWithoutSpaces)

    // var stringLowerCase = stringWithoutSpaces.toLowerCase() 
    // // console.log(' stringLowerCase ', stringLowerCase)

    // var stringWithoutUnderScore = stringLowerCase.replace(/_/g, '');
    // // console.log(' stringWithoutUnderScore ', stringWithoutUnderScore)

    // var stringWithoutThat = stringWithoutUnderScore.replace(/-/g, '');
    // // console.log(' stringWithoutUnderScore ', stringWithoutThat)

    // var stringWithoutSpecialChars = stringWithoutThat.replace(/([.,*+?^=!:${}()|\[\]\/\\])/g, '');
    // // console.log(' stringWithoutSpecialChars ', stringWithoutSpecialChars)

    // var stringWithoutSpecialChars = stringWithoutSpecialChars.toLowerCase() 
    var stringWithoutSpecialChars = str.toLowerCase().replace(/([^a-z0-9])*/g, "").split("");

        console.log(' stringWithoutSpecialChars ', stringWithoutSpecialChars)


    console.log( 'stringWithoutSpecialChars.length ',stringWithoutSpecialChars.length)

    console.log('Math.ceil(stringWithoutSpecialChars.length/2 ',Math.ceil(stringWithoutSpecialChars.length/2))

    console.log( 'stringWithoutSpecialChars.length ',stringWithoutSpecialChars.length)
    console.log( 'stringWithoutSpecialChars[k] ',stringWithoutSpecialChars[stringWithoutSpecialChars.length - 1])

    if ( stringWithoutSpecialChars.length > 0 ){
        for ( let i = 0 ; i < Math.ceil(stringWithoutSpecialChars.length/2) ; i++ ){
            // for ( let k = (stringWithoutSpecialChars.length - 1 );  k >= Math.ceil(stringWithoutSpecialChars.length/2) ; k--){
    
                console.log(' iiiiii ', i )
                // console.log(' kkkkkk ', k )
    
                console.log(' stringLowerCase[i] ', stringWithoutSpecialChars[i] )
                // console.log(' stringLowerCase[k] ', stringWithoutSpecialChars[k] )
    
                console.log(' stringLowerCase NO SE ', stringWithoutSpecialChars[stringWithoutSpecialChars.length - i - 1] )
    
        
                if ( ( stringWithoutSpecialChars[i] === stringWithoutSpecialChars[stringWithoutSpecialChars.length - i - 1] ) ){
                    console.log('IF')
                    areEquals = true
                }
                else {
                    console.log('ELSE')
                    areEquals = false
                    break;
                }
            // }
        }
    }else {
        areEquals = true
    }


    console.log(' areEquals ',areEquals)
    return areEquals;
}

function removeDiacritics(string){

    var diacritics = [
        {char: 'A', base: /[\300-\306]/g},
        {char: 'a', base: /[\340-\346]/g},
        {char: 'E', base: /[\310-\313]/g},
        {char: 'e', base: /[\350-\353]/g},
        {char: 'I', base: /[\314-\317]/g},
        {char: 'i', base: /[\354-\357]/g},
        {char: 'O', base: /[\322-\330]/g},
        {char: 'o', base: /[\362-\370]/g},
        {char: 'U', base: /[\331-\334]/g},
        {char: 'u', base: /[\371-\374]/g},
        {char: 'N', base: /[\321]/g},
        {char: 'n', base: /[\361]/g},
        {char: 'C', base: /[\307]/g},
        {char: 'c', base: /[\347]/g}
    ]

    diacritics.forEach(function(letter){
        string = string.replace(letter.base, letter.char);
    });

    return string;
};

