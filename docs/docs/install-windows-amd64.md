# 安装 CNative CLI

## 下载最新的版本
点击这里下载 [最新版客户端](https://cnative-client-release.oss-cn-beijing.aliyuncs.com/cnative/latest/cnative-windows-amd64.exe)，或者如果安装了 ```curl```，可以使用下面的命令
```sh
$ curl.exe -LO "https://cnative-client-release.oss-cn-beijing.aliyuncs.com/cnative/latest/cnative-windows-amd64.exe"
```
## 验证二进制文件（可选）

下载 checksum 文件，并用 ```CertUtil``` 进行验证
```sh
$ curl.exe -LO "https://cnative-client-release.oss-cn-beijing.aliyuncs.com/cnative/latest/sha512.txt"
```

## 安装 cnative
把 ```cnative-windows-amd64.exe``` 所在的目录添加到 ```PATH``` 路径内，并重命名为 ```cnative.exe```

## 验证安装成功
```sh
$ cnative.exe -v
```
