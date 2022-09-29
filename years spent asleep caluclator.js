//Average hrs slept per day//
let ahspd = 0;
//current age of user//
let currentAge= 0;
//Hours in 1 year //
const hrsin1yr= 8760;
//number of days in 1year //
const daysin1yr = 365;
// Hours slept in 1year//
const hrsslptin1yr = ahspd * daysin1yr;
// Total hours slept uptodate//
const tthrsslpt = currentAge * hrsslptin1yr;
// Total years spent sleeping //
const ttyrsslpt = tthrsslpt / hrsin1yr;
// total years spent awake//
const ttyrsawake = currentAge - ttyrsslpt;

console.log( " Years Spent Sleping :  " + ttyrsslpt + "Years");
console.log( " Years Spent awake :  " + ttyrsawake + "Years");
