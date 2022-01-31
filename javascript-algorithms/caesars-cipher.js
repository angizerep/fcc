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
    'O','P','Q','R','S','T','U','V','W','X','Y', 'Z']

    let word =''

    var output = [ 'N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B',
    'C','D','E','F','G','H','I','J','K','L','M']

    for( let i = 0 ; i < str.length ; i++ ){
        if ( str[i] === " " ){
            word = word + " "
        }else if ( str[i] === '!' || str[i] === '?' || str[i] === '.' )  {
            word = word + str[i]
        }else {
            for ( let j = 0 ; j < input.length ; j++ ){
                if ( str[i] === input[j] ){
                    word = word + output[j]
                    break
                }
            }
        }
    }

    return word;
}

let test1 = rot13("SERR PBQR PNZC") //FREE CODE CAMP
let test2 = rot13("SERR CVMMN!") //FREE PIZZA!
let test3 = rot13("SERR YBIR?") //FREE LOVE?
let test4 = rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") //THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)