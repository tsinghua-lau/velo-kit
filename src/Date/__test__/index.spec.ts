import { describe, expect, it } from 'vitest'
import type { DateToChineseOptions } from '../index'
import { dateToChinese } from '../index'

describe('dateToChinese function', () => {
  it('should return formatted date string in default format', () => {
    const options: DateToChineseOptions = {
      dateString: '12',
    }

    const result = dateToChinese(options)
    expect(result).toBe('')
  })

  it('should return formatted date string with Chinese units', () => {
    const options: DateToChineseOptions = {
      dateString: new Date('2024-02-27 12:34:56'),
      format: 'YYYY-MM-DD HH-mm-ss',
      chinese: true,
    }
    const result = dateToChinese(options)
    expect(result).toBe('2024年02月27日12时34分56秒')
  })

  it('should return formatted date string with custom format and symbol', () => {
    const options: DateToChineseOptions = {
      dateString: '2024-02-27 12:34:56',
      format: 'YYYY-MM-DD HH-mm-ss',
      symbol: '/',
    }
    const result = dateToChinese(options)

    expect(result).toBe('2024/02/27 12:34:56')
  })

  it('should return empty string for invalid date string', () => {
    const options: DateToChineseOptions = {
      dateString: 'invalid-date-string',
    }
    const result = dateToChinese(options)
    expect(result).toBe('')
  })

  // Add more test cases as needed based on your requirements
})
