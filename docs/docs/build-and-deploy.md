# 构建并部署服务
CNative 采用自动化构建和部署的方式，也就是说，当把源码推送到 CNative 服务上之后，就会自动开始构建的过程，构建成功后，会自动进行线上服务的部署

## 构建代码
CNative 内建了一个 git 仓库，可以通过 ```cnative repo push <项目名>``` 的方式把代码推送到 CNative

为了防止误推送，在推送代码时会比对历史提交记录，如果发现新的代码历史提交记录不符合，默认提交失败。失败有可能出现在：

1. 原先是以 A 代码仓库进行的提交，之后不小心使用 B 代码仓库尝试进行提交
2. 原先是基于代码仓库某个 A 分支迭代之后（比方说 bugfix）进行提交，相关的代码没有合入 B 分支，又尝试使用 B 分支进行提交

如果确认没问题，可以使用 ```force``` 参数进行强制提交，此时 CNative 不再检查提交记录的匹配情况，强制覆盖

**请注意：虽然 CNative 内是使用 git 来管理代码提交，但请不要将 CNative 作为代码管理仓库，请使用 github/gitee 等三方服务或自建 gitlab 来进行代码版本的管理**

## 查看构建列表

我们可以通过如下命令查看一个项目的所有构建
```sh
$ cnative build list -p <项目名>
```

结果如下：

| 构建ID |                 GIT SHA                  | 构建状态 | 产物包 |         创建时间         |
|--------|------------------------------------------|----------|--------|--------------------------|
|    133 | d7aa5abaeff289 | failed   | false  | 2022-11-10T15:23:03.673Z |
|    134 | 796e76b6b41fe9 | failed   | false  | 2022-11-10T15:23:04.716Z |
|    136 | 87400c207446ba | success  | false  | 2022-11-10T15:37:37.423Z |
|    137 | 87400c207446ba | failed   | false  | 2022-11-10T15:37:38.362Z |
|    140 | e7d9dfeac9be59 | success  | false  | 2022-11-11T01:06:33.255Z |
|    143 | e10a3a1ef3575c | success  | true   | 2022-11-11T01:16:19.310Z |
|    152 | 1d57c87c6685b3 | success  | false  | 2022-11-15T11:21:24.973Z |
|    153 | 9c7fe537ddd6d4 | success  | true   | 2022-11-15T14:24:36.877Z |

其中
* 构建ID: 是标识唯一 ID的，在下面有使用
* GIT SHA: 是对应的 git commit id，如果构建有问题，可以 checkout 对应的代码来检查问题
* 构建状态：有 success/failed/running 三个状态，分别代表 构建成功/构建失败/正在构建 
* 产物包：代表本次构建已经生成对应的产物包代码
* 创建时间：代码构建触发的时间

## 取消构建
如果发现推送了错误的代码，在构建完成之前，可以紧急取消该次构建，阻止有问题的代码部署到线上。如果想取消一次正在执行的构建，我们可以使用下面的命令：
```sh
$ cnative build cancel -p <项目名> <构建ID 或 latest>
```

## 查看构建日志
我们可以查看正在构建中的日志，或者已经完成了的构建的日志，使用如下命令：
```sh
$ cnative build log -p <项目名> <构建ID 或 latest>
```
该命令在查看构建中的日志会默认持续读取日志流，如果因为网络原因日志流断掉了，重新运行即可


## 重试构建
如果我们发现某次构建失败，查看了 log 之后，发现可能是因为当时国内网络访问外网原因或者构建期环境变量错误，希望重试该次构建的话，可以使用如下命令：
```sh
$ cnative build retry -p <项目名> <构建ID 或 latest>
```
如果已经成功完成了的构建就不再支持重试了

## 删除构建记录
如果我们不需要记录一次构建，可以使用如下命令删除：
```sh
$ cnative build delete -p <项目名> <构建ID 或 latest>
```

## 部署服务
代码构建完后会将构建产物异步自动发布到线上生产集群，大概过3-5分钟就会生效