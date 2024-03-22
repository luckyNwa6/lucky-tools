import { _ as s } from './index-DlVuQRjT.js'
/* empty css                  */ /* empty css                 */ import {
  r as p,
  o as m,
  c as u,
  i as c,
  h as t,
  j as i,
  H as _,
  L as d,
} from './index-uBCHypy4.js'
const k = {
  __name: 'index',
  setup(f) {
    const e = p('')
    return (l, o) => {
      const n = d,
        a = s
      return (
        m(),
        u('div', null, [
          c(' i18测试 '),
          t(
            n,
            {
              modelValue: i(e),
              'onUpdate:modelValue':
                o[0] || (o[0] = (r) => (_(e) ? (e.value = r) : null)),
              placeholder: l.$t('role'),
            },
            null,
            8,
            ['modelValue', 'placeholder'],
          ),
          t(a),
        ])
      )
    }
  },
}
export { k as default }
