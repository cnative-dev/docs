# 鉴权
在 CNative 里鉴权对应着一个用户的身份。没有更进一步的权限划分

## 登录
登录后会在本地保存使用凭证，由于登录凭证有所有资源的控制权，所以不建议采用过长的过期时间

```sh
$ cnative auth login -h
登录 CNative

Usage:
  cnative auth login [flags]

Flags:
  -p, --provider string   第三方服务登陆，可选值：[github]
  -t, --timeout int       登录凭证过期时间，单位秒，默认1小时 (default 3600)
```


## 登出
会销毁本地存储的凭证，保证线上服务安全

```sh
$ cnative auth logout -h
登出 CNative

Usage:
  cnative auth logout
```