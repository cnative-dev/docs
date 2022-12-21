# 管理配置文件

经常我们需要在不同的环境里使用不同的行为，比方说 dev 环境内需要启用 DEBUG 参数，或者数据库的连接地址在 prod 环境里需要使用线上地址，在这种情况下， CNative 提供了配置文件的管理，在服务端反应出来的就是系统环境变量。

::: warning
所有对于配置文件的变更，都会引发服务的重新部署，服务重新部署会先启动新服务，然后把线上流量迁移过去，在流量迁移完之后会对老服务进行 gracefully shutdown。

原因在于如果系统不主动触发重新部署的话，有可能会发生配置变更但没有及时生效，导致服务在不确定的时间里生效新逻辑（比方说大家都睡觉的大半夜）这会让服务处于一个未知的状态
:::

## 查看配置文件

```sh
$ cnative config list -p demo
```
返回
```
+---------+---------+
|   KEY   |  VALUE  |
+---------+---------+
| ENV_KEY | ENV_VAL |
+---------+---------+
```

## 添加一条配置

::: tip
如果该 key 已经存在，那么将会执行替换操作
:::

```sh
$ cnative config add <KEY> <VALUE> -p demo
```

我们可以通过一个例子来看如何使用配置，首先我们 clone 一个 demo 代码：
```sh
$ git clone git@github.com:cnative-dev/quick-start-golang.git
```

然后假设已经创建了 demo 项目（关于如何创建项目，可以参考 [创建项目](/docs/app#%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE)）

在[部署源码](/docs/build-and-deploy)之后，我们访问页面，可以看到此时输出的是：```Hello World!```

然后我们添加一条配置：
```sh
$ cnative config add TARGET CNative -p demo
```

稍等1到2分钟，服务完成了重新部署之后，再次访问地址，此时页面输出的是：

```Hello CNative!```

## 删除一条配置
```sh
$ cnative config remove <KEY> -p demo
```

## 批量修改配置

由于变更配置会引发服务的重新部署，有些时候我们可能希望多个配置都同时变更实现原子化操作，CNative 提供了 apply 命令来实现配置的批量变更

:::warning
批量修改配置会实施覆盖操作，类似于将原来线上配置完全删除之后，再将新键值逐一添加进去
:::

使用方法有如下三种：

### 指定变量创建配置
可以通过 ```-v``` 参数重复添加多个键值对

```sh
$ cnative config apply -v <key1>=<value1> -v <key2>=<value2> -p demo
```

### 通过文件来创建配置（properties 格式文件）

我们可以通过这种方式来实现基于文件的配置管理

```sh
$ cnative config apply --from-file ./config.properties -p demo
```

其中 properties 文件的格式是这样的：
```
<key1>=<value1>
<key2>=<value2>
<key3>=<value3>
```

### 混合使用配置文件和指定变量

我们可以部分使用配置文件，部分使用指定变量的方式来创建配置

```sh
$ cnative config apply --from-file ./config.properties -v <key1>=<value1> -v <key2>=<value2> -p demo
```

在这里，如果 ```-v``` 参数和配置文件内有重复，会以 ```-v``` 参数里的配置为准，实现覆盖默认值的效果

## 删除全部配置

也是由于原子化的原因，这里提供了全配置删除的操作，使用的时候请小心， CNative 没有备份

```sh
$ cnative config delete -p demo
```