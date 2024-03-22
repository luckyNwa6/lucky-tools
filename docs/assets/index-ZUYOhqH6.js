import {
  o as u,
  c as r,
  a as e,
  d as g,
  _ as y,
  n as N,
  r as f,
  b as T,
  e as b,
  u as q,
  f as D,
  g as H,
  h as n,
  w as i,
  i as s,
  t as d,
  j as p,
  F as V,
  E as A,
  k as m,
  l as X,
  m as j,
  p as P,
  q as R,
} from './index-uBCHypy4.js'
/* empty css                  */ import {
  r as U,
  u as Y,
} from './request-CJ29PJIZ.js'
/* empty css                 */ const G = {
    viewBox: '0 0 1024 1024',
    width: '1.2em',
    height: '1.2em',
  },
  J = e(
    'path',
    {
      fill: 'currentColor',
      d: 'M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z',
    },
    null,
    -1,
  ),
  K = e(
    'path',
    {
      fill: 'currentColor',
      d: 'm469.952 554.24l52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z',
    },
    null,
    -1,
  ),
  O = [J, K]
function Q(t, l) {
  return u(), r('svg', G, [...O])
}
const W = { name: 'ep-edit', render: Q },
  Z = { viewBox: '0 0 1024 1024', width: '1.2em', height: '1.2em' },
  ee = e(
    'path',
    {
      fill: 'currentColor',
      d: 'M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32',
    },
    null,
    -1,
  ),
  te = e(
    'path',
    {
      fill: 'currentColor',
      d: 'M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544',
    },
    null,
    -1,
  ),
  ne = e(
    'path',
    {
      fill: 'currentColor',
      d: 'M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0z',
    },
    null,
    -1,
  ),
  oe = [ee, te, ne]
function se(t, l) {
  return u(), r('svg', Z, [...oe])
}
const le = { name: 'ep-add-location', render: se },
  ae = g({
    setup() {
      return {}
    },
  })
function ce(t, l, _, a, v, x) {
  return (
    u(), r('div', null, '****这是自动引入的主键，都不需要import也不用注册*****')
  )
}
const ie = y(ae, [
    ['render', ce],
    ['__scopeId', 'data-v-32a426e5'],
  ]),
  ue = ['xlink:href', 'fill'],
  re = g({
    __name: 'index',
    props: {
      prefix: { type: String, default: '#icon-' },
      name: String,
      color: { type: String, default: '' },
      width: { type: String, default: '16px' },
      height: { type: String, default: '16px' },
    },
    setup(t) {
      return (l, _) => (
        u(),
        r('div', null, [
          (u(),
          r(
            'svg',
            { style: N({ width: t.width, height: t.height }) },
            [
              e(
                'use',
                { 'xlink:href': t.prefix + t.name, fill: t.color },
                null,
                8,
                ue,
              ),
            ],
            4,
          )),
        ])
      )
    },
  }),
  _e = (t) => U.post('/idpSys/login', t)
function he() {
  const t = f(0),
    l = f(0),
    _ = (a) => {
      ;(t.value = a.pageX), (l.value = a.pageY)
    }
  return (
    T(() => {
      document.addEventListener('click', _)
    }),
    b(() => {
      document.removeEventListener('click', _)
    }),
    { x: t, y: l }
  )
}
const o = (t) => (P('data-v-0cf1cc6b'), (t = t()), R(), t),
  de = o(() => e('hr', null, null, -1)),
  pe = o(() => e('hr', null, null, -1)),
  me = o(() =>
    e('h1', null, '测试svg,用xlink:herf执行哪一个图标#icon-图标名称', -1),
  ),
  fe = { style: { width: '30px', height: '30px' } },
  ge = o(() =>
    e('use', { 'xlink:href': '#icon-phone', fill: 'pink' }, null, -1),
  ),
  ve = [ge],
  xe = o(() => e('div', { class: 'testColor' }, 'lucky小维', -1)),
  ye = o(() => e('hr', null, null, -1)),
  Ce = o(() => e('hr', null, null, -1)),
  ke = o(() => e('hr', null, null, -1)),
  $e = o(() => e('hr', null, null, -1)),
  we = o(() => e('hr', null, null, -1)),
  Ee = o(() => e('hr', null, null, -1)),
  Se = o(() => e('hr', null, null, -1)),
  Me = g({
    __name: 'index',
    setup(t) {
      let l = Y(),
        _ = f('ref类似定义data里的值'),
        a = q()
      D()
      const { x: v, y: x } = he(),
        C = H({ username: 'admin', password: '111111' }),
        k = () => {
          A({ message: 'this is a message.', grouping: !0, type: 'success' })
        },
        $ = () => {
          a.push({ path: '/i18T' })
        },
        w = () => {
          a.push({ path: '/chart' })
        },
        E = () => {
          a.push({ path: '/uNoCssT' })
        },
        S = () => {
          _e({
            acc: 'luckyNwa',
            captcha: '',
            openCaptcha: !1,
            pwd: 'nwa999',
            uuid: '',
          }).then((h) => {
            console.log(h),
              h.code === 0 &&
                m({ type: 'success', message: '登录成功!', title: 'HI，小维' })
          })
        },
        M = async () => {
          try {
            await l.userLogin(C),
              a.push({ path: '/home' }),
              m({ type: 'success', message: '欢迎回来', title: 'HI' })
          } catch (h) {
            m({ type: 'error', message: h.message })
          }
        }
      return (h, Fe) => {
        const c = X,
          F = j,
          I = re,
          z = ie,
          B = le,
          L = W
        return (
          u(),
          r(
            V,
            null,
            [
              n(
                c,
                { type: 'primary', size: 'small', icon: 'plus' },
                { default: i(() => [s(' 编辑2种自动引入的方法应用 ')]), _: 1 },
              ),
              de,
              s(' 默认是英文的，需要main那修改配置 '),
              n(F, {
                'page-size': 100,
                layout: 'total, prev, pager, next',
                total: 1e3,
              }),
              pe,
              me,
              (u(), r('svg', fe, ve)),
              n(I, { name: 'phone', color: 'blue' }),
              xe,
              ye,
              e('div', null, d(p(_)), 1),
              Ce,
              e(
                'div',
                null,
                ' hooks混入,也很好用：点击变化，当前x的值：' +
                  d(p(v)) +
                  ',当前y的值是：' +
                  d(p(x)),
                1,
              ),
              ke,
              n(z),
              $e,
              s(' 这是elementui图标按需导入也不要注册,不过有前缀 '),
              n(B),
              n(L),
              we,
              s(' 这是elementui组件按需自动导入 '),
              n(
                c,
                { plain: !0, onClick: k },
                { default: i(() => [s('Show message')]), _: 1 },
              ),
              Ee,
              s(' 这里测试mockjs模拟的数据 '),
              n(
                c,
                { plain: !0, onClick: M },
                { default: i(() => [s('Mock登录测试')]), _: 1 },
              ),
              n(
                c,
                { plain: !0, onClick: S },
                { default: i(() => [s('线上登录测试')]), _: 1 },
              ),
              n(
                c,
                { plain: !0, onClick: $ },
                { default: i(() => [s('牛逼i18n测试')]), _: 1 },
              ),
              n(
                c,
                { plain: !0, onClick: w },
                { default: i(() => [s('echarts测试')]), _: 1 },
              ),
              Se,
              n(
                c,
                { plain: !0, onClick: E },
                { default: i(() => [s('unocss测试')]), _: 1 },
              ),
            ],
            64,
          )
        )
      }
    },
  }),
  Ne = y(Me, [['__scopeId', 'data-v-0cf1cc6b']])
export { Ne as default }
