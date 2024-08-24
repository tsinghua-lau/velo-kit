# useDebounce（防抖）

```ts
import { useDebounce } from 'velo-kit'

const clickEvent = useDebounce(() => {
  // ...
}, delay)

// 300毫秒内只会执行一次
```

## options参数
| 参数 | 说明 | 类型 | 默认值 |
| --- |----|--|-----|
| fn | 函数 | function | - |
| delay | 延迟时间 | number | 300 |

