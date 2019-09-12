//1.全局的this。浏览器里全局的就是window
//在node js里， window等于global
function foo(){
console.log(this.document === document);//true
console.log(this === window);//true
this.a=37;//this.a等价于window.a，相当于创建一个全局变量a并赋值为37
console.log(window.a);
}

//2.一般函数的this（浏览器）
function f1(){
    return this;
}
console.log(f1()===global);//true

function f2(){
    "use strict";
    return this;//严格模式下调用函数this会指向undefined
}
console.log(f2()===undefined);//true

//3.作为对象方法的函数的this
//case1:
var o ={
    prop:37,
    f:function(){
        return this.prop;
    }
};
console.log(o.f());
//case2:
var o2={prop:38};
function independent(){
    return this.prop;
}
o2.f =independent;//通过赋值的方式临时去创建属性f
console.log(o2.f());//只要将函数作为对象的方法去调用的话，this就会指向对象

//4.对象原型链上的this
function foo1(){
var o3={
    f:function(){return this.a+this.b;}
};
var p =Object.create(o3);//o3是p的原型
p.a=1;//给p的a,b元素赋值
p.b=4;
console.log(p.f());//可以直接调用的p原型链上o3的函数f
}
foo1();

//5.get/set方法与this
function foo2(){
    function modulus(){
        return Math.sqrt(this.re*this.re + this.im*this.im);
    }

    var o ={
        re:1,
        im:-1,
        get phase(){
            return Math.atan2(this.im, this.re);
        }
    };

    //给o对象创建一个modules属性
    Object.defineProperty(o,'modulus',{
        get: modulus, enumerable:true,configurable:true
    });
    console.log(o.phase,o.modulus);
}
foo2();

//6. 构造器中的this
function foo3(){
    function MyClass(){
        this.a=88;//指向全局变量
        //如果没写return，或者return是基本类型的话
        //会将this作为返回值，也就是88
    }
    var o =new MyClass();
    console.log(o.a);//88

    function C2(){
        this.a =88;
        return {a:89}; //return是一个含有a属性的对象
        //return是对象的话，会将对象作为返回值
    }
    o= new C2();
    console.log(o.a);//89
}
foo3();