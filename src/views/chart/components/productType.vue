<template>
  <el-card v-loading="showLoading" class="chart-card flex-1">
    <div class="header flex items-center justify-between">
      <div class="card-header-left flex items-center">
        <span class="w-4 h-4 mr-3">
          <img src="@/assets/home/ic_lx.png" class="w-full h-full" />
        </span>
        <span class="header-title">{{ comTitle }}</span>
      </div>
    </div>
    <div class="chart-content">
      <div v-if="chartData.length" :id="chartId" class="w-full h-full" />
      <el-empty v-else />
    </div>
  </el-card>
</template>

<script setup>
//参考https://juejin.cn/post/7245183742264377401

import * as echarts from 'echarts'
import { useI18n } from 'vue-i18n'
const showLoading = ref(false)
const chart = ref(null)
const chartData = ref([])
const chartId = 'productType' + Math.round(Math.random() * 10000)

const { t } = useI18n()

const initData = async () => {
  await getData()
  setChart()
}

const getData = async () => {
  try {
    showLoading.value = true
    // const res = await getProductBelongCount({ ids: [] });
    showLoading.value = false
    chartData.value = [
      { value: 1048, name: 'Search Engine' },
      { value: 735, name: 'Direct' },
      { value: 580, name: 'Email' },
      { value: 484, name: 'Union Ads' },
      { value: 300, name: 'Video Ads' },
    ]
  } catch (error) {
    showLoading.value = false
  }
}

const setChart = () => {
  if (chart.value) {
    chart.value.dispose()
    chart.value = null
  }
  chart.value = echarts.init(document.getElementById(chartId))
  var dataset = {
    dimensions: ['name', 'value'],
    source: chartData.value,
  }

  var option = {
    tooltip: {
      trigger: 'item',
      formatter: (params) => {
        const { name, value, seriesName, percent, marker } = params
        return `${seriesName}<br />${marker} ${name}&emsp;${value} ${t(
          'Units',
        )}(${percent}%)`
      },
    },
    legend: {
      show: true,
      orient: 'vertical',
      left: 'left',
      data: dataset.source.map((item) => item.name),
    },
    series: [
      {
        name: t('Product type statistics'),
        type: 'pie',
        radius: ['45%', '80%'],
        data: dataset.source,
        color: ['#FAC858', '#507AFC', '#91CC75', '#283E81', '#93BEFF'],
        label: {
          show: true,
          formatter: ' {c}',
        },
      },
    ],
  }
  chart.value.setOption(option, true)
}

// 窗口自适应并开启过渡动画
const resize = () => {
  if (chart.value) {
    chart.value.resize({ animation: { duration: 300 } })
  }
}
// 自适应防抖优化
const debouncedResize = useDebounceFn(resize, 500, { maxWait: 800 })

onMounted(() => {
  initData()
  nextTick(() => {
    window.addEventListener('resize', debouncedResize)
  })
})

onBeforeUnmount(() => {
  if (chart.value) {
    chart.value.dispose()
    chart.value = null
    window.removeEventListener('resize', debouncedResize)
  }
})
</script>

<style lang="scss" scoped>
.header {
  .card-header-left {
    .w-4 {
      width: 4px;
    }
    .h-4 {
      height: 4px;
    }
    .mr-3 {
      margin-right: 0.75rem;
    }
  }
}

.chart-content {
  height: 260px;
}
</style>
