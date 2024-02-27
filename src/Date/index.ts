// 声明options
export interface DateToChineseOptions {
  dateString: string | Date
  format?: string // 格式化
  chinese?: boolean // 是否转换为中文
  symbol?: string // 分割默认为'-'
  add0?: boolean // 是否补0
}

/**
 * 日期转换
 * @param {*} dateString
 * @returns
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

  let year, month, day, hours, minutes, seconds
  year = dateObject.getFullYear()

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

  let formattedString = ''
  const arr = []
  // YYYYY-MM-DD HH-MM-SS
  if (format?.includes('YYYY'))
    arr.push({ value: year, unit: chinese ? '年' : symbol })

  if (format?.includes('MM'))
    arr.push({ value: month, unit: chinese ? '月' : symbol })

  if (format?.includes('DD'))
    arr.push({ value: day, unit: chinese ? '日' : '  ' })

  if (format?.includes('HH'))
    arr.push({ value: hours, unit: chinese ? '时' : ':' })

  if (format?.includes('mm'))
    arr.push({ value: minutes, unit: chinese ? '分' : ':' })

  if (format?.includes('ss'))
    arr.push({ value: seconds, unit: chinese ? '秒' : symbol })

  formattedString = arr.map(item => item.value + item.unit).join('')

  // 删除最后一个分隔符
  if (!chinese && (format?.includes('mm') || format?.includes('ss')))
    formattedString = formattedString.slice(0, -1)
  // 删除日后面的分隔符
  if (format?.includes('DD')) formattedString = formattedString.replace(' ', '')
  return formattedString
}
