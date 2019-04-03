const FinaCalc = require('./FinaCalc.js');

describe('FinaCalc', ()=>{


    describe('Normal', function(){
        let finaCalc = new FinaCalc(14,1,3854,8333)
        it('give 0.0566246',async  function(){
           let rate = await finaCalc.averageRate();
           expect(rate).toEqual(0.0566246);
         })
    });

    describe('N >= M', function(){
        let finaCalc = new FinaCalc(10,15,3854,8333)
        it('N must larger or equal to M',async  function(){
           let rate = await finaCalc.averageRate();
           expect(rate).toEqual(null);
         })
    });

    describe('FV > PV', function(){
        let finaCalc = new FinaCalc(20,15,9000,8333)
        it('FV must be larger than PV',async  function(){
           let rate = await finaCalc.averageRate();
           expect(rate).toEqual(null);
         })
    });

    describe('N = M', function(){
        let N = 5, M = 5, PV = 1000, FV = 10000
        let finaCalc = new FinaCalc(N,M,PV,FV)
        it('N can be equal to M',async  function(){
           let rate = await finaCalc.averageRate();
            let x = N-M+1;
            var calcFV = 0
            for (var i=x; i<=N; i++){
                //console.log(`${PV}*((1+${rate})**${i}) + ${calcFV}`)
                calcFV = PV*((1+rate)**i) + calcFV
            }
            //console.log(`------ rate: ${rate} -------`)
            expect(FV.toFixed(0)).toEqual(calcFV.toFixed(0));
         })
    });

    describe('PV = FV', function(){
        let N = 10, M = 5, PV = 1000, FV = 1000
        let finaCalc = new FinaCalc(N,M,PV,FV)
        it('FV must be larger than PV',async  function(){
            let rate = await finaCalc.averageRate();
            expect(rate).toEqual(null);
        })
    });

    describe('PV < FV', function(){
        let N = 10, M = 5, PV = 1000, FV = PV*M + 1
        let finaCalc = new FinaCalc(N,M,PV,FV)
        it('FV must be large than PV',async  function(){
            let rate = await finaCalc.averageRate();
            let x = N-M+1;
            var calcFV = 0
            for (var i=x; i<=N; i++){
                //console.log(`${PV}*((1+${rate})**${i}) + ${calcFV}`)
                calcFV = PV*((1+rate)**i) + calcFV
            }
            //console.log(`------ rate: ${rate} FV: ${calcFV}-------`)
            expect(FV.toFixed(0)).toEqual(calcFV.toFixed(0));
         })
    });


    describe('General Test 1', function(){
        let N = 100, M = 5, PV = 100000, FV = 239824284
        let finaCalc = new FinaCalc(N,M,PV,FV)
        it('FV must be large than PV',async  function(){
            let rate = await finaCalc.averageRate();
            let x = N-M+1;
            var calcFV = 0
            for (var i=x; i<=N; i++){
                //console.log(`${PV}*((1+${rate})**${i}) + ${calcFV}`)
                calcFV = PV*((1+rate)**i) + calcFV
            }
            let errRate = Math.abs((calcFV-FV)/FV)
            //console.log(`------ rate: ${rate}; FV: ${calcFV}; ErrRate: ${errRate}-------`)
            //expect(FV.toFixed(0)).toEqual(calcFV.toFixed(0));
            expect(errRate).toBeLessThan(0.001)
         })
    });

    describe('General Test 2', function(){
        let N = 100, M = 25, PV = 5115, FV = 29341550
        let finaCalc = new FinaCalc(N,M,PV,FV)
        it('FV must be large than PV',async  function(){
            let rate = await finaCalc.averageRate();
            let x = N-M+1;
            var calcFV = 0
            for (var i=x; i<=N; i++){
                //console.log(`${PV}*((1+${rate})**${i}) + ${calcFV}`)
                calcFV = PV*((1+rate)**i) + calcFV
            }
            let errRate = Math.abs((calcFV-FV)/FV)
            //console.log(`------ rate: ${rate}; FV: ${calcFV}; ErrRate: ${errRate}-------`)
            //expect(FV.toFixed(0)).toEqual(calcFV.toFixed(0));
            expect(errRate).toBeLessThan(0.001)
         })
    });


    describe('General Test 2', function(){
        let N = 100, M = 25, PV = 2048, FV = 6690206
        let finaCalc = new FinaCalc(N,M,PV,FV)
        it('FV must be large than PV',async  function(){
            let rate = await finaCalc.averageRate();
            let x = N-M+1;
            var calcFV = 0
            for (var i=x; i<=N; i++){
                //console.log(`${PV}*((1+${rate})**${i}) + ${calcFV}`)
                calcFV = PV*((1+rate)**i) + calcFV
            }
            let errRate = Math.abs((calcFV-FV)/FV)
            //console.log(`------ rate: ${rate}; FV: ${calcFV}; ErrRate: ${errRate}-------`)
            //expect(FV.toFixed(0)).toEqual(calcFV.toFixed(0));
            expect(errRate).toBeLessThan(0.001)
         })
    });

    describe('General Test 3', function(){
        let N = 6, M = 5, PV = 2048, FV = 6690206
        let finaCalc = new FinaCalc(N,M,PV,FV)
        it('FV must be large than PV',async  function(){
            let rate = await finaCalc.averageRate();
            let x = N-M+1;
            var calcFV = 0
            for (var i=x; i<=N; i++){
                //console.log(`${PV}*((1+${rate})**${i}) + ${calcFV}`)
                calcFV = PV*((1+rate)**i) + calcFV
            }
            let errRate = Math.abs((calcFV-FV)/FV)
            //console.log(`------ rate: ${rate}; FV: ${calcFV}; ErrRate: ${errRate}-------`)
            //expect(FV.toFixed(0)).toEqual(calcFV.toFixed(0));
            expect(errRate).toBeLessThan(0.001)
         })
    });

    
})