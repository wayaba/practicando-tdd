import { describe, expect, it } from 'vitest'

const checkSledJump = (heights) => {
  if (!Array.isArray(heights)) throw new Error('Param must be array')

  if (
    !heights.every((id) => {
      return typeof id === 'number'
    })
  ) {
    throw new Error('Array must contain just numbers')
  }

  if (heights.length < 3) {
    throw new Error('Array must contain at least 3 numbers')
  }

  let currentValue = -1
  let firstDecrementalIndex = null
  heights.every((value, index) => {
    if (value > currentValue) {
      currentValue = value
    } else {
      firstDecrementalIndex = index
      return false
    }
    return true
  })

  let isSecuencial = true
  heights.slice(firstDecrementalIndex).every((value, index) => {
    if (value < currentValue) {
      currentValue = value
    } else {
      isSecuencial = false
    }
    return isSecuencial
  })

  return isSecuencial
}

describe('checkSledJump', () => {
  it('checkSledJump must be a function', () => {
    expect(typeof checkSledJump).toBe('function')
  })
  it('should throw an specific message if array is not provided as parameter', () => {
    expect(() => checkSledJump()).toThrow('Param must be array')
  })
  it('should throw an specific message if array has not only numbers', () => {
    const list = ['a', 1]
    expect(() => checkSledJump(list)).toThrow('Array must contain just numbers')
  })
  it('should thrown an specific message if array has less than 3 numbers', () => {
    const list = [0]
    expect(() => checkSledJump(list)).toThrow(
      'Array must contain at least 3 numbers'
    )
  })

  it('should return false if parameter is [0, 1, 7, 2, 3]', () => {
    const list = [0, 1, 7, 2, 3]
    expect(checkSledJump(list)).toBe(false)
  })

  it('should return false if parameter is [2, 4, 4, 6, 2]', () => {
    const list = [2, 4, 4, 6, 2]
    expect(checkSledJump(list)).toBe(false)
  })

  it('should return false if parameter is [0, 3, 2, 1]', () => {
    const list = [0, 3, 2, 1]
    expect(checkSledJump(list)).toBe(true)
  })

  it('should return false if parameter is [0, 1, 2, 3]', () => {
    const list = [0, 1, 2, 3]
    expect(checkSledJump(list)).toBe(false)
  })
})
