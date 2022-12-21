<template>
  <div class="bg-gradient-to-b from-white to-gray-100">
    <div class="mx-auto max-w-7xl pb-16 px-4 sm:px-6 lg:pb-24 lg:px-8">
      <dl class="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
        <div v-for="feature in features" :key="feature.name" class="relative">
          <dt>
            <!-- <CheckIcon class="absolute h-6 w-6 text-green-500" aria-hidden="true" /> -->
            <p class="ml-9 text-lg font-medium leading-6 text-gray-900">{{ feature.name }}</p>
          </dt>
          <dd class="mt-2 ml-9 text-base text-gray-500">{{ feature.description }}</dd>
        </div>
      </dl>
    </div>
  </div>
  <div class="max-w-6xl mx-auto">
    <!-- 对比 -->
    <div class="text-center mt-16">
      <h2 class="mt-32 mb-2 text-4xl font-extrabold md:text-6xl">专业的运维平台</h2>
      <h3 class="mb-5 text-3xl font-bold">就在 CNative</h3>
      <p class="mx-auto mb-5 w-full max-w-lg px-4">不要重复造轮子！<br>CNative
        的成员来自阿里、腾讯、字节、快手等一线互联网大厂<br>有成熟的大规模服务器运维经验。同时在成本节约、服务优化等方面有深刻的见解,
        我们深知只有客户成功才能最好地体现我们的价值。</p>
      <p class="mx-auto mt-20 w-full max-w-lg"></p>
      <div class="font-bold text-xl">从零搭建生产环境</div>
      <div class="flex flex-col w-full text-left lg:flex-row pt-12">
        <div class="grid grid-rows-[48px_auto] flex-grow basis-0">
          <div class="m-auto mb-6 shrink-0">自行采购服务器安装软件</div>
          <div class="m-auto h-fit flow-root w-2/3">
            <ul role="list" class="-mb-8">
              <li v-for="(event, eventIdx) in installs" :key="eventIdx">
                <div class="relative pb-8">
                  <span v-if="eventIdx !== installs.length - 1"
                    class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                  <div class="relative flex space-x-3">
                    <div>
                      <span :class="['bg-white h-8 w-8 flex items-center justify-center ring-8 ring-white']">
                        <component :is="event.icon" :class="[event.iconColor]" aria-hidden="true" />
                      </span>
                    </div>
                    <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p class="text-sm">
                          {{ event.content }}
                        </p>
                      </div>
                      <div class="whitespace-nowrap text-right text-sm text-gray-500">
                        <time>{{ event.date }}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="daisy-divider lg:daisy-divider-horizontal px-20 lg:px-0">VS</div>
        <div class="grid grid-rows-[48px_auto] flex-grow basis-0">
          <div class="m-auto mb-6 shrink-0">CNative命令行工具</div>
          <div class="m-auto min-h-fit w-10/12 daisy-mockup-code">
            <pre data-prefix="$"
              class="text-white"><code>curl -fsSL https://cnsl.ink/cnative -o install-cnative.sh && sh install-cnative.sh</code></pre>
            <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
            <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
            <pre />
            <pre />
            <pre />
          </div>
        </div>
      </div>
      <p class="mx-auto mt-20 w-full max-w-lg"></p>
      <div class="font-bold text-xl">代码部署上线</div>
      <div class="flex flex-col w-full text-left lg:flex-row pt-12">
        <div class="grid grid-rows-[48px_auto] flex-grow basis-0">
          <div class="m-auto mb-6 shrink-0">CI/CD、单元测试、手工滚动更新</div>
          <div class="m-auto h-fit flow-root w-2/3 grow">
            <ul role="list" class="-mb-8">
              <li v-for="(event, eventIdx) in deployments" :key="eventIdx">
                <div class="relative pb-8">
                  <span v-if="eventIdx !== deployments.length - 1"
                    class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                  <div class="relative flex space-x-3">
                    <div>
                      <span :class="['bg-white h-8 w-8 flex items-center justify-center ring-8 ring-white']">
                        <component :is="event.icon" :class="[event.iconColor]" aria-hidden="true" />
                      </span>
                    </div>
                    <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p class="text-sm">
                          {{ event.content }}
                        </p>
                      </div>
                      <div class="whitespace-nowrap text-right text-sm text-gray-500">
                        <time>{{ event.date }}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="daisy-divider lg:daisy-divider-horizontal px-20 lg:px-0">VS</div>
        <div class="grid grid-rows-[48px_auto] flex-grow basis-0">
          <div class="m-auto mb-6 shrink-0">仅需一个 push</div>
          <div class="m-auto min-h-fit w-10/12 daisy-mockup-code">
            <pre data-prefix="$" class="text-white"><code>cnative repo push -p &lt;your_project></code></pre>
            <pre data-prefix=">" class="truncate"><code>Enumerating objects: 13, done.</code></pre>
            <pre data-prefix=">" class="truncate"><code>Counting objects: 100% (13/13), done.</code></pre>
            <pre data-prefix=">" class="truncate"><code>Delta compression using up to 12 threads</code></pre>
            <pre data-prefix=">" class="truncate"><code>Compressing objects: 100% (7/7), done.</code></pre>
            <pre data-prefix=">"
              class="truncate"><code>Writing objects: 100% (7/7), 1.81 KiB | 1.81 MiB/s, done.</code></pre>
            <pre data-prefix=">"
              class="truncate"><code>Total 7 (delta 3), reused 0 (delta 0), pack-reused 0</code></pre>
            <pre data-prefix=">"
              class="truncate"><code>remote: Resolving deltas: 100% (3/3), completed with 3 local objects.</code></pre>
            <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
            <pre />
          </div>
        </div>
      </div>
      <p class="mx-auto mt-20 w-full max-w-lg"></p>
      <div class="font-bold text-xl">横向扩展</div>
      <div class="flex flex-col w-full text-left lg:flex-row pt-12">
        <div class="grid grid-rows-[48px_auto] flex-grow basis-0">
          <div class="m-auto mb-6 shrink-0">环境复制、服务注册与存活检查</div>
          <div class="m-auto h-fit flow-root w-2/3">
            <ul role="list" class="-mb-8">
              <li v-for="(event, eventIdx) in scales" :key="eventIdx">
                <div class="relative pb-8">
                  <span v-if="eventIdx !== scales.length - 1"
                    class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                  <div class="relative flex space-x-3">
                    <div>
                      <span :class="['bg-white h-8 w-8 flex items-center justify-center ring-8 ring-white']">
                        <component :is="event.icon" :class="[event.iconColor]" aria-hidden="true" />
                      </span>
                    </div>
                    <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p class="text-sm">
                          {{ event.content }}
                        </p>
                      </div>
                      <div class="whitespace-nowrap text-right text-sm text-gray-500">
                        <time>{{ event.date }}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="daisy-divider lg:daisy-divider-horizontal px-20 lg:px-0">VS</div>
        <div class="grid grid-rows-[48px_auto] flex-grow basis-0">
          <div class="m-auto mb-6 shrink-0">全自动化</div>
          <div class="m-auto min-h-fit w-10/12 ">
            <h3 class="text-xl font-semibold">交给 CNative 处理</h3>
            安心休息、专注工作，一切有条不紊
          </div>
          <!-- <div class="m-auto min-h-fit w-10/12 daisy-mockup-code">
            <pre data-prefix="$" class="text-white"><code>git push</code></pre>
            <pre data-prefix=">" class="truncate"><code>Enumerating objects: 13, done.</code></pre>
            <pre data-prefix=">" class="truncate"><code>Counting objects: 100% (13/13), done.</code></pre>
            <pre data-prefix=">" class="truncate"><code>Delta compression using up to 12 threads</code></pre>
            <pre data-prefix=">" class="truncate"><code>Compressing objects: 100% (7/7), done.</code></pre>
            <pre data-prefix=">"
              class="truncate"><code>Writing objects: 100% (7/7), 1.81 KiB | 1.81 MiB/s, done.</code></pre>
            <pre data-prefix=">"
              class="truncate"><code>Total 7 (delta 3), reused 0 (delta 0), pack-reused 0</code></pre>
            <pre data-prefix=">"
              class="truncate"><code>remote: Resolving deltas: 100% (3/3), completed with 3 local objects.</code></pre>
            <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
            <pre />
          </div> -->
        </div>
      </div>
    </div>
  </div>
  <!-- CTA -->
  <div class="bg-white mt-32 relative overflow-hidden">
    <RotateEarth class="absolute left-1/4 pointer-events-none" />
    <div class="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <span class="block">准备好了么？</span>
        <span class="block">让我们开始吧！</span>
      </h2>
      <div class="mt-8 flex justify-center">
        <div class="inline-flex rounded-3xl shadow">
          <a href="/docs/quick-start"
            class="inline-flex items-center justify-center rounded-3xl border bg-primary-light px-5 py-3 text-base font-medium text-white duration-200 hover:bg-primary-lighter">快速开始</a>
        </div>
        <div class="ml-3 inline-flex">
          <a href="https://github.com/cnative-dev/docs" target="_blank" rel="noreferrer"
            class="inline-flex items-center justify-center rounded-3xl border border-alt-darker bg-alt-lighter px-5 py-3 text-base font-medium text-gray-700 duration-200 hover:bg-alt">View
            on GitHub</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckCircleIcon, EllipsisHorizontalCircleIcon, MinusCircleIcon, XCircleIcon } from '@heroicons/vue/24/outline/index.js';
import RotateEarth from './RotateEarth.vue';

const installs = [
  {
    content: '采购云主机',
    icon: CheckCircleIcon,
    iconColor: 'text-green-300',
    date: '1小时',
  },
  {
    content: '更新、下载基础软件',
    icon: CheckCircleIcon,
    iconColor: 'text-green-300',
    date: '1小时',
  },
  {
    content: '搭建 Proxy，从 gcr.io 等境外源安装 K8s',
    icon: XCircleIcon,
    iconColor: 'text-red-300',
    date: '...',
  },
  {
    content: '搭建 CI/CD 服务、依赖包镜像仓库',
    icon: MinusCircleIcon,
    iconColor: 'text-gray-300',
    date: '...',
  },
  {
    content: '部署日志采集工具',
    icon: MinusCircleIcon,
    iconColor: 'text-gray-300',
    date: '...',
  },
  {
    content: '购买并部署 SSL 证书',
    icon: MinusCircleIcon,
    iconColor: 'text-gray-300',
    date: '...',
  },
]
const deployments = [
  {
    content: '配置部署脚本',
    icon: EllipsisHorizontalCircleIcon,
    iconColor: 'text-gray-300',
    date: '15分钟',
  },
  {
    content: '测试、打包、编译、推送镜像仓库',
    icon: EllipsisHorizontalCircleIcon,
    iconColor: 'text-gray-300',
    date: '15分钟',
  },
  {
    content: '手工滚动部署',
    icon: EllipsisHorizontalCircleIcon,
    iconColor: 'text-gray-300',
    date: 'n*10分钟',
  },
]
const scales = [
  {
    content: '配置服务器监控',
    icon: EllipsisHorizontalCircleIcon,
    iconColor: 'text-gray-300',
    date: '30分钟',
  },
  {
    content: '监控报警后手工准备服务器',
    icon: EllipsisHorizontalCircleIcon,
    iconColor: 'text-gray-300',
    date: 'n小时',
  },
  {
    content: '调整入口网关',
    icon: EllipsisHorizontalCircleIcon,
    iconColor: 'text-gray-300',
    date: '15分钟',
  },
]
const features = [
  {
    name: '自动扩缩容',
    description: '基于 CPU 负载等指标，我们会提供充足的计算资源给您的集群，无论有多少 QPS，您的服务性能都能线性扩展。',
  },
  {
    name: '专注业务开发',
    description: '只需要把代码推送到 CNative，服务即可在分钟级别实现线上访问，无需准备域名、服务器、备案、SSL证书等琐事，无论是创业初期还是快速发展。都节省您在基础上花费的时间，更快速地交付价值',
  },
  {
    name: '多种开发语言支持',
    description: '无论是各种前端框架还是后端 Java、Go、NodeJS，CNative 都能自动识别常用框架并完成服务的构建，只需选取您最趁手的工具',
  },
]
</script>