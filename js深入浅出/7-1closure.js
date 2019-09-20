//闭包：从外部读取函数内的局部变量；可以通过再函数的内部再定义一个函数
//优点：灵活和方便，封装
//缺点：空间浪费，内存泄漏，性能消耗

//1.闭包的例子
//常规函数
function outer(){
    var localVal =30;//局部变量
    return localVal;//调用后返回30
}
outer();//30；调用后localVal可以被释放了
//闭包例子
function outer2(){
    var localVal =30;//不能被释放
    return function(){
        return localVal;
    };
}
var func =outer();//调用outer()返回的是匿名函数function()
//这个函数里仍然可以访问外部的outer()的局部变量localVal

func();//调用func()也能访问outer函数的局部变量localVal

//2.常见错误之循环闭包
//想要点击一次弹出一次alert，并报数。
document.body.innerHTML = "<div id=div1>aaa</div>"+
"<div id=div2>bbb</div>"+"<div id=div3>ccc</div>";
for(var i=1;i<4;i++){
    document.getElementById('div'+i).addEventListener('click',function(){
        alert(i);//每次都是4，因为var i其实是全局作用的，闭包把最后i=4调出来了
    });
}
//解决方法：
document.body.innerHTML = "<div id=div1>aaa</div>"+
"<div id=div2>bbb</div>"+"<div id=div3>ccc</div>";
for(var i=1;i<4;i++){
    //如下所示，a.用立即执行的匿名函数给它包装起来
    !function(i){
        //c.传进去以后，再通过ById去引用
        document.getElementById('div'+i).addEventListener('click',function(){
                alert(i);
        });
    }(i);//b.将每次的值传到匿名函数里
}

//3.闭包-封装  
(function(){
    var _userId =23492;
    var _typeId ='item';
    var export = {};

    function converter(userId){
        return+userId;
    }

    export.getUserId = function(){
        return converter(_userId);
    }
    export.getTypeId = function(){
        return _typeId;
    }
    window.export = export;//浏览器里
}());

export.getUserId();//23492;只能通过这个对象上的方法去访问变量
export.getTypeId();//item
//如果直接访问是拿不到的
export._userId;//undefined
export._typeId;//undefined
