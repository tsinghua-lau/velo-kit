// 声明options
export interface DateToChineseOptions {
  dateString: string | Date
  format?: string // 格式化
  chinese?: boolean // 是否转换为中文
  symbol?: string // 分割默认为'-'
  add0?: boolean // 是否补0
}

interface MyObject {
  t: string
  value: number | string // assuming value is a number, adjust the type as needed
  unit: string
}

/**
 * 日期格式化转换
 * @param {Object} options 配置项
 * @param {String|Date} options.dateString 日期字符串或Date对象
 * @param {String} options.format 格式化
 * @param {Boolean} options.chinese 是否转换为中文
 * @param {String} options.symbol 分隔符，默认为'-'
 * @param {Boolean} options.add0 是否补0
 * @return  {String} 格式化后的日期字符串
 * @example
 * dateToChinese({
 *  dateString: '2021-01-01 12:00:00',
 * format: 'YYYY-MM-DD HH:mm:ss',
 * chinese: true,
 * symbol: '-',
 * add0: true
 * })
 * // 2021年01月01日 12时00分00秒
 */
export function dateToChinese(options: DateToChineseOptions) {
  const {
    dateString,
    format = 'YYYY-MM-DD HH:mm:ss',
    chinese,
    symbol = '-',
    add0 = true,
  } = options

  // 格式检查
  if (!(isNaN(dateString as any) && !isNaN(Date.parse(dateString as any)))) {
    if (!(dateString instanceof Date)) {
      return ''
    }
  }

  // 创建 Date 对象并解析日期字符串
  const dateObject = new Date(dateString)

  let month, day, hours, minutes, seconds
  const year = dateObject.getFullYear()

  // 获取年、月、日、小时和分钟
  if (!add0) {
    month = dateObject.getMonth() + 1 // 月份从0开始，需要加1
    day = dateObject.getDate()
    hours = dateObject.getHours()
    minutes = dateObject.getMinutes()
    seconds = String(dateObject.getSeconds()).padStart(2, '0')
  } else {
    month = String(dateObject.getMonth() + 1).padStart(2, '0') // 月份从0开始，需要加1，使用padStart添加0
    day = String(dateObject.getDate()).padStart(2, '0')
    hours = String(dateObject.getHours()).padStart(2, '0')
    minutes = String(dateObject.getMinutes()).padStart(2, '0')
    seconds = String(dateObject.getSeconds()).padStart(2, '0')
  }

  const arrs: MyObject[] = [
    { t: 'YYYY', value: year, unit: chinese ? '年' : symbol },
    { t: 'MM', value: month, unit: chinese ? '月' : symbol },
    { t: 'DD', value: day, unit: chinese ? '日' : '  ' },
    { t: 'HH', value: hours, unit: chinese ? '时' : ':' },
    { t: 'mm', value: minutes, unit: chinese ? '分' : ':' },
    { t: 'ss', value: seconds, unit: chinese ? '秒' : symbol },
  ]

  const arr: MyObject[] = []

  arrs.forEach(it => {
    if (format.includes(it.t)) {
      arr.push(it)
    }
  })

  let formattedString = arr.map(item => item.value + item.unit).join('')

  // 删除最后一个分隔符
  if (!chinese && (format?.includes('mm') || format?.includes('ss')))
    formattedString = formattedString.slice(0, -1)
  // 删除日后面的分隔符
  if (format?.includes('DD')) formattedString = formattedString.replace(' ', '')
  return formattedString
}
