//实现继承的方式
function Person(){}
function Student(){}

//1. Student.prototype = Person.prototype;  错误！！！
//因为Student会有一些自己的属性方法，这样做的话等于也改变了Person
//比如学生会学习subject，但并不是每个Person都会。

//2. Student.prototype = new Person(); 可以，但是有些小问题
//比如Perosn(name, age), Student还没实例化，传什么参数都不合适

//3. 最理想
//创建一个空对象，对象的原型指向Person.prototype
//既保证了可以继承Person.prototype的方法，有保证Student有个空对象（修改不会影响Person）
Student.prototype = Object.create(Person.prototype); 
Student.prototype.constructor = Student;//保证构造器一致

//ES5才支持3方法，ES5之前可以通过以下方法实现：
if(!Object.create){
    Object.create = function(proto){
        function F(){}
        F.prototype = proto;
        return new F;
    };
}