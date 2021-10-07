const a = [2, 4, 7, 5, 4, 3, 8];

const b = a.filter(function (n, i, func) {
  return func.indexOf(n) === i;
});

console.log(b);

function isLeapYear(year) {
  return new Date(year, 2, 0).getDate() === 29;
}

console.log(isLeapYear(2020));
console.log(isLeapYear(2021));