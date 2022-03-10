function generateChildrenName(characters, name) {
  return name.split("").filter(function(char) { return characters.split("").find(function(c, i) {if(this.temp.includes(i) || (c !== char)) { return false; } else { this.temp.push(i); return true; } }, this)}, { temp:[] }).join("") === name
}

// dont change the code below
exports.generateChildrenName = generateChildrenName;
