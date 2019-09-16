//instanceof左边一般要求是对象（不是的话会返回false），右边是函数（不是函数就没有prototype属性，没法判断）
//它会判断右边构造器的属性是否出现在左边对象的原型链上
var a=[1,2] instanceof Array;
console.log(a);//true

var b= new Object() instanceof Array;//随便一个空对象的原型指向Object.prototype
console.log(b);//false, 空对象原型链上没有Array.prototype

//注意：不同的window或者iframe间的对象类型检测不能用instanceof