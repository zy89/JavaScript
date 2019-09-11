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