const array = [ 
    {
        "elapsedTimeInMilliseconds" : 1861
    }, 
    {
        "elapsedTimeInMilliseconds" : 2333
    }, 
    {
        "elapsedTimeInMilliseconds" : 1425
    }, 
    {
        "elapsedTimeInMilliseconds" : 1859
    }, 
    {
        "elapsedTimeInMilliseconds" : 1704
    }, 
    {
        "elapsedTimeInMilliseconds" : 1276
    }, 
    {
        "elapsedTimeInMilliseconds" : 1339
    }, 
    {
        "elapsedTimeInMilliseconds" : 935
    }, 
    {
        "elapsedTimeInMilliseconds" : 1413
    }, 
    {
        "elapsedTimeInMilliseconds" : 1345
    }, 
    {
        "elapsedTimeInMilliseconds" : 1655
    }, 
    {
        "elapsedTimeInMilliseconds" : 1385
    }, 
    {
        "elapsedTimeInMilliseconds" : 1856
    }, 
    {
        "elapsedTimeInMilliseconds" : 1353
    }, 
    {
        "elapsedTimeInMilliseconds" : 1391
    }, 
    {
        "elapsedTimeInMilliseconds" : 910
    }, 
    {
        "elapsedTimeInMilliseconds" : 1188
    }, 
    {
        "elapsedTimeInMilliseconds" : 1149
    }
]

/*
totalValue - totalValuePercentage%
value      - valuePercentage%

value = (totalValue * valuePercentage) / totalValuePercentage
*/
const percentage = (totalValue, totalValuePercentage, valuePercentage) => {
    return (totalValue * valuePercentage) / totalValuePercentage;
};

console.log(array);

let totalElapsedTimeInMilliseconds = array.reduce((o1, o2) => ({elapsedTimeInMilliseconds: o1.elapsedTimeInMilliseconds + o2.elapsedTimeInMilliseconds}))
let totalValue = totalElapsedTimeInMilliseconds.elapsedTimeInMilliseconds;
let totalPercentage = 100;
let desirePercentage = 99;
let valueOfDesirePercentage = percentage(totalValue, 100, 99);
console.log(totalElapsedTimeInMilliseconds); 
console.log(`${desirePercentage}% of ${totalValue}: ${valueOfDesirePercentage}`)