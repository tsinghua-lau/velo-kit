# formatDate（日期格式化）
```ts
import { formatDate } from 'velo-kit'
import type { formatDateOptions } from 'velo-kit'

const options = {
  dateString: new Date('2024-02-27 12:34:56'),
  format: 'YYYY-MM-DD HH-mm-ss',
  chinese: true,
}

const result = formatDate(options)
// '2024年02月27日12时34分56秒'
```

## options参数
| 参数 | 说明    | 类型 | 默认值                |
| --- |-------| --- |--------------------|
| dateString | 日期    | Date | -                  |
| format | 格式化   | string | 'YYYY-MM-DD HH:mm:ss' |
| chinese | 是否中文  | boolean | false              |
| symbol | 分隔符   | string | -                  |
| add0 | 是否添加0 | boolean | true                   |

