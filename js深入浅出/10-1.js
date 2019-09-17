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
