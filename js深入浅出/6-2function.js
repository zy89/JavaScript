//1.函数声明。先调用再申明可以
function add(a,b){
    a=+a;
    b=+b;
    if(isNaN(a) ||isNaN(b)){
        return;
    }
    return a+b;
}

//2.函数表达式。先调用再申明会报错
//2.1 函数变量
var add =function (a,b){
    //do sth
};
//2.2 IEF(immediatwly executed function)
(function(){
    //do sth
})();
//2.3 first-class function
return function(){
    //do sth
};
//2.4 NFE(named function expression)
var add =function foo(a,b){
    //do sth
};

//3.使用函数构造器。少用，有安全风险
var func1 =new Function('a','b','console.log(a+b);');
func1(1,2);//3
//两种方式没太大区别
var func2 =Function('a','b','console.log(a+b);');
func2(1,2);
//构造器里的局部变量外层拿不到：
Function('var localVal = "local";console.log(localVal);')();//local
console.loh(typeof localVal);//undefined