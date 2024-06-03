(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1128:function(s,a,e){s.exports=e.p+"assets/img/redis20221010095907.4dfbf453.png"},1129:function(s,a,e){s.exports=e.p+"assets/img/redis20221010094849.05fbed11.png"},1130:function(s,a,e){s.exports=e.p+"assets/img/redis_20230724150640.dc444439.png"},1131:function(s,a,e){s.exports=e.p+"assets/img/redis_20230724151132.e1130ff3.png"},1132:function(s,a,e){s.exports=e.p+"assets/img/redis_20230724152442.c5a40481.png"},1133:function(s,a,e){s.exports=e.p+"assets/img/redis_20230724152619.3866d2d6.png"},1134:function(s,a,e){s.exports=e.p+"assets/img/redis_20230724153210.1d48c036.png"},1135:function(s,a,e){s.exports=e.p+"assets/img/redis20221010105002.30acf7f8.png"},1136:function(s,a,e){s.exports=e.p+"assets/img/redis_20231115194141.b2b343ee.png"},1137:function(s,a,e){s.exports=e.p+"assets/img/redis_20231115194249.6ee9008e.png"},1138:function(s,a,e){s.exports=e.p+"assets/img/redis_20230727094805.491b85ce.png"},1139:function(s,a,e){s.exports=e.p+"assets/img/redis_20230727094900.399af7f9.png"},1140:function(s,a,e){s.exports=e.p+"assets/img/redis20221010112603.6f333fcd.png"},1981:function(s,a,e){"use strict";e.r(a);var t=e(2),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("[toc]")]),s._v(" "),a("h1",{attrs:{id:"redis笔记1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis笔记1"}},[s._v("#")]),s._v(" Redis笔记1")]),s._v(" "),a("h2",{attrs:{id:"什么是nosql数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是nosql数据库"}},[s._v("#")]),s._v(" 什么是NoSql数据库?")]),s._v(" "),a("p",[a("strong",[s._v("NoSql")]),s._v("可以翻译做Not Only Sql（不仅仅是SQL），或者是No Sql（非Sql的）数据库。是相对于传统关系型数据库而言，有很大区别的一种特殊的数据库，因此也称之为"),a("strong",[s._v("非关系型数据库")]),s._v("。")]),s._v(" "),a("blockquote",[a("p",[s._v("传统关系型数据库与NoSql数据库的区别：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("* 结构化与非结构化\n传统关系型数据库是结构化数据，每一张表都有严格的约束信息：字段名.字段数据类型.字段约束等等信息，插入的数据必须遵守这些约束。而NoSql则对数据库格式没有严格约束，往往形式松散，自由。可以是键值型,文档型,图类型的等等。\n\n* 关联和非关联\n传统数据库的表与表之间往往存在关联，例如外键。而非关系型数据库不存在关联关系，要维护数据之间的关系要么靠代码中的业务逻辑，要么靠数据之间的耦合。\n\n* 查询方式\n传统关系型数据库会基于Sql语句做查询，语法有统一标准。而不同的非关系数据库查询语法差异极大，五花八门各种各样。\n\n* 事务\n传统关系型数据库能满足事务ACID的原则。而非关系型数据库往往不支持事务，或者不能严格保证ACID的特性，只能实现基本的一致性。\n\n* 存储方式\n关系型数据库基于磁盘进行存储，会有大量的磁盘IO，对性能有一定影响。非关系型数据库，更多的是依赖于内存来进行存储，内存的读写速度会非常快，性能自然会好一些。\n\n* 扩展性\n关系型数据库集群模式一般是主从，主从数据一致，起到数据备份的作用，称为垂直扩展。非关系型数据库可以将数据拆分，存储在不同机器上，可以保存海量数据，解决内存大小有限的问题。称为水平扩展。\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[a("img",{attrs:{src:e(1128),alt:"redis20221010095907.png"}})]),s._v(" "),a("h2",{attrs:{id:"redis介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis介绍"}},[s._v("#")]),s._v(" Redis介绍")]),s._v(" "),a("p",[s._v("Redis 全称 Remote Dictionary Server (远程字典服务器) , 是一个基于内存的key-value数据库。")]),s._v(" "),a("p",[a("img",{attrs:{src:e(1129),alt:"redis20221010094849.png"}})]),s._v(" "),a("blockquote",[a("p",[s._v("与其他内存型数据库相比，Redis的特点：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1. Redis 不仅可以将数据完全保存在内存中，还可以通过磁盘实现数据的持久存储；\n2. Redis 支持丰富的数据类型，包括 string、list、set、zset、hash 等多种数据类型；\n3. Redis 支持主从同步，即 master-slave 主从复制模式。数据可以从主服务器向任意数量的从服务器上同步，有效地保证数据的安全性；\n4. Redis 支持多种编程语言，包括 C、C++、Python、Java、PHP、Ruby、Lua 等语言。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("blockquote",[a("p",[s._v("Redis的使用场景")])]),s._v(" "),a("p",[s._v("Redis 用来缓存一些经常被访问的热点数据、或者需要耗费大量资源的内容，通过把这些内容放到 Redis 中，可以让应用程序快速地读取它们。例如，网站的首页需要经常被访问，并且在创建首页的过程中会消耗的较多的资源，此时就可以使用 Redis 将整个首页缓存起来，从而降低网站的压力，减少页面访问的延迟时间。")]),s._v(" "),a("h2",{attrs:{id:"redis的安装与启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis的安装与启动"}},[s._v("#")]),s._v(" Redis的安装与启动")]),s._v(" "),a("p",[s._v("大多数企业都是基于Linux系统来部署项目，而且Redis官方也没有提供Windows版本的安装包。因此都会基于Linux系统来安装Redis。")]),s._v(" "),a("h3",{attrs:{id:"windows系统下安装启动redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows系统下安装启动redis"}},[s._v("#")]),s._v(" windows系统下安装启动redis")]),s._v(" "),a("p",[s._v("Redis官方没有提供 Windows 版的安装包，但可以通过 GitHub 来下载 Windows 版 Redis安装包。")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tporadowski/redis/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("Windows 版 Redis安装包下载地址"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("font",{attrs:{color:"red"}},[s._v("注意：Windows 安装包是某位民间“大神”根据 Redis 源码改造的，并非 Redis 官方网站提供。")])],1),s._v(" "),a("ol",[a("li",[s._v("下载redis安装包\n"),a("img",{attrs:{src:e(1130),alt:"redis_20230724150640.png"}}),s._v(" "),a("img",{attrs:{src:e(1131),alt:"redis_20230724151132.png"}})])]),s._v(" "),a("ul",[a("li",[s._v("redis.windwos.conf是配置文件")]),s._v(" "),a("li",[s._v("redis.cli.exe 是redis客户端程序")]),s._v(" "),a("li",[s._v("redis-server.exe 是redis服务端程序")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[s._v("启动服务端程序，双击redis-server.exe。会看到如下界面\n"),a("img",{attrs:{src:e(1132),alt:"redis_20230724152442.png"}}),s._v("\n注意，请您保持服务端始终处于开启状态，否则客户端无法正常工作。")])]),s._v(" "),a("li",[a("p",[s._v("启动客户端程序，双击客户端启动程序redis-cli.exe。如图所示，表示redis客户端与服务端连接成功。\n"),a("img",{attrs:{src:e(1133),alt:"redis_20230724152619.png"}})])]),s._v(" "),a("li",[a("p",[s._v("将redis安装路径配置到环境变量中。这样可以在终端的任何位置运行redis的命令。\n"),a("img",{attrs:{src:e(1134),alt:"redis_20230724153210.png"}})])]),s._v(" "),a("li",[a("p",[s._v("还可以通过命令行来启动redis.")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("开启redis服务端：redis-server --service-start\n停止redis服务端：redis-server --service-stop\n卸载redis服务端：redis-server --service-uninstall\n启动redis客户端：redis-cli\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"ubuntu系统下安装启动redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu系统下安装启动redis"}},[s._v("#")]),s._v(" ubuntu系统下安装启动redis")]),s._v(" "),a("p",[s._v("相比于 Windows 系统而言，Redis 更适合于在 Linux 系统上使用，这是由 Redis 的底层机制决定的。")]),s._v(" "),a("blockquote",[a("p",[s._v("命令行在线安装")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 在 Ubuntu 终端执行相应的命令即可在线安装 Redis")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" redis-server\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 启动Redis服务端")]),s._v("\nredis-server\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 启动Redis客户端")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#简单格式")]),s._v("\nredis-cli\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#若设置了密码，使用如下格式启动")]),s._v("\nredis-cli "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("blockquote",[a("p",[s._v("源代码安装")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.首先从redis官网下载redis源代码。")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将安装包放到/usr/local/src目录，并解压安装包。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xzf redis-5.0.4.tar.gz\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译并安装源代码包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" redis-5.0.4\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装完成后，redis会默认安装在/usr/local/bin目录下。")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/bin       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入安装目录中")]),s._v("\n./redis-server          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动服务端")]),s._v("\n./redis-cli             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动客户端")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[a("img",{attrs:{src:e(1135),alt:"redis20221010105002.png"}})]),s._v(" "),a("h3",{attrs:{id:"docker环境下安装启动redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker环境下安装启动redis"}},[s._v("#")]),s._v(" Docker环境下安装启动redis")]),s._v(" "),a("blockquote",[a("p",[s._v("步骤① 先安装docker环境，自行百度。")])]),s._v(" "),a("blockquote",[a("p",[s._v("步骤② 下载redis镜像文件。最新版或某个版本")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载最新版的redis镜像")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull redis\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载某个版本的redis镜像")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull redis:7.2.3-alpine\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询镜像")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("alpine 是一个轻量的linux系统，这边版本表示是轻量版。")]),s._v(" "),a("blockquote",[a("p",[s._v("步骤③ 创建redis的容器的存储目录，即容器数据卷")])]),s._v(" "),a("p",[s._v("需要创建一个conf目录和data目录，分别存储redis容器的配置和数据。")]),s._v(" "),a("blockquote",[a("p",[s._v("步骤④ 下载官方redis配置文件，并修改")])]),s._v(" "),a("p",[s._v("下载官方的redis配置文件，注意配置文件要与redis容器版本要对应。不同版本的配置文件有差别，无法适配。")]),s._v(" "),a("p",[s._v("修改内容如下")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意，这个要注释掉，使redis可以外部访问")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# bind 127.0.0.1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 守护进程设置为no,不要设置为yes，否则与docker -d命令冲突，从而导致容器启动失败。")]),s._v("\ndaemonize no\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 给redis设置密码")]),s._v("\nrequirepass "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis持久化，默认是no，改为yes")]),s._v("\nappendonly "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("blockquote",[a("p",[s._v("步骤⑤：创建并启动redis容器")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建容器并启动")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis-server /etc/redis/redis.conf 在容器启动的时候运行redis-server的命令，用于加载容器内的 conf 文件。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myRedis"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--privileged")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36379")]),s._v(":6379 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /d/DockerVolumes/redis/conf/redis.conf:/etc/redis/redis.conf  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /d/DockerVolumes/redis/data:/data redis:7.2.3-alpine redis-server /etc/redis/redis.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询容器日志，看是否成功启动。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs myRedis\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("注意：/d/DockerVolumes/... 是windows环境下D盘的DockerVolumes目录。如果宿主机是linux系统，可以设置其他目录。")])]),s._v(" "),a("p",[s._v("如图是window的docker客户端。显示的是redis容器\n"),a("img",{attrs:{src:e(1136),alt:"redis_20231115194141.png"}})]),s._v(" "),a("blockquote",[a("p",[s._v("步骤6：redis客户端连接redis容器即可。")])]),s._v(" "),a("p",[a("img",{attrs:{src:e(1137),alt:"redis_20231115194249.png"}})]),s._v(" "),a("h2",{attrs:{id:"redis配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis配置文件"}},[s._v("#")]),s._v(" Redis配置文件")]),s._v(" "),a("p",[s._v("windows系统中 Redis 的安装目录中有一个名为 redis.windows.conf 的配置文件，Linux 系统中则为 redis.conf。")]),s._v(" "),a("h3",{attrs:{id:"查看配置信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看配置信息"}},[s._v("#")]),s._v(" 查看配置信息")]),s._v(" "),a("p",[s._v("以使用Redis的"),a("code",[s._v("CONFIG")]),s._v("命令来查看或者更改Redis的配置信息。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 语法如下")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" CONFIG GET 配置名称\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取日志配置信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" CONFIG GET 配置名称\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"loglevel"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"notice"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取所有配置信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" CONFIG GET *\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dbfilename"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dump.rdb"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"修改配置信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改配置信息"}},[s._v("#")]),s._v(" 修改配置信息")]),s._v(" "),a("p",[s._v("如果我们需要修改redis配置文件的时候，一般是将原配置文件进行备份，然后再修改。")]),s._v(" "),a("ol",[a("li",[s._v("将redis.conf原配置文件复制重命名为redis.conf.backup")]),s._v(" "),a("li",[s._v("修改配置")])]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许访问的地址，默认是127.0.0.1，会导致只能在本地访问。修改为0.0.0.0则可以在任意IP访问，生产环境不要设置为0.0.0.0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("bind")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("0.0.0.0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 守护进程，修改为yes后就默认为后台运行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("daemonize")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("yes ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 密码，设置后访问Redis必须输入密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("requirepass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("123456")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Redis默认端口为 6379.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("port")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("6379")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库数量，设置为16，代表使用16个数据库，默认有16个库，编号0~15")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("databases")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("16")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置redis能够使用的最大内存")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("maxmemory")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("512mb")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 工作目录，默认是当前目录，也就是运行redis-server时的命令，日志、持久化等文件会保存在这个目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("dir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志文件，默认为空(即不记录日志)，可以指定日志文件名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("logfile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v('"redis.log"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("重新启动Redis")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入redis安装目录 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/src/redis-6.2.6\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定配置文件启动")]),s._v("\nredis-server redis.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"配置文件配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件配置项"}},[s._v("#")]),s._v(" 配置文件配置项")]),s._v(" "),a("p",[a("img",{attrs:{src:e(1138),alt:"redis_20230727094805.png"}}),s._v(" "),a("img",{attrs:{src:e(1139),alt:"redis_20230727094900.png"}})]),s._v(" "),a("h2",{attrs:{id:"redis开机自启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis开机自启"}},[s._v("#")]),s._v(" Redis开机自启")]),s._v(" "),a("p",[s._v("可以通过配置来实现Redis开机自启。")]),s._v(" "),a("ol",[a("li",[s._v("新建一个systemctl服务文件：")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/systemd/system/redis.service\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis.service内容如下：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("redis-server\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("forking\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/bin/redis-server /usr/local/src/redis-6.2.6/redis.conf\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PrivateTmp")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("然后重新加载systemctl服务：")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("systemctl daemon-reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("现在可以用下面这组命令来操作redis：")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\nsystemctl start redis\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止")]),s._v("\nsystemctl stop redis\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\nsystemctl restart redis\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看状态")]),s._v("\nsystemctl status redis\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 让redis开机自启")]),s._v("\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" redis\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"redis图形化客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis图形化客户端"}},[s._v("#")]),s._v(" Redis图形化客户端")]),s._v(" "),a("p",[s._v("在这个github仓库可以找到Redis图形化桌面客户端安装包："),a("a",{attrs:{href:"https://github.com/lework/RedisDesktopManager-Windows/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载链接"),a("OutboundLink")],1)]),s._v(" "),a("ol",[a("li",[s._v("安装redis图形化桌面客户端")]),s._v(" "),a("li",[s._v("运行该客户端，填写redis配置信息。链接redis服务器。\n"),a("img",{attrs:{src:e(1140),alt:"redis20221010112603.png"}})])]),s._v(" "),a("p",[s._v("Redis默认有16个仓库，编号从0至15. 通过配置文件可以设置仓库数量，但是不超过16，并且不能自定义仓库名称。")])])}),[],!1,null,null,null);a.default=n.exports}}]);