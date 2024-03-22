<template>
  <hr />
  <div class="testColor">lucky小维</div>
  <hr />
  <div>{{ luckyC }}</div>
  <hr />
  <div>hooks混入,鼠标点击，展示当前x的值：{{ x }},当前y的值是：{{ y }}</div>
  <hr />
  <el-button @click="loginM">Mock登录测试</el-button>
  <el-button @click="loginX">线上登录测试</el-button>
  <el-button @click="i18T">牛逼i18n测试</el-button>
  <el-button @click="chart">echarts测试</el-button>
  <el-button @click="uNoCssT">unocss测试</el-button>
  <hr />
  <el-button @click="iconT">icon测试</el-button>
  <el-button @click="conT">组件测试</el-button>
  <el-button @click="mapT">地图测试</el-button>

  <hr />
  <img :src="emptyImage" class="h-10 w-10" />
</template>

<script setup lang="ts">
import emptyImage from '@/assets/home/yd_4.png'

// import request from '@/utils/request'
// import { reqLogin } from '@/api/user'
import { reqLoginX } from '@/api/login/index'
import useMousePosition from '@/hooks/useMousePosition' //混入
// import { useRouter, useRoute } from 'vue-router'//自动引入配置好了
//引入用户相关的小仓库。请求再这里面异步请求
import useUserStore from '@/store/modules/user'

let useStore = useUserStore()
let luckyC = ref('ref类似定义data里的值') //下面使用它的值luckyC.value
//获取路由器
let $router = useRouter()
//路由对象
let $route = useRoute()
const { x, y } = useMousePosition()

const form = reactive({
  //一般表单用这个
  username: 'admin',
  password: '111111',
})

//下面是按钮的路由跳转
const i18T = () => {
  $router.push({ path: '/i18T' })
}
const chart = () => {
  $router.push({ path: '/chart' })
}
const uNoCssT = () => {
  $router.push({ path: '/uNoCssT' })
}
const iconT = () => {
  $router.push({ path: '/iconT' })
}
const conT = () => {
  $router.push({ path: '/conT' })
}

const mapT = () => {
  $router.push({ path: '/mapT' })
}

//下面是登录
const loginX = () => {
  reqLoginX({
    captcha: '',
    openCaptcha: false,
    password: 'admin',
    username: 'admin',
    uuid: '',
  }).then((res) => {
    console.log(res)
    if (res.code === 0) {
      ElNotification({
        type: 'success',
        message: '登录成功!',
        title: `HI，小维`,
      })
    }
  })
}

const loginM = async () => {
  try {
    await useStore.userLogin(form)
    $router.push({ path: '/tableT' })
    //登录成功提示信息
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `HI`,
    })
  } catch (error) {
    //登录失败的提示信息
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}

// const loginM = () => {

//   // reqLogin(form).then((res: any) => {
//   //   console.log(res)
//   // })
// }
// onMounted(() => {
//   // request({
//   //   url: '/user/login',
//   //   method: 'post',
//   //   data: {
//   //     username: 'admin',
//   //     password: '111111',
//   //   },
//   // }).then((res) => {
//   //   console.log(res)
//   // })
//   reqLogin({ username: 'admin', password: '111111' }).then((res: any) => {
//     console.log(res)
//   })
// })
</script>

<style lang="scss" scoped>
.testColor {
  color: $base-color;
}
</style>
