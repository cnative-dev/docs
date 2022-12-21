# Maven 配置

CNative 在构建 maven 项目时会通过 settings.xml 来自定义 repository 镜像，采用 aliyun 的镜像源来加速依赖下载和打包

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                          https://maven.apache.org/xsd/settings-1.0.0.xsd">
  <mirrors>
    <mirror>
      <id>aliyun-public</id>
      <mirrorOf>*</mirrorOf>
      <name>aliyun public</name>
      <url>https://maven.aliyun.com/repository/public</url>
    </mirror>
  </mirrors>
</settings>
```