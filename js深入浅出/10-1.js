//1.正则的概念：在常见的字符串检错或替换中，我们需要提供一种模式表示检索或替换的规则。
//正则表达式使用单个字符串来描述、匹配一系列符合某个句法规则的字符串

//abd 匹配比如aabc,aabcc。但是不会def
//[a-z]{4},匹配abcd,不会0123
// \d\d\d  匹配三个数字，132，012
var a=/\d\d\d/.test("123");
console.log(a);//true，是数字
var b=/\d\d\d/.test("abc");
console.log(b);//false

new RegExp("yzy").test("hi,yzy");//大小写敏感

//2.正则基础
//. 任意字符除了换行符以外
// \d 数字0-9
// \D, 非\d。即不是数字0-9的字符
// \w数字0-9，或字母a-z以及A-Z，或下划线
// \W 非\w
// \s 空格符, tab, 换页符，换行符
// \S 非\s
// \t \r \n \v \f tab，回车，换行，垂直制表符，换页符

//2.2 范围符号
// [...]  表示字符范围；[a-z]表示小写字母a-z
// [^...] 表示字符范围以外
// ^ 表示匹配行首；^Hi表示Hi必须在最开头
// $ 行尾
// \b 零宽单词边界；\bno表示no前要有单词，直接开头no不会匹配
// \B

//2.3特殊符转义 用\
var c=/\^abc/.test('^abc');//直接把^当作字符去判断
console.log(c);//true

//2.4分组
// (x) 分组，并记录匹配到的字符串
// \n 表示使用分组符(x)匹配到的字符串
var d=/(abc)\1/.test('abcabc');// \1等价于abc，所以总共2个abc
console.log(d);// true

//(?:x) 表示仅分组
var e=/(?:abc)(def)\1/.test('abcdefdef');//这样abc就不会被算入\1
console.log(e);

//2.4重复
//x* 重复次数>=0; x+ 重复次数>0;采用贪心算法,匹配尽可能多的
//x*? x+?;非贪心算法，匹配尽可能少的
//x? 出现0或1次
// x|y 表示x或者y； ad|cd|ef可以匹配ab或者cd或者ef
// x{n}表示重复n次；x{n,}表示重复>=n次；x{n,m}表示重复次数x满足n<=x<=m

//3. 三个flag:
//3.1 global标签用来查询全局，避免查到第一个就结束了
//3.2 ignoreCase 不区分大小写
//3.3 multiline 跨行进行检索
/abc/gim.test("ABC");//gim就是三个都用上了
RegExp("abc","mgi");//mgi也是，顺序无所谓

//4. string类型与正则相关的方法
var f= "abcabcdef".search(/(abc)\1/);//找abcabc的位置
console.log(f);//0

var g = "aabbbbcc".replace(/b+?/,"1");//替换尽可能少的b
console.log(g);

var h = "aabbbbcc".match(/b+/);//匹配b
console.log(h);

var i="aabbbbccbbaa".match(/b+/g);//匹配b，加个global标签
console.log(i);//[ 'bbbb', 'bb' ]，全部b都找出来

var k ="aabbbbccbbaa".split(/b+/);//用b当作分割符
console.log(k);//[ 'aa', 'cc', 'aa' ]

