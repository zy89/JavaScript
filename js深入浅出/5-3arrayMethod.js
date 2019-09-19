//数组有很多方法可以使用，ES5 ES6版本
//1. Array.prototype.join  常用于将数组转为字符串
var arr =[1,2,3];
function foo(){
    console.log(arr.join());//join()没有东西的话默认用逗号
    console.log(arr.join("_"));// 1_2_3
}
//foo();

//通过join方法可以快速写一个重复字符串的函数
function repeatString(str,n){
    return new Array(n+1).join(str);
}
console.log(repeatString("a",3));
console.log(repeatString("Hi",5));

//2.reverse方法。修改原数组
var arr1=[1,2,3];
arr1.reverse();//是修改原数组的
console.log(arr1);//[3,2,1]

//3.sort方法。修改原数组
var arr2=["a","b","c","d"];
console.log(arr2.sort());//abcd，sort是按字母顺序排序的，因此无法直接排序数字
//数字sort
var arr3=[13,24,51,3];
arr3.sort(function(a,b){
    return a-b;//从大到小就是b-a
});
console.log(arr3);//也是修改原数组

//对象sort
arr4=[{age:25},{age:39},{age:99}];
arr4.sort(function(a,b){
    return a.age-b.age;
});
arr4.forEach(function(item){
    console.log('age',item.age);
});

//4.concat方法 合并数组。不修改原数组
var arr5 =[1,2,3];
console.log(arr5.concat(4,5));//1,2,3,4,5
console.log(arr5);//不修改原始数组，还是1，2，3
var arr6=arr5.concat([10,11],13);//1,2,3,10,11,13小数组会被拉平
console.log(arr6);

//如果参数是数组，里面还有数组如[1,[2,3]]。不会拉平两次
var arr7=arr5.concat([1,[2,3]]);
console.log(arr7);//1，2，3，1，[2,3]

//5.silce用法，左闭右开原则(index下表，开始包括结束不包括))。不修改原数组
function foo5(){
    var arr=[1,2,3,4,5];
    console.log(arr.slice(1,3));//从arr[1]到arr[3]前一个，也就是2，3
    console.log(arr.slice(1));//从arr[1]开始到最后所有，也就是2,3,4,5
    console.log(arr.slice(1,-1));//-1就是倒数第一位，也就是arr[4]。2，3，4
    console.log(arr.slice(-4,-3));//-4是arr[1]，-3是arr[2]。2
}
foo5();

//6.splice数组拼接。修改原数组
function foo6(){
    var arr=[1,2,3,4,5];
    arr.splice(2);//arr[2]开始剔除数组，等于把3,4,5删除
    console.log(arr);//1，2

    var arr1=[1,2,3,4,5];
    arr1.splice(2,2);//arr[2]开始剔除，剔除2个元素。等于删除3，4
    console.log(arr1);//1,2,5

    var arr2=[1,2,3,4,5];
    arr2.splice(1,1,'a','b');//arr[1]开始剔除，剔除1个。等于删除2。同位置又加上a和b
    console.log(arr2);//1,'a','b',3,4,5
}
foo6();