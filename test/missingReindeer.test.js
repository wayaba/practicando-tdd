import { describe, expect, it } from 'vitest'

const missingReindeer = (ids) => {
  if (!Array.isArray(ids)) throw new Error('Param must be array')

  if (
    !ids.every((id) => {
      return typeof id === 'number'
    })
  ) {
    throw new Error('Array must contain just numbers')
  }

  let missingId = null
  ids
    .sort((a, b) => a - b)
    .every((id, index) => {
      if (id !== index) {
        missingId = index
        return false
      }
      return true
    })
  return missingId != null ? missingId : ids.length
}

describe('missingReindeer', () => {
  it('missingReindeer must be a function', () => {
    expect(typeof missingReindeer).toBe('function')
  })
  it('should throw an specific message if array is not provided as parameter', () => {
    expect(() => missingReindeer()).toThrow('Param must be array')
  })
  it('should throw an specific message if array has not only numbers', () => {
    const list = ['a', 1]
    expect(() => missingReindeer(list)).toThrow(
      'Array must contain just numbers'
    )
  })
  it('should return 1 if parameter is [0]', () => {
    const list = [0]
    expect(missingReindeer(list)).toBe(1)
  })

  it('should return 1 if parameter is [0, 6, 7, 2, 3]', () => {
    const list = [0, 6, 7, 2, 3]
    expect(missingReindeer(list)).toBe(1)
  })
})
