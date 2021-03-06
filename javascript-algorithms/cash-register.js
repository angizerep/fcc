/*

Cash Register
Design a cash register drawer function checkCashRegister() 
that accepts purchase price as the first argument (price), 
payment as the second argument (cash), 
and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return 
an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if 
cash-in-drawer is less than the change due, or if you 
cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer 
as the value for the key change if it is equal 
to the change due.

Otherwise, return {status: "OPEN", change: [...]}, 
with the change due in coins and bills, sorted in highest 
to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)

See below for an example of a cash-in-drawer array:

    [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100]
    ]

*/


function checkCashRegister(price, cash, cid) {

    console.log('price ',price)
    console.log('cash ',cash)
    console.log('cid ',cid)

    let change;
    let status;
    var rest = cash - price
    let sum = sumCid(cid)

    console.log('sum ',sum)

    if ( rest < sum ){
        
        let result = search(cid, rest )

        return result

    } else {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }

    // console.log('rest ',rest)

    return change
}

function sumCid( cid ){

    console.log('Toy en sumCid ')

    let sum = 0

    for ( let i = 0 ; i < cid.length ; i++ ){
        // console.log('NO SEEE')
        // console.log(cid[i])
        sum = sum + cid[i][1]
    }

    // console.log('Salgo aca ')

    return sum
}

function search( cid, rest ){

    console.log('Toy en search ')

    console.log( ' rest ', rest)

    let total = 0
    let diff = 0
    let result

    for ( let i = 0 ; i < cid.length ; i++ ){

        console.log('Toy en for')
        console.log(cid[i])

        if ( cid[i][1] ===  rest ){
            let result = {status: "OPEN", change: cid[i]}         
            break   
        }else if ( cid[i][1] >  rest ){
            console.log('Toy en mayor')
            diff = cid[i][1] - rest
            if ( diff === 0 ){
                let result = {status: "OPEN", change: cid[i]}    
                break        
            }
        }
    }

}

// let test1 = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 
// // should return an object.

let test2 = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 
//should return {status: "OPEN", change: [["QUARTER", 0.5]]}

// let test3 = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 
// //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

// let test4 = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
// //should return {status: "INSUFFICIENT_FUNDS", change: []}.

// let test5 = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
// //should return {status: "INSUFFICIENT_FUNDS", change: []}

// let test6 = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
// //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

// console.log(test1)
console.log(test2)
// console.log(test3)
// console.log(test4)
// console.log(test5)
// console.log(test6)