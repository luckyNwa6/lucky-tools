import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'

import vue from '@vitejs/plugin-vue'
import path from 'path'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import IconsResolver from 'unplugin-icons/resolver'
const pathSrc = path.resolve(__dirname, 'src')

// export default defineConfig({
//   plugins: [vue(),createSvgIconsPlugin({
//     // 阿里icon就放icons下了
//     iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
//     symbolId: 'icon-[dir]-[name]',
//   })],
//   resolve: {
//     alias: {
//       '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
//     },
//   },
//    //scss全局变量一个配置
//   css: {
//     preprocessorOptions: {
//       scss: {
//         javascriptEnabled: true,
//         additionalData: '@import "./src/styles/variable.scss";',
//       },
//     },
//   },
// })
//改成箭头函数
export default defineConfig(({ command, mode }) => {
  //获取各种环境下的对应的变量
  let env = loadEnv(mode, process.cwd())
  return {
    // base: '/luckyVue3Template/', // 对应github静态路径
    publicDir: 'public', // 静态资源服务的文件夹, 默认"public"
    build: {
      outDir: 'docs', //github部署那设置成这个即可
    },
    //--------------------------------------
    resolve: {
      alias: {
        '@': pathSrc, // 相对路径别名配置，使用 @ 代替 src
      },
    },
    //--------------------------------------
    css: {
      // CSS 预处理器,全局的scss格式如下往下面加即可
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: `
              @use "./src/styles/variable.scss" as * ;
              `,
        },
      },
    },
    //---------------------------------------
    plugins: [
      vue(),
      UnoCSS({}),
      //---------------------------------------
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: [
          'vue',
          '@vueuse/core',
          'vue-router',
          // { '@/hooks/useExitLogin': ['useExitLogin'] }, //还能这样每个vue页都导入，发现引入组件就行
        ],
        // dts: '/auto-import.d.ts',
        eslintrc: {
          enabled: false, //  Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        resolvers: [
          // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
          ElementPlusResolver({
            importStyle: 'sass',
          }),

          IconsResolver({
            prefix: 'Icon',
          }), // 自动导入图标组件
        ],
        vueTemplate: true, // 是否在 vue 模板中自动导入
        dts: path.resolve(pathSrc, 'typings', 'auto-imports.d.ts'), //自动导包的存放路径
      }),
      //---------------------------------------
      Components({
        resolvers: [
          IconsResolver({
            enabledCollections: ['ep'], //@iconify-json/ep 是 Element Plus 的图标库
          }),
          ElementPlusResolver(), // 自动导入 Element Plus 组件
        ],
        // dirs: ['src/components'], //自动导入这个目录下的组件.下面这个也会包含这个
        dts: path.resolve(pathSrc, 'typings', 'components.d.ts'),
      }),
      //---------------------------------------
      Icons({
        autoInstall: true, // 自动安装图标库
      }),
      //---------------------------------------
      VueI18nPlugin({
        runtimeOnly: true,
        compositionOnly: true,
        include: [resolve(__dirname, 'src/locales/**')],
      }),
      //---------------------------------------
      createSvgIconsPlugin({
        // 阿里icon就放icons下了
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      //---------------------------------------
      viteMockServe({
        localEnabled: command === 'serve', //保证开发阶段可以使用mock接口
        // prodEnabled: false, //mock生产接口开关
      }),
    ],
    //代理跨域
    server: {
      proxy: {
        [env.VITE_APP_BASE_API]: {
          //获取数据的服务器地址设置
          target: env.VITE_SERVE,
          //需要代理跨域
          changeOrigin: true,
          //路径重写
          rewrite: (path) => {
            return path.replace(new RegExp('^' + env.VITE_APP_BASE_API), '')
          },
        },
      },
    },
    optimizeDeps: {
      include: [
        'vue',
        'vue-router',
        'pinia',
        'axios',
        'element-plus/es/utils/index.mjs',
        'element-plus/es/components/form/style/css',
        'element-plus/es/components/form-item/style/css',
        'element-plus/es/components/button/style/css',
        'element-plus/es/components/input/style/css',
        'element-plus/es/components/input-number/style/css',
        'element-plus/es/components/switch/style/css',
        'element-plus/es/components/upload/style/css',
        'element-plus/es/components/menu/style/css',
        'element-plus/es/components/col/style/css',
        'element-plus/es/components/icon/style/css',
        'element-plus/es/components/row/style/css',
        'element-plus/es/components/tag/style/css',
        'element-plus/es/components/dialog/style/css',
        'element-plus/es/components/loading/style/css',
        'element-plus/es/components/radio/style/css',
        'element-plus/es/components/radio-group/style/css',
        'element-plus/es/components/popover/style/css',
        'element-plus/es/components/scrollbar/style/css',
        'element-plus/es/components/tooltip/style/css',
        'element-plus/es/components/dropdown/style/css',
        'element-plus/es/components/dropdown-menu/style/css',
        'element-plus/es/components/dropdown-item/style/css',
        'element-plus/es/components/sub-menu/style/css',
        'element-plus/es/components/menu-item/style/css',
        'element-plus/es/components/divider/style/css',
        'element-plus/es/components/card/style/css',
        'element-plus/es/components/link/style/css',
        'element-plus/es/components/breadcrumb/style/css',
        'element-plus/es/components/breadcrumb-item/style/css',
        'element-plus/es/components/table/style/css',
        'element-plus/es/components/tree-select/style/css',
        'element-plus/es/components/table-column/style/css',
        'element-plus/es/components/select/style/css',
        'element-plus/es/components/option/style/css',
        'element-plus/es/components/pagination/style/css',
        'element-plus/es/components/tree/style/css',
        'element-plus/es/components/alert/style/css',
        '@vueuse/core',
        'echarts',
        'vue-i18n',
      ],
    },
  }
})
