//1.重载：重载就是一组具有相同名字、不同参数列表的函数（方法）
function Person(){
    var args = arguments;
    //判断第一个参数是否是对象，&&用来排除null（null也是object）
    if(typeof args[0] === 'object' && args[0]){
        if(args[0].name){
            this.name = args[0].name;
        }
        if(args[0].age){
            this.age = args[0].age;
        }
    }else{
        if(args[0]){
            this.name = args[0];
        }
        if(args[1]){
            this.age = args[1];
        }
    }
}

Person.prototype.toString = function(){
    return 'name= ' + this.name + ', age= '+this.age;
};

var yzy = new Person('yzy',27);
console.log(yzy.toString());

var xx = new Person({name:'xx',age:38});
console.log(xx.toString());

//2.链式调用
function ClassManager(){}
ClassManager.prototype.addClass = function(str){
    console.log('Class: '+ str+ ' added.');
    return this;//实例化
};
var manager = new ClassManager();
manager.addClass('classA').addClass('classB').addClass('classC');

//3.抽象类

//4.模块化,声明一个函数马上调用
var moduleA;
moduleA = function(){
    var prop =1;
    function func(){}
    return {
        func:func,
        prop:prop
    };
}();
