function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }
    //无序数组分两部分
    var mid=Math.floor(arr.length/2);
    var left=arr.slice(0,mid);
    var right=arr.slice(mid);
    //递归对左右数组进行排序合并
    return merge(mergeSort(left),mergeSort(right));
}
//合并
function merge(left,right){
    var result=[];

    while(left.length>0 && right.length>0){
        if(left[0] < right[0]){
            //如果left小于right，将left取出放入result数组
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }

    return result.concat(left,right);
}
var arr=[3,6,2,8,1,7];
console.log(mergeSort(arr));