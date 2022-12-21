# 快速上手
在本节中，我们会从零开始构建一个前端网站，如果你已经有自己的项目代码准备部署，可以从相应的步骤开始

::: tip 前提条件
* 熟悉命令行
* 已安装 git 工具
:::

## 第一步：安装 CLI

在 Linux 和 MacOS 系统下可以使用一键安装脚本
```sh
$ curl -fsSL https://cnsl.ink/cnative -o install-cnative.sh && sh install-cnative.sh
```

Windows 可以在 [这里](./install-windows-amd64.md) 完成安装

## 第二步：登陆账户
直接通过 github 账号来登陆
```sh
$ cnative auth login --provider github
```
此时会自动打开浏览器，您可以使用 github 账户来完成第三方登陆，如果没有自动打开浏览器，也可手动点击连接完成授权


## 第三步：本地创建一个前端项目仓库
我们可以直接 clone 一个已有的模板，当然也可以通过各个框架来直接生成，这里使用 [Vue官方脚手架](https://cn.vuejs.org/guide/quick-start.html#creating-a-vue-application) 生成的项目来做为示例（仅额外添加了 [serve](https://www.npmjs.com/package/serve) 组件）
```sh
$ git clone https://github.com/cnative-dev/quick-start-vuejs.git && \
     cd quick-start-vuejs
```

## 第四步：将代码部署到 CNative
在 CNative 上创建一个新项目 ```demo```
```sh
$ cnative project create demo
  项目ID:    xxxxx-xxxx-xxxxx
  项目名:    demo
  URL:       https://xxxxx-xxxx-xxxxx.cnative.app
  更新时间:  2022-11-10T10:14:27.435Z
完成
```
在这一步，我们可以获取项目创建后的网站地址：```https://xxxxx-xxxx-xxxxx.cnative.app```

然后把代码推送到项目里：
```sh
$ cnative repo push demo
```

查看一下当前的构建任务，可以看到构建状态是 running
```sh
$ cnative build list -p demo
+--------+------------------------------------------+----------+--------+--------------------------+
| 构建ID |                 GIT SHA                  | 构建状态 | 产物包 |         创建时间         |
+--------+------------------------------------------+----------+--------+--------------------------+
|    124 | a367ae04ef3c2d7f9119ed15523a3b11c0ef20ff | running  | false  | 2022-11-10T10:16:37.675Z |
+--------+------------------------------------------+----------+--------+--------------------------+
```


查看构建过程日志
```sh
$ cnative build log latest -p demo
...
```

等待构建完毕后即可线上访问
```sh
$ open https://xxxxx-xxxx-xxxxx.cnative.app # 上面创建项目的地址
```

### 别忘了加个微信
有任何问题、需求、都可以随意来吐槽
![QRCode](/assets/qrcode.png)