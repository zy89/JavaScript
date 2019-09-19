
//写一个获取标签函数去调用
function getDes(o,b){
    return Object.getOwnPropertyDescriptor(o,b);
}
/*
var person={};
Object.defineProperty(person, 'name', {
    configurable:false,
    writable:false,
    enumerable:true,
    value:"zhiyuan yu"
});
console.log(getDes(person,'name'));
*/
function foo(){
var obj ={x:1,y:2};
console.log("before preventEx: "+Object.isExtensible(obj));//true
Object.preventExtensions(obj);//改为不可扩展
console.log("after preventEx: "+Object.isExtensible(obj));//false

console.log(getDes(obj,'x'));//值是1，三个都为true

Object.seal(obj);//把configurale设置为false防止标签被乱改
console.log(getDes(obj,'x'));//configurable通过seal之后改为false

Object.freeze(obj);//把configurable和writable都改为false
console.log(getDes(obj,'x'));
//以上方法都不会影响原型链
}
//foo();

//序列化
function foo1(){
    var obj1 = {x:1, y:true, z:[1,2,3], nullVal:null};
    var a=JSON.stringify(obj1);
    console.log(a);

    var obj2 = {val:undefined, a:NaN, b:Infinity, c:new Date()};
    //undefiend和Infinity会变成null,Date()会变成UTC时间
    var b=JSON.stringify(obj2);
    console.log(b);
}
//foo1();

//自定义序列化顺序
function foo2(){
    var obj ={
        x:1,
        y:2,
        o:{
            o1:1,
            o2:2,
            toJSON:function(){
                return this.o1+this.o2;
            }
        }
    };
    console.log(JSON.stringify(obj));
}
//foo2();
