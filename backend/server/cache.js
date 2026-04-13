const temp = {}; // cache

function calculate(a, b) {
  const key = `${a}_${b}`;

  // check cache
  const cacheExist = getFromCache(key);
  if (cacheExist) return cacheExist; // If cache exist return already calculated value

  console.log("\n Calculating sum of", a, b);

  const res = a + b; // new calculation db/api
  temp[key] = res; // create new cache
  return res;
}

function getFromCache(key) {
  console.log("\n Checking cache", key);
  if (temp[key]) {
    console.log("\n Cache exist", key, temp[key]);
    return temp[key];
  }
  return false;
}

const result1 = calculate(5, 4);
console.log("\n Result 1", result1); // Calculating
const result2 = calculate(5, 4);
console.log("\n Result 2", result2); // Cache
const result3 = calculate(5, 4);
console.log("\n Result 3", result3); // Cache
const result4 = calculate(5, 4);
console.log("\n Result 4", result4); // Cache
