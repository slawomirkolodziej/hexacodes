import { hueRandomizeRange, saturationRandomizeRange, lightnessRandomizeRange } from '../constants/hslRandomizeRanges'
import { easyLevelMultiplier, hardLevelMultiplier } from '../constants/levelsMultiplier'

export default class Color {

  constructor(color, prevColor) {
    if(prevColor) {
       do {
        this.color = this.getRandomColor()
      } while (this.getCSSHsl() === prevColor.getCSSHsl())
    } else if (!color) {
      this.color = this.getRandomColor()
    } else {
      this.color = color
    }
  }

  getCSSHex() {
    const [r, g, b] = this.hslToHex(...this.color)
    return `#${r}${g}${b}`
  }

  getHex() {
    return this.hslToHex(...this.color)
  }

  getCSSHsl() {
    const [h, s, l] = this.color
    return `hsl(${h}, ${s}%, ${l}%)`
  }

  getHsl() {
    return [...this.color]
  }

  getRandomColor() {
    return [
      this.getRandomNumber(...hueRandomizeRange),
      this.getRandomNumber(...saturationRandomizeRange),
      this.getRandomNumber(...lightnessRandomizeRange)
    ]
  }

  getSimilarColors(difficulty) {
    const [h, s, l] = this.color
    const multiplier = difficulty === 'hard' ? hardLevelMultiplier : easyLevelMultiplier
    
    const shiftNumberWithinRange = (number, offset, min, max) => {
      let shiftedNumber = number + offset

      if (shiftedNumber > max) return shiftedNumber - max + min
      else if (shiftedNumber < min) return max - (min - shiftedNumber)

      return shiftedNumber
    }

    const getRandomNumberWithinRange = (min, max, range) => {
      const { from, to } = range

      if(from > to) {
        const randomRangeIndicator = this.getRandomNumber(0, 1)
        if(randomRangeIndicator === 0) return this.getRandomNumber(from, max)
        else return this.getRandomNumber(min, to)
      }

      return this.getRandomNumber(from, to)
    }

    const calculateRanges = (center, min, max, multiplier) => {
      const offset = (multiplier * (max - min))
      const firstRangeStart = shiftNumberWithinRange(center, offset, min, max)
      const secondRangeStart = shiftNumberWithinRange(center, -offset, min, max)

      const ranges = [
        {
          from: firstRangeStart,
          to: shiftNumberWithinRange(firstRangeStart, offset * 2, min, max)
        },
        {
          from: shiftNumberWithinRange(secondRangeStart, -offset * 2, min, max),
          to: secondRangeStart
        }
      ]
      
      return ranges
    }

    const hueRanges = calculateRanges(h, ...hueRandomizeRange, multiplier)
    const saturationRanges = calculateRanges(s, ...saturationRandomizeRange, multiplier)
    const lightnessRanges = calculateRanges(l, ...lightnessRandomizeRange, multiplier)

    return [
      new Color([
        getRandomNumberWithinRange(...hueRandomizeRange, hueRanges[0]),
        getRandomNumberWithinRange( ...saturationRandomizeRange, saturationRanges[0]),
        getRandomNumberWithinRange(...lightnessRandomizeRange, lightnessRanges[0])
      ]),
      new Color([
        getRandomNumberWithinRange(...hueRandomizeRange, hueRanges[1]),
        getRandomNumberWithinRange( ...saturationRandomizeRange, saturationRanges[1]),
        getRandomNumberWithinRange(...lightnessRandomizeRange, lightnessRanges[1])
      ])
    ]
  }

  getRandomNumber(min, max) {
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
    }
    return [toHex(r), toHex(g), toHex(b)]
  }
}