# 基于模板创建新仓库
为方便使用，如果是新项目的话，可以使用如下的模板工程来创建，也可以自行使用熟悉的框架创建项目

## 前端项目

CNative 可以适配基于 NodeJS 的前端项目，只需要在创建 NodeJS 项目后，保证 package.json 里有对应的 build 和 start 脚本即可。

具体来说只要有如下配置 ```.scripts.build``` 和 ```.scripts.start``` 即可被 CNative 识别：
```json
{
  "name": "demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "echo \"Your build command\"", #用于构建过程
    "start": "echo \"Your start command\""  #用于服务启动
  },
  "author": "",
  "license": "ISC"
}
```


## VueJS

模板项目地址：```https://github.com/cnative-dev/quick-start-vuejs.git```

该模板是基于 vuejs 的[官方项目脚手架](https://cn.vuejs.org/guide/quick-start.html#creating-a-vue-application)创建

由于 VueJS 是一个纯 JS 框架，默认后端没有 express 等 server 进行支持，所以基于脚手架创建完后， CNative 额外增加了一个轻量的服务器[serve](https://www.npmjs.com/package/serve)：
```sh
npm i serve
```

然后在 package.json 里增加了```start``` 启动脚本
```json
{
  "name": "quick-start-vuejs",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview --port 4173",
    "start": "serve dist/" # 新增启动脚本
  },
  "dependencies": {
    "serve": "^14.1.1",
    "vue": "^3.2.37"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^2.3.3",
    "vite": "^2.9.12"
  }
}
```

## ReactJS
模板项目地址：```https://github.com/cnative-dev/quick-start-reactjs.git```

该项目是基于 reactjs 的[脚手架](https://create-react-app.dev/docs/getting-started)生成，没有任何改动。


## NuxtJS
模板项目地址：```https://github.com/cnative-dev/quick-start-nuxtjs.git```

该项目是基于 nuxtjs 的[脚手架](https://nuxtjs.org/docs/get-started/installation#using-create-nuxt-app)生成，没有任何改动。


## NextJS
模板项目地址：```https://github.com/cnative-dev/quick-start-nextjs.git```

该项目是基于 nextjs 的[脚手架](https://nextjs.org/docs/getting-started#automatic-setup)生成，没有任何改动。


## SpringBoot
如果是后端 Java 语言，也可以直接使用 SpringBoot 的模板工程：```https://github.com/cnative-dev/quick-start-spring```

该项目是基于 [spring initializr](https://start.spring.io/) 创建的 mvn 工程

## Go
模板项目地址：```https://github.com/cnative-dev/quick-start-golang```