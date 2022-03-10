function generateChildrenName(characters, name) {
  return name.split("").filter(x => characters.indexOf(x) === -1).join("") ? false : true;
}

// dont change the code below
exports.generateChildrenName = generateChildrenName;