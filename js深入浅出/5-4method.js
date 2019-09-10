//7. forEach
function foo(){
    var arr=[1,2,3,4,5];
    arr.forEach(function(x,index,a){
        console.log(x+'|'+index+'|'+(a ===arr));
    });
}
//foo();

//8. map 数组映射。不修改原数组
function foo1(){
    var arr=[1,2,3];
    var arr1=arr.map(function(x){
        return x+10;
    });
    console.log(arr1);//11,12,13
    console.log(arr);
}
//foo1();

//9.filter 数组过滤。不修改原始数组
function foo2(){
    var arr=[1,2,3,4,5,6,7,8,9,10];
    var arr1=arr.filter(function(x,index){
        return index%3 ===0 ||x>=8;
    });
    console.log(arr1);//返回arr[0],arr[3],arr[6],arr[9]和所有arr[x]大于8的元素
    console.log(arr);
}
//foo2();

//10. every&some 数组判断
function foo3(){
    var arr=[1,2,3,4,5];
    var b1=arr.every(function(x){
        return x<10;
    });//true,每个元素都小于10
    var b2=arr.every(function(x){
        return x<3;
    });//false,判断到3就输出false

    var b3=arr.some(function(x){
        return x===3;
    });//true,有元素等于3
    var b4=arr.some(function(x){
        return x===100;
    });//false

    console.log(b1+" "+b2+" "+b3+" "+b4);
}
//foo3();

//11.reduce&reduceRight 聚合器。不修改原数组
function foo4(){
    var arr=[1,2,3];
    var sum=arr.reduce(function(total,num){
        return total+num;
    });//先算1+2；再算3+3.从左往右
    console.log(sum);

    var arr1=[3,9,6];
    var max =arr1.reduce(function(x,y){
        console.log(x+'|'+y);
        return x>y? x:y;
    });//也可以用来输出最大数
    console.log(max);

    //reduceRight就是从右往左，先6和9比；再9和3比。用法一样
}
//foo4();

//12.indexOf&lastIndexOf 数组检索
function foo5(){
    var arr =[1,2,3,2,1];
    console.log(arr.indexOf(2));//1
    console.log(arr.indexOf(99));//-1，没有就返回-1
    console.log(arr.indexOf(1,1));//查找1，但是从index1也就是第二个元素开始。返回4
    console.log(arr.indexOf(1,-3));//查找1，从屁股的-3位开始找。返回4
    console.log(arr.indexOf(2,-1));//查找2，从最后开始。返回-1
    console.log(arr.lastIndexOf(2));//找最后的2元素在arr[3]，返回3
    console.log(arr.lastIndexOf(2,-2));//找2，从index3开始往左找。返回3
    console.log(arr.lastIndexOf(2,-3));//找2，从index2开始往左找。返回1
}
//foo5();

//13. Array.isArray([]) 判断是否为数组
function foo6(){
    var arr=[];
    var b = Array.isArray(arr);
    console.log(b);//true
}
foo6();