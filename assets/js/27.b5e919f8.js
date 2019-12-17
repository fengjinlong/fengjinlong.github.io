(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{156:function(e,t,n){"use strict";n.r(t);var r=n(0),s=Object(r.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"promise基础"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise基础","aria-hidden":"true"}},[e._v("#")]),e._v(" Promise基础")]),e._v(" "),n("h2",{attrs:{id:"_1-promise-的含义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-promise-的含义","aria-hidden":"true"}},[e._v("#")]),e._v(" 1 Promise 的含义")]),e._v(" "),n("blockquote",[n("p",[e._v("Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。")])]),e._v(" "),n("blockquote",[n("p",[e._v("特点")]),e._v(" "),n("ul",[n("li",[e._v("对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。")]),e._v(" "),n("li",[e._v("一旦状态改变，就不会再变，任何时候都可以得到这个结果。")])])]),e._v(" "),n("blockquote",[n("p",[e._v("Promise也有一些缺点。")]),e._v(" "),n("ul",[n("li",[e._v("首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。")]),e._v(" "),n("li",[e._v("其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。")]),e._v(" "),n("li",[e._v("第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。")]),e._v(" "),n("li",[e._v("如果某些事件不断地反复发生，一般来说，使用 nodejs Stream 模式是比部署Promise更好的选择。")])])]),e._v(" "),n("h2",{attrs:{id:"_2-基本用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-基本用法","aria-hidden":"true"}},[e._v("#")]),e._v(" 2 基本用法")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const promise = new Promise(function(resolve, reject) {\n  // ... some code\n\n  if (/* 异步操作成功 */){\n    resolve(value);\n  } else {\n    reject(error);\n  }\n});\n")])])]),n("blockquote",[n("p",[e._v("Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由 "),n("strong",[e._v("JavaScript 引擎提供")]),e._v("，不用自己部署。")])]),e._v(" "),n("blockquote",[n("p",[e._v("resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("promise.then(function(value) {\n  // success\n}, function(error) {\n  // failure\n});\n")])])]),n("blockquote",[n("p",[e._v("Promise 新建后就会立即执行")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Promise 新建后立即执行，所以首先输出的是Promise\n\nlet promise = new Promise(function(resolve, reject) {\n  console.log('Promise');\n  resolve();\n});\n\npromise.then(function() {\n  console.log('resolved.');\n});\n\nconsole.log('Hi!');\n\n// Promise\n// Hi!\n// resolved\n")])])]),n("blockquote",[n("p",[e._v("异步加载图片的例子")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function loadImg (url) {\n  return new Promise((resolve, reject) => {\n    const image = new Image();\n    image.onload = () => {\n      resolve(image)\n    }\n    image.onerror = () => {\n      reject(new Error('Could not load image at ' + url));\n    };\n    images.src = url;\n  })\n}\n")])])]),n("blockquote",[n("p",[e._v("用Promise对象实现的 Ajax 操作的例子")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('const getJSON = function(url) {\n  const promise = new Promise(function(resolve, reject){\n    const handler = function() {\n      if (this.readyState !== 4) {\n        return;\n      }\n      if (this.status === 200) {\n        resolve(this.response);\n      } else {\n        reject(new Error(this.statusText));\n      }\n    };\n    const client = new XMLHttpRequest();\n    client.open("GET", url);\n    client.onreadystatechange = handler;\n    client.responseType = "json";\n    client.setRequestHeader("Accept", "application/json");\n    client.send();\n\n  });\n\n  return promise;\n};\n\ngetJSON("/posts.json").then(function(json) {\n  console.log(\'Contents: \' + json);\n}, function(error) {\n  console.error(\'出错了\', error);\n});\n')])])]),n("blockquote",[n("p",[e._v("resolve函数的参数除了正常的值以外，还可能是另一个 Promise 实例")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const p1 = new Promise(function (resolve, reject) {\n  setTimeout(() => reject(new Error('fail')), 3000)\n})\n\nconst p2 = new Promise(function (resolve, reject) {\n  setTimeout(() => resolve(p1), 1000)\n})\n\np2\n  .then(result => console.log(result))\n  .catch(error => console.log(error))\n// Error: fail\n")])])]),n("blockquote",[n("p",[e._v("上面代码中，p1是一个 Promise，3 秒之后变为rejected。p2的状态在 1 秒之后改变，resolve方法返回的是p1。由于"),n("strong",[e._v("p2返回的是另一个 Promise，导致p2自己的状态")]),e._v("无效了，由p1的状态决定p2的状态。所以，后面的then语句都变成针对后者（p1）。又过了 2 秒，p1变为rejected，导致触发catch方法指定的回调函数。")])]),e._v(" "),n("blockquote",[n("p",[e._v("调用resolve或reject并不会终结 Promise 的参数函数的执行")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("new Promise((resolve, reject) => {\n  resolve(1);\n  console.log(2);\n}).then(r => {\n  console.log(r);\n});\n// 2\n// 1\n")])])]),n("blockquote",[n("p",[e._v("上面代码中，调用resolve(1)以后，后面的console.log(2)还是会执行，并且会首先打印出来。这是因为立即 resolved 的 Promise 是在本轮事件循环的末尾执行，总是"),n("strong",[e._v("晚于本轮循环的同步任务")]),e._v("。")])]),e._v(" "),n("blockquote",[n("p",[e._v("一般来说，调用resolve或reject以后，Promise 的使命就完成了，后继操作应该放到then方法里面，而不应该直接写在resolve或reject的后面。所以，"),n("strong",[e._v("最好在它们前面加上return语句，这样就不会有意外")])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("new Promise((resolve, reject) => {\n  return resolve(1);\n  // 后面的语句不会执行\n  console.log(2);\n})\n")])])]),n("h2",{attrs:{id:"_3-promise-prototype-then"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-promise-prototype-then","aria-hidden":"true"}},[e._v("#")]),e._v(" 3 Promise.prototype.then()")]),e._v(" "),n("blockquote",[n("p",[e._v("Promise 实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的\nthen方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。")])]),e._v(" "),n("h2",{attrs:{id:"_4-promise-prototype-catch"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-promise-prototype-catch","aria-hidden":"true"}},[e._v("#")]),e._v(" 4 Promise.prototype.catch()")]),e._v(" "),n("blockquote",[n("p",[e._v("Promise.prototype.catch方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("p.then((val) => console.log('fulfilled:', val))\n  .catch((err) => console.log('rejected', err));\n\n// 等同于\np.then((val) => console.log('fulfilled:', val))\n  .then(null, (err) => console.log(\"rejected:\", err));\n")])])]),n("blockquote",[n("p",[e._v("上面代码中，promise抛出一个错误，就被catch方法指定的回调函数捕获。注意，上面的写法与下面两种写法是等价的。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 写法一\nconst promise = new Promise(function(resolve, reject) {\n  try {\n    throw new Error('test');\n  } catch(e) {\n    reject(e);\n  }\n});\npromise.catch(function(error) {\n  console.log(error);\n});\n\n// 写法二\nconst promise = new Promise(function(resolve, reject) {\n  reject(new Error('test'));\n});\npromise.catch(function(error) {\n  console.log(error);\n});\n")])])]),n("blockquote",[n("p",[e._v("如果 Promise 状态已经变成resolved，再抛出错误是无效的")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const promise = new Promise(function(resolve, reject) {\n  resolve('ok');\n  throw new Error('test');\n});\npromise\n  .then(function(value) { console.log(value) })\n  .catch(function(error) { console.log(error) });\n// ok\n")])])]),n("blockquote",[n("p",[e._v("Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("getJSON('/post/1.json').then(function(post) {\n  return getJSON(post.commentURL);\n}).then(function(comments) {\n  // some code\n}).catch(function(error) {\n  // 处理前面三个Promise产生的错误\n});\n")])])]),n("blockquote",[n("p",[e._v("上面代码中，一共有三个 Promise 对象：一个由getJSON产生，两个由then产生。它们之中任何一个抛出的错误，都会被最后一个catch捕获。")])]),e._v(" "),n("blockquote",[n("p",[e._v("一般来说，"),n("strong",[e._v("不要")]),e._v("在then方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// bad\npromise\n  .then(function(data) {\n    // success\n  }, function(err) {\n    // error\n  });\n\n// good\npromise\n  .then(function(data) { //cb\n    // success\n  })\n  .catch(function(err) {\n    // error\n  });\n")])])]),n("blockquote",[n("p",[e._v("跟传统的"),n("strong",[e._v("try/catch")]),e._v("代码块不同的是，如果没有使用catch方法指定错误处理的回调函数，Promise 对象抛出的错误不会"),n("strong",[e._v("传递到外层代码，即不会有任何反应")])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const someAsyncThing = function() {\n  return new Promise(function(resolve, reject) {\n    // 下面一行会报错，因为x没有声明\n    resolve(x + 2);\n  });\n};\n\nsomeAsyncThing().then(function() {\n  console.log('everything is great');\n});\n\nsetTimeout(() => { console.log(123) }, 2000);\n// Uncaught (in promise) ReferenceError: x is not defined\n// 123\n")])])]),n("blockquote",[n("p",[e._v("上面代码中，someAsyncThing函数产生的 Promise 对象，内部有语法错误。浏览器运行到这一行，会打印出错误提示ReferenceError: x is not defined，但是不会退出进程、终止脚本执行，2 秒之后还是会输出123。这就是说，Promise 内部的错误不会影响到 Promise 外部的代码，通俗的说法就是“Promise 会吃掉错误”。")])]),e._v(" "),n("blockquote",[n("p",[e._v("一般总是建议，Promise 对象后面要跟catch方法，这样可以处理 Promise 内部发生的错误。catch方法返回的还是一个 Promise 对象，因此后面还可以接着调用then方法。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("someAsyncThing().then(function() {\n  return someOtherAsyncThing();\n}).catch(function(error) {\n  console.log('oh no', error);\n  // 下面一行会报错，因为y没有声明\n  y + 2;\n}).catch(function(error) {\n  console.log('carry on', error);\n});\n// oh no [ReferenceError: x is not defined]\n// carry on [ReferenceError: y is not defined]\n")])])]),n("blockquote",[n("p",[e._v("上面代码中，第二个catch方法用来捕获前一个catch方法抛出的错误")])]),e._v(" "),n("h2",{attrs:{id:"_5-promise-prototype-finally"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-promise-prototype-finally","aria-hidden":"true"}},[e._v("#")]),e._v(" 5 Promise.prototype.finally()")]),e._v(" "),n("blockquote",[n("p",[e._v("finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作\n服务器使用 Promise 处理请求，然后使用finally方法关掉服务器。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("server.listen(port)\n  .then(function () {\n    // ...\n  })\n  .finally(server.stop);\n")])])]),n("blockquote",[n("p",[e._v("finally本质上是then方法的特例。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("promise\n.finally(() => {\n  // 语句\n});\n\n// 等同于\npromise\n.then(\n  result => {\n    // 语句\n    return result;\n  },\n  error => {\n    // 语句\n    throw error;\n  }\n);\n")])])]),n("blockquote",[n("p",[e._v("上面代码中，如果不使用finally方法，同样的语句需要为成功和失败两种情况各写一次。有了finally方法，则只需要写一次。\n它的实现也很简单")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Promise.prototype.finally = function (callback) {\n  let P = this.constructor;\n  return this.then(\n    value  => P.resolve(callback()).then(() => value),\n    reason => P.resolve(callback()).then(() => { throw reason })\n  );\n};\n")])])]),n("h2",{attrs:{id:"_6-promise-all"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-promise-all","aria-hidden":"true"}},[e._v("#")]),e._v(" 6 Promise.all()")]),e._v(" "),n("blockquote",[n("p",[e._v("const p = Promise.all([p1, p2, p3]);")])]),e._v(" "),n("blockquote",[n("p",[e._v("Promise.all()方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。")])]),e._v(" "),n("blockquote",[n("p",[e._v("另外，Promise.all()方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。")])]),e._v(" "),n("blockquote",[n("p",[e._v("只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。")])]),e._v(" "),n("blockquote",[n("p",[e._v("只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。")])]),e._v(" "),n("h2",{attrs:{id:"_7-promise-race"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-promise-race","aria-hidden":"true"}},[e._v("#")]),e._v(" 7 Promise.race()")]),e._v(" "),n("blockquote",[n("p",[e._v("只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const p = Promise.race([\n  fetch('/resource-that-may-take-a-while'),\n  new Promise(function (resolve, reject) {\n    setTimeout(() => reject(new Error('request timeout')), 5000)\n  })\n]);\n\np\n.then(console.log)\n.catch(console.error);\n")])])]),n("blockquote",[n("p",[e._v("如果 5 秒之内fetch方法无法返回结果，变量p的状态就会变为rejected，从而触发catch方法指定的回调函数。")])]),e._v(" "),n("h2",{attrs:{id:"_8-promise-any"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-promise-any","aria-hidden":"true"}},[e._v("#")]),e._v(" 8 Promise.any()")]),e._v(" "),n("blockquote",[n("p",[e._v("Promise.any()方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态。")])]),e._v(" "),n("h2",{attrs:{id:"_9-promise-resolve"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-promise-resolve","aria-hidden":"true"}},[e._v("#")]),e._v(" 9 Promise.resolve()")]),e._v(" "),n("blockquote",[n("p",[e._v("有时需要将现有对象转为 Promise 对象，Promise.resolve()方法就起到这个作用。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const jsPromise = Promise.resolve($.ajax('/whatever.json'));\n上面代码将 jQuery 生成的deferred对象，转为一个新的 Promise 对象。\n")])])]),n("blockquote",[n("p",[e._v("Promise.resolve()等价于下面的写法。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Promise.resolve('foo')\n// 等价于\nnew Promise(resolve => resolve('foo'))\nPromise.resolve方法的参数分成四种情况。\n")])])]),n("blockquote",[n("p",[e._v("（1）参数是一个 Promise 实例")])]),e._v(" "),n("blockquote",[n("blockquote",[n("p",[e._v("如果参数是 Promise 实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。")])])]),e._v(" "),n("blockquote",[n("p",[e._v("（2）参数是一个thenable对象")])]),e._v(" "),n("blockquote",[n("blockquote",[n("p",[e._v("thenable对象指的是具有then方法的对象，比如下面这个对象。")])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let thenable = {\n  then: function(resolve, reject) {\n    resolve(42);\n  }\n};\nPromise.resolve方法会将这个对象转为 Promise 对象，然后就立即执行thenable对象的then方法。\n\nlet thenable = {\n  then: function(resolve, reject) {\n    resolve(42);\n  }\n};\n\nlet p1 = Promise.resolve(thenable);\np1.then(function(value) {\n  console.log(value);  // 42\n});\n")])])]),n("blockquote",[n("blockquote",[n("p",[e._v("上面代码中，thenable对象的then方法执行后，对象p1的状态就变为resolved，从而立即执行最后那个then方法指定的回调函数，输出 42。")])])]),e._v(" "),n("blockquote",[n("p",[e._v("（3）参数不是具有then方法的对象，或根本就不是对象")])]),e._v(" "),n("blockquote",[n("blockquote",[n("p",[e._v("如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的 Promise 对象，状态为resolved。")])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const p = Promise.resolve('Hello');\n\np.then(function (s){\n  console.log(s)\n});\n// Hello\n")])])]),n("blockquote",[n("blockquote",[n("p",[e._v("上面代码生成一个新的 Promise 对象的实例p。由于字符串Hello不属于异步操作（判断方法是字符串对象不具有 then 方法），返回 Promise 实例的状态从一生成就是resolved，所以回调函数会立即执行。Promise.resolve方法的参数，会同时传给回调函数。")])])]),e._v(" "),n("blockquote",[n("p",[e._v("（4）不带有任何参数")])]),e._v(" "),n("blockquote",[n("blockquote",[n("p",[e._v("Promise.resolve()方法允许调用时不带参数，直接返回一个resolved状态的 Promise 对象。")])])]),e._v(" "),n("blockquote",[n("blockquote",[n("p",[e._v("所以，如果希望得到一个 Promise 对象，比较方便的方法就是直接调用Promise.resolve()方法。")])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const p = Promise.resolve();\n\np.then(function () {\n  // ...\n});\n")])])]),n("blockquote",[n("blockquote",[n("p",[e._v("上面代码的变量p就是一个 Promise 对象。")])])]),e._v(" "),n("blockquote",[n("p",[e._v("需要注意的是，立即resolve()的 Promise 对象，是在"),n("strong",[e._v("本轮“事件循环”（event loop）的结束时执行，而不是在下一轮“事件循环”的开始时")]),e._v("。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("setTimeout(function () {\n  console.log('three');\n}, 0);\n\nPromise.resolve().then(function () {\n  console.log('two');\n});\n\nconsole.log('one');\n\n// one\n// two\n// three\n上面代码中，setTimeout(fn, 0)在下一轮“事件循环”开始时执行，Promise.resolve()在本轮“事件循环”结束时执行，console.log('one')则是立即执行，因此最先输出\n")])])]),n("h2",{attrs:{id:"_10-promise-reject"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10-promise-reject","aria-hidden":"true"}},[e._v("#")]),e._v(" 10 Promise.reject()")]),e._v(" "),n("blockquote",[n("p",[e._v("Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。")])]),e._v(" "),n("h2",{attrs:{id:"_11-应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_11-应用","aria-hidden":"true"}},[e._v("#")]),e._v(" 11 应用")]),e._v(" "),n("blockquote",[n("p",[e._v("Generator 函数与 Promise 的结合\n使用 Generator 函数管理流程，遇到异步操作的时候，通常返回一个Promise对象。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function getFoo () {\n  return new Promise(function (resolve, reject){\n    resolve('foo');\n  });\n}\n\nconst g = function* () {\n  try {\n    const foo = yield getFoo();\n    console.log(foo);\n  } catch (e) {\n    console.log(e);\n  }\n};\n\nfunction run (generator) {\n  const it = generator();\n\n  function go(result) {\n    if (result.done) return result.value;\n\n    return result.value.then(function (value) {\n      return go(it.next(value));\n    }, function (error) {\n      return go(it.throw(error));\n    });\n  }\n\n  go(it.next());\n}\n\nrun(g);\n")])])]),n("blockquote",[n("p",[e._v("上面代码的 Generator 函数g之中，有一个异步操作getFoo，它返回的就是一个Promise对象。函数run用来处理这个Promise对象，并调用下一个next方法。")])]),e._v(" "),n("h2",{attrs:{id:"_12-执行特点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_12-执行特点","aria-hidden":"true"}},[e._v("#")]),e._v(" 12 执行特点")]),e._v(" "),n("blockquote",[n("ul",[n("li",[e._v("Promise 是一个构造函数，接受函数作为参数(resolve(),reject())")]),e._v(" "),n("li",[e._v("Promise 对象有三种状态 pending(进行中), fulfilled(成功), rejected(失败)")]),e._v(" "),n("li",[e._v("Promise 从 pending 变为 fulfilled 过程是成功的过程可以执行回调函数 resolve()")]),e._v(" "),n("li",[e._v("Promise 从 pending 变为 rejected 过程是失败的过程可以执行回调函数 reject()")]),e._v(" "),n("li",[e._v("Promise 状态无法中途取消，一旦建立立即执行，会一直保持这个结果，这时也叫 resolved(已定型状态)")]),e._v(" "),n("li",[e._v("Promise 状态改变时 then 方法支持多次链式调用")]),e._v(" "),n("li",[e._v("Promise 如果不设置回调函数内部会抛异常")])])]),e._v(" "),n("h2",{attrs:{id:"_13-定义构造函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_13-定义构造函数","aria-hidden":"true"}},[e._v("#")]),e._v(" 13 定义构造函数")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("/** * 封装判断参数是够是函数 */ \nfunction isFunction (fn) {\n  return Object.prototype.toString.call(fn) === '[object Function]'\n}\n/** * 定义构造函数 * @param {*} fn */ \nfunction Promise(fn) {\n  if (!isFunction(fn)) {\n    throw new Error('Promise must accept a function as a parameter')\n  }\n}\n")])])]),n("h1",{attrs:{id:"promise-实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise-实现","aria-hidden":"true"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://juejin.im/post/5c233a8ee51d450d5a01b712",target:"_blank",rel:"noopener noreferrer"}},[e._v("promise 实现"),n("OutboundLink")],1)]),e._v(" "),n("h1",{attrs:{id:"性感的promise"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#性感的promise","aria-hidden":"true"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://juejin.im/post/5ab20c58f265da23a228fe0f",target:"_blank",rel:"noopener noreferrer"}},[e._v("性感的Promise"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"promise-特性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise-特性","aria-hidden":"true"}},[e._v("#")]),e._v(" Promise 特性")]),e._v(" "),n("h3",{attrs:{id:"promise捕获错误与-try-catch-等同"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise捕获错误与-try-catch-等同","aria-hidden":"true"}},[e._v("#")]),e._v(" Promise捕获错误与 try catch 等同")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("1.请写出下列代码的输出\nvar p1 = new Promise(function(resolve, reject) {\n    throw Error('sync error')\n})\n    .then(res => {\n        console.log(res)\n    })\n    .catch(err => {\n        console.log(1111)\n        console.log(err)\n    })\n\n2.请写出下列代码的输出\nvar p1 = new Promise(function(resolve, reject) {\n    setTimeout(() => {\n        throw Error('async error')   \n    })\n})\n    .then(res => {\n        console.log(res)\n    })\n    .catch(err => {\n        console.log(err)\n    })\n\n3.请写出下列代码的输出\nvar p1 = new Promise(function(resolve, reject) {\n    resolve()\n})\n    .then(res => {\n        throw Error('sync error') \n    })\n复制代码错误三连，你知道正确答案吗😏？\n正确答案是：\n\nError被catch到，最后console.log输出\n错误无法被catch，控制台报错\npromise没有catch，错误被捕获后又被抛出，控制台报错\n")])])]),n("h3",{attrs:{id:"这里考查的主要是promise的错误捕获，其实仔细想想js中能用的错误捕获也只能是try-catch了，而try-catch只能捕获同步错误，并且在没有传入错误监听的时候会将捕获到的错误抛出。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#这里考查的主要是promise的错误捕获，其实仔细想想js中能用的错误捕获也只能是try-catch了，而try-catch只能捕获同步错误，并且在没有传入错误监听的时候会将捕获到的错误抛出。","aria-hidden":"true"}},[e._v("#")]),e._v(" 这里考查的主要是Promise的错误捕获，其实仔细想想js中能用的错误捕获也只能是try catch了，而"),n("strong",[e._v("try catch只能捕获同步错误")]),e._v("，并且在没有传入错误监听的时候会将捕获到的错误抛出。")]),e._v(" "),n("h2",{attrs:{id:"实现resolve、reject方法，then方法和状态机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现resolve、reject方法，then方法和状态机制","aria-hidden":"true"}},[e._v("#")]),e._v(" 实现resolve、reject方法，then方法和状态机制")]),e._v(" "),n("h3",{attrs:{id:"根据使用方法我们可以知道，promise是一个需要接受一个执行器的构造函数，执行器提供两个方法，内部有状态机制，原型链上有then方法。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#根据使用方法我们可以知道，promise是一个需要接受一个执行器的构造函数，执行器提供两个方法，内部有状态机制，原型链上有then方法。","aria-hidden":"true"}},[e._v("#")]),e._v(" 根据使用方法我们可以知道，Promise是一个需要接受一个执行器的构造函数，执行器提供两个方法，内部有状态机制，原型链上有then方法。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("开始撸：\n// myPromise\nfunction Promise(executor){ //executor是一个执行器（函数）\n    let _this = this // 先缓存this以免后面指针混乱\n    _this.status = 'pending' // 默认状态为等待态\n    _this.value = undefined // 成功时要传递给成功回调的数据，默认undefined\n    _this.reason = undefined // 失败时要传递给失败回调的原因，默认undefined\n\n    function resolve(value) { // 内置一个resolve方法，接收成功状态数据\n        // 上面说了，只有pending可以转为其他状态，所以这里要判断一下\n        if (_this.status === 'pending') { \n            _this.status = 'resolved' // 当调用resolve时要将状态改为成功态\n            _this.value = value // 保存成功时传进来的数据\n        }\n    }\n    function reject(reason) { // 内置一个reject方法，失败状态时接收原因\n        if (_this.status === 'pending') { // 和resolve同理\n            _this.status = 'rejected' // 转为失败态\n            _this.reason = reason // 保存失败原因\n        }\n    }\n    executor(resolve, reject) // 执行执行器函数，并将两个方法传入\n}\n// then方法接收两个参数，分别是成功和失败的回调，这里我们命名为onFulfilled和onRjected\nPromise.prototype.then = function(onFulfilled, onRjected){\n    let _this = this;   // 依然缓存this\n    if(_this.status === 'resolved'){  // 判断当前Promise的状态\n        onFulfilled(_this.value)  // 如果是成功态，当然是要执行用户传递的成功回调，并把数据传进去\n    }\n    if(_this.status === 'rejected'){ // 同理\n        onRjected(_this.reason)\n    }\n}\nmodule.exports = Promise  // 导出模块，否则别的文件没法使用\n")])])]),n("h3",{attrs:{id:"注意：上面代码的命名不是随便起的，像onfulfilled和onrjected，是严格按照promise-a-规范走的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注意：上面代码的命名不是随便起的，像onfulfilled和onrjected，是严格按照promise-a-规范走的","aria-hidden":"true"}},[e._v("#")]),e._v(" 注意：上面代码的命名不是随便起的，像onFulfilled和onRjected，是严格按照Promise/A+规范走的")]),e._v(" "),n("h3",{attrs:{id:"这样我们就实现了第一步，可以创建promise实例并使用then方法了，测试一下"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#这样我们就实现了第一步，可以创建promise实例并使用then方法了，测试一下","aria-hidden":"true"}},[e._v("#")]),e._v(" 这样我们就实现了第一步，可以创建Promise实例并使用then方法了，测试一下")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let Promise = require('./myPromise')  // 引入模块\nlet p = new Promise(function(resolve, reject){\n  resolve('test')\n})\np.then(function(data){\n  console.log('成功', data)\n},function(err){\n  console.log('失败', err)\n})\n// 成功 test\n\n再试试reject\nlet Promise = require('./myPromise')  // 引入模块\nlet p = new Promise(function(resolve, reject){\n  reject('test')\n})\np.then(function(data){\n  console.log('成功', data)\n},function(err){\n  console.log('失败', err)\n})\n// 失败 test\n")])])]),n("h3",{attrs:{id:"看起来不错，但回调函数是立即执行的，无法进行异步操作，比如这样是不行的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#看起来不错，但回调函数是立即执行的，无法进行异步操作，比如这样是不行的","aria-hidden":"true"}},[e._v("#")]),e._v(" 看起来不错，但回调函数是立即执行的，无法进行异步操作，比如这样是不行的")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let p = new Promise(function(resolve, reject){\n  setTimeout(function(){\n    resolve(100)  \n  }, 1000)\n})\np.then(function(data){\n  console.log('成功', data)\n},function(err){\n  console.log('失败', err)\n})\n// 不会输出任何代码\n")])])]),n("p",[e._v("原因是我们在then函数中只对成功态和失败态进行了判断，而实例被new时，执行器中的代码会立即执行，但setTimeout中的代码将稍后执行，也就是说，then方法执行时，Promise的状态没有被改变依然是pending态，所以我们要对pending态也做判断，而由于代码可能是异步的，那么我们就要想办法把回调函数进行缓存，并且，"),n("strong",[e._v("then方法是可以多次使用的")]),e._v("，所以要能存多个回调，那么这里我们用一个数组。")]),e._v(" "),n("h2",{attrs:{id:"实现异步"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现异步","aria-hidden":"true"}},[e._v("#")]),e._v(" 实现异步")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("在实例上挂两个参数\n_this.onResolvedCallbacks = []; // 存放then成功的回调\n_this.onRejectedCallbacks = []; // 存放then失败的回调\n\nthen方法加一个pending时的判断\nif(_this.status === 'pending'){\n    // 每一次then时，如果是等待态，就把回调函数push进数组中，什么时候改变状态什么时候再执行\n    _this.onResolvedCallbacks.push(function(){ // 这里用一个函数包起来，是为了后面加入新的逻辑进去\n        onFulfilled(_this.value)\n    })\n    _this.onRejectedCallbacks.push(function(){ // 同理\n        onRjected(_this.reason)\n    })\n}\n")])])]),n("h3",{attrs:{id:"下一步要分别在resolve和reject方法里加入执行数组中存放的函数的方法，修改一下上面的resolve和reject方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下一步要分别在resolve和reject方法里加入执行数组中存放的函数的方法，修改一下上面的resolve和reject方法","aria-hidden":"true"}},[e._v("#")]),e._v(" 下一步要分别在resolve和reject方法里加入执行数组中存放的函数的方法，修改一下上面的resolve和reject方法")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function resolve(value) {\n    if (_this.status === 'pending') { \n        _this.status = 'resolved'\n        _this.value = value\n        _this.onResolvedCallbacks.forEach(function(fn){ // 当成功的函数被调用时，之前缓存的回调函数会被一一调用\n            fn()\n        })\n    }\n}\nfunction reject(reason) {\n    if (_this.status === 'pending') {\n        _this.status = 'rejected'\n        _this.reason = reason\n        _this.onRejectedCallbacks.forEach(function(fn){// 当失败的函数被调用时，之前缓存的回调函数会被一一调用\n            fn()\n        })\n    }\n}\n")])])]),n("img",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553512864607&di=5b491e10e97890200d59683f2af90f29&imgtype=0&src=http%3A%2F%2Fstatic.rong360.com%2Fgl%2Fuploads%2Fallimg%2F150907%2F1919395621-5.jpg",width:"30%"}}),e._v(" "),n("h3",{attrs:{id:"现在可以执行异步任务了，也可以多次then了，一个穷人版promise就完成了"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#现在可以执行异步任务了，也可以多次then了，一个穷人版promise就完成了","aria-hidden":"true"}},[e._v("#")]),e._v(" 现在可以执行异步任务了，也可以多次then了，一个穷人版Promise就完成了")]),e._v(" "),n("h2",{attrs:{id:"处理错误"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#处理错误","aria-hidden":"true"}},[e._v("#")]),e._v(" 处理错误")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("真正的Promise如果在实例中抛出错误，应该走reject:\n\nnew Promise(function(resolve, reject){\n  throw new Error('错误')\n}).then(function(){\n    \n},function(err){\n  console.log('错误:', err)  \n})\n// 错误: Error: 错误\n\n我们实现一下，思路很简单，在执行器执行时进行try catch\n\ntry{\n    executor(resolve, reject)        \n}catch(e){ // 如果捕获发生异常，直接调失败，并把参数穿进去\n    reject(e)\n}\n")])])]),n("h2",{attrs:{id:"实现then的链式调用（难点）promise的then方法实现链式调用的原理是：返回一个新的promise"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现then的链式调用（难点）promise的then方法实现链式调用的原理是：返回一个新的promise","aria-hidden":"true"}},[e._v("#")]),e._v(" 实现then的链式调用（难点）Promise的then方法实现链式调用的原理是：返回一个新的Promise")]),e._v(" "),n("h3",{attrs:{id:"在then方法中先定义一个新的promise，取名为promise2（官方规定的），然后在三种状态下分别用promise2包装一下，在调用onfulfilled时用一个变量x（规定的）接收返回值，trycatch一下代码，没错就调resolve传入x，有错就调reject传入错误，最后再把promise2给return出去，就可以进行链式调用了，，，，但是！"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在then方法中先定义一个新的promise，取名为promise2（官方规定的），然后在三种状态下分别用promise2包装一下，在调用onfulfilled时用一个变量x（规定的）接收返回值，trycatch一下代码，没错就调resolve传入x，有错就调reject传入错误，最后再把promise2给return出去，就可以进行链式调用了，，，，但是！","aria-hidden":"true"}},[e._v("#")]),e._v(" 在then方法中先定义一个新的Promise，取名为promise2（官方规定的），然后在三种状态下分别用promise2包装一下，在调用onFulfilled时用一个变量x（规定的）接收返回值，trycatch一下代码，没错就调resolve传入x，有错就调reject传入错误，最后再把promise2给return出去，就可以进行链式调用了，，，，但是！")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 改动then\nlet promise2;\nif (_this.status === 'resolved') {\n    promise2 = new Promise(function (resolve, reject) {\n        // 可以凑合用，但是是有很多问题的\n        try { \n            let x = onFulfilled(_this.value)\n            resolve(x)\n        } catch (e) {\n            reject(e)\n        }\n    })\n}\nif (_this.status === 'rejected') {\n    promise2 = new Promise(function (resolve, reject) {\n        // 可以凑合用，但是是有很多问题的\n        try {\n            let x = onRjected(_this.reason)\n            resolve(x)\n        } catch (e) {\n            reject(e)\n        }\n    })\n}\nif(_this.status === 'pending'){\n    promise2 = new Promise(function (resolve, rejec\n        _this.onResolvedCallbacks.push(function(){\n             // 可以凑合用，但是是有很多问题的\n            try {\n                let x = onFulfilled(_this.value)\n                resolve(x)\n            } catch (e) {\n                reject(e)\n            }\n        })\n        _this.onRejectedCallbacks.push(function(){\n             // 可以凑合用，但是是有很多问题的\n            try {\n                let x = onRjected(_this.reason)\n                resolve(x)\n            } catch (e) {\n                reject(e)\n            }\n        })\n    })\n}\nreturn promise2\n\n这里我先解释一下x的作用再说为什么不行，x是用来接收上一次then的返回值，比如这样\nlet p = new Promise(function(resolve, reject){\n  resolve(data)  \n})\np.then(function(data){\n    return xxx // 这里返回一个值\n}, function(){\n    \n}).then(function(data){\n    console.log // 这里会接收到xxx\n}, function(){\n    \n})\n// 以上代码中第一次then的返回值就是源码内第一次调用onRjected的返回值，可以用一个x来接收\n\n")])])]),n("img",{attrs:{src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1427013723,1115906159&fm=26&gp=0.jpg",width:"30%"}}),e._v(" "),n("h2",{attrs:{id:"未完待续"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#未完待续","aria-hidden":"true"}},[e._v("#")]),e._v(" 未完待续")]),e._v(" "),n("h1",{attrs:{id:"promise必会题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise必会题","aria-hidden":"true"}},[e._v("#")]),e._v(" Promise必会题")]),e._v(" "),n("img",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553515665489&di=f7541c3820b50d04456ca0982cba8d4d&imgtype=0&src=http%3A%2F%2Fdingyue.ws.126.net%2FsTe19%3DcqsGHF9FqtEEe6hbZzNRnwvAxzvbmXzhIHGpxie1551763702238.jpg",width:"30%"}}),e._v(" "),n("h2",{attrs:{id:"async-是一种语法，promise-是一个内置对象，两者并不具备可比性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#async-是一种语法，promise-是一个内置对象，两者并不具备可比性","aria-hidden":"true"}},[e._v("#")]),e._v(" async 是一种语法，Promise 是一个内置对象，两者并不具备可比性")]),e._v(" "),n("p",[e._v("更何况 async 函数也返回一个 Promise 对象……")]),e._v(" "),n("p",[e._v("使用 async 会比使用 Promise 更优雅的处理异步流程。")]),e._v(" "),n("ol",[n("li",[e._v("代码更加简洁")]),e._v(" "),n("li",[e._v("错误处理\nasync function fetch() {\ntry {\nconst data = JSON.parse(await fetchData())\n} catch (err) {\nconsole.log(err)\n}\n};")]),e._v(" "),n("li",[e._v("调试\n用 async 的时候，则可以像调试同步代码一样调试。")])]),e._v(" "),n("h1",{attrs:{id:"async-await和promise的关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#async-await和promise的关系","aria-hidden":"true"}},[e._v("#")]),e._v(" async-await和Promise的关系")]),e._v(" "),n("h2",{attrs:{id:"async-await-是建立在-promise机制之上的，并不能取代其地位。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#async-await-是建立在-promise机制之上的，并不能取代其地位。","aria-hidden":"true"}},[e._v("#")]),e._v(" async-await 是建立在 promise机制之上的，并不能取代其地位。")]),e._v(" "),n("h2",{attrs:{id:"async用来表示函数是异步的，定义的函数会返回一个promise对象，可以使用then方法添加回调函数。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#async用来表示函数是异步的，定义的函数会返回一个promise对象，可以使用then方法添加回调函数。","aria-hidden":"true"}},[e._v("#")]),e._v(" async用来表示函数是异步的，定义的函数会返回一个promise对象，可以使用then方法添加回调函数。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("async function demo01() {\n    return 123;\n}\n\ndemo01().then(val => {\n    console.log(val);// 123\n});\n若 async 定义的函数有返回值，return 123;相当于Promise.resolve(123),没有声明式的 return则相当于执行了Promise.resolve();\n")])])]),n("h2",{attrs:{id:"await-可以理解为是-async-wait-的简写。await-必须出现在-async-函数内部，不能单独使用。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#await-可以理解为是-async-wait-的简写。await-必须出现在-async-函数内部，不能单独使用。","aria-hidden":"true"}},[e._v("#")]),e._v(" await 可以理解为是 async wait 的简写。await 必须出现在 async 函数内部，不能单独使用。")]),e._v(" "),n("img",{attrs:{src:"http://pic.rmb.bdstatic.com/729689787df79599e77e4c85a42b22ea.jpeg",width:"50%/"}}),e._v(" "),n("h2",{attrs:{id:"await必须接一个promise对象的决议"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#await必须接一个promise对象的决议","aria-hidden":"true"}},[e._v("#")]),e._v(" await必须接一个promise对象的决议")]),e._v(" "),n("p",[e._v("await 后面可以跟任何的JS 表达式。虽然说 await 可以等很多类型的东西，但是它最主要的"),n("strong",[e._v("意图")]),e._v("是用来等待 Promise 对象的状态被 resolved。"),n("strong",[e._v("如果await的是 promise对象")]),e._v("会造成异步函数"),n("strong",[e._v("停止执行并且等待 promise 的决议")]),e._v(",如果等的是**正常的表达式（除了promise对象）**则立即执行。"),n("strong",[e._v("不在等待，失去本意")])]),e._v(" "),n("h2",{attrs:{id:"你有三个请求需要发生，第三个请求是依赖于第二个请求的解构第二个请求依赖于第一个请求的结果。用-f"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#你有三个请求需要发生，第三个请求是依赖于第二个请求的解构第二个请求依赖于第一个请求的结果。用-f","aria-hidden":"true"}},[e._v("#")]),e._v(" 你有三个请求需要发生，第三个请求是依赖于第二个请求的解构第二个请求依赖于第一个请求的结果。用 f()")]),e._v(" "),n("h2",{attrs:{id:"有三个异步请求需要发送，相互没有关联，只是需要当请求都结束后将界面的-loading-清除掉即可。用-t"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#有三个异步请求需要发送，相互没有关联，只是需要当请求都结束后将界面的-loading-清除掉即可。用-t","aria-hidden":"true"}},[e._v("#")]),e._v(" 有三个异步请求需要发送，相互没有关联，只是需要当请求都结束后将界面的 loading 清除掉即可。用 t()")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function tt () {\n      return new Promise((resolve, reject) => {\n        setTimeout(() => {\n          console.log(1)\n          resolve('tt')\n        }, 2000)\n      })\n    }\n    function ttt () {\n      return new Promise((resolve, reject) => {\n        setTimeout(() => {\n          console.log(2)\n          resolve('ttt')\n        }, 2000)\n      })\n    }\n\n    // 一次执行，依赖上一个的结果模式\n    async function f () {\n      let tt1 = await tt()\n      let ttt1 = await ttt()\n      console.log(tt1)\n      console.log(ttt1)\n    }\n    // 没有依赖关系，只关注都执行完毕的状态\n    async function t () {\n      let tt1 = tt()\n      let ttt1 = ttt()\n      await Promise.all([tt1, ttt1])\n    }\n\n    f()\n    t()\n")])])]),n("p",[n("strong",[e._v("async-await并不能取代promise")])])])},[],!1,null,null,null);t.default=s.exports}}]);