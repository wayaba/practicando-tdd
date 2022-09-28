import { describe, expect, it } from 'vitest'

const decodeNumber = (symbols) => {
  if (symbols === undefined) throw new Error('must have parameter')
  if (typeof symbols !== 'string') throw new Error('parameter must be string')

  const symbolsMapping = { '.': 1, ',': 5, ':': 10, ';': 50, '!': 100 }

  return symbols.split('').reduce((prevValue, currentValue, index, array) => {
    const value = symbolsMapping[array[index]]
    const nextValue =
      array[index + 1] !== undefined ? symbolsMapping[array[index + 1]] : 0

    return value < nextValue
      ? prevValue - symbolsMapping[currentValue]
      : prevValue + symbolsMapping[currentValue]
  }, 0)
}

describe('decodeNumber', () => {
  it('decodeNumber must be a function', () => {
    expect(typeof decodeNumber).toBe('function')
  })

  it('decodeNumber must throw an message if there is no paramter', () => {
    expect(() => decodeNumber()).toThrow('must have parameter')
  })

  it('decodeNumber must throw an message if parameter is not string', () => {
    expect(() => decodeNumber(1)).toThrow('parameter must be string')
  })

  it('decodeNumber must return 3 when paramter is "..." ', () => {
    expect(decodeNumber('...')).toBe(3)
  })

  it('decodeNumber must return 8 when paramter is ",..." ', () => {
    expect(decodeNumber(',...')).toBe(8)
  })

  it('decodeNumber must return NaN when paramter is "R,..W" ', () => {
    expect(decodeNumber('R,..W')).toBe(NaN)
  })

  it('decodeNumber must return 49 when paramter is ".;!" ', () => {
    expect(decodeNumber('.;!')).toBe(49)
  })
})
