import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap'
import { defineConfig } from 'vitepress'
const links: Array<{ url: string, lastmod?: number }> = []
export default defineConfig({
  lang: 'zh-CN',
  title: 'CNative',
  titleTemplate: 'CNative 无服务器部署解决方案',
  description: '免去一切运维烦恼，帮您专注在业务开发的线上的云原生环境',
  appearance: false,
  lastUpdated: true,
  cleanUrls: 'with-subfolders',
  themeConfig: {
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present CNative'
    },
    lastUpdatedText: '最近更新',
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/cnative-dev/docs' }],
    outlineTitle: '本页内容',
    nav: [{
      text: '使用文档', link: '/docs/introduction', activeMatch: '/docs/'
    }, {
      text: '配置文件', link: '/config/introduction', activeMatch: '/config/'
    }, {
      text: 'Blog', link: '/blogs', activeMatch: '/blog'
    },],
    sidebar: {
      '/docs/': [{
        text: '开始',
        items: [
          { text: '简介', link: '/docs/introduction' },
          { text: '快速上手', link: '/docs/quick-start' },
        ]
      }, {
        text: "安装 CNative CLI",
        items: [
          { text: '安装指南', link: '/docs/install' },
          { text: 'Linux 环境 amd64 架构', link: '/docs/install-linux-amd64' },
          { text: 'Linux 环境 arm64 架构', link: '/docs/install-linux-arm64' },
          { text: 'macOS 环境 Intel 架构', link: '/docs/install-macos-amd64' },
          { text: 'macOS 环境 Apple 架构', link: '/docs/install-macos-arm64' },
          { text: 'Windows 环境 x86_64 架构', link: '/docs/install-windows-amd64' },
        ]
      }, {
        text: '基础',
        items: [
          { text: '鉴权', link: '/docs/authentication' },
          { text: '管理项目', link: '/docs/app' },
          { text: '使用新代码仓库', link: '/docs/repo-from-template' },
          { text: '使用已有代码仓库', link: '/docs/exist-repo' },
          { text: '构建与部署', link: '/docs/build-and-deploy' },
          { text: '运行时相关', link: '/docs/runtime' },
          { text: '配置文件', link: '/docs/config' },
          { text: 'Secret', link: '/docs/secret' },
          { text: '更新 CNative 客户端', link: '/docs/update' },
        ]
      }],
      '/config/': [
        {
          text: 'Java 相关',
          items: [
            { text: 'Java 运行时版本', link: '/config/jre' },
            { text: 'Maven 配置', link: '/config/maven' }
          ]
        },
        {
          text: 'NodeJS 相关',
          items: [
            { text: '构建工具', link: '/config/nodejs' },
          ]
        },
        {
          text: 'Golang 相关',
          items: [
            { text: '镜像加速', link: '/config/golang-mirror' },
          ]
        },
      ],
    }
  },
  //sitemaps
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        // you might need to change this if not using clean urls mode
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData.lastUpdated
      })
  },
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({
      hostname: 'https://cnative.dev/'
    })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
    await new Promise((r) => writeStream.on('finish', r))
  },
  //google tag/analytics
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-KZENSB3311' }
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-KZENSB3311');"
    ]
  ]
})