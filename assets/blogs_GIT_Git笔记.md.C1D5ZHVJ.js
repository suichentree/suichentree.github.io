import{_ as a,c as n,o as p,ak as i}from"./chunks/framework.CmzJUe0_.js";const h=JSON.parse('{"title":"Git笔记","description":"","frontmatter":{"title":"Git笔记","date":"2021-03-12T00:00:00.000Z","sidebar":"auto","tags":["Git"]},"headers":[],"relativePath":"blogs/GIT/Git笔记.md","filePath":"blogs/GIT/Git笔记.md"}'),e={name:"blogs/GIT/Git笔记.md"};function l(t,s,c,o,g,r){return p(),n("div",null,s[0]||(s[0]=[i(`<p>[toc]</p><h2 id="git笔记" tabindex="-1">Git笔记 <a class="header-anchor" href="#git笔记" aria-label="Permalink to &quot;Git笔记&quot;">​</a></h2><p>Git是一个开源的分布式版本控制系统.</p><h3 id="_1-git安装与配置" tabindex="-1">1.Git安装与配置 <a class="header-anchor" href="#_1-git安装与配置" aria-label="Permalink to &quot;1.Git安装与配置&quot;">​</a></h3><p>当git安装完成后，在开始菜单里找到“Git”-&gt;“Git Bash”，蹦出一个类似命令行窗口的东西，就说明Git安装成功！ 在Git Bash中进行全局个人配置，配置你的git用户名和git邮箱</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ git config --global user.name &quot;Your Name&quot;</span></span>
<span class="line"><span>$ git config --global user.email &quot;email@example.com&quot;</span></span></code></pre></div><h3 id="_2-常用命令" tabindex="-1">2.常用命令 <a class="header-anchor" href="#_2-常用命令" aria-label="Permalink to &quot;2.常用命令&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 进入到blog目录中使用该命令，给该目录创建版本库</span></span>
<span class="line"><span>&gt; cd blog</span></span>
<span class="line"><span>&gt; git init</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 创建txt文件并添加文件到版本库中</span></span>
<span class="line"><span>&gt; git add readme.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 提交所有修改文件，并记录这次提交的标题 </span></span>
<span class="line"><span>&gt; git commit -m &quot;add a readme file&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>提示：git add . 是提交所有修改文件。</span></span></code></pre></div><p><span style="color:red;">使用git init命令后会在当前目录创建一个隐藏的.git的目录，这个目录是Git来跟踪管理当前目录的版本库，不要轻易修改和删除。</span></p><p><span style="color:red;">当提交commit完后，若想把本地版本库最近的修改推送到网上的github远程版本库中，则需要git push origin master把本地库的内容推送到远程库的master分支中</span></p><h5>工作区,版本库和暂存区</h5><ol><li>工作区：就是当前git仓库所在的目录。</li><li>版本库：工作区中的一个隐藏目录<code>.git</code>,这个目录就是版本库。</li><li>暂存区：Git的版本库中最重要的就是称为stage（或者叫index）的暂存区和自动创建的第一个分支master(主分支)。</li></ol><p>git add把文件添加进去，实际上就是把文件添加到暂存区； git commit提交更改，实际上就是把暂存区的所有内容提交到当前分支的版本库中。 git remote -v 查询当前git连接的远程项目地址</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>3. 查询当前仓库的状态</span></span>
<span class="line"><span>$ git status</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 查询某个文件的修改内容</span></span>
<span class="line"><span>$ git diff readme.txt </span></span>
<span class="line"><span></span></span>
<span class="line"><span>5. 显示版本库中从最近到最远的提交日志</span></span>
<span class="line"><span>$ git log</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>6. 版本回退</span></span>
<span class="line"><span>$ git reset --hard HEAD^   #回退到上一个版本</span></span>
<span class="line"><span>$ git reset --hard HEAD^^   #回退到上上一个版本</span></span>
<span class="line"><span></span></span>
<span class="line"><span>....</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ git reset --hard HEAD~10   #回退到往上10一个版本</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ git reset --hard commit_id  #回退到某一个具体的版本。根据commit_id</span></span></code></pre></div><p>PS: 在Git中，用HEAD表示当前版本，上一个版本就是HEAD^。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>7. 记录你的每一次命令历史内容</span></span>
<span class="line"><span>$ git reflog</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>8.撤销修改</span></span>
<span class="line"><span></span></span>
<span class="line"><span>情况1: 当你工作区中某个文件的修改想要撤销时</span></span>
<span class="line"><span>$ git checkout -- readme.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>情况2：当你git add后，想要撤销暂存区中某个文件的修改时</span></span>
<span class="line"><span>    1. $ git reset HEAD readme.txt       #先把暂存区中readme文件的修改撤销掉</span></span>
<span class="line"><span>    2. $ git checkout -- readme.txt      #再把工作区中readme文件的修改撤销掉</span></span>
<span class="line"><span></span></span>
<span class="line"><span>情况3： 当你git commit后，想要撤销修改，则必须进行版本回退。</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>9.删除文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>情况1：当你在工作区中删除某个无用的文件后。并且也把版本库中的该文件也删除。</span></span>
<span class="line"><span>$ git rm test.txt                   #删除版本库中的无用文件 </span></span>
<span class="line"><span>$ git commit -m &quot;remove test.txt&quot;   #更新版本库</span></span>
<span class="line"><span></span></span>
<span class="line"><span>情况2：当你把工作区中有用的文件删除了，想要恢复过来。</span></span>
<span class="line"><span>$ git checkout -- test.txt          #用版本库里的版本替换工作区的版本</span></span></code></pre></div><p>PS：从来没有被添加到版本库的文件。被删除后是无法恢复的！</p><h3 id="_3-远程仓库" tabindex="-1">3.远程仓库 <a class="header-anchor" href="#_3-远程仓库" aria-label="Permalink to &quot;3.远程仓库&quot;">​</a></h3><h4 id="_1-创建ssh-key" tabindex="-1">1.创建SSH key <a class="header-anchor" href="#_1-创建ssh-key" aria-label="Permalink to &quot;1.创建SSH key&quot;">​</a></h4><p>本地Git仓库和GitHub仓库之间的传输是通过SSH加密的。</p><span style="color:red;"><p>为什么需要在GitHub中配置SSH Key呢？ 因为GitHub需要识别出你推送的提交确实是你推送的，而不是别人冒充的，而Git支持SSH协议，所以，GitHub只要知道了你的公钥，就可以确认只有你自己才能推送。</p><p>GitHub允许你添加多个Key。假定你有若干电脑，你一会儿在公司提交，一会儿在家里提交，只要把每台电脑的SSH Key都添加到你的GitHub，就可以在每台电脑上往你的GitHub推送了。</p></span><blockquote><p>连接github远程仓库的步骤</p></blockquote><ol><li>先查找<code>.ssh</code>目录，看看这个目录下有没有<code>id_rsa</code>和<code>id_rsa.pub</code>这两个文件。若有，则不需要创建SSH key。</li></ol><p>id_rsa是私钥文件，id_rsa.pub是公钥文件。</p><ol start="2"><li>若无<code>.ssh</code>目录，则创建SSH Key(在Git bash 界面中)</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ ssh-keygen -t rsa -C &quot;youremail@example.com&quot;</span></span></code></pre></div><ol start="3"><li>登录你的github账号</li></ol><p>打开 Account settings -&gt;进入到 SSH Keys 页面 -&gt; 点击 Add SSH Key -&gt; 填上任意Title，在Key文本框里粘贴id_rsa.pub文件的内容.</p><ol start="4"><li>你的github中保存了你本地电脑上的SSH key,则你本地的电脑可以推送内容到你的github上去了。</li></ol><h4 id="_2-将远程库与你本地的git库进行关联" tabindex="-1">2.将远程库与你本地的git库进行关联 <a class="header-anchor" href="#_2-将远程库与你本地的git库进行关联" aria-label="Permalink to &quot;2.将远程库与你本地的git库进行关联&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1.关联</span></span>
<span class="line"><span>$ git remote add origin git@github.com:你的github上的某个仓库的全称.git</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## origin 是指远程库的名字，可以更改。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2.把本地库的所有内容推送到远程库上</span></span>
<span class="line"><span>$ git push -u origin master     # 第一次把本地库的内容推送到远程库时的命令</span></span>
<span class="line"><span>$ git push origin master        # 之后把本地库的内容推送到远程库时的命令</span></span></code></pre></div><h4 id="_3-从远程库克隆到本地库中" tabindex="-1">3.从远程库克隆到本地库中 <a class="header-anchor" href="#_3-从远程库克隆到本地库中" aria-label="Permalink to &quot;3.从远程库克隆到本地库中&quot;">​</a></h4><p>ps：首先创建一个新的空目录</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ git clone git@github.com:你github上的某个仓库的全称.git</span></span></code></pre></div><h2 id="_2-git-centos版本" tabindex="-1">2.Git(Centos版本) <a class="header-anchor" href="#_2-git-centos版本" aria-label="Permalink to &quot;2.Git(Centos版本)&quot;">​</a></h2><h3 id="_1-安装git" tabindex="-1">1.安装git <a class="header-anchor" href="#_1-安装git" aria-label="Permalink to &quot;1.安装git&quot;">​</a></h3><blockquote><p>方式一：yum命令安装：</p></blockquote><p><code>sudo yum install -y git</code></p><blockquote><p>方式二：源码安装</p></blockquote><ol><li>首先安装下依赖包（可使用rpm -qa | grep wget命令查看是否有安装包）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo yum install -y wget</span></span>
<span class="line"><span>sudo yum install -y gcc-c++</span></span>
<span class="line"><span>sudo yum install -y zlib-devel perl-ExtUtils-MakeMaker</span></span></code></pre></div><ol start="2"><li>通过官网链接下载git源码包</li></ol><p><code>wget https://mirrors.edge.kernel.org/pub/software/scm/git/git-2.9.0.tar.gz</code></p><ol start="3"><li>解压，配置，安装</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>tar -zxvf git-2.9.0.tar.gz</span></span>
<span class="line"><span>cd git-2.9.0</span></span>
<span class="line"><span>./configure --prefix=/usr/local  </span></span>
<span class="line"><span>make</span></span>
<span class="line"><span>sudo make install</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## ./configure后面的–prefix=/usr/local，指定安装路径为usr/local</span></span></code></pre></div><ol start="4"><li>查看安装好的git版本</li></ol><p><code>git --version</code></p><h3 id="_2-配置git用户信息" tabindex="-1">2.配置git用户信息 <a class="header-anchor" href="#_2-配置git用户信息" aria-label="Permalink to &quot;2.配置git用户信息&quot;">​</a></h3><p><strong>首先创建一目录，下面所有操作在目录中执行。</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 配置用户信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git config --global user.name &quot;Your Name&quot;</span></span>
<span class="line"><span>git config --global user.email &quot;email@example.com&quot;</span></span></code></pre></div><h3 id="_3-创建公钥私钥" tabindex="-1">3.创建公钥私钥 <a class="header-anchor" href="#_3-创建公钥私钥" aria-label="Permalink to &quot;3.创建公钥私钥&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 输入命令：</span></span>
<span class="line"><span>ssh-keygen -t rsa -C &quot;youremail@example.com&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 属于文件名，用于保存密钥（不输入文件名，使用默认文件名（推荐），那么就会生成 id_rsa 和 id_rsa.pub 两个秘钥文件）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Generating public/private rsa key pair.</span></span>
<span class="line"><span>Enter file in which to save the key (/root/.ssh/id_rsa):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 提示你输入两次密码（该密码是你push文件的时候要输入的密码，而不是github管理者的密码。</span></span>
<span class="line"><span>不输入密码，直接按回车。那么push的时候就不需要输入密码，直接提交到github上了）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Enter passphrase (empty for no passphrase): </span></span>
<span class="line"><span>Enter same passphrase again:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4.之后密钥就会创建好,一般在/root/.ssh/id_rsa目录中</span></span></code></pre></div><h3 id="_4-关联github" tabindex="-1">4.关联github <a class="header-anchor" href="#_4-关联github" aria-label="Permalink to &quot;4.关联github&quot;">​</a></h3><p>进入到密钥目录中，将生成的id_rsa.pub的内容存储到github中</p><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>安装git后</span></span>
<span class="line"><span>$ git config --global user.name &quot;Your Name&quot;</span></span>
<span class="line"><span>$ git config --global user.email &quot;email@example.com&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ ssh-keygen -t rsa -C &quot;youremail@example.com&quot; 创建ssh key，用于和github通信</span></span>
<span class="line"><span>(秘钥存储于C:\\Users\\27634\\.ssh，把公钥id_rsa.pub存储于github)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>创建版本库</span></span>
<span class="line"><span>$ pwd 命令用于显示当前目录(没啥用)</span></span>
<span class="line"><span>$ git init 把这个目录变成Git可以管理的仓库(后续新建提交和ssh克隆需要)	</span></span>
<span class="line"><span></span></span>
<span class="line"><span>操作版本库</span></span>
<span class="line"><span>$ git add 文件名 添加文件(新增或者更改都需要先add)</span></span>
<span class="line"><span>$ git commit -m &quot;说明&quot; 提交到本地版本库</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ git status 查看仓库状态</span></span>
<span class="line"><span>$ git diff 文件名 查看修改的地方</span></span>
<span class="line"><span></span></span>
<span class="line"><span>版本回退(从一个commit恢复)</span></span>
<span class="line"><span>$ git log 查看版本历史</span></span>
<span class="line"><span>$ git reset --hard HEAD^ 回退到上个版本</span></span>
<span class="line"><span>$ git reset --hard 1094a 回退到特定版本号(commit以后回退)</span></span>
<span class="line"><span>$ git reflog 记录每一次命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ git checkout -- file 直接丢弃工作区的修改(add以前回退)</span></span>
<span class="line"><span>$ git reset HEAD &lt;file&gt; 添加到了暂存区时，想丢弃修改(add以后回退)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>删除文件</span></span>
<span class="line"><span>$ git rm file(已经add/commit,在目录中删除)</span></span>
<span class="line"><span>$ git checkout -- file 删错了回退</span></span>
<span class="line"><span></span></span>
<span class="line"><span>远程仓库</span></span>
<span class="line"><span>$ git remote add origin git@server-name:path/repo-name.git 关联远程库</span></span>
<span class="line"><span>$ git push -u origin master 第一次的push</span></span>
<span class="line"><span>$ git push origin master 常用的push，本地分支会在服务器上新建分支</span></span>
<span class="line"><span>$ git pull 需要有关联的分支，第一次下拉最好新建一个空文件夹</span></span>
<span class="line"><span>$ git branch --set-upstream-to=origin/远程分支 本地分支 关联分支</span></span>
<span class="line"><span>$ git clone git@server-name:path/repo-name.git 克隆(不需要另建文件夹)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>更换远程仓库</span></span>
<span class="line"><span>方式1：</span></span>
<span class="line"><span>git remote -v                       #查看远端地址</span></span>
<span class="line"><span>git remote                          #查看远端仓库名</span></span>
<span class="line"><span>git remote set-url origin 新地址    #更换远程仓库地址，仓库别名origin</span></span>
<span class="line"><span>方式2：</span></span>
<span class="line"><span>git remote rm origin                 #删除远程的仓库origin</span></span>
<span class="line"><span>git remote add origin 新地址         #重新添加远程仓库,远程仓库别名为origin,注意 origin是默认的别名。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>git remote add github-origin 新地址     # github上的远程仓库地址 </span></span>
<span class="line"><span>git remote add gitee-origin 新地址      # gitee上的远程仓库地址</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>分支</span></span>
<span class="line"><span>$ git branch -a                         #查看所有分支</span></span>
<span class="line"><span>$ git branch -vv                        #查看分支关联</span></span>
<span class="line"><span>$ git branch dev                        #创建分支</span></span>
<span class="line"><span>$ git checkout dev                      #切换分支</span></span>
<span class="line"><span>$ git merge dev                         #合并某分支到当前分支</span></span>
<span class="line"><span>$ git merge --no-ff -m &quot;msg&quot; dev        #普通模式合并，合并后的历史有分支</span></span>
<span class="line"><span>$ git branch -d dev                     #删除分支</span></span>
<span class="line"><span>$ git checkout -b dev                   #创建并切换分支</span></span>
<span class="line"><span>$ git branch -m 旧分支名称 新分支名称    #更换当前本地分支名称</span></span>
<span class="line"><span></span></span>
<span class="line"><span>合并分支,无法merge</span></span>
<span class="line"><span>$ git stash save 名字 暂存工作状态</span></span>
<span class="line"><span>$ git pull origin dev 拉下来 </span></span>
<span class="line"><span>$ git stash list 查看已经暂存的状态</span></span>
<span class="line"><span>$ git stash pop stash@{0} 将暂存状态merge到当前分支</span></span>
<span class="line"><span>还有冲突时,手动修改文件,然后add/commit</span></span>
<span class="line"><span>$ git log --graph 分支合并图</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bug分支issue</span></span>
<span class="line"><span>$ git stash 暂存工作状态</span></span>
<span class="line"><span>$ git stash list 查看暂存工作状态</span></span>
<span class="line"><span>$ git stash pop 恢复暂存状态并删除状态</span></span>
<span class="line"><span></span></span>
<span class="line"><span>开发分支feature</span></span>
<span class="line"><span>$ git branch -D &lt;name&gt; 强制删除未合并的分支</span></span>
<span class="line"><span></span></span>
<span class="line"><span>rebase</span></span>
<span class="line"><span>$ git rebase 本地未push的分叉提交历史整理成直线</span></span>
<span class="line"><span></span></span>
<span class="line"><span>标签</span></span>
<span class="line"><span>$ git tag 标签名 打在最新提交的commit上</span></span>
<span class="line"><span>$ git tag 查询所有标签</span></span>
<span class="line"><span>$ git tag 标签名 f52c633 给特定的commit打标签</span></span>
<span class="line"><span>$ git tag -a 标签名 -m &quot;msg&quot; commit的id 给标签设置说明</span></span>
<span class="line"><span>$ git show 标签名 查询标签内容</span></span>
<span class="line"><span>$ git tag -d 标签名 删除标签</span></span>
<span class="line"><span>$ git push origin 标签名 推送某个标签到远程</span></span>
<span class="line"><span>$ git push origin --tags 推送所有标签</span></span>
<span class="line"><span>$ git push origin :refs/tags/&lt;tagname&gt; 可以删除一个远程标签。</span></span></code></pre></div><h2 id="git的使用" tabindex="-1">Git的使用 <a class="header-anchor" href="#git的使用" aria-label="Permalink to &quot;Git的使用&quot;">​</a></h2><h3 id="_1-git单个仓库的用户名邮箱配置" tabindex="-1">1.Git单个仓库的用户名邮箱配置 <a class="header-anchor" href="#_1-git单个仓库的用户名邮箱配置" aria-label="Permalink to &quot;1.Git单个仓库的用户名邮箱配置&quot;">​</a></h3><p>如果你公司的项目是放在自建的gitlab上面, 如果你不对单个仓库配置用户名和邮箱的话, 则会使用全局的, 这个时候是错误的, 正确的做法是针对公司的项目, 在项目根目录下进行单独配置。</p><p>git单个仓库配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git config user.name &quot;userName&quot; ## 配置当前仓库的用户名</span></span>
<span class="line"><span>git config user.email &quot;xxx@xx.com&quot; ## 配置当前仓库的邮箱</span></span>
<span class="line"><span>git config --list ## 查看当前仓库的配置</span></span></code></pre></div><p><span style="color:red;">git config --list查看当前配置, 在当前项目下面查看的配置是全局配置+当前项目的配置, 使用的时候会优先使用当前项目的配置</span></p><p>git全局配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git config --global user.name &quot;github&#39;s Name&quot;</span></span>
<span class="line"><span>git config --global user.email &quot;github@xx.com&quot;</span></span>
<span class="line"><span>git config --list</span></span></code></pre></div><h3 id="_2-windows下升级git版本" tabindex="-1">2.windows下升级git版本 <a class="header-anchor" href="#_2-windows下升级git版本" aria-label="Permalink to &quot;2.windows下升级git版本&quot;">​</a></h3><ol><li><p>先查看当前安装的git版本 <code>git --version</code></p></li><li><p>更新 git版本是2.17.1之前的，使用 <code>git update</code> git版本是2.17.1之后的，使用 <code>git update-git-for-windows</code></p></li></ol><h2 id="git的忽略文件-gitignore" tabindex="-1">Git的忽略文件.gitignore <a class="header-anchor" href="#git的忽略文件-gitignore" aria-label="Permalink to &quot;Git的忽略文件.gitignore&quot;">​</a></h2><p>注意：</p><ul><li><span style="color:red;">.gitignore只对从来没有commit过的文件起作用。否则是无效的。</span></li><li>一个git项目中可以有多个.gitignore文件</li><li>每个.gitigore文件只对所处目录和其子目录有作用。</li><li>若要配置全局.gitignore文件。则需要将.gitignore文件放在git项目根目录中。</li></ul><h3 id="gitignore文件中的匹配语法规则" tabindex="-1">.gitignore文件中的匹配语法规则 <a class="header-anchor" href="#gitignore文件中的匹配语法规则" aria-label="Permalink to &quot;.gitignore文件中的匹配语法规则&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1 空格不匹配任意文件，可作为分隔符，可用反斜杠转义</span></span>
<span class="line"><span>2 开头的文件标识注释，可以使用反斜杠进行转义</span></span>
<span class="line"><span>3 ! 开头的模式标识否定，该文件将会再次被包含，如果排除了该文件的父级目录，则使用 ! 也不会再次被包含。可以使用反斜杠进行转义</span></span>
<span class="line"><span>4 / 结束的模式只匹配文件夹以及在该文件夹路径下的内容，但是不匹配该文件</span></span>
<span class="line"><span>5 / 开始的模式匹配项目跟目录</span></span>
<span class="line"><span>6 如果一个模式不包含斜杠，则它匹配相对于当前 .gitignore 文件路径的内容，如果该模式不在 .gitignore 文件中，则相对于项目根目录</span></span>
<span class="line"><span>7 ** 匹配多级目录，可在开始，中间，结束</span></span>
<span class="line"><span>8 ? 通用匹配单个字符</span></span>
<span class="line"><span>9 * 通用匹配零个或多个字符</span></span>
<span class="line"><span>10 [] 通用匹配单个字符列表</span></span></code></pre></div><p>.gitignore文件用法举例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>bin/        忽略bin目录内的所有内容，不忽略bin目录本身</span></span>
<span class="line"><span>/bin        忽略根目录下的bin文件或bin目录</span></span>
<span class="line"><span>/*.c        忽略cat.c等后缀为c的文件，不忽略 build/cat.c</span></span>
<span class="line"><span>debug/*.obj 忽略 debug/io.obj，不忽略 debug/common/io.obj 和 tools/debug/io.obj</span></span>
<span class="line"><span>**/foo      忽略/foo, a/foo, a/b/foo等</span></span>
<span class="line"><span>a/**/b      忽略a/b, a/x/b, a/x/y/b等</span></span>
<span class="line"><span>!/bin/a.sh  不忽略 bin 目录下的a.sh 文件</span></span>
<span class="line"><span>*.log       忽略所有 .log 文件</span></span>
<span class="line"><span>config.php  忽略当前路径的 config.php 文件</span></span></code></pre></div><h3 id="gitignore文件常用模板" tabindex="-1">.gitignore文件常用模板 <a class="header-anchor" href="#gitignore文件常用模板" aria-label="Permalink to &quot;.gitignore文件常用模板&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># java</span></span>
<span class="line"><span>*.class</span></span>
<span class="line"><span></span></span>
<span class="line"><span># package file</span></span>
<span class="line"><span>*.war</span></span>
<span class="line"><span>*.ear</span></span>
<span class="line"><span>*.zip</span></span>
<span class="line"><span>*.tar.gz</span></span>
<span class="line"><span>*.rar</span></span>
<span class="line"><span></span></span>
<span class="line"><span># maven ignore</span></span>
<span class="line"><span>target/</span></span>
<span class="line"><span>build/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># eclipse ignore</span></span>
<span class="line"><span>.settings/</span></span>
<span class="line"><span>.project</span></span>
<span class="line"><span>.classpatch</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Intellij idea</span></span>
<span class="line"><span>.idea/</span></span>
<span class="line"><span>/.idea</span></span>
<span class="line"><span>*.ipr</span></span>
<span class="line"><span>*.iml</span></span>
<span class="line"><span>*.iws</span></span>
<span class="line"><span></span></span>
<span class="line"><span># temp file</span></span>
<span class="line"><span>*.log</span></span>
<span class="line"><span>*.cache</span></span>
<span class="line"><span>*.diff</span></span>
<span class="line"><span>*.patch</span></span>
<span class="line"><span>*.tmp</span></span></code></pre></div><h3 id="已经提交过无效文件的处理方法" tabindex="-1">已经提交过无效文件的处理方法 <a class="header-anchor" href="#已经提交过无效文件的处理方法" aria-label="Permalink to &quot;已经提交过无效文件的处理方法&quot;">​</a></h3><p>.gitignore只能忽略那些原来没有被track的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的。解决方法就是先把本地缓存删除（改变成未track状态），然后再提交。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git rm -r --cached .                            // 删除本地缓存,命令最后有个点.</span></span>
<span class="line"><span>git add .                                       // 添加要提交的文件</span></span>
<span class="line"><span>git commit -m &quot;update .gitignore&quot;               // 更新本地的缓存</span></span>
<span class="line"><span>git config core.excludesfile .gitignore         //让配置文件生效</span></span></code></pre></div>`,81)]))}const u=a(e,[["render",l]]);export{h as __pageData,u as default};
