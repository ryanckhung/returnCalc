// N; Number of Years already invested
// M; Number of Years has put money in
// PV; Present Value of each investment
// FV; Future Value
// R; Interest Rate

// Eg. an insurace policy already intest for 14 years
// the policy owner invest 10000USD for 5 years only (total invest 10000USD*5)
// then M = 14, PV = 10000USD, M = 5

class FinaCalc{
    constructor(N,M,PV,FV){
        this.N = N;
        this.M = M;
        this.PV = PV;
        this.FV = FV;
    }

    toString(){
        console.log(`N: ${this.N}`);
        console.log(`M: ${this.M}`);
        console.log(`PV: ${this.PV}`);
        console.log(`FV: ${this.FV}`);
    }


    _rounding(value){
        return Math.round((value)*10000000)/10000000;
    }


    _rate(initialRate, step){
        var rate = initialRate;
        var calcFV = 0;

        while(calcFV<this.FV){
            calcFV = 0;
            var x = this.N - this.M + 1;
            for (var i=x; i<=this.N; i++){
                calcFV = this.PV*((1+rate)**i) + calcFV
            }
            rate = this._rounding(rate + step);
        }
        return this._rounding(rate - step)
    }

    averageRate(){

        // policy duration N must larger or equal to the number of investment
        // total amont of investment must be smaller than the future value
        if ((this.N < this.M) || (this.FV <= this.PV * this.M)){
            return null
        }

        // find the rough rate with larger step can speed up the calculation
        // instead of using small step
        let roughRate = this._rounding(this._rate(0, 0.01) - 0.01)
        return this._rate(roughRate, 0.0000001);

    }

    static futureValueList(numOfInstallment, capticalPerInstallment, rate, investmentLength){
        let n = numOfInstallment;
        let C =capticalPerInstallment;
        let r = rate;
        var returnInEachYear = [];
        var futureValue=0;

        for (var year=1; year<=investmentLength; year++){
            if (year < n){
                futureValue = 0;
                for (var i=1; i<= year; i++){
                    futureValue = futureValue + Math.pow((1+r),i);
                }
            }else{
                futureValue = 0;
                for (var i=0; i<=n-1; i++){
                    futureValue = futureValue + Math.pow((1+r),(year-i));
                }
            }
            returnInEachYear.push(futureValue*C)
        }
        return returnInEachYear;
    }

}

module.exports = FinaCalc