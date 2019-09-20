function f1(){
    var n=999;
    function f2(){
    　　return n; // 999
    }
    return f2();
}
console.log(f1());