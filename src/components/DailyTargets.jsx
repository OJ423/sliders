import sha256 from 'crypto-js/sha256';

export const generateDailyTargets = (gameId, date, count = 5, min = 1, max = 99) => {
  const dateString = date.toISOString().split('T')[0];
  const targets = new Set();
  const range = max - min + 1;

  let index = 0;

  while (targets.size < count) {
    // Combine gameId, date, and an index to create a unique input string
    const inputString = `${gameId}-${dateString}-${index}`;

    const hash = sha256(inputString).toString();

    // Convert the first 8 characters of the hash to an integer
    const hashValue = parseInt(hash.substring(0, 8), 16);

    // Map the hash value to the range [min, max]
    const target = min + (hashValue % range);

    // Ensure the target is unique
    if (!targets.has(target)) {
      targets.add(target);
    } else {
      console.log("Duplicate target detected, skipping:", target);
    }

    index++;
  }

  return Array.from(targets);
};
