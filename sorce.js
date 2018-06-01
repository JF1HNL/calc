let aaa = 0;
let flag = 0;
let syoflag = 0;
let fff = [];
const ele = document.getElementById('aaa');

/*
class Keisan{
    constructor(n){
        this.n = n;
    }
    keisan(){
        if(ele.innerText == 0 && syoflag == 0){
            ele.innerText = ''
        }
        ele.innerText = ele.innerText + this.n;
        console.log(ele.innerText);
    }
}

for(let i = 0;i < 10;i++){
    fff[i] = new Keisan(i);
}

fff[11] = new Keisan('00');
fff[12] = new Keisan('000');
*/

function num1(){
    if(ele.innerText == 0 && syoflag == 0){
        ele.innerText = ''
    }
    ele.innerText = ele.innerText + 1;
    console.log(ele.innerText);
}

function num2(){
    if(ele.innerText == 0 && syoflag == 0){
        ele.innerText = ''
    }
    ele.innerText = ele.innerText + 2;
    console.log(ele.innerText);
}

function num3(){
    if(ele.innerText == 0 && syoflag == 0){
        ele.innerText = ''
    }
    ele.innerText = ele.innerText + 3;
    console.log(ele.innerText);
}

function num4(){
    if(ele.innerText == 0 && syoflag == 0){
        ele.innerText = ''
    }
    ele.innerText = ele.innerText + 4;
    console.log(ele.innerText);
}

function num5(){
    if(ele.innerText == 0 && syoflag == 0){
        ele.innerText = ''
    }
    ele.innerText = ele.innerText + 5;
    console.log(ele.innerText);
}

function num6(){
    if(ele.innerText == 0 && syoflag == 0){
        ele.innerText = ''
    }
    ele.innerText = ele.innerText + 6;
    console.log(ele.innerText);
}

function num7(){
    if(ele.innerText == 0 && syoflag == 0){
        ele.innerText = ''
    }
    ele.innerText = ele.innerText + 7;
    console.log(ele.innerText);
}

function num8(){
    if(ele.innerText == 0 && syoflag == 0){
        ele.innerText = ''
    }
    ele.innerText = ele.innerText + 8;
    console.log(ele.innerText);
}

function num9(){
    if(ele.innerText == 0 && syoflag == 0){
        ele.innerText = ''
    }
    ele.innerText = ele.innerText + 9;
    console.log(ele.innerText);
}

function num0(){
    if(ele.innerText == 0 && syoflag == 0){
        ele.innerText = ''
    }
    ele.innerText = ele.innerText + 0;
    console.log(ele.innerText);
}

function num00(){
    if(ele.innerText == 0 && syoflag == 0){
        ele.innerText = ''
    }
    ele.innerText = ele.innerText + '00';
    console.log(ele.innerText);
}

function kei(){
    console.log("kei", `flag: ${ flag } aaa: ${ aaa } text: ${ ele.innerText }`)
    if(flag == 1){
        aaa = Number(aaa) + Number(ele.innerText);
    }else if(flag == 2){
        aaa = Number(aaa) - Number(ele.innerText);
    }else if(flag == 3){
        aaa = Number(aaa) * Number(ele.innerText);
    }else if(flag == 4){
        if(Number(ele.innerText) == 0){
        }else{
            console.log(Number(aaa),  Number(ele.innerText))
            aaa = Number(aaa) / Number(ele.innerText);
        }
    }
    console.log("aaa: " + aaa)
}

function syousu(){
    if(syoflag === 0){
        ele.innerText = ele.innerText + ".";
        console.log(ele.innerText);
    }
    syoflag = 1;
}

function plus(){
    if(flag > 0){
        kei();
    }else{
        aaa = ele.innerText;
    }
    flag = 1;
    syoflag = 0;
    ele.innerText = '0';
}

function diff(){
    if(flag > 0){
        kei();
    }else{
        aaa = ele.innerText;
    }
    flag = 2;
    syoflag = 0;
    ele.innerText = '0';
}

function mult(){
    if(flag > 0){
        kei();
    }else{
        aaa = ele.innerText;
    }
    flag = 3;
    syoflag = 0;
    ele.innerText = '0';
}

function divi(){
    if(flag > 0){
        kei();
    }else{
        aaa = ele.innerText;
    }
    flag = 4;
    syoflag = 0;
    ele.innerText = '0';
}

function equal(){
    kei();
    flag = 0;
    syoflag = 0;
    ele.innerText = aaa;
}
/*
function plus(){
    //const ele = document.getElementById('aaa');
    aaa = Number(ele.innerText);
    ele.innerText = '';
}

function equal(){
    //const ele = document.getElementById('aaa');
    ele.innerText = aaa + Number(ele.innerText)
}
*/
function clear(){
    ele.innerText = '0';
    flag = 0;
    syoflag = 0;
    aaa = 0;
    console.log("clear");
}