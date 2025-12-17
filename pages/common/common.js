function keepEquation(){
    const equation = document.getElementById("equation");
    equation.textContent = sessionStorage.getItem("equation");
}
function answer(){
    const equation = document.getElementById("equation");
    if(equation.textContent[equation.textContent.length - 1] === "."){
        press("0(" + Number(sessionStorage.getItem("answer")) + ")")
        return;
    }
    for(const i of "0123456789."){
        if(equation.textContent[equation.textContent.length - 1] === i){
            press("(" + Number(sessionStorage.getItem("answer")) + ")");
            return;
        }
    }
    press(Number(sessionStorage.getItem("answer")));
}
function backspace(){
    const equation = document.getElementById("equation");
    equation.textContent = equation.textContent.slice(0,-1);
    sessionStorage.setItem("equation",equation.textContent);
}
function empty(){
    const equation = document.getElementById("equation");
    const answer = document.getElementById("answer");
    equation.textContent = "";
    answer.textContent = "";
    sessionStorage.setItem("equation",equation.textContent);
}
function press(pressed){
    const equation = document.getElementById("equation");
    const answer = document.getElementById("answer");
    if(answer.textContent !== ""){
        empty();
    }
    equation.textContent += pressed;
    sessionStorage.setItem("equation",equation.textContent);
}
function solve(){
    let equation = document.getElementById("equation").textContent;
    const answer = document.getElementById("answer");
    equation = equation.replaceAll("÷","/");
    parenthesis = [];
    for(let i = equation.indexOf("("); i < equation.length && i !== -1;){
        for(const j of "0123456789"){
            if(equation[i - 1] == j){
                console.log("Test")
                parenthesis.push(i);
                i = equation.indexOf("(",i + 1);
                console.log(i);
                break;
            }
        }
    }
    for(const i of parenthesis){
        first = equation.slice(0,i);
        end = equation.slice(i);
        equation = first + "*" + end;
    }
    while(equation.includes("--")){
        equation = equation.replaceAll("--","+");
    }
    while(equation.includes("++")){
        equation = equation.replaceAll("++","+");
    }
    equation = equation.replaceAll("π","Math.PI");
    equation = equation.replaceAll("e","Math.E");
    equation = equation.replaceAll("ɸ","1.618033988749894848204586834");
    try{
        answer.textContent = eval(equation);
        sessionStorage.setItem("answer",answer.textContent);
    }catch{
        answer.textContent = "Math Error";
    }
}