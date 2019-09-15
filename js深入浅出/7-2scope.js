//JS里没有块级作用域：for(var i)i在里在外都一样
//有函数作用域，函数里的变量外部无法访问

//1.作用域链
function outer2(){
    var local2 =2;
    function outer1(){
        var local1= 1;
        //以下都能访问到，也就是闭包
        console.log(local2);
        console.log(local1);
        console.log(global3);
    }
    outer1();
}
var global3=3;
outer2();

function outer(){
    var i =1;
    var func = new Function(console.log(i));
    func();//视频说拿不到，实际上拿到了
}
outer();

//2. 利用函数作用域封装

//在很多大代码最后完成时都会在外层写一个匿名函数，把全局变量封装成局部变量
(function(){
    //do sth
    var a,b;
})();

//也可以把函数声明变成函数表达式，在开头加一个!
!function(){
    //do sth.
    var a,b;
}();