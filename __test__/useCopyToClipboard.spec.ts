import { describe, expect, it, vi } from 'vitest'
import { useCopyToClipboard } from '../src' // 请替换为你的文件路径
describe('useCopyToClipboard', () => {
  // it('should copy text to clipboard using modern API', async () => {
  //   // 模拟 navigator.clipboard.writeText
  //   const writeTextMock = vi.fn().mockResolvedValueOnce(undefined)
  //   Object.assign(navigator, { clipboard: { writeText: writeTextMock } })
  //
  //   const text = 'Hello, World!'
  //   const result = await useCopyToClipboard(text)
  //
  //   expect(writeTextMock).toHaveBeenCalledWith(text)
  //   expect(result).toBe(true)
  // })

  it('should fall back to execCommand for copying text', async () => {
    // 模拟 execCommand
    const execCommandMock = vi.fn().mockReturnValueOnce(true)
    document.execCommand = execCommandMock

    // 模拟不支持 clipboard API
    Object.assign(navigator, { clipboard: undefined })

    const text = 'Hello, World!'
    const result = await useCopyToClipboard(text)

    expect(execCommandMock).toHaveBeenCalledWith('copy')
    expect(result).toBe(true)
  })

  it('should return false if copying fails', async () => {
    // 模拟 execCommand 返回失败
    const execCommandMock = vi.fn().mockReturnValueOnce(false)
    document.execCommand = execCommandMock

    Object.assign(navigator, { clipboard: undefined })

    const text = 'Hello, World!'
    const result = await useCopyToClipboard(text)

    expect(execCommandMock).toHaveBeenCalledWith('copy')
    expect(result).toBe(false)
  })

  // it('should handle clipboard API errors gracefully', async () => {
  //   // 模拟 clipboard API 报错
  //   const writeTextMock = vi.fn().mockRejectedValueOnce(new Error('Clipboard API error'))
  //   Object.assign(navigator, { clipboard: { writeText: writeTextMock } })
  //
  //   const text = 'Hello, World!'
  //   const result = await useCopyToClipboard(text)
  //
  //   expect(writeTextMock).toHaveBeenCalledWith(text)
  //   expect(result).toBe(false)
  // })
})
