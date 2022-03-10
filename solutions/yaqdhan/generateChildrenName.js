function generateChildrenName(characters, name) {
  function letters(text) {
    return text.split("").filter(x => Boolean(x.trim()));
  }

  function itemFilter(arr, item) {
    return arr.filter(x => x === item);
  }

  const charactersLetters = letters(characters);
  const nameLetters = letters(name);

  return charactersLetters.every(x => itemFilter(charactersLetters, x).length === itemFilter(nameLetters, x).length)
}

// dont change the code below
exports.generateChildrenName = generateChildrenName;
