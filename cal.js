let xvalue=[];
let yvalue=[];
let operator=[];
let w=false;
let value="input error";
let output1=[];
let output2=[];

while(w){
    calculate();
}
show();
function calculate(){
    let xval=prompt("Value of X");
    xvalue+=xval+"<br>";
    let opr = prompt("operator");
    operator+=opr+"<br>";
    let yval= prompt("Value of y");
    yvalue+=yval+"<br>";
    let cal;
    if(opr=="+"){
        cal=parseInt(xval)+parseInt(yval);
    }else if(opr=="-"){
        cal=parseInt(xval)-parseInt(yval);
    }else if(opr=="*"){
        cal=parseInt(xval)*parseInt(yval);
    }else if(opr=="/"){
        cal=parseInt(xval)/parseInt(yval);
    }else if(opr=="%"){
        cal=parseInt(xval)%parseInt(yval);
    }else{
        cal="Computation Error";
    }
    if(isNaN(cal)&&cal!="Computation Error"){
        output1+=value+"<br>";
    }else{
        output1+=cal+"<br>";
    }
    if(!isNaN(cal)){
        output2.push(cal);
    }
    let final =confirm("Continue ?");
    if(final==true){
        w = true;
    }else{
        w= false
    }
    show();
}


function show(){

    document.getElementById("xval").innerHTML=xvalue;
    document.getElementById("opr").innerHTML=operator;
    document.getElementById("yval").innerHTML=yvalue;
    document.getElementById("output1").innerHTML=output1;

    document.getElementById("min").innerHTML=Math.min(...output2);
    document.getElementById("max").innerHTML=Math.max(...output2);
    document.getElementById("average").innerHTML=Average(output2);
    document.getElementById("total").innerHTML=Sum(output2);

}

function Average(a1){
    let sum=0;
    for(let j=0;j<a1.length;j++){
        sum+=a1[j];
        console.log(a1[j]);
    }
    let average= sum/a1.length;
    return average;
}

function Sum(a2){
    let sum=0;
    for(let k=0;k<a2.length;k++){
        sum+=a2[sum];
        console.log(a2[sum]);
    }
    return sum;
}