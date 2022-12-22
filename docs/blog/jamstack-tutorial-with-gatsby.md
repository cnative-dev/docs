---
layout: doc
sidebar: false
aside: true
titleTemplate: true
title: 使用 Gatsby 实现一个 Jamstack 网站
description: 本教程的目标是通过 gatsby 框架搭建一个博客，来展示如何实施符合 jamstack 架构的网站。
head:
  - - meta
    - name: keywords
      content: jamstack 教程, gatsby 教程, gatsbyjs 例子
outline: [2,3]
---
# 使用 Gatsby 搭建一个符合 Jamstack 的网站

在该教程中，我们会通过搭建一个基于 Gatsby 框架的博客站点，然后依照 Jamstack 的思路来调整与优化，最后把网站部署在免费的 CNative 服务上

## 创建一个 Gatsby 项目

::: tip 预备知识
如果我们是第一次使用 Gatsby 的话，需要先安装一下 gatsby 的 CLI <br/>
```sh
$ npm install -g gatsby-cli
```
:::

1. 在[这里](https://www.gatsbyjs.com/starters/?v=2)可以先找一个你喜欢的博客模板，在本教程中，就使用[这个](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog) 模板

2. 基于模板和 gatsby-cli 来创建一个项目，在 terminal 里，我们运行：

```sh
$ gatsby new gatsby-starter-blog https://github.com/gatsbyjs/gatsby-starter-blog
```

3. 然后，我们就可以安装依赖，并把网站运行起来
```sh
$ cd gatsby-starter-blog
$ npm install
... 一些安装依赖的信息 ...

$ npm run develop
```

直到出现下列显示的时候，我们的网站就已经运行起来了，然后在浏览器里访问对应的地址就可以看到我们的站点
```
You can now view gatsby-starter-blog in the browser.
⠀
  http://localhost:8000/
⠀
View GraphiQL, an in-browser IDE, to explore your site's data and schema
⠀
  http://localhost:8000/___graphql
⠀
Note that the development build is not optimized.
To create a production build, use gatsby build
```

## 依据 Jamstack 的思路优化

上面运行起来的是一个标准 gatsby 博客，但标准博客里有如下几个方面可以进行优化：

### 替换 Gatsby 服务器
我们在 ```package.json``` 配置里可以看到，如果使用默认配置的话，我们的站点将会使用 gatsby 来作为服务端运行：
```json{6,7}
{
  "scripts": {
    "build": "gatsby build",
    "develop": "gatsby develop",
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,md}\"",
    "start": "gatsby develop",
    "serve": "gatsby serve",
    "clean": "gatsby clean",
    "test": "echo \"Write tests! -> https://gatsby.dev/unit-testing\" && exit 1"
  }
}
```

由于我们是基于 Jamstack 的纯静态网站，这里我们可以换成 ```serve```

1. 我们先安装 serve 依赖
```sh
$ npm i serve
```

2. 然后在 ```package.json``` 里做如下替换

```json
{
  "scripts": {
    "build": "gatsby build",
    "develop": "gatsby develop",
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,md}\"",
    "start": "gatsby develop", // 删除本行 // [!code --]
    "start": "serve public/", // 增加这行 // [!code ++]
    "serve": "gatsby serve",
    "clean": "gatsby clean",
    "test": "echo \"Write tests! -> https://gatsby.dev/unit-testing\" && exit 1"
  }
}
```

### 替换所有静态文件为 CDN 地址

默认情况下，gatsby 还是使用我们自己的服务端来完成静态资源的访问：

![通过本地服务器提供服务](/assets/jamstack-tutorial-with-gatsby/serve-with-local-server.png)

在上图里我们可以看到，无论是 js 文件，还是获取博客内容的 page-data.json 文件，都是通过```http://localhost:8000```来服务的，我们可以把这些地址都替换成更高效的 CDN 服务器。为了使用 CDN 服务，我们需要：

1. 在 gatsby-config.js 里增加配置

```js
module.exports = {
    assetPrefix: `https://cdn.example.com`, //此处换成下面 CNative 提供的 CDN 地址
    ...
}
```

2. 在```package.json```里的构建过程中，打开 CDN 参数

```json
  "scripts": {
    "build": "gatsby build", // 删除本行 // [!code --]
    "build": "gatsby build --prefix-paths", // 增加这行 // [!code ++]
    "develop": "gatsby develop",
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,md}\"",
    "start": "serve public/",
    "serve": "gatsby serve",
    "clean": "gatsby clean",
    "test": "echo \"Write tests! -> https://gatsby.dev/unit-testing\" && exit 1"
  }
```

随后我们重新构建，就可以看到已经全部替换成 CDN 地址了（此处由于是本地环境，所以是 404）

![通过CDN提供服务](/assets/jamstack-tutorial-with-gatsby/serve-with-cdn.png)

## 通过 CNative 免费部署该博客

接下来，我们就可以通过 CNative 来获取一个 CDN 地址，并部署该博客。

::: tip 预备知识
如果是第一次使用 CNative 的话，需要先安装一下 cnative 的 CLI <br/>
```sh
$ curl -fsSL https://cnsl.ink/cnative -o install-cnative.sh && sh install-cnative.sh
```
:::

### 创建一个新的网站

```sh
$ cnative project create blog
```

CNative 会返回如下信息

```
项目ID:    quick-fisher-dc5a7d
  项目名:    blog
  URL:       https://quick-fisher-dc5a7d.cnative.app
  更新时间:  2022-12-22T03:24:46.927Z
完成
```

其中 ```https://quick-fisher-dc5a7d.cnative.app``` 就是网站的地址，所对应的 CDN 服务地址就是 ```https://quick-fisher-dc5a7d.cnative.cc``` 我们按上述方式，就可以替换网站的静态资源

### 部署服务

在完成了上面的修改之后，我们先提交 git commit
```sh
$ git add .
$ git commit -m 'add serve as a backend server and replace asset prefix with cnative cdn domain'
```

然后就可以把代码推到 CNative 上

```sh
$ cnative repo push blog
正在推送本地分支 main, 到项目 blog
完成.
```

等过一会儿服务构建完毕之后，就可以访问我们符合 Jamstack 规范的 gatsby 的新网站了。（如果想关注构建过程，可以参考 [查看构建日志](https://cnative.dev/docs/build-and-deploy#%E6%9F%A5%E7%9C%8B%E6%9E%84%E5%BB%BA%E6%97%A5%E5%BF%97)）