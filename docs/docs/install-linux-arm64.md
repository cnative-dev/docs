# 安装 CNative CLI

## 下载最新的版本
```sh
$ curl -LO https://cnative-client-release.oss-cn-beijing.aliyuncs.com/cnative/latest/cnative-linux-arm64
```
## 验证二进制文件（可选）

下载 checksum 文件
```sh
$ curl -LO https://cnative-client-release.oss-cn-beijing.aliyuncs.com/cnative/latest/sha512.txt
```

验证下载的二进制文件：
```sh
$ cat sha512.txt | grep linux-arm64 | sha512sum --check
```

如果验证通过，输出是：
```sh
cnative-linux-arm64: OK
```

如果验证失败，```sha256``` 会返回非零值并输出类似的错误：
```
cnative-linux-arm64: FAILED
sha512sum: WARNING: 1 computed checksum did NOT match
```
## 安装 cnative
```sh
$ sudo install -o root -g root -m 0755 cnative-linux-arm64 /usr/local/bin/cnative
```
::: tip
如果没有 root 权限，可以把 cnative 安装到 ```~/.local/bin``` 目录下：
```sh
$ chmod +x cnative
$ mkdir -p ~/.local/bin
$ mv ./cnative ~/.local/bin/cnative
# 然后把 ~/.local/bin 加到环境变量 $PATH 里
```
:::
## 验证安装成功
```sh
$ cnative -v
```
