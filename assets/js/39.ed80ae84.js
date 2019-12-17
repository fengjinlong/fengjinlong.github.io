(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{155:function(n,a,e){"use strict";e.r(a);var t=e(0),s=Object(t.a)({},function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"基础语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础语法","aria-hidden":"true"}},[n._v("#")]),n._v(" 基础语法")]),n._v(" "),e("ol",[e("li",[n._v("PHP 脚本以 <?php 开始，以 ?> 结束")]),n._v(" "),e("li",[n._v('PHP 文件的默认文件扩展名是 ".php"')]),n._v(" "),e("li",[n._v("PHP 文件通常包含 HTML 标签和一些 PHP 脚本代码")]),n._v(" "),e("li",[n._v("PHP 中的每个代码行都必须以分号结束，否则输出错误")])]),n._v(" "),e("h2",{attrs:{id:"变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变量","aria-hidden":"true"}},[n._v("#")]),n._v(" 变量")]),n._v(" "),e("ol",[e("li",[n._v("变量以 $ 符号开始，后面跟着变量的名称,$a")]),n._v(" "),e("li",[n._v("变量名必须以字母或者下划线字符开始")]),n._v(" "),e("li",[n._v("变量名只能包含字母数字字符以及下划线（A-z、0-9 和 _ ）")]),n._v(" "),e("li",[n._v("变量名不能包含空格")]),n._v(" "),e("li",[n._v("变量名是区分大小写的（$y 和 $Y 是两个不同的变量）")]),n._v(" "),e("li",[n._v("由于PHP是弱类型语言所以变量不必声明类型和JS类似")])]),n._v(" "),e("h3",{attrs:{id:"四种不同的变量作用域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四种不同的变量作用域","aria-hidden":"true"}},[n._v("#")]),n._v(" 四种不同的变量作用域")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("local 局部\nglobal 全局\nstatic 局部-静态变量\nparameter 参数\n\n<?php \n  $age = 20; //全局作用域\n  $name = 'zhangsan';\n  function people () {\n    $isJob  = 'yes'; //局部变量\n    global $name;   //访问全局作用域\n    var_dump($name);  // zhangsan \n  }\n  people()\n?>\n\n1. $age 是在函数外部定义的变量，拥有全局作用域，但是这里和 JS 的区别是 $age 在people函数中是不可访问的\n2. $isJob 是在函数内部声明的变量所以是局部变量，只能在函数内部访问\n3. $name global 是在函数内部调用函数外部定义的全局变量,正常情况在函数内部访问函数外部的变量则为NULL\n")])])]),e("h3",{attrs:{id:"static-作用域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#static-作用域","aria-hidden":"true"}},[n._v("#")]),n._v(" Static 作用域")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("<?php\n  function test() {\n    static $a = 0;\n    // static $a = 1 + 2; // 解析错误 参照解析2\n    echo $a;\n    $a++;\n  }\n  test (); //0\n  test (); //1\n  test (); //2\n?>\n解析：\n\n1. 静态全局变量的作用域局限于一个源文件内，只能为该源文件内的函数公用\n2. 不能对静态变量用表达式的结果赋值，否则会导致解析错误\n3. static全局变量只初使化一次，下一次依据上一次结果值，上例子中调用三次执行的结果是累加的。\n4. 在内存的静态存储区中（静态存储区在整个程序运行期间都存在，其他局部变量存储在栈中。\n")])])]),e("h2",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结","aria-hidden":"true"}},[n._v("#")]),n._v(" 小结")]),n._v(" "),e("blockquote",[e("ul",[e("li",[n._v("定义在函数外部的就是全局变量，它的作用域从定义处一直到文件结尾。")]),n._v(" "),e("li",[n._v("函数内定义的变量就是局部变量，它的作用域为函数定义范围内。")]),n._v(" "),e("li",[n._v("函数内访问全局变量需要 global 关键字,如果不使用，则会覆盖全局变量")])])]),n._v(" "),e("h3",{attrs:{id:"数组内置函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数组内置函数","aria-hidden":"true"}},[n._v("#")]),n._v(" 数组内置函数")]),n._v(" "),e("blockquote",[e("ul",[e("li",[n._v("for、foreach循环输出数组元素")])])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("<?php \n  // for循环\n  for ($i = 0; $i <= 100; $i++) {\n    echo \"$i <br/>\";\n  } \n\n  // foreach 只适用于数组\n  $name = array('zhangsan', 'lisi', 'wangwu');  // 创建数组\n  foreach ($name as $value) {\n    echo \"$value <br/>\";\n  }\n?>\n")])])]),e("blockquote",[e("ul",[e("li",[n._v("count() 获取数组元素的个数")])])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("<?php\n  $nameLength = array('zhangsan', 'lisi', 'wangwu');\n  echo count($nameLength); // 3\n?>\n")])])]),e("blockquote",[e("ul",[e("li",[n._v("输出数组当前的元素的值，如果当前元素为空或者无值则返回FALSE")])])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("<?php\n  $name = array('zhangsan', 'lisi', 'wangwu');\n\n  echo current($name); // 返回第一个元素zhangsan \n\n  echo end($name); // 返回最后一个元素wangwu\n\n  echo next($name); // 返回指定元素的下一个元素\n\n  echo prev($name); // 返回指定元素的上一个元素\n\n  echo reset($name); // 把内部指针移动到数组的首个元素zhangsan\n\n?>\n")])])]),e("blockquote",[e("ul",[e("li",[n._v("对当前数组进行排序")])])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("  $numbers = array(1, 2, 3, 3, 4, 5, 6, 2);\n\n  // 返回bool\n  sort($numbers);  //对数组进行升序成功则为true 失败则为false\n  rsort($numbers); //对数组进行降序成功则为true 失败则为false\n  array_reverse($array, $preserve); //对原数组按反序排序，返回排序后的数组(2, 6, 5, 4, 3, 3, 2, 1)\n")])])]),e("blockquote",[e("ul",[e("li",[n._v("合并数组")])])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("$arr = array(1, 2, 3, 3, 4, 5, 6, 2);\n$arr1 = array(10, 20, 30);\n\narray_merge($arr, $arr1 );\n")])])]),e("blockquote",[e("ul",[e("li",[n._v("压栈，出栈")])])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("$name = 'wang';\n$name1  = array('zhang', 'li');\n\narray_push($name1, $name); // 3 返回新数组的长度\n\narray_pop($name1); //li 返回被pop的值。栈为空，返回null\n\narray_shift($name1); //删除第一个元素并返回；\n\narray_unshift(array，val1，val2,...); //将参数按照顺序加入队列中\n")])])]),e("blockquote",[e("ul",[e("li",[n._v("统计数组中值为出现的次数")])])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("$val = array(1, 2, 3, 3, 4, 3, 3, 1, 1);\nprint_r(array_count_values($val));\n")])])]),e("blockquote",[e("ul",[e("li",[n._v("过滤数组的元素")])])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function func ($var) {\n  return($var & 1);\n}\n\n$val = array('a', 'b', 2, 3, 4);\nprint_r(array_filter($val, 'func')); // 3\n")])])]),e("blockquote",[e("ul",[e("li",[n._v("检查索引是否在数组中")])])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("$people = array('name'=>'renbo', 'age'=>'28');\n\nif (array_key_exists('name', $people)) {\n  echo 'name存在';\n}```\n>+ 检查数组中是否存在指定的值\n")])])]),e("p",[n._v("$val = array('zhangsan', 'lisi', 'wangwu');\nif (in_array('zhangsan', $val)) {\necho '存在';\n}```")]),n._v(" "),e("blockquote",[e("ul",[e("li",[n._v("返回当前元素的Key")])])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("$people = array('name'=>'renbo', 'age'=>'28');\nkey($people); //name\n")])])]),e("blockquote",[e("ul",[e("li",[n._v("返回当前元素所有的key")])])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("$people = array('name'=>'renbo','age'=>'28');\nprint_r(array_keys($people)); // name age\n")])])]),e("h2",{attrs:{id:"mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql","aria-hidden":"true"}},[n._v("#")]),n._v(" mysql")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("注意分号\n登录\nmysql -uroot -p\n查看\nshow databases;\n设定默认数据库\nuse db_test;\n\nMySQL函数SQL语句\ncount \n    COUNT(column_name) 函数返回指定列的值的数目（NULL 不计入）：\n    SELECT count (*) FROM t_student\n    WHERE gender ='M'\nmin()\n    MIN() 函数返回指定列的最小值。\n    SELECT min(指定列) FROM 表 //仅返回指定列数据\n    SELECT min(指定列), t_student.* FROM db_test.t_student\nmax()\n    MAX() 函数返回指定列的最大值。\nsum()\n    求和\nsqrt()\n    求平方根\nnow()\n    当前时间\nrand()\n    得到一个随机数//0-1之间带小数的\nconcat()拼接字符串\n    concat(字段，字段)\n    SELECT concat(字段.\"任何字符串\".字段) FROM 表；\n")])])]),e("h2",{attrs:{id:"sql筛选"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sql筛选","aria-hidden":"true"}},[n._v("#")]),n._v(" SQL筛选")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("SELECT * FROM t_student\nWHERE birthdate <='1993'\nWHERE birthdate >='1991'\n\nSELECT * FROM t_student\nWHERE birthdate BETWEEN '1991' AND '1993'\n\n找姓王同学\nSELECT * FROM t_student\nWHERE name LIKE '王%' \n% 通配符\n\n名字带王的\nSELECT * FROM t_student\nWHERE name LIKE '%王%' \n")])])]),e("p",[n._v("'-- 'sql注释\nLIKE会降低性能")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("按生日排序\n顺序\nSELECT * FROM t_student\nORDER BY birthdate\n逆序\nSELECT * FROM t_student\nORDER BY birthdate DESC\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("SELECT * FROM db_test.t_class\n\n将学生表与班级表关联查询\nSELECT * FROM t_student,t_class\nWHERE t_student.class_id=t_class.class_id\n筛选某些字段\nSELECT t_student.id,t_student.name,t_class.className FROM t_student,t_class\nWHERE t_student.class_id=t_class.class_id\n")])])]),e("h2",{attrs:{id:"oop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oop","aria-hidden":"true"}},[n._v("#")]),n._v(" OOP")]),n._v(" "),e("h3",{attrs:{id:"面向对象基础概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面向对象基础概念","aria-hidden":"true"}},[n._v("#")]),n._v(" 面向对象基础概念")]),n._v(" "),e("p",[n._v("Object Oriented Programming，简称OOP，是一种程序设计思想。OOP把对象作为程序的基本单元，一个对象包含了数据和操作数据的函数")]),n._v(" "),e("h3",{attrs:{id:"对象的主要三个特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对象的主要三个特性","aria-hidden":"true"}},[n._v("#")]),n._v(" 对象的主要三个特性")]),n._v(" "),e("ol",[e("li",[n._v("对象的行为：可以对 对象施加那些操作，开灯，关灯就是行为")]),n._v(" "),e("li",[n._v("对象的形态：当施加那些方法是对象如何响应，颜色，尺寸，外型")]),n._v(" "),e("li",[n._v("对象的表示：对象的表示就相当于身份证，具体区分在相同的行为与状态下有什么不同")])]),n._v(" "),e("h3",{attrs:{id:"面向对象内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面向对象内容","aria-hidden":"true"}},[n._v("#")]),n._v(" 面向对象内容")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('类 − 定义了一件事物的抽象特点。类的定义包含了数据的形式以及对数据的操作\n\n对象 − 是类的实例\n\n成员变量 − 定义在类内部的变量。该变量的值对外是不可见的，但是可以通过成员函数访问，在类被实例化为对象后，该变量即可称为对象的属性\n\n成员函数 − 定义在类的内部，可用于访问对象的数据\n\n继承 − 继承性是子类自动共享父类数据结构和方法的机制，这是类之间的一种关系。在定义和实现一个类的时候，可以在一个已经存在的类的基础之上来进行，把这个已经存在的类所定义的内容作为自己的内容，并加入若干新的内容\n\n父类 − 一个类被其他类继承，可将该类称为父类，或基类，或超类\n\n子类 − 一个类继承其他类称为子类，也可称为派生类\n\n多态 − 多态性是指相同的函数或方法可作用于多种类型的对象上并获得不同的结果。不同的对象，收到同一消息可以产生不同的结果，这种现象称为多态性\n\n重载 − 简单说，就是函数或者方法有同样的名称，但是参数列表不相同的情形，这样的同名不同参数的函数或者方法之间，互相称之为重载函数或者方法\n\n抽象性 − 抽象性是指将具有一致的数据结构（属性）和行为（操作）的对象抽象成类。一个类就是这样一种抽象，它反映了与应用有关的重要性质，而忽略其他一些无关内容。任何类的划分都是主观的，但必须与具体的应用有关\n\n封装 − 封装是指将现实世界中存在的某个客体的属性与行为绑定在一起，并放置在一个逻辑单元内\n\n构造函数 − 主要用来在创建对象时初始化对象， 即为对象成员变量赋初始值，总与new运算符一起使用在创建对象的语句中\n\n析构函数 − 析构函数(destructor) 与构造函数相反，当对象结束其生命周期时（例如对象所在的函数已调用完毕），系统自动执行析构函数。析构函数往往用来做"清理善后" 的工作（例如在建立对象时用new开辟了一片内存空间，应在退出前在析构函数中用delete释放）\n')])])]),e("h3",{attrs:{id:"php中类的定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php中类的定义","aria-hidden":"true"}},[n._v("#")]),n._v(" PHP中类的定义")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(" <?php\n    class People {\n      // 公有成员属性\n      public $name = 'zhangsan';\n      public $age = 28;\n      // 公有成员函数方法\n      public function sayName () {\n        //业务逻辑 \n      }\n    }\n  ?>\n")])])]),e("h3",{attrs:{id:"php中对象的创建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php中对象的创建","aria-hidden":"true"}},[n._v("#")]),n._v(" PHP中对象的创建")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("class People {\n    // 公有成员属性\n    public $name = 'zhangsan';\n    public $age = 28;\n    // 公有成员函数方法（$this代表自身的对象);\n    public function sayName () {\n      echo $this->name;\n    }\n  }\n  // 通过new操作符创建对象\n  $body = new People();\n  // 成员对象的调用\n  $body->study();\n")])])]),e("h3",{attrs:{id:"php-构造函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php-构造函数","aria-hidden":"true"}},[n._v("#")]),n._v(" php 构造函数")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("class People {\n  // 通过构造方法为成员变量赋初始值\n  function __construct( $name, $age ) {\n    $this->name = $name;\n    $this->age = $age;\n  }\n  // 公有成员函数方法（$this代表自身的对象);\n  public function sayName () {\n    echo(\"my name is &nbsp;\" .$this->name.\",&nbspI`m&nbsp;\" .$this->age .\"&nbsp;years old\");\n    echo '</br>';\n  }\n}\n// 通过new操作符创建zhangsan对象\n$zhangsan = new People('zhangsan', 28);\n$zhangsan->sayName();\n\n// 通过new操作符创建lisi对象\n$lisi = new People('lisi', 26);\n$lisi->sayName();\n")])])]),e("h3",{attrs:{id:"php中析构函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php中析构函数","aria-hidden":"true"}},[n._v("#")]),n._v(" PHP中析构函数")]),n._v(" "),e("p",[n._v("析构函数 (destructor) 与构造函数相反，当对象结束其生命周期时，系统自动执行析构函数，常用场景例如连接数据库在__construct中,处理完数据断开连接在__destruct方法中")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(" class People {\n    // 通过构造方法为成员变量赋初始值\n    function __construct ($name, $age) {\n      $this->name = $name;\n      $this->age = $age;\n    }\n    // 公有成员函数方法（$this代表自身的对象);\n    public function sayName () {\n      echo(\"my name is &nbsp;\" .$this->name.\",&nbspI`m&nbsp;\" .$this->age .\"&nbsp;years old\");\n      echo '</br>';\n    }\n    // 析构函数用于销毁某些变量、对象，操作等\n    function __destruct () {\n      $this->name = '';\n      return true;\n    }\n  }\n  // 通过new操作符创建lisi对象\n  $lisi = new People('lisi', 26);\n\n  var_dump($lisi);\n  echo '<br/>';\n\n  if ($lisi->__destruct()) {\n    echo '销毁成功 <br/>';\n    var_dump($lisi);\n  }\n")])])]),e("h3",{attrs:{id:"php中继承实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php中继承实现","aria-hidden":"true"}},[n._v("#")]),n._v(" PHP中继承实现")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 父类\nclass People {\n  var $name;\n  var $age;\n  function __construct ($name, $age) {\n    $this->name = $name;\n    $this->age = $age;\n  }\n  public function sayName () {\n    echo(\"my name is &nbsp;\" .$this->name.\",&nbspI`m&nbsp;\" .$this->age .\"&nbsp;years old\");\n    echo '</br>';\n  }\n}\n// 子类\nclass Boy extends People {\n\n  function getParentProperty () {\n    var_dump($this);\n  }\n\n}\n$lisi = new People('lisi', 26);\n$boy = new Boy('wangwu',28);\n$boy->getParentProperty();\n// 子类调用父类方法\n$boy->sayName();\n")])])]),e("h3",{attrs:{id:"php中方法重写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php中方法重写","aria-hidden":"true"}},[n._v("#")]),n._v(" PHP中方法重写")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(' class People {\n  var $name;\n  var $age;\n  function __construct ($name, $age) {\n    $this->name = $name;\n    $this->age = $age;\n  }\n  public function sayName () {\n    echo("my name is &nbsp;" .$this->name.",&nbspI`m&nbsp;" .$this->age ."&nbsp;years old");\n    echo \'</br>\';\n  }\n}\n// 子类\nclass Boy extends People {\n  // 重写父类方法\n  public function sayName () {\n    echo ("my name is &nbsp;" .$this->name);\n    return $this->name;\n  }\n}\n$lisi = new People(\'lisi\', 26);\n$boy = new Boy(\'wangwu\',28);\n// 重写方法\n$boy->sayName();\n')])])]),e("h3",{attrs:{id:"php中访问的控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php中访问的控制","aria-hidden":"true"}},[n._v("#")]),n._v(" PHP中访问的控制")]),n._v(" "),e("blockquote",[e("ul",[e("li",[n._v("PHP 对属性或方法的访问控制，是通过在前面添加关键字 public（公有），protected（受保护）或 private（私有）来实现的")])])]),n._v(" "),e("blockquote",[e("ul",[e("li",[n._v("public & var（公有）：公有的类成员可以在任何地方被访问")])])]),n._v(" "),e("blockquote",[e("ul",[e("li",[n._v("protected（受保护）：受保护的类成员则可以被其自身以及其子类和父类访问")])])]),n._v(" "),e("blockquote",[e("ul",[e("li",[n._v("private（私有）：私有的类成员则只能被其定义所在的类访问")])])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("/**\n   * 基类\n   * Define People\n   */\n  class People \n  {\n    // 声明一个公有的构造函数\n    public function __construct () {}\n\n    // 声明一个共有的方法\n    public function sayName () \n    {\n      echo 'sayname</br>';\n    }\n\n    // 声明一个受保护的方法\n    protected function swim () \n    {\n      echo 'swim</br>';\n    }\n\n    // 声明一个私有方法\n    private function study () \n    {\n      echo 'study';\n    }\n    \n    // 不加关键字默认公有方法\n    function getFun () {\n      $this->sayName();\n      $this->swim();\n      $this->study();\n    }\n  }\n  $people = new People();\n  // 正常运行输出sayname\n  $people->sayName();\n  // 产生错误\n  $people->swim();\n  // 产生错误\n  $people->study();\n  // 公有，受保护，私有都可以执行\n  $people->getFun(); \n\n  /**\n   * 子类\n   * Define Boy\n   */\n\n  class Boy extends People\n  {\n    function getFun2 ()\n    {\n      $this->sayName();\n      $this->swim();\n      // 这行会产生一个错误\n      $this->study(); \n    }\n  }\n  $body = new Boy();\n  // 这行能被正常执行\n  $body ->sayName();\n  // 公有的和受保护的都可执行，但私有的不行\n  $body->getFun2(); \n")])])]),e("h3",{attrs:{id:"php中抽象类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php中抽象类","aria-hidden":"true"}},[n._v("#")]),n._v(" PHP中抽象类")]),n._v(" "),e("blockquote",[e("ul",[e("li",[n._v("利用关键字abstract声明抽象")])])]),n._v(" "),e("blockquote",[e("ul",[e("li",[n._v("如果类中有一个方法被是声明为抽象，那么这个类也必须声明为抽象")])])]),n._v(" "),e("blockquote",[e("ul",[e("li",[n._v("抽象方法只声明了调用方式（参数），不能定义其具体的功能实现（相当于没有函数体），子类通过继承实现抽象方法，且不能被实例化")])])]),n._v(" "),e("blockquote",[e("ul",[e("li",[n._v("继承一个抽象类，子类必须定义父类中的所有抽象方法并且必须要和父类的声明访问级别保持一致或者更宽松")])])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("/**\n   * 定义抽象类People\n   */\n  abstract class People \n  {\n\n    abstract protected function eat();\n    abstract protected function sleep();\n    abstract protected function study();\n    public function runing() \n    {\n      echo '跑啊跑！</br>';\n    }\n  }\n\n  /**\n   * 实现抽象类\n   */\n  class Zhangsan extends People\n  {\n    protected function eat()\n    {\n      echo 'eat </br>';\n      return 'eat';\n    }\n\n    protected function sleep()\n    {\n      echo 'sleep </br>';\n      return 'sleep';\n    }\n\n    protected function study()\n    {\n      echo 'study </br>';\n      return 'study';\n    }\n\n    public function getFunc () \n    {\n      $this->eat();\n      $this->sleep();\n      $this->study();\n    }\n  }\n  // 调用子类\n  $zhangsan = new Zhangsan;\n  $zhangsan->runing(); //跑啊跑！\n  $zhangsan->getFunc(); // eat sleep study\n\n  场景：在很多类里面很多的方法都是在重复。这里就可以去用抽象类，当然也可以重写一个类，每个公共类实例化实例化一次，调用相同的方法。但是abstract可以省去实例化的步骤，而且可以重载这个方法,这样不是更方便简单嘛\n")])])]),e("h3",{attrs:{id:"php中接口的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php中接口的使用","aria-hidden":"true"}},[n._v("#")]),n._v(" PHP中接口的使用")]),n._v(" "),e("p",[n._v("interface主要对类名，类所拥有的方法，以及所传参数起约束和规范作用，和abstract类似。在多人协同开发项目时起重要作用")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('// 定义接口类\ninterface People  \n{\n  public eat () {};\n}\n// 实现接口类\nclass Apple implements People{\n public function eat ()\n {\n   echo \'我吃的苹果\';\n }\n}\n\n$apple = new Apple();\n$apple->eat(); \n\n参数约束，如果参数名字不一样会报错\n\n// 定义接口类\ninterface People  \n{\n  public function eat($color);\n}\n\n// 实现接口类Apple\nclass Apple implements People\n{\n public function eat($color)\n {\n    echo("我吃的$color 🍎<br/>");\n }\n}\n\n// 实现接口类Grape\nclass Grape implements People\n{\n  public function eat($color)\n  {\n    echo("我吃的$color 🍇");\n  }\n}\n\n$apple = new Apple();\n$apple->eat(\'红\'); \n\n$grape = new Grape();\n$grape->eat(\'紫\'); \n接口继承\n\n  // 定义People接口类\n  interface People  \n  {  \n    public function eat();  \n  }\n\n  // 继承People接口类\n  interface Boy extends People  \n  {  \n    public function drink();  \n  }\n\n  // 接口方法实现\n  class Behavior implements Boy  \n  {  \n    public function eat()  \n    {  \n        echo "吃东西<br>";  \n    }  \n    \n    public function drink()  \n    {  \n      echo "喝饮料<br>";  \n    }  \n  }         \n  Behavior::eat();      \n  Behavior::drink();\n')])])]),e("h3",{attrs:{id:"总结抽象类和接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结抽象类和接口","aria-hidden":"true"}},[n._v("#")]),n._v(" 总结抽象类和接口")]),n._v(" "),e("p",[n._v("抽象类就是一个类的服务提供商，拥有众多服务")]),n._v(" "),e("p",[n._v("接口类就是一个类的规范，子类必须完成它指定方法")]),n._v(" "),e("p",[n._v("它们的区别：")]),n._v(" "),e("p",[n._v("抽象类继承用extends,接口继承用implements")]),n._v(" "),e("p",[n._v('抽象类能多重继承,接口多重继承用","隔开')]),n._v(" "),e("p",[n._v("抽象类中的方法不必全部重载,接口方法必须声明或者重载")]),n._v(" "),e("p",[n._v("抽象类不必只包含抽象方法,可以定义完整的方法,接口不能包含任何完整定义方法")]),n._v(" "),e("p",[n._v("__set,__get,__isset,__unset,__call,__sleep(),__wakeup()等魔术方法")]),n._v(" "),e("ol",[e("li",[n._v("__sleep() 方法常用于提交未提交的数据，或类似的清理操作。同时，如果有一些很大的对象，但不需要全部保存，这个功能就很好用\n__wakeup() 经常用在反序列化操作中，例如重新建立数据库连接，或执行其它初始化操作")])]),n._v(" "),e("p",[n._v("引入php手册中的例子")]),n._v(" "),e("p",[n._v("class Connection\n{\nprotected $link;\nprivate $server, $username, $password, $db;")]),n._v(" "),e("pre",[e("code",[n._v("  public function __construct($server, $username, $password, $db)\n  {\n      $this->server = $server;\n      $this->username = $username;\n      $this->password = $password;\n      $this->db = $db;\n      $this->connect();\n  }\n  \n  private function connect()\n  {\n      $this->link = mysql_connect($this->server, $this->username, $this->password);\n      mysql_select_db($this->db, $this->link);\n  }\n  \n  public function __sleep()\n  {\n      return array('server', 'username', 'password', 'db');\n  }\n  \n  public function __wakeup()\n  {\n      $this->connect();\n  }\n")])]),n._v(" "),e("p",[n._v("}")]),n._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[n._v("属性重载__set,__get,__isset,__unset\npublic __set ( string $name , mixed $value ) : void // 设置私有属性值的时候调用\npublic __get ( string $name ) : mixed  // 获取私有属性值的时候调用\npublic __isset ( string $name ) : bool // 当判断一个私有成员属性是否被设置过时调用\npublic __unset ( string $name ) : void // 当销毁一个私有成员属性的时候调用\n当实例化一个对象后，调用类中不存在或者没有权限访问的属性的时候，默认调用__get()方法。可以访问内部属性")])]),n._v(" "),e("li",[e("p",[n._v("方法重载__call和__callStatic")])])]),n._v(" "),e("p",[n._v("call 和 callStatic 是类似的方法，前者是调用类不存在的方法时执行，而后者是调用类不存在的静态方式方法时执行。正常情况下如果调用一个类不存在的方法 PHP 会抛出致命错误，而使用这两个魔术方法我们可以替换一些更友好的提示或者记录错误调用日志信息、将用户重定向、抛出异常等等，亦或者是如同set 和 get 那样做方法的重命名。")])])},[],!1,null,null,null);a.default=s.exports}}]);