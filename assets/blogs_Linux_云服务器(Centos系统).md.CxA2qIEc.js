import{_ as a,c as n,o as i,ak as p}from"./chunks/framework.CmzJUe0_.js";const d=JSON.parse('{"title":"云服务器(Centos系统)的学习笔记","description":"","frontmatter":{"title":"云服务器(Centos系统)的学习笔记","date":"2020-02-12T00:00:00.000Z","sidebar":"auto","categories":["系统"],"tags":["Linux"]},"headers":[],"relativePath":"blogs/Linux/云服务器(Centos系统).md","filePath":"blogs/Linux/云服务器(Centos系统).md"}'),l={name:"blogs/Linux/云服务器(Centos系统).md"};function t(e,s,h,k,c,r){return i(),n("div",null,s[0]||(s[0]=[p(`<p>[toc]</p><h2 id="云服务器-centos系统" tabindex="-1">云服务器(Centos系统) <a class="header-anchor" href="#云服务器-centos系统" aria-label="Permalink to &quot;云服务器(Centos系统)&quot;">​</a></h2><h3 id="_1-安装java环境-tar-gz解压安装" tabindex="-1">1.安装java环境-tar.gz解压安装 <a class="header-anchor" href="#_1-安装java环境-tar-gz解压安装" aria-label="Permalink to &quot;1.安装java环境-tar.gz解压安装&quot;">​</a></h3><p>oracle官网账号：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>2696671285@qq.com </span></span>
<span class="line"><span>密码：Oracle123</span></span></code></pre></div><ol><li><p>从oracle官网下载jdk源码包。例如jdk-8u221-linux-x64.tar.gz</p></li><li><p>在/usr/local 中创建java目录</p></li><li><p>把下载好的jdk转移到java目录中，之后使用命令解压 <code>tar -xzvf jdk-8u221-linux-x64.tar.gz</code></p></li><li><p>配置Java的环境变量</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 使用vim打开文件(vim编辑器中，按i进入编辑模式，编辑好后，在按esc退出编辑模式。并按:wq 保存并退出文件)</span></span>
<span class="line"><span>vim /etc/profile </span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 在末尾添加</span></span>
<span class="line"><span>export JAVA_HOME=/usr/local/java/jdk1.8.0_221</span></span>
<span class="line"><span>export JRE_HOME=\${JAVA_HOME}/jre</span></span>
<span class="line"><span>export CLASSPATH=.:\${JAVA_HOME}/lib:\${JRE_HOME}/lib</span></span>
<span class="line"><span>export PATH=\${JAVA_HOME}/bin:$PATH</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3.保存退出</span></span>
<span class="line"><span>esc </span></span>
<span class="line"><span>:wq</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 使环境变量生效</span></span>
<span class="line"><span>source /etc/profile</span></span></code></pre></div><ol start="5"><li>检查java是否安装成功</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@VM_0_4_centos java]# java -version</span></span>
<span class="line"><span>java version &quot;1.8.0_221&quot;</span></span>
<span class="line"><span>Java(TM) SE Runtime Environment (build 1.8.0_221-b11)</span></span>
<span class="line"><span>Java HotSpot(TM) 64-Bit Server VM (build 25.221-b11, mixed mode)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#表示jdk安装成功</span></span></code></pre></div><h4 id="_1-java-运行-jar包" tabindex="-1">1.java 运行 jar包 <a class="header-anchor" href="#_1-java-运行-jar包" aria-label="Permalink to &quot;1.java 运行 jar包&quot;">​</a></h4><ol><li>当安装好java运行环境后,为了方便在centos系统根目录创建文件夹/root/shu_miniprogram</li></ol><p>/root/shu_miniprogram 表示是专门属于微信小程序的</p><ol start="2"><li><p>把springboot项目，通过maven打包好的jar包，放到该目录中</p></li><li><p>创建该jar包的启动脚本,并把这个脚本文件与jar包放到同一目录中。通过该脚本可方便运行，停止，重启该jar包</p></li></ol><p>shu_miniprogram.sh</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#你jar包所在的目录 这里可替换为你自己的执行程序，其他代码无需更改</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">APP_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/root/shu_miniprogram/shu_miniprogram.jar</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">currentTime</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">date</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;+%Y%m%d&#39;\`</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#使用说明，用来提示输入参数</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">usage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Usage: sh robotcenter.sh [start|stop|restart|status]&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    exit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#检查程序是否在运行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">is_exist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  pid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ps</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">grep</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $APP_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">grep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> grep</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">awk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{print $2}&#39;\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #如果不存在返回1，存在返回0     </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-z</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  else</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  fi</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#启动方法</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  is_exist</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$?</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -eq</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">APP_NAME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} is already running. pid=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  else</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    nohup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> java</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -jar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${APP_NAME}  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/root/shu_miniprogram/mpLogs/shu_miniprogram</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$currentTime</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.log</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    ##上面是项目运行后产生的日志文件设置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;...&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    sleep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;...&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    sleep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    is_exist</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$?</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -eq</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">APP_NAME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} is running success. pid=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    fi</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  fi</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#停止方法</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  is_exist</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$?</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -eq</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    kill</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $pid</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;...&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    sleep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    is_exist</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$?</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -eq</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">APP_NAME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} still in the running. pid=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    else</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">APP_NAME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} has stopped running.&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    fi</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  else</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">APP_NAME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} is not running&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  fi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#输出运行状态</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">status</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  is_exist</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$?</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -eq</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">APP_NAME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} is running. Pid is \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  else</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">APP_NAME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} is NOT running.&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  fi</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#重启</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  stop</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #sleep 5</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  start</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#根据输入参数，选择执行对应方法，不输入则执行使用说明</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">case</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;start&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    start</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ;;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;stop&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    stop</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ;;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;status&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    status</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ;;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;restart&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    restart</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ;;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  *)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    usage</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ;;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">esac</span></span></code></pre></div><ol start="4"><li>在脚本文件所属目录中，运行该脚本</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[root@VM_0_4_centos shu_miniprogram]# ./shu_miniprogram.sh start   #运行项目</span></span>
<span class="line"><span>[root@VM_0_4_centos shu_miniprogram]# ./shu_miniprogram.sh stop   #停止项目</span></span>
<span class="line"><span>[root@VM_0_4_centos shu_miniprogram]# ./shu_miniprogram.sh restart   #重启项目</span></span>
<span class="line"><span>[root@VM_0_4_centos shu_miniprogram]# ./shu_miniprogram.sh status   #查询项目状态</span></span></code></pre></div><h3 id="_2-安装mysql环境-通过yum的方式安装mysql" tabindex="-1">2.安装Mysql环境(通过yum的方式安装mysql) <a class="header-anchor" href="#_2-安装mysql环境-通过yum的方式安装mysql" aria-label="Permalink to &quot;2.安装Mysql环境(通过yum的方式安装mysql)&quot;">​</a></h3><p><strong>CentOS7 一般有自带的mariadb数据库，若想使用mysql,先卸载它。</strong></p><ol><li>卸载原系统中的mariadb</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>查看是否有mariadb的安装包，没有可以无视</span></span>
<span class="line"><span>rpm -qa|grep mariadb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>命令删除它</span></span>
<span class="line"><span>rpm -e --nodeps mariadb-libs</span></span></code></pre></div><ol start="2"><li>下载rpm链接文件。之后通过rpm链接文件下载yum安装软件</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>在官方网站下载mysql的yum源文件</span></span>
<span class="line"><span>https://dev.mysql.com/downloads/repo/yum/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>或者通过命令下载</span></span>
<span class="line"><span>wget http://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm</span></span></code></pre></div><ol start="3"><li>将下载好的rpm文件拖到服务器中，在同级目录中执行命令,下载mysql文件</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum -y install mysql57-community-release-el7-11.noarch.rpm</span></span></code></pre></div><ol start="4"><li>查看一下下载了那些</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum repolist enabled | grep mysql.*</span></span></code></pre></div><ol start="5"><li>安装MySQL服务器</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum install mysql-community-server</span></span>
<span class="line"><span>中间会弹出是与否的选择，选择y即可</span></span></code></pre></div><ol start="6"><li>处理MySQL中文乱码问题</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1.  vim /etc/my.cnf  打开mysql配置文件</span></span>
<span class="line"><span>2.</span></span>
<span class="line"><span>    在[mysqld]前面加</span></span>
<span class="line"><span>    [client]  </span></span>
<span class="line"><span>    default-character-set=utf8 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    在[mysqld]后面加</span></span>
<span class="line"><span>    default-storage-engine=INNODB  </span></span>
<span class="line"><span>    character-set-server=utf8 </span></span>
<span class="line"><span>    collation-server=utf8_general_ci</span></span></code></pre></div><ol start="7"><li>mysql服务命令</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>启动mysql服务</span></span>
<span class="line"><span>systemctl start  mysqld.service</span></span>
<span class="line"><span>运行一下命令查看一下运行状态 </span></span>
<span class="line"><span>systemctl status mysqld.service</span></span>
<span class="line"><span>重启mysql服务</span></span>
<span class="line"><span>systemctl restart mysqld.service</span></span></code></pre></div><ol start="8"><li>登录Mysql</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1.查看一下Mysql的初始密码</span></span>
<span class="line"><span>grep &quot;password&quot; /var/log/mysqld.log</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2.通过初始密码登录mysql</span></span>
<span class="line"><span>mysql -uroot -p</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3.修改密码</span></span>
<span class="line"><span>mysql&gt;ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;****************&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4.输入后使修改生效还需要下面的语句</span></span>
<span class="line"><span>mysql&gt;flush privileges;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5.查询mysql编码</span></span>
<span class="line"><span>mysql&gt;status</span></span>
<span class="line"><span>看到里面的编码格式都变成utf8时就表示可以支持中文了.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>退出mysql命令行</span></span>
<span class="line"><span>mysql&gt;exit</span></span></code></pre></div><ol start="9"><li>设置Mysql自动启动</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>systemctl enable mysqld</span></span>
<span class="line"><span>systemctl daemon-reload</span></span></code></pre></div><ol start="10"><li>重启mysql服务,使之前的修改生效</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>systemctl restart mysqld.service</span></span></code></pre></div><ol start="11"><li>服务器上安装mysql已经完成，接下来需要使用navicat操控服务器中的mysql数据库</li></ol><h4 id="_1-若使用navicat连接远程数据库-出现1130错误码" tabindex="-1">1.若使用navicat连接远程数据库，出现1130错误码！ <a class="header-anchor" href="#_1-若使用navicat连接远程数据库-出现1130错误码" aria-label="Permalink to &quot;1.若使用navicat连接远程数据库，出现1130错误码！&quot;">​</a></h4><p>当连接远程数据库时，出现错误代码是1130，ERROR 1130: Host X.X.X.X is not allowed to connect to this MySQL server</p><p>原因：安装mysql数据库时，默认是只能是本地ip(localhost)，才能连接mysql</p><p>解决方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. mysql -u root -p;  #进入mysql控制台</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 输入命令,%表示所有的ip都可以连接这个数据库，root是指mysql中的root用户</span></span>
<span class="line"><span>mysql&gt;grant all privileges on *.* to &#39;root&#39;@&#39;%&#39; identified by &#39;密码&#39; with grant option;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3.刷新并退出控制台</span></span>
<span class="line"><span>mysql&gt;flush privileges;</span></span>
<span class="line"><span>mysql&gt;exit</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4.重启mysql服务,使之前的修改生效</span></span>
<span class="line"><span>systemctl restart mysqld.service</span></span></code></pre></div><h3 id="_3-安装nginx" tabindex="-1">3.安装nginx <a class="header-anchor" href="#_3-安装nginx" aria-label="Permalink to &quot;3.安装nginx&quot;">​</a></h3><p><strong>Centos环境安装nginx有两种方式：yum安装和源代码安装。下面主要描述源代码安装</strong></p><p>centos系统中安装nginx一般安装在/usr/local/nginx目录中</p><blockquote><p>源代码安装：</p></blockquote><ol start="0"><li><p>在nginx 官网中下载nginx的安装包 nginx-1.18.0.tar.gz</p></li><li><p>检查之前是否安装nginx</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rpm -qa | grep nginx</span></span>
<span class="line"><span>#有返回值表示已经安装nginx</span></span></code></pre></div><ol start="2"><li>安装nginx前，需要安装其他依赖库包</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 安装 gcc 环境</span></span>
<span class="line"><span>    # nginx编译时依赖gcc环境</span></span>
<span class="line"><span>    # 先检查是否安装gcc环境,有返回值表示已经安装gcc环境</span></span>
<span class="line"><span>    gcc --version</span></span>
<span class="line"><span>    $ sudo yum -y install gcc gcc-c++ </span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 安装 pcre</span></span>
<span class="line"><span>    # 让nginx支持重写功能</span></span>
<span class="line"><span>    # 先检查是否安装过</span></span>
<span class="line"><span>    rpm -qa pcre</span></span>
<span class="line"><span>    $ sudo yum -y install pcre pcre-devel</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3.安装 zlib</span></span>
<span class="line"><span>    # zlib库提供了很多压缩和解压缩的方式，nginx使用zlib对http包内容进行gzip压缩</span></span>
<span class="line"><span>    # 先查询是否安装过</span></span>
<span class="line"><span>    yum info zlib</span></span>
<span class="line"><span>    $ sudo yum -y install zlib zlib-devel </span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 安装 openssl</span></span>
<span class="line"><span>    # 安全套接字层密码库，用于通信加密</span></span>
<span class="line"><span>    # 先检查时安装过</span></span>
<span class="line"><span>    openssl version -a</span></span>
<span class="line"><span>    $ sudo yum -y install openssl openssl-devel</span></span></code></pre></div><ol start="3"><li>开始安装nginx</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 从官网上下载源码包nginx-1.18.0.tar.gz,一般放在/usr/lcoal目录中解压</span></span>
<span class="line"><span>$ cd /usr/local/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 解压，并生成nginx安装目录nginx-1.18.0</span></span>
<span class="line"><span>$ tar -zxvf nginx-1.18.0.tar.gz </span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 解压缩后，进入安装目录nginx-1.18.0进行源码编译安装,执行以下命令。</span></span>
<span class="line"><span>$ cd nginx-1.18.0</span></span>
<span class="line"><span>$ ./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ make          #编译</span></span>
<span class="line"><span>$ make install  #编译安装</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 将安装后的nginx源码配置到usr/local/nginx目录下</span></span>
<span class="line"><span># --prefix=/usr/local/nginx  是设置nginx编译安装后的目录（推荐），安装完后会在此目录下生成相关文件</span></span>
<span class="line"><span># --with-http_stub_status_module --with-http_ssl_module 是开启nginx的ssl模块，可以方便用https来访问nginx</span></span>
<span class="line"><span># make是指编译</span></span>
<span class="line"><span># make install是指安装</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 以上命令执行完成后，会创建/usr/local/nginx，并在目录中产生nginx安装后的文件。</span></span>
<span class="line"><span>5. 除/usr/local/nginx中的文件。之前的nginx-1.18.0.tar.gz压缩文件和nginx-1.18.0安装包文件删除即可。</span></span></code></pre></div><p><strong>一般都会在/usr/lcoal目录中出现nginx目录，这个就是nginx安装后产生的文件夹。然后删除源码包nginx-1.18.0.tar.gz，和安装包目录nginx-1.18.0</strong></p><ol start="3"><li>nginx的一些基本命令</li></ol><p><span style="color:red;">注意：nginx的安装目录为/usr/local/nginx</span></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> #方式1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/usr/local/nginx/sbin/nginx            #启动nginx服务器</span></span>
<span class="line"><span>/usr/local/nginx/sbin/nginx -s stop    #强制停止nginx服务器，如果有未处理的数据，丢弃</span></span>
<span class="line"><span>/usr/local/nginx/sbin/nginx -s quit    #正常关闭服务器。如果有未处理的数据，等待处理完成之后停止</span></span>
<span class="line"><span>/usr/local/nginx/sbin/nginx -s reload  #重新加载配置文件</span></span>
<span class="line"><span>/usr/local/nginx/sbin/nginx -s reopen  #重新打开日志文件</span></span>
<span class="line"><span>/usr/local/nginx/sbin/nginx -v         #显示 nginx 的版本。</span></span>
<span class="line"><span>/usr/local/nginx/sbin/nginx -V         #显示 nginx 的版本，编译器版本和配置参数。</span></span>
<span class="line"><span>/usr/local/nginx/sbin/nginx -c filename  #为 Nginx 指定一个配置文件，来代替缺省的.</span></span>
<span class="line"><span>/usr/local/nginx/sbin/nginx -t          #不运行，而仅仅测试配置文件，检查配置文件中是否有错。</span></span>
<span class="line"><span></span></span>
<span class="line"><span> #方式2</span></span>
<span class="line"><span> cd /usr/local/nginx/sbin/ #切换目录执行以下命令</span></span>
<span class="line"><span>./nginx </span></span>
<span class="line"><span>./nginx -s stop</span></span>
<span class="line"><span>./nginx -s quit</span></span>
<span class="line"><span>./nginx -s reload</span></span>
<span class="line"><span>./nginx -s quit  #此方式停止步骤是待nginx进程处理任务完毕进行停止。</span></span>
<span class="line"><span>./nginx -s stop  #此方式相当于先查出nginx进程id再使用kill命令强制杀掉进程。</span></span>
<span class="line"><span></span></span>
<span class="line"><span> #查看nginx服务进程</span></span>
<span class="line"><span>$ ps -ef | grep nginx # 查看服务进程</span></span></code></pre></div><ol start="4"><li>修改nginx的启动端口</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1.nginx的配置文件的绝对路径 ginx/conf/nginx.conf</span></span>
<span class="line"><span>2.使用vim编辑器修改该配置文件。 </span></span>
<span class="line"><span>3.修改80端口为8090。</span></span>
<span class="line"><span>4.重新启动nginx服务</span></span>
<span class="line"><span>5.在浏览器中输入ip:8090访问</span></span></code></pre></div>`,61)]))}const o=a(l,[["render",t]]);export{d as __pageData,o as default};
