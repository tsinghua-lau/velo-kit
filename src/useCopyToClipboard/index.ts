export const useCopyToClipboard = (text: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (navigator.clipboard && window.isSecureContext) {
      // 现代浏览器中的复制方法
      navigator.clipboard.writeText(text)
        .then(() => {
          console.log('Text successfully copied to clipboard!')
          resolve(true)
        })
        .catch(err => {
          console.error('Failed to copy text to clipboard:', err)
          reject(new Error('Failed to copy text to clipboard'))
        })
    } else {
      // 回退方案
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed' // 防止页面滚动
      textArea.style.top = '0'
      textArea.style.left = '0'
      textArea.style.opacity = '0' // 保证在页面上不可见
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()

      try {
        const successful = document.execCommand('copy')
        const msg = successful ? 'successful' : 'unsuccessful'
        console.log(`Fallback: Copying text command was ${msg}`)
        resolve(successful)
      } catch (err) {
        console.error('Fallback: Unable to copy', err)
        reject(new Error('Fallback: Unable to copy'))
      } finally {
        document.body.removeChild(textArea)
      }
    }
  })
}
