function clear(extraChars = ' ') {
  process.stdout.write(`\x1bc${extraChars}`);
}

module.exports = clear;
