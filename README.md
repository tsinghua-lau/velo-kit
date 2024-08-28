# velo-kit

## Description
Lightweight method library.

## Install

::: code-group

```sh [npm]
$ npm i velo-kit
```

```sh [pnpm]
$ pnpm add velo-kit
```

```sh [yarn]
$ yarn add velo-kit
```
:::

## Usage

```ts
import { useFormatDate } from 'velo-kit'
import type { useFormatDateOptions } from 'velo-kit'

const options: useFormatDateOptions = {
  dateString: new Date('2024-02-27 12:34:56'),
  format: 'YYYY-MM-DD HH-mm-ss',
  chinese: true,
}

const result = useFormatDate(options)
// '2024年02月27日12时34分56秒'
```

## More
[OnlineDocument](https://tsinghua-lau.github.io/velo-kit/)




