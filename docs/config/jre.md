# Java 运行时版本

CNative 默认使用 jdk1.8 打包，编译出来的代码是 1.8 兼容，在绝大多数情况下已经可以支持各样的业务发展迭代，但如果有其它版本的需求，可按如下配置

## 编译期版本
CNative 使用 maven 编译打包时，如果想要使用高版本进行编译，请在源码根目录下增加 [system.properties](https://github.com/cnative-dev/quick-start-spring/blob/main/system.properties) 文件，文件内容如下：
```
java.runtime.version=17
```

## 运行时版本
运行时版本可以通过 maven 的 pom.xml 配置文件来指定
```
<project>
  ...
  	<properties>
		<java.version>17</java.version>
	</properties>
  ...
</project>
```