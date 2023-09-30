//#2.10 Recap II 계산기 만들어보기
const calculator = {
    plus: function(a, b){
        console.log(a+b);
    },
    minus: function(a, b){
        console.log(a-b);
    },
    mult: function(a, b){
        console.log(a*b);
    },
    divi: function(a, b){
        console.log(a/b);
    },
    pow: function(a, b){
        console.log(a**b);
    }
}

calculator.plus(1, 2);
calculator.minus(4, 3);
calculator.mult(5, 6);
calculator.divi(8, 2);
calculator.pow(9, 2);
