
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
var obj ={x:1,y:2};
console.log("before preventEx: "+Object.isExtensible(obj));//true
Object.preventExtensions(obj);//改为不可扩展
console.log("after preventEx: "+Object.isExtensible(obj));//false

console.log(getDes(obj,'x'));//值是1，三个都为true
Object.seal(obj);//把configurale设置为false防止标签被乱改
console.log(getDes(obj,'x'));//configurable通过seal之后改为false
