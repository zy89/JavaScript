//1.继承的基本概念
function Foo(){
    this.y =2;
}
//随便创一个函数声明，就会有一个Foo.prototype的内置属性。并且这个属性是对象
console.log(typeof Foo.prototype);//object
Foo.prototype.x=1;//把prototype增加一个属性x，并赋值1
var obj3= new Foo();//创建一个实例

console.log(obj3.y);//2;y是这个对象上的
console.log(obj3.x);//1；x是原型链上的Foo.prototype的

//2.例子
//2.1先初始化好一个Person类
function Person(name,age){
    this.name=name;
    this.age=age;
}
//创建了一个Person.prototype上共享的方法hi
Person.prototype.hi =function(){
    console.log('Hi, my name is '+this.name+', I am '+this.age+' years old now');
};
//设置一些对Person类来说共享的数据
Person.prototype.LEGS_NUM=2;
Person.prototype.ARMS_NUM=2;
Person.prototype.walk =function(){
    console.log(this.name + ' is walking...');//调用的时候输出名字和is walking
};

//2.2再初始化一个Student类
function Student(name,age,className){
    //先调用父类Person，this就是Person里的this。然后把name和age传进去
    Person.call(this,name,age);
    this.className =className;//把班级名做好赋值
}

//2.3怎么把student的实例去继承Person上的方法
//Object.create用来创建一个空对象，并且对象的原型指向它的参数
Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor=Student;//保持constructor指向Student

//可以覆盖原来Person的hi方法：
Student.prototype.hi = function(){
    console.log('Hi, my name is '+this.name+', I am '+
    this.age+' years old now, and from '+
    this.className);
};
//也可以有自己的方法
Student.prototype.learn=function(subject){
    console.log(this.name+' is learning '+
    subject+' at '+ this.className);
};
