const result = document.getElementById('results');
const ip1 = document.getElementById('ip1');
const ip2 = document.getElementById('ip2');
const calc = document.getElementById('calc');
const rand = document.getElementById('rand');
const clr = document.getElementById('clr');


calc.addEventListener(
    'click',function(){
        const firstNum=parseFloat(ip1.value);
        const secondNum=parseFloat(ip2.value);
        //SETS THE INNER
        result.innerHTML=firstNum+secondNum;
    })

    //EVENT LISTENER FOR CLEAR UTTON
    clr.addEventListener('click',function(){
        //RESET THE THREE AREAS TO AN EMPTY STRING
        ip1.value='';
        ip2.value='';
        result.innerHTML='';
    });

    //A FUNCTION THAT GENERATES A RANOM NUMER BETWEEN 0 AND 10000
    function randomNumberGenerator(){
        return Math.floor(Math.random()*1000);
    }

    rand.addEventListener('click',function(){
        ip1.value=randomNumberGenerator();
        ip2.value=randomNumberGenerator();
    })

