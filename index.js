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
    }else if(level === 3){
        return a ** n;
    }else if(level === 2){
        return a * n;
    }else if(level === 1){
        return a + n;
    }else if(level === 0){
        return a + 1;
    }else if(level === -1){
        return a - n;
    }else if(level === -2){
        return a / n;
    }else if(level === -3){
        return root(a,n);
    }else if(n === Infinity){
        return Infinity;
    }else{
        return NaN;
    }
}