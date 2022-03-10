function generateChildrenName(characters, name) {
  const numberOfChar = sumChar(characters.replace(/\s+/g, ''))
  const numberOfCharInName = sumChar(name.replace(/\s+/g, ''))

  for (const key in numberOfCharInName) {
    if (!numberOfChar.hasOwnProperty(key)) return false
    if (numberOfCharInName[key] > numberOfChar[key]) return false
  }

  return true
}

function sumChar(chars) {
  const res = {}
  for (const char of chars) {
    (typeof res[char] == "undefined") ? res[char] = 1 : res[char] += 1
  }
  return res
}

// dont change the code below
exports.generateChildrenName = generateChildrenName;
