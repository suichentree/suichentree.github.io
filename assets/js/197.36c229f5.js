(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{1127:function(t,n,v){t.exports=v.p+"assets/img/python_20240529115053.ba2d2ff5.png"},1980:function(t,n,v){"use strict";v.r(n);var p=v(2),a=Object(p.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("[toc]")]),t._v(" "),n("h1",{attrs:{id:"python虚拟环境笔记"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#python虚拟环境笔记"}},[t._v("#")]),t._v(" Python虚拟环境笔记")]),t._v(" "),n("blockquote",[n("p",[t._v("为什么需要python虚拟环境？")])]),t._v(" "),n("p",[t._v("在编写Python程序的时候，一般是通过pip（pip3）来安装程序中的第三方包。")]),t._v(" "),n("p",[t._v("由于pip的特性，操作系统（windows,linux等）中只能安装每个包的一个版本。这导致本地的python开发环境中的每个包都只有一个版本。")]),t._v(" "),n("p",[t._v("但是在实际的python项目开发中，不同python项目可能需要不同版本的第三方包。如果不同的python项目都依赖本地的python开发环境，会导致两个后果。")]),t._v(" "),n("ol",[n("li",[t._v("会导致本地的python开发环境中的第三方包相当混乱而不易管理。")]),t._v(" "),n("li",[t._v("会导致这些python项目无法同时启动。")])]),t._v(" "),n("p",[t._v("这时候我们就需要开辟一个独立干净的空间进行开发和部署python项目，即每一个python项目都拥有自己的python环境，这些环境互不影响。python虚拟环境就孕育而生。")]),t._v(" "),n("blockquote",[n("p",[t._v("什么是python虚拟环境？")])]),t._v(" "),n("p",[t._v("python虚拟环境可以认为是python本地环境的多个副本，只是在不同的副本中安装了不同的包。")]),t._v(" "),n("p",[t._v("python虚拟环境中一般不包含标准库, 不包含python解释器运行时所需的依赖文件.python 虚拟环境的可执行文件全部放于Scripts目录等。")]),t._v(" "),n("p",[t._v("python 虚拟环境的本质就是修改了 sys.path 的值。不同python项目的虚拟环境的 sys.path 的值是不同的，从而各个python项目的第三方包的安装位置也不同。")]),t._v(" "),n("h2",{attrs:{id:"python虚拟环境的管理工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#python虚拟环境的管理工具"}},[t._v("#")]),t._v(" Python虚拟环境的管理工具")]),t._v(" "),n("p",[t._v("下图是Pycham 创建新项目时候，可以选择的各个Python虚拟环境的管理工具\n"),n("img",{attrs:{src:v(1127),alt:"python_20240529115053.png"}})]),t._v(" "),n("h3",{attrs:{id:"venv"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#venv"}},[t._v("#")]),t._v(" venv")]),t._v(" "),n("p",[t._v("Python 从3.3 版本开始，自带了一个虚拟环境模块 venv。")]),t._v(" "),n("p",[t._v("venv 的很多操作都和 virtualenv 类似。如果你使用的是python3.3之前版本的，则不能使用该功能，需要使用virtualenv进行虚拟环境管理。")]),t._v(" "),n("h3",{attrs:{id:"virtualenv"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#virtualenv"}},[t._v("#")]),t._v(" Virtualenv")]),t._v(" "),n("p",[t._v("Virtualenv 是目前最流行的 Python 虚拟环境配置工具，同时支持Python2和Python3，也可以为每个虚拟环境指定不同版本的Python解释器。")]),t._v(" "),n("p",[t._v("但是跨平台的使用不太一致，且有时候处理包之间的依赖总存在问题。")]),t._v(" "),n("h3",{attrs:{id:"pipenv"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pipenv"}},[t._v("#")]),t._v(" Pipenv")]),t._v(" "),n("p",[t._v("pipenv 是Kenneth Reitz(requests的作者)大神的作品。它结合了 Pipfile，pip，和virtualenv，能够有效管理Python多个环境，各种包。并且windows视为一等公民。")]),t._v(" "),n("ul",[n("li",[t._v("Pipfile是依赖管理文件，用于替代过于简陋的 requirements.txt 文件。")])]),t._v(" "),n("h3",{attrs:{id:"conda"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conda"}},[t._v("#")]),t._v(" Conda")]),t._v(" "),n("p",[t._v("支持Python、R、Java、JavaScript、C等多种开发语言的包、依赖和环境管理工具，能运行在Windows、MacOS、Linux多个平台，可以在本地轻松创建、保存、切换环境。当安装anaconda时，会自动安装conda工具。")])])}),[],!1,null,null,null);n.default=a.exports}}]);