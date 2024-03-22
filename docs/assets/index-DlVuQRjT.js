/* empty css                  */ import {
  u as n,
  o as i,
  c as s,
  h as c,
  w as r,
  i as a,
  j as u,
  l,
} from './index-uBCHypy4.js'
function _() {
  const t = n()
  return {
    exitLogin: () => {
      t.push({ path: '/login' })
    },
  }
}
const f = {
  __name: 'index',
  setup(t) {
    const { exitLogin: e } = _()
    return (p, x) => {
      const o = l
      return (
        i(),
        s('div', null, [
          c(
            o,
            { plain: !0, onClick: u(e) },
            { default: r(() => [a('注销')]), _: 1 },
            8,
            ['onClick'],
          ),
        ])
      )
    }
  },
}
export { f as _ }
