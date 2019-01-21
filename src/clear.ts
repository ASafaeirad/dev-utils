function clear(extraChars: string = ''): void {
  process.stdout.write(`\x1bc${extraChars}`);
}

export default clear;
