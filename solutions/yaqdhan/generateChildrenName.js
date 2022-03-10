function generateChildrenName(characters, name) {
  function alphabets(text) {
    return text.split("").filter(x => Boolean(x.trim()));
  }

  function itemFilter(arr, item) {
    return arr.filter(x => x === item);
  }

  const charactersAlphabets = alphabets(characters);
  const nameAlphabets = alphabets(name);

  return charactersAlphabets.every(x => itemFilter(charactersAlphabets, x).length === itemFilter(nameAlphabets, x).length)
}

// dont change the code below
exports.generateChildrenName = generateChildrenName;
