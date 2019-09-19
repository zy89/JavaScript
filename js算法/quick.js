function quick(arr){

    if(arr.length<=1){
        return arr;
    }

    var pivotIndex = Math.floor(arr.length/2);//找到pivot的下标，差不多数组长度一半
    var pivot = arr.splice(pivotIndex,1)[0];//找到pivot的值

    var left=[];
    var right=[];
    //遍历数组，小于pivot的放left，大于的放right
    for(var i =0;i+arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    //递归这个步骤
    return quick(left).concat([pivot],quick(right));
}
var arr2=quick([7,7,2,9,5,4]);
console.log(arr2);