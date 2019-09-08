//writable:是否可修改
//enumerable:是否可枚举，可以的话遍历中才会出现
//configurable：这些属性标签是否可以再被修改，也表示是否能删除这个属性
//ex:
function foo(){
console.log(Object.getOwnPropertyDescriptor({pro:true},'pro'));
//输出：{value: true, writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor({pro:true},'a'));
//输出是undefined,因为没有a这个属性
}
//foo();


function foo1(){
    var person ={};
    //defineProperty是Object上的方法，接收3个参数
    //第一个参数是要添加属性的对象
    //第二个是字符串属性的名字
    //第三个是对象
    Object.defineProperty(person, 'name', {
        configurable:false,
        writable:false,
        enumerable:true,
        value:"zhiyuan yu"
    });

    console.log(person.name);//输出zhiyuan yu
    person.name=1;//没用，因为name的writable是false
    console.log(delete person.name);//返回false，因为是configurable是false
}
foo1();