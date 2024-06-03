(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{1971:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("[toc]")]),s._v(" "),t("h1",{attrs:{id:"python使用opencv-python库笔记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#python使用opencv-python库笔记"}},[s._v("#")]),s._v(" Python使用opencv-python库笔记")]),s._v(" "),t("p",[s._v("OpenCV（Open Source Computer Vision Library）是一个广泛使用的开源计算机视觉库，它提供了用于处理图像和视频的各种功能和算法。")]),s._v(" "),t("blockquote",[t("p",[s._v("OpenCV的用法")])]),s._v(" "),t("ul",[t("li",[s._v("图像和视频的读取和写入。")]),s._v(" "),t("li",[s._v("OpenCV 提供了许多图像处理和操作功能，如调整大小、裁剪、旋转、翻转、平移、滤波、边缘检测、直方图均衡化等。")]),s._v(" "),t("li",[s._v("OpenCV 在计算机视觉领域有广泛的应用，包括人脸检测和识别、目标跟踪、图像拼接、图像增强、实时图像处理、虚拟和增强现实等。")])]),s._v(" "),t("p",[s._v("在 Python 中使用 OpenCV，可以通过安装相应的 Python 库 opencv-python 来使用。")]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("p",[s._v("安装 opencv-python 库")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" opencv-python\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"视频截图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视频截图"}},[s._v("#")]),s._v(" 视频截图")]),s._v(" "),t("div",{staticClass:"language-py line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" cv2\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" time\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("video_capture")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("video_directory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("video_path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-interpolation"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('f"=========== 开始执行video_capture方法 进行视频截图 ==========="')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打开视频文件 获取视频总帧数和帧率")]),s._v("\n    cap "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cv2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("VideoCapture"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("video_path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    frame_count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cv2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CAP_PROP_FRAME_COUNT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    fps "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cv2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CAP_PROP_FPS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 计算出视频时长")]),s._v("\n    vide_time "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("frame_count "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" fps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    is_success "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" is_success "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("is")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 随机生成一个秒数，范围在1-vide_time之间")]),s._v("\n        rand_int "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" random"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("randint"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" vide_time"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 计算要截取的帧数。并跳到指定帧数")]),s._v("\n        frame_to_capture "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rand_int "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" fps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        cap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cv2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CAP_PROP_POS_FRAMES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" frame_to_capture"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 读取一帧并保存为图片")]),s._v("\n        ret"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" frame "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 截图路径")]),s._v("\n        jpgPah "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" video_directory "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/img/"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rand_int"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.png'")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-interpolation"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('f"本地存储的视频截图路径 jpgPah 为 ')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("jpgPah"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" ret"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把视频截图保持到指定路径中")]),s._v("\n            is_success "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cv2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("imwrite"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("jpgPah"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" frame"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-interpolation"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("f'--------截图成功--------is_success 为 ")]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("is_success"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-interpolation"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("f'--------截图失败，开始重新截图--------is_success 为 ")]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("is_success"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 休眠1s")]),s._v("\n        time"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sleep"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 释放视频文件")]),s._v("\n    cap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("release"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" jpgPah\n\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"__main__"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    video_directory "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\\\Users\\\\86182\\\\Desktop"')]),s._v("\n    video_path "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\\\Users\\\\86182\\\\Desktop\\\\demo.mp4"')]),s._v("\n\n    s "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" video_capture"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("video_directory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("video_path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"视频截图路径为"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);