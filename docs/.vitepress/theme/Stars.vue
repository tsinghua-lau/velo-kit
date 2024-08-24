<script setup>
import { useData } from 'vitepress'
import { nextTick, ref, watch } from 'vue'

const { isDark } = useData()

const starsRef = ref(null)

const arr = []
const starCount = 800

const rains = []
const rainCount = 20

let context

const init = () => {
  const stars = starsRef.value
  stars.width = window.innerWidth
  stars.height = window.innerHeight
  context = stars.getContext('2d')
}

class Star {
  constructor() {
    this.x = window.innerWidth * Math.random()
    this.y = 5000 * Math.random()
    this.text = '.'
    this.getColor()
  }

  getColor() {
    const _r = Math.random()
    this.color = _r < 0.5 ? '#333' : 'white'
  }

  draw() {
    context.fillStyle = this.color
    context.fillText(this.text, this.x, this.y)
  }
}

const drawMoon = () => {
  const moon = new Image()
  moon.src = './moon.jpg'
  moon.onload = () => context.drawImage(moon, -5, -10)
}

const playStars = () => {
  arr.forEach(star => {
    star.getColor()
    star.draw()
  })
  setTimeout(playStars, 100)
}

class MeteorRain {
  constructor() {
    this.init()
  }

  init() {
    this.x = Math.random() * window.innerWidth
    this.y = Math.random() * window.innerHeight
    this.alpha = 1
    this.getRandomColor()
    this.length = Math.random() * 60 + 10 // Math.ceil(x)
    this.angle = 130
    this.speed = Math.random() * 2 + 1 // 流星的速度
    const cos = Math.cos((this.angle * Math.PI) / 180)
    const sin = Math.sin((this.angle * Math.PI) / 180)
    this.width = this.length * cos
    this.height = this.length * sin
    this.offset_x = this.speed * cos
    this.offset_y = this.speed * sin
  }

  getRandomColor() {
    const a = Math.ceil(255 - 240 * Math.random())
    this.color1 = `rgba(${a},${a},${a},1)`
    this.color2 = 'black'
  }

  countPos() {
    this.x -= this.offset_x
    this.y += this.offset_y
  }

  draw() {
    context.save()
    context.beginPath()
    context.lineWidth = 2
    context.globalAlpha = this.alpha
    const line = context.createLinearGradient(
      this.x,
      this.y,
      this.x + this.width,
      this.y - this.height
    )
    line.addColorStop(0, 'white')
    line.addColorStop(0.3, this.color1)
    line.addColorStop(0.6, this.color2)
    context.strokeStyle = line
    context.moveTo(this.x, this.y)
    context.lineTo(this.x + this.width, this.y - this.height)
    context.closePath()
    context.stroke()
    context.restore()
  }

  move() {
    const x = this.x + this.width - this.offset_x
    const y = this.y - this.height
    context.clearRect(x - 3, y - 3, this.offset_x + 5, this.offset_y + 5)
    this.countPos()
    this.alpha -= 0.002
    this.draw()
  }
}

const playRains = () => {
  rains.forEach((rain, index) => {
    rain.move()
    if (rain.y > window.innerHeight) {
      context.clearRect(rain.x, rain.y - rain.height, rain.width, rain.height)
      rains[index] = new MeteorRain()
    }
  })
  setTimeout(playRains, 20)
}

// 监听isDark变化
watch(
  () => isDark.value,
  value => {
    nextTick(() => {
      if (!value) {
      // 清除画布
        if (context) {
          context.clearRect(0, 0, window.innerWidth, window.innerHeight)
        }
        // 清空 stars 和 rains 数组，以避免重复绘制
        arr.length = 0
        rains.length = 0
        return
      }
      init()

      for (let i = 0; i < starCount; i++) {
        const star = new Star()
        star.draw()
        arr.push(star)
      }

      for (let i = 0; i < rainCount; i++) {
        const rain = new MeteorRain()
        rain.draw()
        rains.push(rain)
      }

      drawMoon()
      playStars()
      playRains()
    })
  },
  { immediate: true }
)
</script>

<template>
  <div id="stars-render">
    <canvas ref="starsRef" />
  </div>
</template>

<style scoped>
#stars-render {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
