function root(degree,radicand){
    return degree ** (1/radicand);
}
function baseLog(base,argument){
    return Math.log(argument) / Math.log(base);
}
function factorial(argument){
    if(argument < 0){
        return "value must not be negative";
    }
    if(!argument.isInteger){
        return "vaule must be an integer";
    }
    result = 1
    for(let i = 2; i++; i <= argument){
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
