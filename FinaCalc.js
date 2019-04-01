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
        this.rateStep = 0.0000001;
    }

    toString(){
        console.log(`N: ${this.N}`);
        console.log(`M: ${this.M}`);
        console.log(`PV: ${this.PV}`);
        console.log(`FV: ${this.FV}`);
    }

    averageRate(){

        // policy duration N must larger or equal to the number of investment
        // total amont of investment must be smaller than the future value
        if ((this.N < this.M) || (this.FV <= this.PV * this.M)){
            return null
        }

        var rate = this.rateStep;
        var calcFV = 0;

        while(calcFV<this.FV){
            calcFV = 0;
            var x = this.N - this.M + 1;
            for (var i=x; i<=this.N; i++){
                calcFV = this.PV*((1+rate)**i) + calcFV
            }
            rate = Math.round((rate + this.rateStep)*10000000)/10000000;
        }


        return Math.round((rate-this.rateStep)*10000000)/10000000;
    }

}

module.exports = FinaCalc