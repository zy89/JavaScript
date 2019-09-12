//函数属性 & arguments
function foo(x,y,z){
    console.log(arguments.length);//2，实参是两个只有1和2
    console.log(arguments[0]);//1,传进来的
    arguments[0]=10;//严格模式下还是1
    console.log(x);//第一个参数变成10了

    argument[2] =100;//想给z赋值，报错
    console.log(z);//undefined,没传z参数进来。失去绑定关系，无法赋值
}
//foo(1,2);
//console.log(foo.length);//3,形参是三个

function foo1(){
    function foo2(x,y){
        console.log(x,y,this);
    }
    //call的第一个参数是作为this的对象，如果不是对象会转换为对象
    console.log(foo2.call(100,1,2));//100转换为包装类Number(100)
    console.log(foo2.apply(true,[3,4]));//true转换为Boolean(true)

    //null和undefined指向全局对象
    //浏览器就是window,nodejs就是gloabl
    //严格模式下的话，null和undefined输出就是本身。不会变成window
    console.log(foo2.apply(null));
    console.log(foo2.apply(undefined));
}
foo1();