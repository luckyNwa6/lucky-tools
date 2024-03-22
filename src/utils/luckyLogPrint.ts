const isArray = function (obj: any): boolean {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

const luckyLogPrint = () => {}

luckyLogPrint.typeColor = function (type: string) {
  let color = ''
  switch (type) {
    case 'primary':
      color = '#2d8cf0'
      break
    case 'success':
      color = '#19be6b'
      break
    case 'info':
      color = '#909399'
      break
    case 'warn':
      color = '#ff9900'
      break
    case 'error':
      color = '#f03f14'
      break
    case 'pink':
      color = '#EE82EE'
      break
    default:
      color = '#35495E'
      break
  }
  return color
}

luckyLogPrint.print = function (type = 'default', text: any, back = false) {
  if (typeof text === 'object') {
    // 如果是對象則調用打印對象方式
    isArray(text) ? console.table(text) : console.dir(text)
    return
  }
  if (back) {
    // 如果是打印帶背景圖的
    console.log(`%c ${text} `, `background:${luckyLogPrint.typeColor(type)}; padding: 2px; border-radius: 4px; color: #fff;`)
  } else {
    console.log(
      `%c ${text} `,
      `border: 1px solid ${luckyLogPrint.typeColor(type)};
        padding: 2px; border-radius: 4px;
        color: ${luckyLogPrint.typeColor(type)};`
    )
  }
}

luckyLogPrint.printBack = function (type = 'primary', text: any) {
  this.print(type, text, true)
}

luckyLogPrint.pretty = function (type = 'primary', title: any, text: any) {
  if (typeof text === 'object') {
    console.group('Console Group', title)
    console.log(
      `%c ${title}`,
      `background:${luckyLogPrint.typeColor(type)};border:1px solid ${luckyLogPrint.typeColor(type)};
        padding: 1px; border-radius: 4px; color: #fff;`
    )
    isArray(text) ? console.table(text) : console.dir(text)
    console.groupEnd()
    return
  }
  console.log(
    `%c ${title} %c ${text} %c`,
    `background:${luckyLogPrint.typeColor(type)};border:1px solid ${luckyLogPrint.typeColor(type)};
      padding: 1px; border-radius: 4px 0 0 4px; color: #fff;`,
    `border:1px solid ${luckyLogPrint.typeColor(type)};
      padding: 1px; border-radius: 0 4px 4px 0; color: ${luckyLogPrint.typeColor(type)};`,
    'background:transparent'
  )
}

luckyLogPrint.blue = function (title: any, ...text: any) {
  text.forEach((t: any) => this.pretty('primary', title, t))
}

luckyLogPrint.green = function (title: any, ...text: any) {
  text.forEach((t: any) => this.pretty('success', title, t))
}

luckyLogPrint.yellow = function (title: any, ...text: any) {
  text.forEach((t: any) => this.pretty('warn', title, t))
}

luckyLogPrint.red = function (title?: any, ...text: any) {
  text.forEach((t: any) => this.pretty('error', title, t))
}

luckyLogPrint.white = function (title: any, ...text: any) {
  text.forEach((t: any) => this.pretty('info', title, t))
}
luckyLogPrint.star = function (con: any, con1?: any) {
  if (typeof con === 'object') {
    console.group('⭐️⭐️⭐️ ~ res：', con)
    // isArray(con) ? console.table(con) : console.dir(con)
    console.groupEnd()
    return
  }
  if (con1 !== undefined) {
    con += con1
  }
  console.log(
    `%c  ${con}  `,
    `background:${luckyLogPrint.typeColor('pink')};border:2px solid #8A2BE2;
      padding: 1px; border-radius: 4px; color: #fff;`
  )
}
export default luckyLogPrint
