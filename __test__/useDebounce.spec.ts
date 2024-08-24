import { describe, expect, it, vi } from 'vitest'
import { useDebounce } from '../src'
describe('useDebounce', () => {
  it('should debounce the callback', () => {
    vi.useFakeTimers() // 使用虚拟定时器

    const callback = vi.fn() // 创建一个模拟函数
    const debounceFn = useDebounce(callback, 200)

    // 调用多次 debounce 函数
    debounceFn('first call')
    debounceFn('second call')
    debounceFn('third call')

    // 快进到150ms，callback不应该被调用
    vi.advanceTimersByTime(150)
    expect(callback).not.toHaveBeenCalled()

    // 再快进50ms，总时间达到200ms
    vi.advanceTimersByTime(50)
    expect(callback).toHaveBeenCalledTimes(1) // 确保callback仅调用一次
    expect(callback).toHaveBeenCalledWith('third call') // callback接收到最后一次调用的参数

    vi.useRealTimers() // 恢复真实的定时器
  })

  it('should reset debounce when called multiple times', () => {
    vi.useFakeTimers()

    const callback = vi.fn()
    const debounceFn = useDebounce(callback, 200)

    debounceFn('first call')
    vi.advanceTimersByTime(100)
    debounceFn('second call')
    vi.advanceTimersByTime(100)
    debounceFn('third call')

    // 确保在200ms内不会调用callback
    expect(callback).not.toHaveBeenCalled()

    vi.advanceTimersByTime(200)
    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith('third call')

    vi.useRealTimers()
  })
})
