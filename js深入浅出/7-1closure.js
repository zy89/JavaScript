//闭包：从外部读取函数内的局部变量；可以通过再函数的内部再定义一个函数

//1.闭包的例子
//常规函数
function outer(){
    var localVal =30;//局部变量
    return localVal;//调用后返回30
}
outer();//30；调用后localVal可以被释放了
//闭包例子
function outer2(){
    var localVal =30;//不能被释放
    return function(){
        return localVal;
    };
}
var func =outer();//调用outer()返回(的是匿名函数function()
//这个函数里仍然可以访问外部的outer()的局部变量localVal

func();//调用func()也能访问outer函数的局部变量localVal