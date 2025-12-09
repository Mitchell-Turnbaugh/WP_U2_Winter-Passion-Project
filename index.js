function root(degree,radicand){
    return Math.pow(degree,1/radicand);
}
function baseLog(base,argument){
    return Math.log(argument) / Math.log(base);
}
function factorial(argument){
    if(argument < 0){
        return NaN;
    }
    if(!argument.isInteger){
        return NaN;
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
function hyper(a,level,n){
    if(level >= 4){
        if(n.isInteger){
            for(let i = 0; i < n; i++){
                return hyper(a,level-1,n);
            }
        }else{
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
    }else{
        return NaN;
    }
}