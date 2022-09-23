import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuzz', () => {
  // test desactivado porque posteriormente vi que es redundante
  //   it('should be a function', () => {
  //     expect(typeof fizzbuzz).toBe('function')
  //   })

  it('should throw if number is not provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('should throw an specific message if number is not provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow('parameter provided must be a number')
  })

  it('should throw an specific message if not a number is provided as parameter', () => {
    expect(() => fizzbuzz(NaN)).toThrow('parameter provided must be a number')
  })
  it('should return 1 if parameter provided is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })
  it('should return 2 if parameter provided is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })
  it('should return "fizz" if parameter provided is 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })
  it('should return "fizz" if parameter provided is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(21)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
  })
  it('should return "buzz" if parameter provided is 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
  })
  it('should return "buzz" if parameter provided is multiple of 5', () => {
    expect(fizzbuzz(20)).toBe('buzz')
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(65)).toBe('buzz')
  })
  it('should return "fizzbuzz" if parameter provided is multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })
})
