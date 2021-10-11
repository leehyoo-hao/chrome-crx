# chrome插件开发
## 1. Chrome Extension组成
<details>
<summary>manifest.json 插件配置文件</summary>
manifest.json必须放在插件项目的根目录，里面包含了插件的各种配置信息，包括popup、content script、background script等路径
</details>

<details>
<summary>popup 点击插件图标弹出的页面</summary>
作为一个独立的弹出界面，有自己的html、css、js，可以按照常规项目来开发
</details>
<details>
<summary>content script 插入到目标页面中执行的js</summary>
content script是注入到目标页面中执行的js脚本，可以获取目标页面的dom并进行修改。但是content script的js与目标页面是相互隔离的。也就是说，content script与目标页面不会出现互相污染的问题，同时也不能调用对方的方法（ps：会出现css互相污染）
</details>
</details>
<details>
<summary>background script 在chrome后台中运行的程序
</summary>
background script常驻在浏览器后台运行，没有实际页面（可以通过manifest.json指定一个页面，如果不设置，chrome会自动生成一个），它的生命周期随着浏览器的打开而开始，随着浏览器的关闭而结束。一般把全局的、需要一直运行的代码放在这里。重要的是，backgroun script的权限非常高，除了可以调用几乎所有的chrome extension api外，还可以跨域发请求
</details>