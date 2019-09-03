try {
    try{
        throw new Error("oops");
    }catch (ex){
        console.error("inner",ex.message);//内层抓住异常
    }finally{
        console.log("finally");//执行finally
    }
} catch (ex) {
    console.error("outer",ex.message);//外层就没有异常了
}

try {
    try{
        throw new Error("oops");
    }catch (ex){
        console.error("inner",ex.message);//内层抓住异常，抛出
        throw ex;//再抛出一个异常
    }finally{
        console.log("finally");//执行finally
    }
} catch (ex) {
    console.error("outer",ex.message);//外层catch住
}