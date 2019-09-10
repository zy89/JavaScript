var arr=[[0,1],[2,3],[4,5]];
var row;
for(var i=0;i<arr.length;i++){
    row =arr[i];//存放每个小数组
    console.log('row ' +i);//打印小数组
    for(var j=0;j<row.length;j++){
        console.log(row[j]);//打印出小数组里的元素
    }
}