/* empty css                  */ import { _ as P } from './lodash-ztrSG9hn.js'
import {
  o as y,
  c as D,
  a as h,
  _ as G,
  s as te,
  r as S,
  j as s,
  v as $,
  x as M,
  h as a,
  w as i,
  y as V,
  z as ae,
  i as E,
  t as B,
  l as Y,
  A as oe,
  B as ne,
  C as le,
  D as R,
  G as se,
  H as z,
  m as re,
  g as U,
  I as ue,
  d as ie,
  u as de,
  b as ce,
  J as pe,
  K as me,
  F as ge,
  L as fe,
  M as _e,
  N as be,
  O as he,
  P as ve,
  Q as we,
  R as ye,
  S as Te,
  T as ke,
  U as Se,
} from './index-uBCHypy4.js'
import { r as $e } from './request-CJ29PJIZ.js'
/* empty css                 */ import { _ as Ee } from './index-DlVuQRjT.js'
const Pe = { viewBox: '0 0 1024 1024', width: '1.2em', height: '1.2em' },
  Ne = h(
    'path',
    {
      fill: 'currentColor',
      d: 'M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z',
    },
    null,
    -1,
  ),
  Ce = [Ne]
function Ve(e, o) {
  return y(), D('svg', Pe, [...Ce])
}
const Be = { name: 'ep-arrow-down', render: Ve },
  Me = { class: 'flex flex-col h-full overflow-y-auto' },
  ze = { class: 'page-box h-0 flex-1 flex flex-col' },
  De = { class: 'flex pb-3' },
  Fe = { class: 'flex-1 search-form' },
  xe = { class: 'space-x-2 ml-2 flex button-area' },
  Ue = { class: 'pagination-box' },
  Ae = {
    __name: 'index',
    props: {
      permissionName: { type: String, default: '' },
      showToggleButton: { type: Boolean, default: !1 },
      toggleValue: { type: Boolean, default: !1 },
    },
    emits: ['update:toggleValue'],
    setup(e, { emit: o }) {
      const t = te(),
        d = o,
        l = S(!1),
        c = () => {
          ;(l.value = !l.value), d('update:toggleValue', l.value)
        }
      return (n, g) => {
        const u = Be,
          f = Y,
          v = oe,
          w = ne
        return (
          y(),
          D('div', Me, [
            h('div', ze, [
              s(t).promptContent
                ? $(n.$slots, 'promptContent', { key: 0 }, void 0, !0)
                : M('', !0),
              a(
                w,
                { class: 'search-card' },
                {
                  default: i(() => [
                    a(v, null, {
                      default: i(() => [
                        h('div', De, [
                          h('div', Fe, [
                            $(n.$slots, 'searchForm', {}, void 0, !0),
                          ]),
                          h('div', xe, [
                            h('div', null, [
                              e.showToggleButton
                                ? (y(),
                                  V(
                                    f,
                                    { key: 0, text: '', onClick: c },
                                    {
                                      default: i(() => [
                                        a(
                                          u,
                                          {
                                            class: ae([
                                              s(l) ? 'down-icon' : '',
                                              'change-icon mr-1',
                                            ]),
                                          },
                                          null,
                                          8,
                                          ['class'],
                                        ),
                                        E(' ' + B(s(l)), 1),
                                      ]),
                                      _: 1,
                                    },
                                  ))
                                : M('', !0),
                            ]),
                            $(n.$slots, 'searchButton', {}, void 0, !0),
                          ]),
                        ]),
                      ]),
                      _: 3,
                    }),
                  ]),
                  _: 3,
                },
              ),
              a(
                w,
                { class: 'table-card' },
                {
                  default: i(() => [
                    $(n.$slots, 'pageTable', {}, void 0, !0),
                    h('div', Ue, [
                      $(n.$slots, 'pagePagination', {}, void 0, !0),
                    ]),
                  ]),
                  _: 3,
                },
              ),
              $(n.$slots, 'default', {}, void 0, !0),
            ]),
          ])
        )
      }
    },
  },
  Oe = G(Ae, [['__scopeId', 'data-v-22208b01']]),
  Le = (e, o, t, d) => (
    (e /= d / 2),
    e < 1 ? (t / 2) * e * e + o : (e--, (-t / 2) * (e * (e - 2) - 1) + o)
  ),
  Re = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (e) {
        window.setTimeout(e, 1e3 / 60)
      }
    )
  })(),
  Ie = (e) => {
    ;(document.documentElement.scrollTop = e),
      (document.body.parentNode.scrollTop = e),
      (document.body.scrollTop = e)
  },
  je = () =>
    document.documentElement.scrollTop ||
    document.body.parentNode.scrollTop ||
    document.body.scrollTop,
  I = (e, o, t) => {
    const d = je(),
      l = e - d,
      c = 20
    let n = 0
    o = typeof o > 'u' ? 500 : o
    const g = function () {
      n += c
      const u = Le(n, d, l, o)
      Ie(u), n < o ? Re(g) : t && typeof t == 'function' && t()
    }
    g()
  }
var j
;(function (e) {
  ;(e.UP = 'UP'),
    (e.RIGHT = 'RIGHT'),
    (e.DOWN = 'DOWN'),
    (e.LEFT = 'LEFT'),
    (e.NONE = 'NONE')
})(j || (j = {}))
function q(e, o, t, d = {}) {
  var l
  const { passive: c = !1 } = d,
    n = le(),
    g =
      t ||
      (n == null ? void 0 : n.emit) ||
      ((l = n == null ? void 0 : n.$emit) === null || l === void 0
        ? void 0
        : l.bind(n))
  let u
  if ((o || (o = 'modelValue'), (u = u || `update:${o}`), c)) {
    const f = S(e[o])
    return (
      R(
        () => e[o],
        (v) => (f.value = v),
      ),
      R(f, (v) => {
        v !== e[o] && g(u, v)
      }),
      f
    )
  } else
    return se({
      get() {
        return e[o]
      },
      set(f) {
        g(u, f)
      },
    })
}
const qe = { class: 'pagination-content' },
  Ge = {
    __name: 'index',
    props: {
      total: { required: !0, type: Number, default: 0 },
      page: { type: Number, default: 1 },
      limit: { type: Number, default: 20 },
      pageSizes: {
        type: Array,
        default() {
          return [10, 20, 30, 50]
        },
      },
      layout: {
        type: String,
        default: 'total, sizes, prev, pager, next, jumper',
      },
      background: { type: Boolean, default: !0 },
      autoScroll: { type: Boolean, default: !0 },
      hidden: { type: Boolean, default: !1 },
    },
    emits: ['pagination', 'update:page', 'update:limit'],
    setup(e, { emit: o }) {
      const t = e,
        d = o,
        l = q(t, 'page', d),
        c = q(t, 'limit', d)
      function n(u) {
        d('pagination', { page: l, limit: u }), t.autoScroll && I(0, 800)
      }
      function g(u) {
        ;(l.value = u),
          d('pagination', { page: u, limit: t.limit }),
          t.autoScroll && I(0, 800)
      }
      return (u, f) => {
        const v = re
        return (
          y(),
          D('div', qe, [
            a(
              v,
              {
                'current-page': s(l),
                'onUpdate:currentPage':
                  f[0] || (f[0] = (w) => (z(l) ? (l.value = w) : null)),
                'page-size': s(c),
                'onUpdate:pageSize':
                  f[1] || (f[1] = (w) => (z(c) ? (c.value = w) : null)),
                background: e.background,
                layout: e.layout,
                'page-sizes': e.pageSizes,
                total: e.total,
                onSizeChange: n,
                onCurrentChange: g,
              },
              null,
              8,
              [
                'current-page',
                'page-size',
                'background',
                'layout',
                'page-sizes',
                'total',
              ],
            ),
          ])
        )
      }
    },
  },
  Ye = G(Ge, [['__scopeId', 'data-v-eae23a4f']])
function He(e, o) {
  const t = U(e()),
    d = U(e()),
    l = S(!1),
    c = S([]),
    n = S(0)
  function g(p) {
    if (p) return P.isFunction(p) && p()
    throw new Error('需要传递一个函数！例如：getTableData(fn)')
  }
  function u(p) {
    const T = Object.keys(e())
    for (const b in t)
      T.includes(b)
        ? ((t[b] = e()[b]), (d[b] = e()[b]))
        : (delete t[b], delete d[b])
    if (
      (o &&
        o.value &&
        ue(() => {
          o.value.clearSort()
        }),
      p)
    )
      return P.isFunction(p) && g(p)
    throw new Error('需要传递一个函数！例如：resetQueryTable(fn)')
  }
  function f(p, T, b) {
    const N = P.cloneDeep(p)
    if (((N[T.prop] = T.order), Object.assign(t, N), b))
      return P.isFunction(b) && g(b)
    throw new Error('需要传递一个函数！例如：sortTableByProps(fn)')
  }
  function v(p) {
    if (((t.pageNum = 1), p)) return P.isFunction(p) && g(p)
    throw new Error('需要传递一个函数！例如：changeTablePageSize(fn)')
  }
  function w(p) {
    Object.assign(t, d), g(p)
  }
  function F() {
    Object.assign(t, e()),
      Object.assign(d, e()),
      (l.value = !1),
      (c.value = []),
      (n.value = 0)
  }
  return {
    tableLoading: l,
    tableQueryData: t,
    searchData: d,
    tablePage: c,
    totalPages: n,
    hooks_getTableData: g,
    hooks_resetQueryTable: u,
    hooks_changeTablePageSize: v,
    hooks_sortTableByProps: f,
    hooks_handleSearch: w,
    hooks_resetAllData: F,
  }
}
const Qe = (e) => $e.get('/home-list/page', { params: e }),
  Ke = h('hr', null, null, -1),
  We = { class: 'flex-1 w-full' },
  Je = { class: 'btn-content' },
  lt = ie({
    __name: 'index',
    setup(e) {
      de()
      const o = S('tableRef'),
        t = S(!1),
        d = () => ({
          pageSize: 10,
          pageNum: 1,
          nickname: '',
          starEndDate: [],
          groupId: '',
          username: '',
          status: '',
          startDateTime: '',
          endDateTime: '',
        }),
        {
          tableQueryData: l,
          searchData: c,
          tableLoading: n,
          tablePage: g,
          totalPages: u,
          hooks_sortTableByProps: f,
          hooks_getTableData: v,
          hooks_resetQueryTable: w,
          hooks_handleSearch: F,
        } = He(d, o)
      ce(() => {
        p()
      })
      const p = async () => {
          n.value = !0
          try {
            const _ = await Qe(l)
            console.log('🚀 ~ getTablePage ~ res:', _),
              (g.value = _.data.records),
              (u.value = _.data.total * 1)
          } catch {
            console.log('getTablePage error')
          }
          n.value = !1
        },
        T = () => {
          console.log('编辑')
        },
        b = U({ pageNum: 1, createdTimeSort: null }),
        N = () => {
          f(b, null, p)
        }
      return (_, r) => {
        const H = Ee,
          A = fe,
          C = _e,
          Q = be,
          O = he,
          L = ve,
          K = we,
          x = Y,
          k = ye,
          W = Te,
          J = ke,
          X = Ye,
          Z = Oe,
          ee = Se
        return (
          y(),
          D(
            ge,
            null,
            [
              a(H),
              Ke,
              E(' 下面是组件的使用。首先是pagePack '),
              h('div', We, [
                a(
                  Z,
                  {
                    permissionName: 'USER_MANAGER_LIST_PAGE',
                    showToggleButton: '',
                    toggleValue: s(t),
                    'onUpdate:toggleValue':
                      r[11] || (r[11] = (m) => (z(t) ? (t.value = m) : null)),
                  },
                  {
                    searchForm: i(() => [
                      a(
                        O,
                        { gutter: 12 },
                        {
                          default: i(() => [
                            a(
                              C,
                              { span: 7 },
                              {
                                default: i(() => [
                                  a(
                                    A,
                                    {
                                      modelValue: s(c).username,
                                      'onUpdate:modelValue':
                                        r[0] ||
                                        (r[0] = (m) => (s(c).username = m)),
                                      placeholder: '请输入用户名',
                                      clearable: '',
                                    },
                                    null,
                                    8,
                                    ['modelValue'],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            a(
                              C,
                              { span: 7 },
                              {
                                default: i(() => [
                                  a(
                                    A,
                                    {
                                      modelValue: s(c).nickname,
                                      'onUpdate:modelValue':
                                        r[1] ||
                                        (r[1] = (m) => (s(c).nickname = m)),
                                      placeholder: _.$t(
                                        'systemManager.userManager.username',
                                      ),
                                      clearable: '',
                                    },
                                    null,
                                    8,
                                    ['modelValue', 'placeholder'],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            a(
                              C,
                              { span: 10 },
                              {
                                default: i(() => [
                                  a(
                                    Q,
                                    {
                                      modelValue: s(c).starEndDate,
                                      'onUpdate:modelValue':
                                        r[2] ||
                                        (r[2] = (m) => (s(c).starEndDate = m)),
                                      type: 'daterange',
                                      'range-separator': '-',
                                      'start-placeholder': _.$t(
                                        'systemManager.userManager.startDate',
                                      ),
                                      'end-placeholder': _.$t(
                                        'systemManager.userManager.endDate',
                                      ),
                                      'value-format': 'YYYY-MM-DD',
                                    },
                                    null,
                                    8,
                                    [
                                      'modelValue',
                                      'start-placeholder',
                                      'end-placeholder',
                                    ],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      s(t)
                        ? (y(),
                          V(
                            O,
                            { key: 0, gutter: 12, class: 'mt-3' },
                            {
                              default: i(() => [
                                a(
                                  C,
                                  { span: 7 },
                                  {
                                    default: i(() => [
                                      a(
                                        K,
                                        {
                                          modelValue: s(c).status,
                                          'onUpdate:modelValue':
                                            r[3] ||
                                            (r[3] = (m) => (s(c).status = m)),
                                          placeholder: _.$t(
                                            'systemManager.userManager.status',
                                          ),
                                        },
                                        {
                                          default: i(() => [
                                            a(
                                              L,
                                              {
                                                value: 1,
                                                label: _.$t(
                                                  'systemManager.userManager.normal',
                                                ),
                                              },
                                              null,
                                              8,
                                              ['label'],
                                            ),
                                            a(
                                              L,
                                              {
                                                value: 0,
                                                label: _.$t(
                                                  'systemManager.userManager.disabled',
                                                ),
                                              },
                                              null,
                                              8,
                                              ['label'],
                                            ),
                                          ]),
                                          _: 1,
                                        },
                                        8,
                                        ['modelValue', 'placeholder'],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                ),
                              ]),
                              _: 1,
                            },
                          ))
                        : M('', !0),
                    ]),
                    searchButton: i(() => [
                      a(
                        x,
                        {
                          type: 'primary',
                          onClick: r[4] || (r[4] = (m) => s(F)(p)),
                        },
                        { default: i(() => [E(' 搜索 ')]), _: 1 },
                      ),
                      a(
                        x,
                        { onClick: r[5] || (r[5] = (m) => s(w)(p)) },
                        {
                          default: i(() => [E(B(_.$t('page.reset')), 1)]),
                          _: 1,
                        },
                      ),
                    ]),
                    pageTable: i(() => [
                      h('div', Je, [
                        a(
                          x,
                          {
                            icon: s(pe),
                            type: 'primary',
                            onClick: r[6] || (r[6] = (m) => T()),
                          },
                          {
                            default: i(() => [E(B(_.$t('page.add')), 1)]),
                            _: 1,
                          },
                          8,
                          ['icon'],
                        ),
                      ]),
                      me(
                        (y(),
                        V(
                          J,
                          {
                            ref_key: 'tableRef',
                            ref: o,
                            height: '100%',
                            data: s(g),
                            stripe: '',
                            'header-cell-style': {
                              background: '#FAFAFA',
                              color: '#333',
                            },
                            onSortChange: N,
                          },
                          {
                            default: i(() => [
                              a(k, {
                                type: 'index',
                                width: '60',
                                label: '序号',
                                fixed: 'left',
                                align: 'center',
                              }),
                              a(
                                k,
                                {
                                  prop: 'username',
                                  label: _.$t(
                                    'systemManager.userManager.accountName',
                                  ),
                                  'show-overflow-tooltip': '',
                                  'min-width': '100',
                                },
                                null,
                                8,
                                ['label'],
                              ),
                              a(k, {
                                prop: 'nickname',
                                label: '姓名',
                                'show-overflow-tooltip': '',
                                'min-width': '100',
                              }),
                              a(k, {
                                prop: 'mobileNo',
                                label: '手机号',
                                'min-width': '130',
                                'show-overflow-tooltip': '',
                              }),
                              a(
                                k,
                                {
                                  prop: 'emailNo',
                                  label: _.$t('page.email'),
                                  'show-overflow-tooltip': '',
                                },
                                null,
                                8,
                                ['label'],
                              ),
                              a(
                                k,
                                {
                                  prop: 'createdTimeSort',
                                  sortable: 'custom',
                                  width: '150',
                                  label: '创建时间',
                                },
                                {
                                  default: i((m) => [
                                    h('span', null, B(m.row.createdTime), 1),
                                  ]),
                                  _: 1,
                                },
                              ),
                              a(
                                k,
                                { width: '210', label: '操作', fixed: 'right' },
                                {
                                  default: i((m) => [
                                    h('div', null, [
                                      a(
                                        W,
                                        {
                                          class: 'opreation-link',
                                          underline: !1,
                                          onClick: r[7] || (r[7] = (Xe) => T()),
                                        },
                                        {
                                          default: i(() => [E(' 编辑 ')]),
                                          _: 1,
                                        },
                                      ),
                                    ]),
                                  ]),
                                  _: 1,
                                },
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ['data'],
                        )),
                        [[ee, s(n)]],
                      ),
                    ]),
                    pagePagination: i(() => [
                      s(u) > 0
                        ? (y(),
                          V(
                            X,
                            {
                              key: 0,
                              total: s(u),
                              'onUpdate:total':
                                r[8] ||
                                (r[8] = (m) => (z(u) ? (u.value = m) : null)),
                              page: s(l).pageNum,
                              'onUpdate:page':
                                r[9] || (r[9] = (m) => (s(l).pageNum = m)),
                              limit: s(l).pageSize,
                              'onUpdate:limit':
                                r[10] || (r[10] = (m) => (s(l).pageSize = m)),
                              onPagination: p,
                            },
                            null,
                            8,
                            ['total', 'page', 'limit'],
                          ))
                        : M('', !0),
                    ]),
                    _: 1,
                  },
                  8,
                  ['toggleValue'],
                ),
              ]),
            ],
            64,
          )
        )
      }
    },
  })
export { lt as default }
