# useThrottle （截流）

```ts
import { useThrottle } from 'velo-kit'

const throttledFunction = useThrottle((msg) => {
  console.log(msg)
}, 500)

throttledFunction('Message 1')
throttledFunction('Message 2')
throttledFunction('Message 3')
// 只有第一个调用会立即执行，其余的将在500ms后执行
```

## options参数
| 参数 | 说明 | 类型 | 默认值 |
| --- |----|--|-----|
| fn | 函数 | function | - |
| delay | 延迟时间 | number | 300 |

