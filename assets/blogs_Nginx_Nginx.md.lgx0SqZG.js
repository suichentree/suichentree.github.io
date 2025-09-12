import{_ as n,c as a,o as p,ak as l}from"./chunks/framework.CmzJUe0_.js";const e="/assets/Nginx_img_8.BaVeij2x.png",i="/assets/Nginx_img_9.BUwTFgFd.png",t="/assets/Nginx_img_10.CeHEfYYY.png",c="/assets/Nginx_img_11.r4CDLpCB.png",v=JSON.parse('{"title":"Nginx基础","description":"","frontmatter":{"title":"Nginx基础","date":"2018-08-12T00:00:00.000Z","sidebar":"auto","categories":["服务器"],"tags":["Nginx"]},"headers":[],"relativePath":"blogs/Nginx/Nginx.md","filePath":"blogs/Nginx/Nginx.md"}'),o={name:"blogs/Nginx/Nginx.md"};function r(h,s,d,g,x,u){return p(),a("div",null,s[0]||(s[0]=[l('<p>[toc]</p><h2 id="nginx基础" tabindex="-1">Nginx基础 <a class="header-anchor" href="#nginx基础" aria-label="Permalink to &quot;Nginx基础&quot;">​</a></h2><p><span style="color:red;">基于当前nginx 1.16.0 版本所述。修改日期-20191223</span></p><p>Nginx是一款轻量级的Web 服务器,==反向代理服务器==,电子邮件（IMAP/POP3）代理服务器</p><blockquote><p>Nginx的应用场景</p></blockquote><ol><li>http服务器。Nginx是一个http服务可以独立提供http服务。可以做网页静态服务器。</li><li>虚拟主机。可以实现在一台服务器虚拟出多个网站。例如个人网站使用的虚拟主机。</li><li>反向代理，负载均衡。</li></ol><h4>Nginx的负载均衡</h4><blockquote><p>负载：就是Nginx接受请求. 均衡：Nginx将收到的请求按照一定的规则分发到不同的服务器进行处理。</p></blockquote><p><img src="'+e+'" alt="8"></p><p>nginx支持的负载均衡调度算法方式如下：</p><ol><li><p>weight轮询（默认）：把接收到的请求按照顺序逐一分配到不同的服务器上，即使某一台服务器宕机，nginx会自动将该服务器剔除出队列，请求受理情况不会受到任何影响。 或者可以给不同的后端服务器设置一个权重值（weight），权重数据越大，被分配到请求的几率越大。</p></li><li><p>ip_hash：每个请求按照发起客户端的ip的hash结果进行匹配，这样的算法下一个固定ip地址的客户端总会访问到同一个后端服务器。</p></li><li><p>fair：智能调整调度算法，动态的根据后端服务器的请求处理到响应的时间进行均衡分配，响应时间短处理效率高的服务器分配到请求的概率高，响应时间长处理效率低的服务器分配到的请求少；需要注意的是nginx默认不支持fair算法，如果要使用这种调度算法，请安装upstream_fair模块</p></li><li><p>url_hash：按照访问的url的hash结果分配请求，每个请求的url会指向后端固定的某个服务器，可以在nginx作为静态服务器的情况下提高缓存效率。同样注意nginx默认不支持这种调度算法，要使用的话需要安装nginx的hash软件包</p></li></ol><h3 id="_1-什么是反向代理" tabindex="-1">1.什么是反向代理？ <a class="header-anchor" href="#_1-什么是反向代理" aria-label="Permalink to &quot;1.什么是反向代理？&quot;">​</a></h3><h4>正向代理</h4><p>当客户端想要间接访问一个目标服务器时。客户端可以找一个可以访问目标服务器的另外一台服务器。这个另外一台服务器就是代理服务器。</p><p>正向代理的过程：</p><ol><li>客户端把请求发送给代理服务器，再通过代理服务器把请求发送给目标服务器。</li><li>代理服务器从目标服务器处获得相应的数据后，再转发给客户端。</li></ol><p><span style="color:red;">在正向代理的过程中，客户端和代理服务器知道目标服务器的IP地址，而目标服务器只知道代理服务器的IP地址而不知道客户端的IP地址。所以正向代理可以屏蔽或隐藏客户端的信息。所以代理服务器是为客户端作代理人，它是站在客户端这边的</span></p><p><img src="'+i+'" alt="9"></p><h4>反向代理</h4><p><span style="color:red;">由于正向代理是代理服务器作为客户端的代理人（客户端与代理是一伙的）。而反向代理是指代理服务器作为服务器的代理人（代理与目标服务器是一伙的）。并且在反向代理过程中，屏蔽或隐藏目标服务器的信息</span></p><p><img src="'+t+'" alt="10"></p><h4>一般在项目场景中</h4><p>在实际项目中，正向代理和反向代理很有可能会存在在一个应用场景中，正向代理代理客户端的请求去访问目标服务器，目标服务器是一个反向单利服务器，反向代理了多台真实的业务处理服务器。</p><p><img src="'+c+`" alt="11"></p><h3 id="_2-对nginx进行配置" tabindex="-1">2.对Nginx进行配置 <a class="header-anchor" href="#_2-对nginx进行配置" aria-label="Permalink to &quot;2.对Nginx进行配置&quot;">​</a></h3><p>nginx使用最多的三个核心功能是反向代理、负载均衡和静态服务器。这三个不同的功能的使用，都要从nginx的配置文件nginx.conf中进行配置。</p><p>上面的配置文件由5个部分组成：</p><p>main模块：用于nginx全局信息的配置,不在event.http括号中的配置信息 events模块：用于nginx工作模式的配置 http模块：用于http协议信息的一些配置 server模块：用于服务器访问信息的配置 location模块：用于进行访问路由的配置</p><blockquote><p>重点server模块是http模块中的一个子模块，用于服务器访问信息的配置</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {                      #一个虚拟主机的配置，一个http中可以配置多个server</span></span>
<span class="line"><span>        listen       80;</span></span>
<span class="line"><span>        server_name  localhost;    #指定ip地址或者域名，多个配置之间用空格分隔</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #charset koi8-r;              #用于设置www/路径中配置的网页的默认编码格式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #access_log  logs/host.access.log  main;        #用于指定该虚拟主机服务器中的访问记录日志存放路径</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            root   html;               #表示整个server虚拟主机内的根目录，所有当前主机中web项目的根目录</span></span>
<span class="line"><span>            index  index.html index.htm;        #用户访问web网站时的全局首页</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        #error_page  404              /404.html;     #错误页面</span></span>
<span class="line"><span>    }</span></span></code></pre></div><blockquote><ol start="5"><li>location模块是server模块中的一个子模块，用于进行访问路由的配置</li></ol></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>location / {                           # /表示匹配访问根目录</span></span>
<span class="line"><span>            root   html;               #用于指定访问根目录时，访问虚拟主机的web目录</span></span>
<span class="line"><span>            index  index.html index.htm;        #在不指定访问具体资源时，默认展示的资源文件列表</span></span>
<span class="line"><span>        }</span></span></code></pre></div><h4 id="_1-部署静态文件存储目录到nginx中" tabindex="-1">1.部署静态文件存储目录到nginx中 <a class="header-anchor" href="#_1-部署静态文件存储目录到nginx中" aria-label="Permalink to &quot;1.部署静态文件存储目录到nginx中&quot;">​</a></h4><ol><li><p>在/root 目录下创建static目录，用于存放静态文件</p></li><li><p>在server模块中添加新的location</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#静态文件目录</span></span>
<span class="line"><span>location  /static/ {</span></span>
<span class="line"><span>    root  /root;</span></span>
<span class="line"><span>    autoindex on; </span></span>
<span class="line"><span>    #autoindex on是显示目录</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="3"><li>访问：<a href="http://ip" target="_blank" rel="noreferrer">http://ip</a>:port/static/</li></ol><h4 id="_2-nginx中部署vue工程" tabindex="-1">2.nginx中部署vue工程 <a class="header-anchor" href="#_2-nginx中部署vue工程" aria-label="Permalink to &quot;2.nginx中部署vue工程&quot;">​</a></h4><p>另外创建一个server模块。直接给vue工程分配一个端口来进行部署。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen       8082;</span></span>
<span class="line"><span>    server_name  localhost;</span></span>
<span class="line"><span>    root C:\\Users\\Administrator\\Desktop\\dist;</span></span>
<span class="line"><span>    client_max_body_size 1024M; # 配置上传文件大小限制 </span></span>
<span class="line"><span>    try_files $uri $uri/ /index.html; #防止vue工程刷新后，报404错误</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_3-若访问nginx出现403-forbidden" tabindex="-1">3.若访问nginx出现403 forbidden <a class="header-anchor" href="#_3-若访问nginx出现403-forbidden" aria-label="Permalink to &quot;3.若访问nginx出现403 forbidden&quot;">​</a></h4><blockquote><p>原因1：启动用户和nginx工作用户不一样，导致nginx没有目标目录的访问权限所致</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#解决方法，在nginx.conf的第一行把user xxx; 改为user root;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#设置nginx的目录访问权限</span></span>
<span class="line"><span>user  root;</span></span></code></pre></div><blockquote><p>原因2：localtion中的root对应的目录。缺少index.html</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>location  /www/ {</span></span>
<span class="line"><span>    root  /data;</span></span>
<span class="line"><span>    index  index.html index.htm;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>如果在/data/www/下面没有index.html的时候,会报403 forbidden。</p><blockquote><p>原因3：SELinux设置为开启状态（enabled）的原因。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#查看当前selinux的状态。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/usr/sbin/sestatus</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#将SELINUX=enforcing 修改为 SELINUX=disabled 状态。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vim /etc/selinux/config</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 把SELINUX=enforcing 改为 SELINUX=disabled</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#重启生效</span></span>
<span class="line"><span></span></span>
<span class="line"><span>reboot</span></span></code></pre></div><h4 id="_4-location-语法规则" tabindex="-1">4.location 语法规则 <a class="header-anchor" href="#_4-location-语法规则" aria-label="Permalink to &quot;4.location 语法规则&quot;">​</a></h4><p>语法规则</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>location [=|~|~*|^~] /uri/ { </span></span>
<span class="line"><span>    … </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>=  表示精确匹配</span></span>
<span class="line"><span></span></span>
<span class="line"><span>^~ 表示uri以某个常规字符串开头，理解为匹配 url路径即可。nginx不对url做编码，因此请求为/static/20%/aa，可以被规则^~ /static/ /aa匹配到（注意是空格）。以xx开头</span></span>
<span class="line"><span></span></span>
<span class="line"><span>~  表示区分大小写的正则匹配,以xx结尾</span></span>
<span class="line"><span></span></span>
<span class="line"><span>~* 表示不区分大小写的正则匹配,以xx结尾</span></span>
<span class="line"><span></span></span>
<span class="line"><span>!~ 和 !~* 分别为区分大小写不匹配及不区分大小写不匹配 的正则</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/ 通用匹配，任何请求都会匹配到。</span></span></code></pre></div><p>匹配顺序：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>首先精确匹配</span></span>
<span class="line"><span>其次以xx开头匹配^~</span></span>
<span class="line"><span>然后是按文件中顺序的正则匹配</span></span>
<span class="line"><span>最后是交给 / 通用匹配。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>############举例</span></span>
<span class="line"><span></span></span>
<span class="line"><span>location = / {</span></span>
<span class="line"><span>   #规则A</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>location = /login {</span></span>
<span class="line"><span>   #规则B</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>location ^~ /static/ {</span></span>
<span class="line"><span>   #规则C</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>location ~ \\.(gif|jpg|png|js|css)$ {</span></span>
<span class="line"><span>   #规则D，注意：是根据括号内的大小写进行匹配。括号内全是小写，只匹配小写</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>location ~* \\.png$ {</span></span>
<span class="line"><span>   #规则E</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>location !~ \\.xhtml$ {</span></span>
<span class="line"><span>   #规则F</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>location !~* \\.xhtml$ {</span></span>
<span class="line"><span>   #规则G</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>location / {</span></span>
<span class="line"><span>   #规则H</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>访问根目录/， 比如http://localhost/ 将匹配规则A</span></span>
<span class="line"><span></span></span>
<span class="line"><span>访问 http://localhost/login 将匹配规则B，http://localhost/register 则匹配规则H</span></span>
<span class="line"><span></span></span>
<span class="line"><span>访问 http://localhost/static/a.html 将匹配规则C</span></span>
<span class="line"><span></span></span>
<span class="line"><span>访问 http://localhost/a.gif, http://localhost/b.jpg 将匹配规则D和规则E，但是规则D顺序优先，规则E不起作用， 而 http://localhost/static/c.png 则优先匹配到 规则C</span></span>
<span class="line"><span></span></span>
<span class="line"><span>访问 http://localhost/a.PNG 则匹配规则E， 而不会匹配规则D，因为规则E不区分大小写。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>访问 http://localhost/a.xhtml 不会匹配规则F和规则G，</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http://localhost/a.XHTML不会匹配规则G，（因为!）。规则F，规则G属于排除法，符合匹配规则也不会匹配到，所以想想看实际应用中哪里会用到。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>访问 http://localhost/category/id/1111 则最终匹配到规则H，因为以上规则都不匹配，这个时候nginx转发请求给后端应用服务器，比如FastCGI（php），tomcat（jsp），nginx作为方向代理服务器存在。</span></span></code></pre></div><h4 id="_5-配置https请求-通过https请求来访问nginx" tabindex="-1">5.配置https请求，通过https请求来访问nginx <a class="header-anchor" href="#_5-配置https请求-通过https请求来访问nginx" aria-label="Permalink to &quot;5.配置https请求，通过https请求来访问nginx&quot;">​</a></h4><ol><li>在/usr/local/nginx目录下创建ssl目录，存放服务器ip绑定的域名证书</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen    443 ssl;</span></span>
<span class="line"><span>    server_name  www.suichen.xyz;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ssl_certificate      /usr/local/nginx/ssl/1_www.suichen.xyz_bundle.crt; #证书路径</span></span>
<span class="line"><span>    ssl_certificate_key  /usr/local/nginx/ssl/2_www.suichen.xyz.key;        #证书私钥路径</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ssl_session_cache    shared:SSL:1m;</span></span>
<span class="line"><span>    ssl_session_timeout  5m;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;</span></span>
<span class="line"><span>    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;</span></span>
<span class="line"><span>    ssl_prefer_server_ciphers  on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       </span></span>
<span class="line"><span>    #下面是localtion配置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_6-nginx-将域名下所有http请求转换为https请求" tabindex="-1">6.Nginx 将域名下所有http请求转换为https请求 <a class="header-anchor" href="#_6-nginx-将域名下所有http请求转换为https请求" aria-label="Permalink to &quot;6.Nginx 将域名下所有http请求转换为https请求&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name www.suichen.xyz;</span></span>
<span class="line"><span>    rewrite ^(.*) https://$server_name$1 permanent;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_3-nginx的一些基本命令-centos系统中" tabindex="-1">3.nginx的一些基本命令(centos系统中) <a class="header-anchor" href="#_3-nginx的一些基本命令-centos系统中" aria-label="Permalink to &quot;3.nginx的一些基本命令(centos系统中)&quot;">​</a></h3><p>/usr/local/nginx/sbin/nginx 是nginx的命令文件的目录位置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/usr/local/nginx/sbin/nginx           #启动nginx服务器</span></span>
<span class="line"><span>/usr/local/nginx/sbin/nginx -s stop    #强制停止nginx服务器，如果有未处理的数据，丢弃</span></span>
<span class="line"><span>/usr/local/nginx/sbin/nginx -s quit    #正常关闭服务器。如果有未处理的数据，等待处理完成之后停止</span></span>
<span class="line"><span>/usr/local/nginx/sbin/nginx -s reload  #重新加载配置文件</span></span>
<span class="line"><span>/usr/local/nginx/sbin/nginx -s reopen  #重新打开日志文件</span></span>
<span class="line"><span>/usr/local/nginx/sbin/nginx -v         #显示 nginx 的版本。</span></span>
<span class="line"><span>/usr/local/nginx/sbin/nginx -V         #显示 nginx 的版本，编译器版本和配置参数。</span></span>
<span class="line"><span>/usr/local/nginx/sbin/nginx -c filename  #为 Nginx 指定一个配置文件，来代替缺省的.</span></span>
<span class="line"><span>/usr/local/nginx/sbin/nginx -t          #不运行，而仅仅测试配置文件，检查配置文件中是否有错。</span></span></code></pre></div><h3 id="_4-nginx用作http请求转发-用作请求代理功能。" tabindex="-1">4.nginx用作http请求转发.用作请求代理功能。 <a class="header-anchor" href="#_4-nginx用作http请求转发-用作请求代理功能。" aria-label="Permalink to &quot;4.nginx用作http请求转发.用作请求代理功能。&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen       8080;</span></span>
<span class="line"><span>    server_name  localhost;</span></span>
<span class="line"><span>    root C:\\Users\\Administrator\\Desktop\\vue-x\\dist;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    location /api {</span></span>
<span class="line"><span>        proxy_pass http://xxx.xxx.xxx:8099;</span></span>
<span class="line"><span>        proxy_redirect off;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>/api</code>配置会将所有指向/api路径下的请求都转发到某个服务器上8099端口对应的服务上，在浏览器上显示请求路径本身不会发生变化</p><p><span style="color:red;">即 <code>http://localhost:8080/api/getUser</code> 的请求会被转发到 <code>http://xxx.xxx.xxx:8099/api/getUser</code> 接口上。</span></p><p>若把<code>/api</code> 改为 <code>/api/</code>。则转发后的请求路径只会保留/api之后的部分，即/api/getUser的请求会被转发到8099服务的/getUser接口上。</p><p><span style="color:red;">即 <code>http://localhost:8080/api/getUser</code> 的请求会被转发到 <code>http://xxx.xxx.xxx:8099/getUser</code> 接口上。</span></p><h3 id="_5-http请求跳转到https接口上-nginx会返回405或301请求错误问题。" tabindex="-1">5.http请求跳转到https接口上，nginx会返回405或301请求错误问题。 <a class="header-anchor" href="#_5-http请求跳转到https接口上-nginx会返回405或301请求错误问题。" aria-label="Permalink to &quot;5.http请求跳转到https接口上，nginx会返回405或301请求错误问题。&quot;">​</a></h3><p>问题原因：当你强制把http请求去请求https的接口。nginx会进行301跳转。但301跳转后会导致请求方法都变成了GET方式,后台接受到请求后,由于请求方式的不同，会返回405和301错误。而Get请求不受此影响。</p><span style="color:red;"> 如下代码：请求方服务器为http环境,而目标服务器\`https://xxx.xxx.xxx\`为https环境下。 </span><p>解决方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen       8083;</span></span>
<span class="line"><span>    server_name  localhost;</span></span>
<span class="line"><span>    root C:\\Users\\Administrator\\Desktop\\vue-x\\dist;</span></span>
<span class="line"><span>    try_files $uri $uri/ /index.html; #解决vue工程刷新后，报404错误 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    error_page 405 = 200 $uri; # 把405错误变为200成功状态</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location /fileManager {</span></span>
<span class="line"><span>        proxy_pass https://xxx.xxx.xxx;</span></span>
<span class="line"><span>        proxy_redirect off;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>或者</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>        listen       8083;</span></span>
<span class="line"><span>        server_name  localhost;</span></span>
<span class="line"><span>        location /fileManager {</span></span>
<span class="line"><span>            if ($request_method ~ ^(POST|DELETE|OPTIONS)$) {</span></span>
<span class="line"><span>                proxy_pass https://xxx.xxx.xxx;</span></span>
<span class="line"><span>                break ;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            rewrite ^(.*) https://$server_name$1 permanent; # 将/fileManager开头的http请求转换为https请求</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,73)]))}const m=n(o,[["render",r]]);export{v as __pageData,m as default};
