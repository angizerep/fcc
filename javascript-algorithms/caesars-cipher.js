/*

Caesars Cipher

One of the simplest and most widely known ciphers is a 
Caesar cipher, also known as a shift cipher. 

In a shift cipher the meanings of the letters are 
shifted by some set amount.

A common modern use is the ROT13 cipher, where the 
values of the letters are shifted by 13 places. 

Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as 
input and returns a decoded string.

All letters will be uppercase. Do not transform any 
non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/


// rot13("SERR PBQR PNZC") // should decode to the string FREE CODE CAMP

// rot13("SERR CVMMN!") // should decode to the string FREE PIZZA!

// rot13("SERR YBIR?") // should decode to the string FREE LOVE?

// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") // should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.


function rot13(str) {

    const input = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N',
    'O','P','Q','R','S','T','U','V','W','X','Y']

    let word =''

    // console.log('Input ', input)

    // var output = reverse( input ) //input.reverse()
    
    var output = [ 'N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B',
    'C','D','E','F','G','H','I','J','K','L','M']

    console.log('Output ', output)

    for( let i = 0 ; i <= str.length ; i++ ){

        if ( str[i] === " " ){
            word = word + " "
        }else{
            for ( let j = 0 ; j <= input.length ; j++ ){
                if ( str[i] === input[j] ){
                    console.log('esteee')
                    console.log('Letra ', output[j])
                    word = word + output[j]
                    break
                }
            }
        }
    }

    console.log('word ', word)

    return word;
}

function reverse (input){

    let reverse = input.reverse()

    console.log('reverse ',reverse)

    return reverse
}
rot13("SERR PBQR PNZC")
