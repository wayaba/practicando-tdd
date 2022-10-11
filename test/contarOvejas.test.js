import { describe, expect, it } from 'vitest'

const contarOvejas = (ovejas) => {
  // aquí tu magia
  const expresionA = /[a+]/gi
  const expresionB = /[n+]/gi
  return ovejas.filter(
    (oveja) =>
      oveja.color === 'rojo' &&
      oveja.name.match(expresionA) &&
      oveja.name.match(expresionB)
  )
}

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' }
]

describe('contarOvejas', () => {
  it('should be a function', () => {
    expect(typeof contarOvejas).toBe('function')
  })

  it('should return an array', () => {
    expect(contarOvejas(ovejas)).toBeInstanceOf(Array)
  })

  it('should return an array with 2 objects', () => {
    expect(contarOvejas(ovejas).length).toBe(2)
  })

  it('should return an array with 3 objects', () => {
    const ovejas2 = ovejas.filter(
      (o) => o.color === 'rojo' && o.name === 'Navidad'
    )
    expect(contarOvejas(ovejas2).length).toBe(ovejas2.length)
  })
})
