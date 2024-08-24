export function useThrottle<T>(
  callback: (...args: any[]) => T,
  delay: 300 // 默认延迟时间为 300 毫秒
): (...args: any[]) => void {
  let lastCall = 0
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  return (...args: any[]): void => {
    const now = Date.now()

    if (timeoutId !== null) {
      clearTimeout(timeoutId)
      timeoutId = null
    }

    if (now - lastCall >= delay) {
      callback(...args)
      lastCall = now
    } else {
      timeoutId = setTimeout(() => {
        callback(...args)
        lastCall = Date.now()
        timeoutId = null
      }, delay - (now - lastCall))
    }
  }
}
