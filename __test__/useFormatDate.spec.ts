import { describe, expect, it } from 'vitest'
import type { useFormatDateOptions } from '../src'
import { useFormatDate } from '../src'

describe('useFormatDate function', () => {
  it('should return formatted date string in default format', () => {
    const options: useFormatDateOptions = {
      dateString: '12',
    }

    const result = useFormatDate(options)
    expect(result).toBe('')
  })

  it('should return formatted date string with Chinese units', () => {
    const options: useFormatDateOptions = {
      dateString: new Date('2024-02-27 12:34:56'),
      format: 'YYYY-MM-DD HH-mm-ss',
      chinese: true,
    }
    const result = useFormatDate(options)
    expect(result).toBe('2024年02月27日12时34分56秒')
  })

  it('should return formatted date string with custom format and symbol', () => {
    const options: useFormatDateOptions = {
      dateString: '2024-02-27 12:34:56',
      format: 'YYYY-MM-DD HH-mm-ss',
      symbol: '/',
    }
    const result = useFormatDate(options)

    expect(result).toBe('2024/02/27 12:34:56')
  })

  it('should return empty string for invalid date string', () => {
    const options: useFormatDateOptions = {
      dateString: 'invalid-date-string',
    }
    const result = useFormatDate(options)
    expect(result).toBe('')
  })

  // Add more test cases as needed based on your requirements
})
