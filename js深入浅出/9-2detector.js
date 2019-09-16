//练习：探测器
//最外层是模块化
//父类
!function(global){
    function DetectorBase(configs){
        //判断是否用new来调用。
        if(!this instanceof DetectorBase){
            throw new Error('Do not invoke without new.');
        }
        this.configs = configs;
        this.analyze();
    }
    //抽象
    DetectorBase.prototype.detect=function(){
        throw new Error('Not implemented');
    };

    DetectorBase.prototype.analyze = function(){
        console.log('analyzing...');
        this.data = '###data###';
    };
};
//第一个子类检测link
function LinkDetector(links){
    if(!this instanceof LinkDetector){
        throw new Error('Do not invoke without new.');
    }
    this.links = links;
    DetectorBase.apply(this,arguments);//调用自己的同时，也调用基类的构造器
}

//第二个子类检测container
function ContainerDetector(containers){
    if(!this instanceof ContainerDetector){
        throw new Error('Do not invoke without new');
    }
    this.containers=containers;
    DetectorBase.apply(this,arguments);
}

//先继承
inherit(LinkDetector,DetectorBase);
inherit(ContainerDetector,DetectorBase);
//再扩展
LinkDetector.prototype.detect=function(){
    console.log('Loading data: '+this.data);
    console.log('Link detection started.');
    console.log('Scaning links: '+this.links);
};

ContainerDetector.prototype.detect=function(){
    console.log('Loading data: '+this.data);
    console.log('Container detection started.');
    console.log('Scaning containers: '+this.containers);
};

//冻结数据，监控时不想数据再被改写
//freeze方法把数据冻结，不可删不可扩展不可写
Object.freeze(DetectorBase);
Object.freeze(DetectorBase.prototype);
Object.freeze(LinkDetector);
Object.freeze(LinkDetector.prototype);
Object.freeze(ContainerDetector);
Object.freeze(ContainerDetector.prototype);