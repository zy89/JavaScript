//1.创建一个对象基础方法
var obj ={};//创建空对象 也可以直接var obj ={y:2,x:1};
obj.y =2;//赋值
obj.x =1;
console.log(obj);

//2.对象内的值也可以接着创建对象
var obj1 ={
    x:1,
    y:2,
    o:{
        z:3,
        n:4
    }
};
console.log(obj1);

//3. 原型链
function foo(){} //创建函数对象
foo.prototype.z =3;
var obj2 =new foo();
var a='z' in obj2;//返回true，因为 foo.prototype里有
var b= obj2.hasOwnProperty('z'); //返回false,因为obj2本身没有z
console.log(obj2.z+" "+a+" "+b);//obj2这个对象里没有z，但是它的原型 foo()里有，所有往原型找，找到为3

//申明一个obj2的z
obj2.z=5;//其实是在obj2这个对象里创建了z
var c= obj2.hasOwnProperty('z');//变为true了因为obj2.z创建了
console.log(c+" "+" obj2里的z是"+obj2.z+" " +foo.prototype.z);

delete obj2.z;
console.log("obj2里的z被删除了，所以又变成prototype里的"+obj2.z);



//4.用Object.create
var obj3 = Object.create({x:1});//系统内置函数，会接收一个参数，并且让对象(也就是这里的obj3)的prototype指向这个参数
var d= typeof obj3.toString;//会返回function，因为原型链最后有个Object.prototype函数
var e=obj3.hasOwnProperty('x');//是false，因为x是从原型链上继承的
console.log(obj3.x+" "+d+" "+e);