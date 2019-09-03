// for...in 顺序是不确定的，如果要按顺序遍历不能用这种方法
var p;
var obj ={x:1,y:2};
for(p in obj){
}

//switch
var num=2;
switch(num){
    case 1:
    case 2:
    case 3:
        console.log(123);
        break;
    case 4:
    case 5:
        console.log(45);
    default:
        console.log(0);
}

function foo(){
    'use strict' //开启严格模式，也可以放在最开头保证整个js都在严格模式
    x=1; //严格模式下会报错
    console.log(x);
}
foo();