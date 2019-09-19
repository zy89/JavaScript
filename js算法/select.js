/*
首先在未排序序列中找到最小元素，存放到排序序列的起始位置，
然后，再从剩余未排序元素中继续寻找最小元素，然后放到已排序序列的末尾。
以此类推，直到所有元素均排序完毕
*/
function select(arr){
    for(var i = 0;i<arr.length-1; i++){
        var min=arr[i];
        for(var j=i+1; j<arr.length; j++){
            if(arr[j] < min){
                var temp=min;
                min=arr[j];
                arr[j]=temp;
            }
        }
        arr[i]=min;
    }
    console.log(arr);
}
select([3,1,4,2,7]);
