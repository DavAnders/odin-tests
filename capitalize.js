function capitalize(string) {
  if (typeof string !== "string" || string.length === 0) {
    return "";
  }
  const newString = string[0].toUpperCase() + string.slice(1);
  return newString;
}

module.exports = capitalize;
