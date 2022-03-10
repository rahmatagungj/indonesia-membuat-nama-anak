function generateChildrenName(characters, name) {
  if (characters === name) return true;
  const sortedChar = characters.split("").sort();
  const sortedName = name.split("").sort();
  return sortedName.every((char, index) => {
    return sortedChar.lastIndexOf(char) >= index;
  });
}

// dont change the code below
exports.generateChildrenName = generateChildrenName;
