//1.属性删除
var person ={age:28, title:'fe'};
delete person.age;
delete person['title'];


//2.属性检测
var cat = new Object;
cat.legs=4;
cat.name = "Kitty";
//console.log(cat);
function foo(){
    var a = cat.hasOwnProperty('legs');//true,cat对象里有legs
    var b = cat.hasOwnProperty('toString');//false， cat本身没有toString。prototype里才有
    console.log(a+" "+b);
}
//foo();

function foo1(){
    var a =cat.propertyIsEnumerable('legs');//true
    var b= cat.propertyIsEnumerable('toString');//false
    console.log(a+" "+b);
}
//foo1();

//用Object.defineProperty
Object.defineProperty(cat, 'price', {enumerbale:false, value:1000});//用这个方式定义属性默认是不可枚举
function foo3(){
    var a = cat.propertyIsEnumerable('price');
    console.log(a);
}
//foo3();

//3.属性枚举
var o ={x:1, y:2, z:3};
var obj = Object.create(o); //把新的obj和原型链上的o都输出
obj.a =4;
var key;
for (key in obj){
    console.log(key);//a,x,y,z都有
}

//如果只要新对象上的属性，不要原型链的一起。那就多一个if判断
var key2;
for (key2 in obj){
    if(obj.hasOwnProperty(key2)){
        console.log(key2);//只有a
    }
}