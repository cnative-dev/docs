---
layout: doc
sidebar: false
aside: true
titleTemplate: true
title: Jamstack 构建快速响应与安全并存的下一代前端技术栈
description: Jamstack 把业务逻辑层和数据层与前端体验解耦，提高了网站灵活性、扩展性、实现了高性能的同时还有很高的可维护性。Jamstack 通过避开了复杂的业务逻辑之后完全投入在用户体验上，通过可组合的架构融合了自定义逻辑以及第三方服务。
head:
  - - meta
    - name: keywords
      content: jamstack 架构, 什么是 jamstack, jamstack 部署
outline: [2, 3]
---
# 什么是 Jamstack

Jamstack 是一种构建网站的方式，通过结合静态页面来提供高性能、更低的成本和更高的可扩展性的优势，同时保持了良好的开发体验。

这里有个简单的指南，它能帮助你了解 Jamstack 存在的历史原因以及如何开始尝试构建一个 Jamstack 网站。


## 发展历史
Jamstack 最早是被称为 "JAMstack"，其中 "JAM" 分别是 Javascript, API 以及 Markup 的指代

### Javascript
用来开发页面上的内容。在 Jamstack 中，通常不会限制去使用具体某个框架，无论是 jQuery 还是 vue、reactjs，都可以用来实现 Jamstack 的架构

### APIs
后端提供的逻辑会抽象成具体的 API 调用，通常是通过 Javascript 访问后端服务器，也可以使用一些第三方的服务。

### Markup
网站会通过静态 HTML 文件来承载，这些 HTML 可以通过各类源文件生成：像是 Markdown 文稿，或者一些其它的服务端生成的技术来实现。

## 技术要点
当今， Jamstack 更多地用于指代这类网站构建的技术架构，尽管没有明确的定义，但通常我们会讨论如下几方面内容：

### 预渲染
与以往的服务端动态渲染页面的方案不同，Jamstack 会倾向于在代码的构建过程中就直接生成对应的、高度优化的静态 html 页面，通过预先构建 html 页面的方式，可以让我们直接通过 CDN 来承载服务器的流量的同时实现让用户极快速的访问，减少了服务器的成本、动态代码的复杂性，同时也避免了线上故障的风险

现在已经有很多好用的工具来帮助我们生成静态页面，像是 Gatsby, Hugo, Jekyll, Eleventy, NextJS, VueJS 等，这些都是前端工程师熟悉的框架，可以让我们快速进入 Jamstack 开发状态

### Javascript 动态化
通过 HTML、CSS 以及各种部署在 CDN 上的资源用户可以快速地访问网站，在这些基础之上，Jamstack 标准的网站可以通过 Javascript 和 API 和后端页面通讯，实现一些定制化的功能，通常情况下这些动态化的功能都不是网站的主体部分（主要内容已经通过静态页面呈现给用户了）而是一些锦上添花的功能，比方说在导航中呈现用户的头像与名字、异步加载的广告等

### 通过第三方服务增强体验
因为我们使用了 Javascript 和 API 技术，我们很多服务都可以直接采用第三方来实现，比方说验证码、第三方支付、权限验证、站点内容搜索等

整体来说 Jamstack 就是通过如上方式，在构建时期生成主体内容，在运行时直接通过客户端的 Javascript 来请求各类服务的方式实现服务之间的解耦，从而控制了工程的复杂程度、提升了后端服务的复用性，极大减少了线上故障的风险

### 与 SSR 的区别
我们经常会发现大家拿 Jamstack 与 SSR 来对比。在这里，SSR 是更具体的一个技术方案，它的目标是用来解决 SEO 问题的，所有的内容是在后端进行渲染好，然后返回完整的 HTML 页面给搜索引擎抓取，但实践中各种业务逻辑通常还是整合在后端服务器，而且是运行时生成的。而 Jamstack 目标更专注在用户体验上，通过在构建时期就把页面生成好、并且部署在距离用户最近的节点上，从而能更快速地将请求结果返回给用户。

## 采用 Jamstack 的优势

### 更好的用户体验
用户是直接请求到 CDN 上的，响应速度肯定会更快，甚至部分 Javascript 对后端内容的请求也可以通过 CDN 来提速：比方说在单页应用里用户切换不同的页面时对主体内容的渲染数据都可以直接请求 CDN 上的 markdown 或者 json 文件

### 更安全
由于减少了后端服务的复杂程度，就不用过多考虑服务器、数据库的安全问题，减少了运维的工作。

### 更低成本
通过使用静态文件，我们可以减少大量的服务器，通过 CNative 甚至可以实现免费的部署

### 更好的开发体验
对于项目来说，能够更专注在前端开发上，从而避免了被绑定在某种后端巨大的技术栈之上，这通常意味着更快速地发布，更良好、更彻底的测试。

### 更好的横向扩展性
如果遇到访问量突增的情况，由于我们通过 CDN 来承担了多数的流量，可以让我们更从容、快速地横向扩展，让用户体验无损

## 相关资源

### 开发框架

* [Gatsby](https://www.gatsbyjs.com/)
* [VitePress](https://vitepress.vuejs.org/)
* [Vue.js](https://vuejs.org/)
* [React](https://reactjs.org/)
* [HUGO](https://gohugo.io/)

### 自动化构建
* [Gitlab](https://gitlab.com)
* [GitHub Actions](https://github.com/actions)

### 服务部署

* [CNative](https://cnative.dev/)
* [Netlify](https://www.netlify.com/)
* [Vercel](https://vercel.com/dashboard)

后续我们来看一下如何[搭建一个 Jamstack 架构的网站](https://cnative.dev/blog/jamstack-tutorial-with-gatsby)。