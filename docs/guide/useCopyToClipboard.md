# useCopyToClipboard （一键复制）

```ts
import { useCopyToClipboard } from 'velo-kit'

useCopyToClipboard('Hello, World!')
  .then(success => {
    if (success) {
      console.log('Copy operation succeeded.')
    } else {
      console.log('Copy operation failed.')
    }
  })
  .catch(err => {
    console.error('Error during copy operation:', err)
  })

// 复制后返回true，否则返回false
```

## options参数
| 参数 | 说明 | 类型 | 默认值 |
| --- |----|--|-----|
| text | 复制文本 | string | - |
```
