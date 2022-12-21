# 更新客户端

CNative 客户端会不定期自动检查新版本，如果需要手动更新，可以使用如下命令

```sh
$ cnative update
```

注意，CNative 会不定期发布更新，版本号依照 semver 格式规范，也即在版本 ```X.Y.Z``` 中
| 位置        |      说明      |
| ------------- | :----------- |
| X      | 大版本更新，存在 breaking change |
| Y      |   功能更新    |
| Z |   bug fix    |

平台会尽力保持客户端的兼容，但老版本可能存在 安全\不兼容新功能 的问题，所以请尽可能保持客户端处于最新状态