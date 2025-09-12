import{_ as n,c as a,o as p,ak as e}from"./chunks/framework.CmzJUe0_.js";const m=JSON.parse('{"title":"windows系统下开发环境启动脚本","description":"","frontmatter":{"title":"windows系统下开发环境启动脚本","date":"2023-03-07T00:00:00.000Z","sidebar":"auto","categories":["系统"],"tags":["windows"]},"headers":[],"relativePath":"blogs/Windows/windows系统下开发环境启动脚本.md","filePath":"blogs/Windows/windows系统下开发环境启动脚本.md"}'),i={name:"blogs/Windows/windows系统下开发环境启动脚本.md"};function l(t,s,c,o,d,r){return p(),a("div",null,s[0]||(s[0]=[e(`<p>[toc]</p><h2 id="windows系统下开发环境启动脚本" tabindex="-1">windows系统下开发环境启动脚本 <a class="header-anchor" href="#windows系统下开发环境启动脚本" aria-label="Permalink to &quot;windows系统下开发环境启动脚本&quot;">​</a></h2><p>使用场景：在windows系统下快速批量启动开发环境所需要的程序。</p><p>① 创建bat批处理文件，文件内容如下。</p><ul><li>批量运行nacos程序</li><li>批量运行nginx程序</li></ul><p>开发环境批量启动脚本.bat</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>:: 该脚本用于批量各种开发环境。例如nacos,nginx等</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:: 命令解释：</span></span>
<span class="line"><span>:: start 用来启动一个应用</span></span>
<span class="line"><span>:: cmd /k 表示cmd后面的命令执行完后不关闭窗口。如果要在执行完成后关闭窗口可以用/c </span></span>
<span class="line"><span>:: cd /d 表示运行到该目录下</span></span>
<span class="line"><span>:: 使用choice命令来延时1秒 choice /t 1 /d y</span></span>
<span class="line"><span>:: TIMEOUT /T 5 等待5秒</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>:: 进入到nacos集群1的bin目录</span></span>
<span class="line"><span>cd/d E:\\CodeEnviroment\\nacos-server-2.1.0\\nacos-cluster1\\bin</span></span>
<span class="line"><span>:: 不关闭窗口执行startup.cmd</span></span>
<span class="line"><span>start cmd /k startup.cmd</span></span>
<span class="line"><span>TIMEOUT /T 10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd/d E:\\CodeEnviroment\\nacos-server-2.1.0\\nacos-cluster2\\bin</span></span>
<span class="line"><span>start cmd /k startup.cmd</span></span>
<span class="line"><span>TIMEOUT /T 10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd/d E:\\CodeEnviroment\\nacos-server-2.1.0\\nacos-cluster3\\bin</span></span>
<span class="line"><span>start cmd /k startup.cmd</span></span>
<span class="line"><span>TIMEOUT /T 10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:: 进入到nginx的目录</span></span>
<span class="line"><span>:: 运行nginx</span></span>
<span class="line"><span>cd/d E:\\CodeEnviroment\\nginx-1.22.0</span></span>
<span class="line"><span>start nginx.exe</span></span></code></pre></div><p>② 创建Sentinel启动脚本.bat，文件内容如下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>java -Dserver.port=8898 -jar E:\\CodeEnviroment\\sentinel-dashboard-1.8.4.jar</span></span>
<span class="line"><span>pause</span></span></code></pre></div>`,9)]))}const u=n(i,[["render",l]]);export{m as __pageData,u as default};
