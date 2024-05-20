let sum = (a, ...b) => a + b.reduce((acc, e)=> acc + e);
let prod = (a, ...b) => a * b.reduce((acc, e) => (acc * e), 1);
let factorial = (n) => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i
    }
    return result
}
// let sum = (a, ...b) => {
//     let result = a;
//     for (const v of b) {
//         result += v
//     }
//     return result
// }

module.exports = {prod, sum, factorial};