const FinaCalc = require('./FinaCalc.js');

var finaCalc = new FinaCalc(7,7,12000,95500)
console.log(finaCalc.averageRate());

finaCalc = new FinaCalc(14,1,3854,8333)
console.log(finaCalc.averageRate());


finaCalc = new FinaCalc(10,5,1000,5001)
console.log(finaCalc.averageRate());



console.log("-------------------------------")
let N, M, PV, FV;

console.log("P - CIE")
N = 100; M = 25; PV = 1451; FV = 7166350;
finaCalc = new FinaCalc(N,M,PV,FV)
console.log(finaCalc.averageRate());

console.log("P - CIM2")
N = 100; M = 25; PV = 2048; FV = 6690206;
finaCalc = new FinaCalc(N,M,PV,FV)
console.log(finaCalc.averageRate());

console.log("P - EGSP2")
N = 100; M = 5; PV = 2560; FV = 6679249;
finaCalc = new FinaCalc(N,M,PV,FV)
console.log(finaCalc.averageRate());

console.log("-------------------------------")

console.log("A - CIE")
N = 100; M = 25; PV = 1415; FV = 7525821;
finaCalc = new FinaCalc(N,M,PV,FV)
console.log(finaCalc.averageRate());

console.log("A - CIM2")
N = 100; M = 25; PV = 1774; FV = 2583453;
finaCalc = new FinaCalc(N,M,PV,FV)
console.log(finaCalc.averageRate());

console.log("A - EGSP2")
N = 100; M = 5; PV = 2560; FV = 5973736;
finaCalc = new FinaCalc(N,M,PV,FV)
console.log(finaCalc.averageRate());