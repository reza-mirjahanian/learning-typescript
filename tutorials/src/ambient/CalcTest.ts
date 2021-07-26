import TutorialPoint from './CalcThirdPartyJsLib';
/// <reference path = "Calc.d.ts" />

const obj = new TutorialPoint();
// obj.doSum("Hello"); // compiler error
console.log(obj.doSum(10));