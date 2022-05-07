function isConsonant(vowel) {
  return !vowel.match(/[aeiou\s]/i);
}
function insertDash(word) {
  if (!word || word.length === 0) {
    return "";
  }
  return word
    .split("")
    .map((vowel, i, vowels) => {
      if (i > 0 && isConsonant(vowels[i - 1]) && isConsonant(vowel)) {
        return `-${vowel}`;
      }
      return vowel;
    })
    .join("");
}
module.exports = insertDash;
