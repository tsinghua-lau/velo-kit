export function useDebounce<T>(
  callback: (...args: any[]) => T,
  delay = 300
): (...args: any[]) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null

  return (...args: any[]): void => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      callback(...args)
      timeoutId = null
    }, delay)
  }
}
