function occurrences(text, word) {
  if (!text || text.length === 0) {
    return 0;
  }
  const reducer = (count, term) => count + (term.toLowerCase() === word.toLowerCase() ? 1 : 0);
  return text.split(' ').reduce(reducer, 0);
}

module.exports = occurrences;
