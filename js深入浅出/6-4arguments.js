//1.函数属性 & arguments
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

//2. apply/call方法 浏览器是window
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
//foo1();

//3.bind与currying 函数柯里化
function foo2(){
    //有个相加函数
    function add(a,b,c){
        return a+b+c;
    }
    //拆分函数
    var func = add.bind(undefined,100);//等于赋值a参数100
    console.log(func(1,2));//1和2就是b和c，输出103
    //还可以再拆分
    var func2 =func.bind(undefined,200);//参数b为200
    console.log(func2(10));//310

    //example：有一个获取配置的函数，前两个参数其实都是default
    function getConfig(colors,size,otherOptions){
        console.log(colors,size,otherOptions);
    }
    //那就把default拆分出来
    var defaultConfig = getConfig.bind(null,"#CC001","1024*768");
    console.log(defaultConfig("123"));
    console.log(defaultConfig("456"));
}
//foo2();

function foo3(){
    function foo(){
        this.b =100;//相当于创建全局变量b并赋值100
        return this.a;
    }
    var func = foo.bind({a:1});
    console.log(func());//1,已经传入a且被return
    console.log(new func());//{b:100}；new去调用会指向原型，也就是foo()。
    //foo()会作为一个对象返回。b属性是100，且忽略return。因此bind不起作用
}
foo3();