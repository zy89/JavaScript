//1.二维数组
var arr=[[0,1],[2,3],[4,5]];
var row;
for(var i=0;i<arr.length;i++){
    row =arr[i];//存放每个小数组
    console.log('row ' +i);//打印小数组
    for(var j=0;j<row.length;j++){
        console.log(row[j]);//打印出小数组里的元素
    }
}

//2.稀疏数组：并不含有从0开始的连续索引
var arr1 =[];
arr1.length =100;//长度100
arr1[99]=123;//最后一个元素是123
console.log(arr[98]);//123以前没有任何元素
