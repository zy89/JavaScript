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
foo3();