import { describe, expect, it } from 'vitest'

const canMouseEat = (direction, game) => {
  // ¡Gracias por jugar a AdventJS 2021! 🤗
  // ¡Nos vemos el año que viene! 👋
  // Por favor, comparte en las redes qué te ha parecido! 🚀

  if (typeof direction !== 'string') {
    throw new Error('first parameter must be a string')
  }

  const indexX = game.findIndex((x) => x.find((e) => e === 'm'))
  if (indexX === -1) return false

  const indexY = game[indexX].findIndex((x) => x === 'm')
  if (indexY === -1) return false

  const directionMap = {
    up: { row: indexX - 1, col: indexY },
    down: { row: indexX + 1, col: indexY },
    left: { row: indexX, col: indexY - 1 },
    right: { row: indexX, col: indexY + 1 }
  }

  const newRow = directionMap[direction].row
  const newCol = directionMap[direction].col
  return game[newRow][newCol] !== -1 && game[newRow][newCol] === '*'
}

describe('canMouseEat', () => {
  it('should be a function', () => {
    expect(typeof canMouseEat).toBe('function')
  })

  it('should throw an specific message if string is not provided as first parameter', () => {
    expect(() => canMouseEat()).toThrow('first parameter must be a string')
  })

  it('should return false if there is no mouse', () => {
    const direction = 'right'
    const game = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', '*']
    ]
    expect(canMouseEat(direction, game)).toBe(false)
  })

  it('should return false if mouse is on last column and direction is right', () => {
    const direction = 'right'
    const game = [
      [' ', ' ', ' '],
      [' ', ' ', 'm'],
      [' ', ' ', '*']
    ]
    expect(canMouseEat(direction, game)).toBe(false)
  })

  it('should return true if mouse is on last column and direction is up and * is above m', () => {
    const direction = 'up'
    const game = [
      [' ', ' ', '*'],
      [' ', ' ', 'm'],
      [' ', ' ', ' ']
    ]
    expect(canMouseEat(direction, game)).toBe(true)
  })
})
