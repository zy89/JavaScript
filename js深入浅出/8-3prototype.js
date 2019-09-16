function foo(){}
foo.prototype.z =3;//所有new foo()的实例化都会有个z=3

var obj=new foo();//实例化
obj.y=2;//obj上自己的属性
obj.x=1;

console.log(obj.x);
console.log(obj.y);
console.log(obj.z);//3,指向了foo.prototype
console.log(typeof obj.toString);//在Object.prototype上
console.log('z' in obj);//true
console.log(obj.hasOwnProperty('z'));//false，obj本身没有

