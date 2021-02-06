module.exports = function reverse (n) {
    n = Math.abs(n);
  n = String(n).split('').reverse().join('');
  n = Number(n);
  return n;
}
