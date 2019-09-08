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
foo1();
