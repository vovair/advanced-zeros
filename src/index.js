module.exports = function getZerosCount(number, base) {
  const getMaxPower = (p, n) => {
    let power = 0;
    while (n / p > 0) {
      power += Math.floor(n / p);
      n /= p;
    }
    return power;
  };

  const getMaxPowerByQ = (p, n, q) => {
    return Math.floor(getMaxPower(p, n) / q);
  };

  const processBase = (currentBase, iterBase) => {
    let q = 0;
    while (currentBase % iterBase == 0) {
      q++;
      currentBase /= iterBase;
    }
    return {q, b: currentBase};
  };

  let result = number;
  let j = base;
  for (let p = 2; p <= base; p++) {
    if (j % p != 0) continue;
    const {q, b} = processBase(j, p);
    j = b;
    result = Math.min(result, getMaxPowerByQ(p, number, q));
  }
  return result;
};
