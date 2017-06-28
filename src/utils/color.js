import { shuffle } from 'lodash'

export default class Color {

  constructor(color, prevColor) {
    if(!color) {
      do {
        this.color = this.getRandomColor()
      } while (this.color === prevColor)
    }
    else this.color = color
  }

  getCSSHex() {
    return(this.hslToHex(...this.color)) 
  }

  getCSSHsl() {
    const [h, s, l] = this.color
    return `hsl(${h}, ${s}%, ${l}%)`
  }

  getHsl() {
    return [...this.color]
  }

  getRandomColor() {
    return [this.getRandomNumber(0, 360), this.getRandomNumber(0, 100), this.getRandomNumber(0, 100)]
  }

  getSimilarColor(difficulty, exclude = []) {
    const [h, s, l] = this.color
    let offset

    switch(difficulty) {
      case 'easy':
        offset = 30
        break
      case 'medium':
        offset = 20
        break
      case 'hard':
        offset = 10
        break
      default:
        offset = 30
    }

    console.log(offset)
    
    const generateRange = (center, max, offset) => {
      let from = center - (offset * max / 100)
      let to = center + (offset * max / 100)

      if(from < 0) from += max
      if(to > max) to -= max

      return [from, to]
    }
    return new Color([
      this.getRandomNumber(0 ,360, true, ...generateRange(h, 360, offset)), 
      h, 
      l
    ])
  }

  getRandomNumber(min, max, outside = false, from, to) {
    if(outside) {
      if(from > to) [from, to] = [to, from]
      
      return shuffle([
        Math.floor(Math.random() * (from - min + 1)) + min,
        Math.floor(Math.random() * (max - to + 1)) + to
      ])[0]
    }

    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  hslToHex(h, s, l) {
    h /= 360
    s /= 100
    l /= 100
    let r, g, b
    if (s === 0) {
      r = g = b = l
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1
        if (t > 1) t -= 1
        if (t < 1 / 6) return p + (q - p) * 6 * t
        if (t < 1 / 2) return q
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
        return p
      }
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s
      const p = 2 * l - q
      r = hue2rgb(p, q, h + 1 / 3)
      g = hue2rgb(p, q, h)
      b = hue2rgb(p, q, h - 1 / 3)
    }
    const toHex = x => {
      const hex = Math.round(x * 255).toString(16)
      return hex.length === 1 ? '0' + hex : hex
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`
  }
}