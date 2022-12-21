# 项目
一个项目是一个独立的资源单位，我们可以把项目看作一个完整的线上服务和其周边的数据，CNative 会将相关配置文件，Secret，构建过程，运行时日志，域名等资源和项目进行绑定，一个用户可以有多个项目，项目和项目之间的数据、网络等都是隔离的，项目之间默认无法互相访问。


## 创建项目
我们可以通过以下命令进行项目的创建

```sh
$ cnative project create <项目名>
```

项目创建后会返回如下数据

| 字段           | 样例           | 说明  |
| --------------- | ------------- | ----- |
| 项目ID      | intrepid-bongo-ad25db | 全 CNative 的唯一ID，日常使用接触不到 |
| 项目名         | demo      | 创建项目时的项目名，在账号内唯一，可以取和业务相关的、容易记的名字，像是 ```shop_api```，```shop_fe``` 等 |
| URL      | https://intrepid-bongo-ad25db.cnative.app | 线上访问地址 |
| 更新时间  | 2022-11-16T08:03:40.743Z | 服务的最后更新时间 |

## 列出已有项目
我们可以通过以下命令列出当前账号下的所有项目

```sh
$ cnative project list
```
会返回如下数据
|           项目ID            |     项目名      |                       URL                       |         更新时间         |
|-----------------------------|-----------------|-------------------------------------------------|--------------------------|
| huge-greyhound-9ad141       | cnsl_ink        | https://huge-greyhound-9ad141.cnative.app       | 2022-11-04T04:31:52.586Z |
| bustling-trembler-98259d    | api_cnative_dev | https://bustling-trembler-98259d.cnative.app    | 2022-11-15T14:33:35.199Z |
| relevant-whitethroat-9969a1 | cnative_dev     | https://relevant-whitethroat-9969a1.cnative.app | 2022-11-16T06:30:25.518Z |
| intrepid-bongo-ad25db       | demo            | https://intrepid-bongo-ad25db.cnative.app       | 2022-11-16T08:03:40.743Z |

具体字段和上一节一致

## 查看项目信息

```sh
$ cnative project describe <项目名>
```
返回的信息和创建项目一致
| 字段           | 样例           | 说明  |
| --------------- | ------------- | ----- |
| 项目ID      | intrepid-bongo-ad25db | 全 CNative 的唯一ID，日常使用接触不到 |
| 项目名         | demo      | 创建项目时的项目名，在账号内唯一，可以取和业务相关的、容易记的名字，像是 ```shop_api```，```shop_fe``` 等 |
| URL      | https://intrepid-bongo-ad25db.cnative.app | 线上访问地址 |
| 更新时间  | 2022-11-16T08:03:40.743Z | 服务的最后更新时间 |

## 项目重命名
项目重命名不会影响线上服务，项目 ID 与域名都不会变化，服务也不会重新部署更新。

```sh
$ cnative project rename <新项目名> -p <旧项目名>
```

## 删除项目
当我们确认一个项目不再使用的时候，可以通过如下命令进行项目的删除，项目删除后占用的相关资源都会释放，线上服务也会终止

```sh
cnative project delete <项目名>
```