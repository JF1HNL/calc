import parser from './parser.js';
//console.log(parser.parse('5'));
console.log('welcome to calculator(parser)');

let memory = '';
let flag = [];
flag[1] = 0;
//flag[1]```syousuten pushed 1 NOTpushed 0```
//symbol->0 syousuten->1
flag[2] = 0;
//flag[2]```syousuten end 1 NOTend 0```
//syousuten->1 num(NOT0)->0
//symbol->
flag[3] = 0;
//flag[3]```syousutentyokugono0
flag[4] = 0;
//flag[4]```numbutton push number
flag[5] = 0;
//flag[5]```symbolbutton push
flag[6] = '';
//flag[6]```before culc
flag[7] = 0;
//flag[7]```push_equal_num 
let decimal = 0;
let symbol = [];
symbol[1] = 0; //symbol_flag pushed 1
symbol[2] = 0; //symbol_character

let syoflag = 0;
const elenum = [];
//num button creat
for(let i = 0;i < 10;i++){
    flag[1] = 0;
    elenum[i] = document.getElementById('num' + i);
    elenum[i].addEventListener('click', () => {
        flag[4] = i;
        //symbol on
        if(flag[5] != 0){
            memory = memory + flag[5];
            flag[6] = flag[5];
            flag[5] = 0;
        }
        if(Number(flag[4]) > 0 && flag[2] == 1){
            flag[2] == 0;
        }
        if(ele.innerText == 0 && syoflag == 0){
            ele.innerText = '';
        }
        ele.innerText = ele.innerText + i;
        console.log(ele.innerText);
    });
}
//00button creat
elenum[100] = document.getElementById('num00');
elenum[100].addEventListener('click', () => {
    flag[4] = '00';
    if(ele.innerText == 0 && flag[1] == 0){
        console.log("first_push_00")
    }else{
        ele.innerText = ele.innerText + '00'
        console.log(ele.innerText);
    }
})



const ele = document.getElementById('calc_area');
ele.addEventListener('click', () => {
    console.log("fff");
    
})

function decimal_(){
    if(flag[2] == 0){
        if(memory == 0){
            memory = Number(ele.innerText);
        }else{
            memory = memory + ele.innerText;
        }
        flag[6] = flag[6] + ele.innerText;
    }else{
        if(memory == 0){
            memory = Number(decimal);
        }else{
            memory = memory + decimal;
        }
        flag[6] = flag[6] + decimal;
    }
    console.log('decimal memory:' + memory);
}

const ele_plus = document.getElementById('plus');
ele_plus.addEventListener('click', () => {
    flag[5] = '+';
    flag[4] = flag[5];
    console.log('plus');
    decimal_();
    ele.innerText = 0;
    flag[1] = 0;
    flag[2] = 0;
    console.log('memory : ' + memory);
})

const ele_diff = document.getElementById('diff');
ele_diff.addEventListener('click', () => {
    flag[5] = '-';
    flag[4] = flag[5];
    console.log('diff');
    decimal_();
    ele.innerText = 0;
    flag[1] = 0;
    flag[2] = 0;
    console.log('memory : ' + memory);
})

const ele_mult = document.getElementById('mult');
ele_mult.addEventListener('click', () => {
    flag[5] = '*';
    flag[4] = flag[5];
    console.log('mult');
    decimal_();
    ele.innerText = 0;
    flag[1] = 0;
    flag[2] = 0;
    console.log('memory : ' + memory);
})

const ele_divi = document.getElementById('divi');
ele_divi.addEventListener('click', () => {
    flag[5] = '/';
    flag[4] = flag[5];
    console.log('divi');
    decimal_();
    ele.innerText = 0;
    flag[1] = 0;
    flag[2] = 0;
    console.log('memory : ' + memory);
})

/*
function plus(){
    if(flag > 0){
        kei();
    }else{
        memory = ele.innerText;
    }
    flag = 1;
    syoflag = 0;
    ele.innerText = '0';
}

function diff(){
    if(flag > 0){
        kei();
    }else{
        memory = ele.innerText;
    }
    flag = 2;
    syoflag = 0;
    ele.innerText = '0';
}

function mult(){
    if(flag > 0){
        kei();
    }else{
        memory = ele.innerText;
    }
    flag = 3;
    syoflag = 0;
    ele.innerText = '0';
}

function divi(){
    if(flag > 0){
        kei();
    }else{
        memory = ele.innerText;
    }
    flag = 4;
    syoflag = 0;
    ele.innerText = '0';
}*/

const ele_equal = document.getElementById('equal');
ele_equal.addEventListener('click', () => {
    console.log("equal");
    if(flag[7] == 0){
        decimal_();
    }else{
        memory = memory + flag[6];
    }
    console.log('flag[6]:' + flag[6]);
    console.log('flag[7]:' + flag[7]);
    console.log('memory : ' + memory);
    ele.innerText = parser.parse(String(memory));
    flag[7]++;
    flag[1] = 0;
})

const ele_decimal = document.getElementById('decimal');
ele_decimal.addEventListener('click', () => {
    if(flag[1] == 1){
        console.log("before_decimal_pushed")
    }else{
        flag[1] = 1;
        flag[2] = 1;
        decimal = ele.innerText;
        ele.innerText = ele.innerText + '.';
        console.log("decimal");
    }
})

const ele_clear_num = document.getElementById('clear_num');
ele_clear_num.addEventListener('click', () => {
    ele.innerText = '0';
    memory = '';
    flag[1] = 0;
    flag[6] = '';
    flag[7] = 0;
    symbol[1] = 0; //symbol_flag pushed 1
    symbol[2] = 0; //symbol_character
    console.log("clear");
})

