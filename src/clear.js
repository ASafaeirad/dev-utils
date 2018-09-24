function clear(extraChars = ' ') {
  process.stdout.write(`\x1bc${extraChars}`);
}

export default clear;
