
//基本get/set
var man ={
    name: 'yzy',
    weibo: '@yzy',
    get age(){
        return new Date().getFullYear() - 1995; //调用Date函数减去1995
    },
    set age(val){
        console.log('Age can\'t be set to '+ val);//如果要set的话不被允许
    }
};
function foo(){
    console.log(man.age);//24
    man.age = 100;//输出那句话
    console.log(man.age);//还是24
}

//赋值age的方法
var man1={
    weibo:'@yzy',
    $age:null,
    get age(){
        if(this.$age == undefined){
            return new Date().getFullYear() - 1995;
        }else {
            return this.$age;
        }
    },
    set age(val){
        val = +val;//字符串转换为数字
        //isNaN方法，检查一个变量是否能转换为数字，能转换返回false，不能返回true
        if(!isNaN(val) && val>0 && val<150){
            this.$age = +val;
        }else {
            throw new Error('Incorrect val =' +val);
        }
    }
};
function foo1(){
    console.log(man1.age);
    man1.age=100;
    console.log(man1.age);
    man1.age ='abc';
}
//foo1();

//get/set与原型链的关系

function foo2(){
    //在foo2里定义一个z，用get方法返回一个1
    Object.defineProperty(foo2.prototype, 'z',{get:function(){return 1;}});
}
var obj2 =new foo2();
console.log(obj2.z);
obj2.z=10;
console.log("z is still:"+obj2.z); //因为原型里有get函数，所以无法给new obj2里创建新的z
//实现方法：
Object.defineProperty(obj2,'z',{value:100,configurable:true});//定义z为100
console.log("now obj2.z is: "+obj2.z);
delete obj2.z;//删除obj2里的z
console.log("delete obj2.z then z back to: "+obj2.z);


