//浏览器测试一下
//在VO里，varibale object
//1.先处理函数声明，x的值是对象
//2.再处理变量声明，这里有x, a, b

alert(x);//1.返回function

var x=10;
alert(x);//10，赋值
x =20;//再赋值

function x(){}//被提前处理了，忽略
alert(x);//20

if(true){
    var a=1;
}else {
    var b=true;
}

alert(a);//1
alert(b);//undefined；虽然else没执行，但是var被前置处理了所有不会报错。