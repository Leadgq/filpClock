import dayjs from 'dayjs'

export type OptionsType = {
  el: string
  type: 'clock' | 'timing'
  timing: Partial<Record<dayjs.ManipulateType, number>>
}

export default class FlipNumber {
  protected nums: number[] = []
  protected endTime: dayjs.Dayjs | undefined
  constructor(protected options: OptionsType) {
    this.options = Object.assign({ type: 'clock', style: 'hd' }, options)
  }
  init() {
    this.endTime = dayjs()
    if (this.options.type != 'clock') {
      Object.entries(this.options.timing).forEach(
        ([type, num]) => (this.endTime = this.endTime!.add(num, type as dayjs.ManipulateType))
      )
    }
  }
  //获取下一次的渲染数字
  getNextNum(index: number) {
    return this.options.type == 'clock'
      ? this.getClockNextNums(index)
      : this.getNextTimingNums(index)
  }

  getNums() {
    this.options.type == 'clock' ? this.getClockNums() : this.getTimingNums()
  }

  //倒计时的数字
  getTimingNums() {
    this.nums = this.getDiffTime(this.endTime)
      .replaceAll(/:/g, '')
      .split('')
      .map((n) => +n)
  }

  getDiffTime(time) {
    let hour = time.diff(dayjs(), 'hour')
    let minute = time.diff(dayjs().add(hour, 'hour'), 'minute')
    let seconds = time.diff(dayjs().add(hour, 'hour').add(minute, 'minute'), 'second')
    hour = hour > 9 ? hour : '0' + hour
    minute = minute > 9 ? minute : '0' + minute
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${hour}:${minute}:${seconds}`
  }

  //获取时间的数字
  getClockNums() {
    this.nums = dayjs()
      .format('HHmmss')
      .split('')
      .map((n) => +n)
  }

  //定时器数字
  getNextTimingNums(index: number) {
    const before = this.nums[index]
    let after = before - 1
    if (index % 2) {
      // 小时
      if (index === 1 && this.nums.length === 6) {
        after = 0
      } else {
        after = after < 0 ? 9 : after
      }
    } else {
      if (index === 1 && this.nums.length === 4) {
        after = 0
      } else {
        after = after < 0 ? 5 : after
      }
    }
    return {
      before,
      after
    }
  }

  //时间的数字
  getClockNextNums(index: number) {
    const before = this.nums[index]
    let after = before + 1
    if (index % 2) {
      after = after > 9 ? 0 : after
    } else {
      after = after > 6 ? 0 : after
    }
    return { before, after }
  }
}
