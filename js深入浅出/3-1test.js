var str={a:1,b:2};//直接创造对象
console.log(str.a);

//js里没有块级作用域
for(var i=0;i<3;i++){
    var str="hi";
    console.log(str);
}
console.log(i);//还是能输出i的值等于3，大小括号都没办法让i只在自己里面使用

//函数有作用域
function foo(){
    var a=1;
    console.log(a);
}
foo();
console.log(typeof a);//是undefiend, 因为a是在函数的作用域里