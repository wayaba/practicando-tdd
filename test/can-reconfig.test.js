import { describe, expect, it } from 'vitest'
import { canReconfig } from '../src/can-reconfig'

describe('canReconfig', () => {
  //   it('shoud be a function', () => {
  //     expect(canReconfig).toBeTypeOf('function')
  //   })

  it('should throw if first parameter is missing', () => {
    expect(() => canReconfig()).toThrow()
  })

  it('should throw if first parameter is not string', () => {
    expect(() => canReconfig(2)).toThrow()
  })

  it('should throw if second parameter is not string', () => {
    expect(() => canReconfig('a')).toThrow()
  })

  it('it should return a boolean', () => {
    expect(canReconfig('a', 'b')).toBeTypeOf('boolean')
  })

  it('it should return false if parameters has different lenght', () => {
    expect(canReconfig('aaa', 'b')).toBe(false)
  })

  it('it should return false if string provided have different number of unique letters', () => {
    expect(canReconfig('abc', 'ddd')).toBe(false)
  })

  it('it should return false if string have differnt order of transformation', () => {
    expect(canReconfig('XBOX', 'XXBO')).toBe(false)
  })
})
