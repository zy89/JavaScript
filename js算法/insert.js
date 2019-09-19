/*
扑克牌概念
*/
function insert(arr) {
    var length = arr.length;
    for(var i = 1; i < length; i++) {
      for(var j = i; j > 0; j--) {
        if(arr[j] <arr[j-1]) {
            var temp = arr[j];
            arr[j] = arr[j-1]; 
            arr[j-1] = temp;  
        }
        else{
            break;      // 当前考察的数大于前一个数，证明有序，退出循环
        }
      }
    }
    console.log(arr);
  }
insert([2,9,7,5,6]);
