import { describe, expect, it, vi } from 'vitest'
import { useThrottle } from '../src'

describe('useThrottle', () => {
  it('should throttle the callback', () => {
    vi.useFakeTimers() // 使用虚拟定时器

    const callback = vi.fn() // 创建一个模拟函数
    const throttledFn = useThrottle(callback, 300)

    // 第一次调用，应该立即执行
    throttledFn('first call')
    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith('first call')

    //  100ms后调用，应该被忽略
    vi.advanceTimersByTime(100)
    throttledFn('second call')
    expect(callback).toHaveBeenCalledTimes(1) // 仍然只执行了一次

    // 200ms后（总共300ms）调用，应该再次执行
    vi.advanceTimersByTime(200)
    throttledFn('third call')
    expect(callback).toHaveBeenCalledTimes(2)
    expect(callback).toHaveBeenCalledWith('second call')

    // 再次快进时间，确保未执行新的调用
    vi.advanceTimersByTime(100)
    expect(callback).toHaveBeenCalledTimes(2) // 仍然只执行了两次

    vi.useRealTimers() // 恢复真实的定时器
  })

  it('should schedule a call when within throttle limit', () => {
    vi.useFakeTimers()

    const callback = vi.fn()
    const throttledFn = useThrottle(callback, 300)

    throttledFn('first call')
    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith('first call')

    // 在200ms时调用，应该在300ms后执行
    vi.advanceTimersByTime(200)
    throttledFn('second call')
    expect(callback).toHaveBeenCalledTimes(1) // 此时 callback 不应该执行

    vi.advanceTimersByTime(300) // 快进到300ms，应该执行第二次调用
    expect(callback).toHaveBeenCalledTimes(2)
    expect(callback).toHaveBeenCalledWith('second call')

    vi.useRealTimers()
  })

  it('should only execute the last scheduled call within throttle limit', () => {
    vi.useFakeTimers()

    const callback = vi.fn()
    const throttledFn = useThrottle(callback, 300)

    throttledFn('first call')
    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith('first call')

    // 连续调用，只有最后一个在300ms后执行
    throttledFn('second call')
    throttledFn('third call')
    throttledFn('fourth call')

    vi.advanceTimersByTime(300)
    expect(callback).toHaveBeenCalledTimes(2) // 应该只执行两次
    expect(callback).toHaveBeenCalledWith('fourth call') // 最后一次调用的参数

    vi.useRealTimers()
  })
})
