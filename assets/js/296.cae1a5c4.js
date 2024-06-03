(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{2095:function(t,a,e){"use strict";e.r(a);var r=e(2),s=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"get请求的参数包含中括号-时-报错400"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get请求的参数包含中括号-时-报错400"}},[t._v("#")]),t._v(" get请求的参数包含中括号[]时，报错400")]),t._v(" "),a("blockquote",[a("p",[t._v("问题描述")])]),t._v(" "),a("p",[t._v("当上传下载文件 abc[123].xlsx 时，报错400。但是只有此文件上传下载时会报错，其他文件是正常的。经排查最终发现是由于文件名包含中括号[]导致请求的错误。")]),t._v(" "),a("blockquote",[a("p",[t._v("问题分析")])]),t._v(" "),a("p",[t._v("经百度，发现是由于tomcat版本过高导致的。tomcat9(9.022)有一个新特性如下：")]),t._v(" "),a("p",[t._v("严格按照 RFC 3986规范进行访问解析，而 RFC 3986规范定义了Url中只允许包含英文字母（a-zA-Z）、数字（0-9）、-_.~4个特殊字符以及所有保留字符")]),t._v(" "),a("p",[t._v("因为get请求的参数是拼接在url后面的，所以参数中只要包含 [ 或 ] 都会报错400。")]),t._v(" "),a("blockquote",[a("p",[t._v("总结")])]),t._v(" "),a("p",[t._v("tomcat高版本中，不允许url中有特殊字符。当请求的url地址中会包括特殊字符[ 和 ] ，被tomcat直接拦下，报错400。")]),t._v(" "),a("p",[t._v("解决方法：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("用低版本的tomcat，tomcat 7.0.76之前的版本不会出现这个问题")])]),t._v(" "),a("li",[a("p",[t._v("修改高版本tomcat的配置。修改tomcat目录底下的/conf/server.xml")])])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('打开tomcat目录底下/conf/server.xml\n往Connector中添加relaxedQueryChars和relaxedPathChars,直接复制下面的relaxedQueryChars和relaxedPathChars即可。\n<Connector port="xxx" relaxedQueryChars="[]|{}-^\\`<>" relaxedPathChars="[]|{}-^\\`<>"/>\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("把拼在url后面的参数，用encodeURI()转换")])])])}),[],!1,null,null,null);a.default=s.exports}}]);