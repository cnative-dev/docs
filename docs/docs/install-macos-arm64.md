# 安装 CNative CLI

## 下载最新的版本
```sh
$ curl -LO https://cnative-client-release.oss-cn-beijing.aliyuncs.com/cnative/latest/cnative-darwin-arm64
```
## 验证二进制文件（可选）

下载 checksum 文件
```sh
$ curl -LO https://cnative-client-release.oss-cn-beijing.aliyuncs.com/cnative/latest/sha512.txt
```

验证下载的二进制文件：
```sh
$ cat sha512.txt | grep darwin-arm64 | shasum -a 512 --check
```

如果验证通过，输出是：
```sh
cnative-darwin-arm64: OK
```

如果验证失败，```sha256``` 会返回非零值并输出类似的错误：
```
cnative-darwin-arm64: FAILED
shasum: WARNING: 1 computed checksum did NOT match
```
## 安装 cnative
```sh
$ install -m 0755 cnative-darwin-arm64 /usr/local/bin/cnative
```
## 验证安装成功
```sh
$ cnative -v
```
