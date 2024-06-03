(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{2135:function(a,s,t){"use strict";t.r(s);var c=t(2),o=Object(c.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("[toc]")]),a._v(" "),s("h1",{attrs:{id:"nacos面试题总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nacos面试题总结"}},[a._v("#")]),a._v(" Nacos面试题总结")]),a._v(" "),s("h2",{attrs:{id:"nacos作为注册中心提供的核心功能是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nacos作为注册中心提供的核心功能是什么"}},[a._v("#")]),a._v(" Nacos作为注册中心提供的核心功能是什么？")]),a._v(" "),s("ul",[s("li",[a._v("服务注册：当服务配置了nacos后。服务启动后，服务会调用nacos的接口，将服务自身的信息注册到nacos中。")]),a._v(" "),s("li",[a._v("服务发现: 服务会定时调用nacos的接口，获取nacos中的服务注册表信息。并保存在服务本地缓存中。")]),a._v(" "),s("li",[a._v("服务注销：当服务停止运行的时候，服务会调用nacos的注销接口，将服务自身的信息从nacos中删除。")]),a._v(" "),s("li",[a._v("服务心跳：服务会定时调用nacos的心跳接口，来通知nacos，服务处于可用状态。")]),a._v(" "),s("li",[a._v("服务同步：Nacos集群之间会互相同步服务注册表信息，用来保证数据的一致性。")])]),a._v(" "),s("h2",{attrs:{id:"nacos作为配置中心的原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nacos作为配置中心的原理"}},[a._v("#")]),a._v(" Nacos作为配置中心的原理?")]),a._v(" "),s("h2",{attrs:{id:"nacos如何实现配置环境隔离的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nacos如何实现配置环境隔离的"}},[a._v("#")]),a._v(" Nacos如何实现配置环境隔离的?")]),a._v(" "),s("p",[a._v("Nacos配置中心有三个核心要点：命名空间Namespace,分组Group,配置集DataId。通过这三个要点来实现配置环境的隔离。")]),a._v(" "),s("p",[a._v("即namespace-> group -> dataID")]),a._v(" "),s("ul",[s("li",[a._v("namespace 命令空间相当于环境，如生产环境，开发环境。不同namespace之间相互隔离。")]),a._v(" "),s("li",[a._v("group 相当于项目。如医疗项目，电商项目等。")]),a._v(" "),s("li",[a._v("dataID 相当于某个具体的服务。即用户服务，订单服务等")])]),a._v(" "),s("h2",{attrs:{id:"nacos中注册的服务有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nacos中注册的服务有哪些"}},[a._v("#")]),a._v(" Nacos中注册的服务有哪些 ?")]),a._v(" "),s("p",[a._v("Nacos注册的服务分为两种类型：")]),a._v(" "),s("ul",[s("li",[a._v("临时实例：如果服务宕机超过一定时间，会从服务列表剔除，默认的类型。")]),a._v(" "),s("li",[a._v("非临时实例：如果服务宕机，不会从服务列表剔除，也可以叫永久服务实例。")])]),a._v(" "),s("h2",{attrs:{id:"项目启动的时候是先加载本地配置文件还是nacos中的配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目启动的时候是先加载本地配置文件还是nacos中的配置文件"}},[a._v("#")]),a._v(" 项目启动的时候是先加载本地配置文件还是Nacos中的配置文件 ?")]),a._v(" "),s("p",[a._v("先加载本地配置文件,若在本地配置文件中配置了Nacos配置中心地址。那么会加载Nacos配置中心中的文件。")]),a._v(" "),s("h2",{attrs:{id:"nacos如何实现配置的热更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nacos如何实现配置的热更新"}},[a._v("#")]),a._v(" Nacos如何实现配置的热更新?")])])}),[],!1,null,null,null);s.default=o.exports}}]);