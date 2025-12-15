function root(degree,radicand){
    return radicand ** (1/degree);
}
function baseLog(base,argument){
    return Math.log(argument) / Math.log(base);
}
function factorial(argument){
    if(argument < 0){
        return NaN;
    }
    if(!Number.isInteger(argument)){
        return NaN;
    }
    let result = 1;
    for(let i = 2; i <= argument; i++){
        result *= i;
    }
    return result;
}
function primeFactorial(argument){
    if(argument < 0){
        return NaN;
    }
    if(!Number.isInteger(argument)){
        return NaN;
    }
    let primes = [];
    outerLoop: for(let i = 2; i<=argument; i++){
        for(let j = 2; j < i; j++){
            if(i % j === 0){
                continue outerLoop;
            }
        }
        primes.push(i);
    }
    let result = 1;
    for(i of primes){
        result *= i;
    }
    return result;
}
function subFactorial(argument){
    if(argument < 0){
        return NaN;
    }
    if(!Number.isInteger(argument)){
        return NaN;
    }
    let result = 0;
    for(let i = 0; i <= argument; i++){
        if(i % 2 == 0){
            result += 1/factorial(i);
        }else{
            result += -1/factorial(i);
        }
    }
    return factorial(argument) * result;
}
function superFactorial(argument){
    if(argument < 0){
        return NaN;
    }
    if(!Number.isInteger(argument)){
        return NaN;
    }
    result = 1;
    for(let i = 2; i <= argument; i++){
        result *= factorial(i);
    }
    return result;
}
function hyperFactorial(argument){
    if(argument < 0){
        return NaN;
    }
    if(!Number.isInteger(argument)){
        return NaN;
    }
    result = 1;
    for(let i = 2; i <= argument; i++){
        result *= i ** i;
    }
    return result;
}
function multiFactorial(argument,amount){
    if(argument < 0){
        return NaN;
    }
    if(!Number.isInteger(argument)){
        return NaN;
    }
    result = 1;
    for(let i = argument; i >= 2; i -= amount){
        result *= i;
    }
    return result;
}
function sum(numbers){
    answer = 0;
    for(i of numbers){
        answer += i;
    }
    return answer;
}
function product(numbers){
    answer = 0;
    for(i of numbers){
        answer *= i;
    }
    return answer;
}
function hyper(a,level,n){
    if(level >= 4){
        if(Number.isInteger(n)){
            answer = 1;
            for(let i = 0; i < n; i++){
                answer = hyper(a,level-1,answer);
            }
            return answer;
        }else{
            if(n === Infinity){
                return Infinity;
            }
            return NaN;
        }
    }
    switch(level){
        case 3:
            return a ** n;
            break;
        case 2:
            return a * n;
            break;
        case 1:
            return a + n;
            break;
        case 0:
            return a + 1;
            break;
        case -1:
            return a - n;
            break;
        case -2:
            return a / n;
            break;
        case -3:
            return root(a,n);
            break;
    }
    if(n === Infinity){
        return Infinity;
    }else{
        return NaN;
    }
}
function cot(argument){
    return 1 / Math.tan(argument);
}
function acot(argument){
    return 1/Math.atan(argument);
}
function answer(){
    const equation = document.getElementById("equation");
    console.log(equation.textContent[equation.textContent.length - 1])
    for(i of "0123456789."){
        console.log(typeof i)
        if(equation.textContent[(equation.textContent.length - 1)] == i){
            press("(" + Number(sessionStorage.getItem("answer")) + ")");
            return;
        }
    }
    press(Number(sessionStorage.getItem("answer")));
}
function backspace(){
    const equation = document.getElementById("equation");
    equation.textContent = equation.textContent.slice(0,-1);
}
function empty(){
    const equation = document.getElementById("equation");
    const answer = document.getElementById("answer");
    equation.textContent = "";
    answer.textContent = "";
}
function press(pressed){
    const equation = document.getElementById("equation");
    const answer = document.getElementById("answer");
    if(answer.textContent !== ""){
        empty();
    }
    equation.textContent += pressed;
}
function solve(){
    let equation = document.getElementById("equation").textContent;
    const answer = document.getElementById("answer");
    equation = equation.replaceAll("÷","/");
    answer.textContent = eval(equation);
    sessionStorage.setItem("answer",answer.textContent);
}