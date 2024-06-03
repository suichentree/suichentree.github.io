(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{1914:function(a,s,t){"use strict";t.r(s);var n=t(2),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("[toc]")]),a._v(" "),s("h1",{attrs:{id:"linux查询查找命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux查询查找命令"}},[a._v("#")]),a._v(" linux查询查找命令")]),a._v(" "),s("h2",{attrs:{id:"tail命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tail命令"}},[a._v("#")]),a._v(" tail命令")]),a._v(" "),s("p",[a._v("① 全称和作用")]),a._v(" "),s("ul",[s("li",[a._v("tail命令的全称即为tail(尾巴)。")]),a._v(" "),s("li",[a._v("因此tail命令作用是显示后边几行。默认显示最后10行")])]),a._v(" "),s("p",[a._v("② 命令参数")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" 循环读取\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),a._v(" 不显示处理信息\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" 显示详细的处理信息\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("数目"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" 显示的字节数\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("行数"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" 显示文件的尾部 n 行内容\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--pid")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("PID 与-f合用,表示在进程ID,PID死掉之后结束\n-q, --quiet, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--silent")]),a._v(" 从不输出给出文件名的首部\n-s, --sleep-interval"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("S 与-f合用,表示在每次反复的间隔休眠S秒\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h3",{attrs:{id:"使用tail命令案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用tail命令案例"}},[a._v("#")]),a._v(" 使用tail命令案例")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" aaa.txt      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#默认显示最后10行")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-5")]),a._v(" aaa.txt   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示aaa.txt文件最后5行的内容")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" +5 aaa.txt  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#从第5行开始显示文件内容至文件末尾")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" aaa.txt  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示文件的最后10个字符")]),a._v("\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" aaa.txt    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 此命令显示文件的最后 10 行。当aaa.txt文件有更新时，tail -f命令会实时显示。")]),a._v("\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-100f")]),a._v(" aaa.txt  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示最后100行文件内容，之后实时显示")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("ul",[s("li",[a._v("当文件内容有更新时。tail -f 命令会实时显示出来。")]),a._v(" "),s("li",[a._v("若要结束tail -f命令，按CTRL + C组合键即可。")])]),a._v(" "),s("h2",{attrs:{id:"cat命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cat命令"}},[a._v("#")]),a._v(" cat命令")]),a._v(" "),s("p",[a._v("① 全称和作用")]),a._v(" "),s("ul",[s("li",[a._v("cat（英文全拼：concatenate）命令：用于连接文件并打印到标准输出设备上。")])]),a._v(" "),s("p",[a._v("cat 命令有3个作用：")]),a._v(" "),s("ol",[s("li",[a._v("一次显示整个文件")]),a._v(" "),s("li",[a._v("创建一个文件")]),a._v(" "),s("li",[a._v("将几个文件合并为一个文件")])]),a._v(" "),s("p",[a._v("② 完整语法格式")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("cat [-AbeEnstTuv] [--help] [--version] fileName\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("③ 命令参数")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('-n 或 --number：从 1 开始对所有输出的行数编号。\n-b 或 --number-nonblank：和 -n 相似，只不过对于空白行不编号。\n-s 或 --squeeze-blank：当遇到有连续两行以上的空白行，就代换为一行的空白行。\n-v 或 --show-nonprinting：使用 ^ 和 M- 符号，除了 LFD 和 TAB 之外。\n-E 或 --show-ends : 在每行结束处显示 $。\n-T 或 --show-tabs: 将 TAB 字符显示为 ^I。\n-A, --show-all：等价于 -vET。\n-e：等价于"-vE"选项；\n-t：等价于"-vT"选项；\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("h3",{attrs:{id:"cat命令实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cat命令实例"}},[a._v("#")]),a._v(" cat命令实例")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示整个文件内容")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /etc/a.txt\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 创建b.txt文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" b.txt\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 把 textfile1 的文档内容加上行号后，覆盖到 textfile2 这个文档里")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# > 是覆盖")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" textfile1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" textfile2\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 把 textfile1 的文档内容加上行号后，附件加到 textfile2 这个文档末尾后")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# >> 是附加")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" textfile1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" textfile2\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 清空 /etc/a.txt 文档内容")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /dev/null "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /etc/a.txt\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br")])]),s("blockquote",[s("p",[a._v("tail和cat的区别：")])]),a._v(" "),s("ol",[s("li",[a._v("cat显示文档的全部数据，是静态查看文件内容")]),a._v(" "),s("li",[a._v("tail可以查看文档更新情况，可以动态查看文件内容")])]),a._v(" "),s("h2",{attrs:{id:"grep命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grep命令"}},[a._v("#")]),a._v(" grep命令")]),a._v(" "),s("p",[a._v("① 全称和作用")]),a._v(" "),s("ul",[s("li",[a._v("grep的全程是：Global search Regular Expression and Print out the line （全局 搜索 正则表达式 和 打印出来）。")]),a._v(" "),s("li",[a._v("作用：用正则表达式在文本中查找指定的字符串，类似于windows系统中用ctrl+F去查找一样。")])]),a._v(" "),s("p",[a._v("② 完整语法结构")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("grep   [options]  [pattern]   file\n命令   参数        匹配模式   文件\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("③ 命令参数")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("-i : 忽略大小写；\n-o : 仅显示匹配到目标字符串；\n-v : 显示不能被匹配到的字符串（反转）；\n-E : 支持使用扩展的正则表达式字符串；\n-q : 静默模式，不输出任何信息\n-n : 显示匹配行与行号\n-c ：只统计匹配行数\n-w ：只输出过滤的单词\n-l ：列出包含匹配项的文件名\n-L ：列出不包含匹配项的文件名\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("h3",{attrs:{id:"grep命令中常用到的正则表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grep命令中常用到的正则表达式"}},[a._v("#")]),a._v(" grep命令中常用到的正则表达式")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("表达式")]),a._v(" "),s("th",[a._v("解释说明")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("^")]),a._v(" "),s("td",[a._v("用于模式最左侧，如 “^yu” 即匹配以yu开头的单词")])]),a._v(" "),s("tr",[s("td",[a._v("$")]),a._v(" "),s("td",[a._v("用于模式最右侧，如 “yu$” 即匹配以yu结尾的单词")])]),a._v(" "),s("tr",[s("td",[a._v("^$")]),a._v(" "),s("td",[a._v("组合符，表示空行")])]),a._v(" "),s("tr",[s("td",[s("code",[a._v("|")])]),a._v(" "),s("td",[a._v("连接符。表示并且的意思")])]),a._v(" "),s("tr",[s("td",[a._v(".")]),a._v(" "),s("td",[a._v("匹配任意一个且只有一个字符，不能匹配空行")])]),a._v(" "),s("tr",[s("td",[a._v("*")]),a._v(" "),s("td",[a._v("重匹配前一个字符连续出现0次或1次以上")])]),a._v(" "),s("tr",[s("td",[a._v(".*")]),a._v(" "),s("td",[a._v("匹配任意字符")])]),a._v(" "),s("tr",[s("td",[a._v("^.*")]),a._v(" "),s("td",[a._v("组合符，匹配任意多个字符开头的内容")])]),a._v(" "),s("tr",[s("td",[a._v(".*$")]),a._v(" "),s("td",[a._v("组合符，匹配任意多个字符结尾的内容")])]),a._v(" "),s("tr",[s("td",[a._v("[^abc]")]),a._v(" "),s("td",[a._v("匹配除了 ^后面的任意一个字符，a或b或c，[]内 ^ 表示取反操作")])]),a._v(" "),s("tr",[s("td",[a._v("[abc]")]),a._v(" "),s("td",[a._v("匹配 [] 内集合中的任意一个字符，a或b或c，也可以写成 [ac]")])])])]),a._v(" "),s("h3",{attrs:{id:"使用grep命令案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用grep命令案例"}},[a._v("#")]),a._v(" 使用grep命令案例")]),a._v(" "),s("p",[a._v("自定义一个aaa.txt 的文件，内容如下")]),a._v(" "),s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-txt"}},[s("code",[a._v("aaa\nbbb\nccc\n##这是注释行1\n##这是注释行2\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#从文件中输出注释行。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# "^#"匹配#开头')]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"^#"')]),a._v(" aaa.txt       \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#从文件中输出注释行。-n显示匹配行与行号")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"^#"')]),a._v(" aaa.txt    \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 找出文件中的非注释行，并且不是空行")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -v 反转的意思，| 并且的意思")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"^#"')]),a._v(" aaa.txt "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"^$"')]),a._v("  \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#从文件中输出以h开头的行,不区分大小写")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"^h"')]),a._v(" aaa.txt    \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#输出以txt结尾的行。显示匹配行与行号")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"txt$"')]),a._v(" aaa.txt  \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 匹配文本中至少包含一个abc的行")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('".abc"')]),a._v(" aaa.txt  \n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br")])]),s("h2",{attrs:{id:"用tail和grep命令查看日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用tail和grep命令查看日志"}},[a._v("#")]),a._v(" 用tail和grep命令查看日志")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" xxx.log             "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 实时刷新最新日志")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-100f")]),a._v(" xxx.log          "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 实时刷新最新的100行日志")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-100f")]),a._v(" xxx.log "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("关键字"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查找最新的一百行中与关键字匹配的行")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-100f")]),a._v(" xxx.log "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'2019-10-29 16:4[0-9]'")]),a._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查找最新的100行中时间范围在2019-10-29 16:40-2019-10-29 16:49范围中的行")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-1000f")]),a._v(" xxx.log "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("关键字"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看最新的1000行中与关键字匹配的行加上匹配行后的5行")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);