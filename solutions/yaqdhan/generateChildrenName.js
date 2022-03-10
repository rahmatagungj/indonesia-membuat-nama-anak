function generateChildrenName(characters, name) {
  function letters(text) {
    return text.split("").filter(x => Boolean(x.trim()));
  }

  function itemFilter(arr, item) {
    return arr.filter(x => x === item);
  }

  const charactersAlphabets = letters(characters);
  const nameAlphabets = letters(name);

  return charactersAlphabets.every(x => itemFilter(charactersAlphabets, x).length === itemFilter(nameAlphabets, x).length)
}

// dont change the code below
exports.generateChildrenName = generateChildrenName;
