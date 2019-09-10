//1.数组创建
//数组弱类型，可以放不同类型的元素
//包括布尔，对象，和数组都可以存放
var arr = [1,true,null,undefined,{x:1},[1,2,3]];
console.log(arr[5][1]);//返回2，arr[5]是[1,2,3]，arr[5][2]是2
var arr2 = new Array();
var arrWithLength = new Array(100);
var arrLikesLiteral = new Array(true, false,null,1,2,'hi');//等价于[]

//2.数组元素增删
//添加元素
function foo1(){
    var arr1 =[];
    arr1[0] =1;
    arr1[1]=2;
    arr1.push(3);
    console.log(arr1);//[1,2,3]
    //添加末尾
    arr1[arr1.length]=4;//相当于arr1.push(4)
    console.log(arr1);//[1,2,3,4]
    //添加头部
    arr1.unshift(0);
    console.log(arr1);//[0,1,2,3,4]

    //删除元素
    delete arr1[2];
    console.log(arr1);//[0,1,undefined,3,4]
    var a= 2 in arr1;
    console.log(arr1.length+" "+a);//长度还是5，但是a是false
    //删除末尾
    arr1.length -=1;
    console.log(arr1);//[0,1,undefined,3]

    arr1.pop();
    console.log(arr1);//[0,1,undefined]
    //删除头部
    arr1.shift();
    console.log(arr1);//[1,undefined]
}

//3.遍历数组
var arr3 =[1,2,3,4,5];
//一般的for循环
function way1(){
    for(var i=0;i<arr3.length;i++){
        console.log(arr3[i]);
    }
}
way1();

// for in循环
function way2(){
    //注意：数组也是对象，所以for in是会循环到原型链上的
    for(var i in arr3){
        console.log(arr3[i]);
    }
}
way2();

//过滤掉原型链上的for in
function way3(){
    Array.prototype.x = 'inherited';
    for(var i in arr3){
        console.log(arr3[i]);//输出是1,2,3,4,5,inherited
    }
    //过滤掉原型链
    for(i in arr3){
        if(arr3.hasOwnProperty(i)){
            console.log(arr3[i]);
        }
    }
}
way3();

