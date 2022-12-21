# 使用已有代码仓库

## 支持的语言
CNative 支持主流语言的构建，具体来说，现已支持的语言有：Ruby, NodeJS, Clojure, Python, Java, Gradle, Scala, Play, php, Go，以及 Dockerfile

在构建过程中，由于不同语言可能会涉及到境外的不同包依赖服务，像是 NodeJS 的 npmjs，Python 的 pypi，Java 的 maven等，CNative 在对各语言有最基础的支持情况下，对部分语言的依赖服务有测试和优化。其中已经测试过的框架有：```NodeJS```，```Dockerfile```

如果使用的是 ```NodeJS``` 或者 ```Dockerfile``` 会默认使用 CNative 的 registry 代理提升打包速度

## 服务端口

CNative 在启动服务时，会设置 ```PORT``` 环境变量，如果是已有代码的话，请确认代码会使用该环境变量设置服务的监听端口