function bubblesort(arr){
    
    for(var i=0;i<arr.length-1;i++){
        for(var j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    console.log(arr);
}
bubblesort([3,4,1,2]);
