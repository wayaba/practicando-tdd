export const canReconfig = (from, to) => {
  //   if (from === undefined) throw new Error('from is missing')
  if (typeof from !== 'string') throw new Error('from is not string')
  if (typeof to !== 'string') throw new Error('from is not string')

  const hastSameLength = from.length === to.length
  const hasSameUniqueLetters = new Set(from).size === new Set(to).size
  if (!hastSameLength) return false
  if (!hasSameUniqueLetters) return false

  const transformation = {}

  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]
    const storedLetter = transformation[fromLetter]
    if (storedLetter && storedLetter !== toLetter) return false

    transformation[fromLetter] = toLetter
  }

  return true
}
