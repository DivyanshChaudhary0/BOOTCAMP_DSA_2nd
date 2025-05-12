
function funnyString(s) {
  let rev = s.split("").reverse().join("");

  for (let i = 1; i < s.length; i++) {
    let originalDiff = Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
    let reverseDiff = Math.abs(rev.charCodeAt(i) - rev.charCodeAt(i - 1));

    if (originalDiff !== reverseDiff) {
      return "Not Funny";
    }
  }

  return "Funny";
}

function designerPdfViewer(h, word) {
  let max = 0;

  for (let i = 0; i < word.length; i++) {
    let index = word.charCodeAt(i) - 97; // 'a' is 97
    max = Math.max(max, h[index]);
  }

  return max * word.length;
}

function caesarCipher(s, k) {
  let result = "";
  k = k % 26; // Normalize shift to avoid unnecessary cycles

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let code = s.charCodeAt(i);

    if (char >= "A" && char <= "Z") {
      // Uppercase letter
      let newChar = String.fromCharCode(((code - 65 + k) % 26) + 65);
      result += newChar;
    } else if (char >= "a" && char <= "z") {
      // Lowercase letter
      let newChar = String.fromCharCode(((code - 97 + k) % 26) + 97);
      result += newChar;
    } else {
      // Non-alphabetic characters remain the same
      result += char;
    }
  }

  return result;
}

function marsExploration(s) {
  const expected = "SOS";
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== expected[i % 3]) count++;
  }

  return count;
}

function pangrams(s) {
  let set = new Set();

  for (let i = 0; i < s.length; i++) {
    let char = s[i].toLowerCase();
    if (char >= "a" && char <= "z") {
      set.add(char);
    }
  }

  return set.size === 26 ? "pangram" : "not pangram";
}

function anagram(s) {
  if (s.length % 2 !== 0) return -1;

  let mid = s.length / 2;
  let firstHalf = s.slice(0, mid);
  let secondHalf = s.slice(mid);

  let freq = new Array(26).fill(0);

  // Count characters in first half
  for (let i = 0; i < firstHalf.length; i++) {
    freq[firstHalf.charCodeAt(i) - 97]++;
  }

  // Subtract characters seen in second half
  for (let i = 0; i < secondHalf.length; i++) {
    freq[secondHalf.charCodeAt(i) - 97]--;
  }

  // Only count positive differences (i.e., how many need to change in firstHalf)
  let count = 0;
  for (let i = 0; i < 26; i++) {
    if (freq[i] > 0) count += freq[i];
  }

  return count;
}

let str = "abcdef";
let mid = Math.floor(str.length / 2);

let firstHalf = str.slice(0, mid); // "abc"
let secondHalf = str.slice(mid); // "def"

console.log(firstHalf); // Output: "abc"
console.log(secondHalf); // Output: "def"

function kaprekarNumber(n) {
  let square = n * n;
  let sum = 0;

  while (square > 0) {
    let rem = square % 10;
    sum += rem;
    square = Math.floor(square / 10);
  }

  return sum === n ? "YES" : "NO";
}

console.log(kaprekarNumber(9));

function squares(a, b) {
  const start = Math.ceil(Math.sqrt(a));
  const end = Math.floor(Math.sqrt(b));
  return end - start + 1;
}

function dayOfProgrammer(year) {
  if (year === 1918) {
    return `26.09.${year}`; // Special case
  } else if (
    (year < 1918 && year % 4 === 0) || // Julian
    (year > 1918 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))) // Gregorian
  ) {
    return `12.09.${year}`;
  } else {
    return `13.09.${year}`;
  }
}

// Implement caching

function memoize() {
  const cache = {};

  return function (n) {
    if (n in cache){
        console.log("From cache....");
        return cache[n];
    }
    console.log("Computing...");
    return (cache[n] = n * n);
  };
}

const square = memoize();
console.log(square(5));
console.log(square(5));


function pageCount(n, p) {
    let fromFront = 0;
    let page = 1;

    // Count flips from the front
    while (page < p) {
        page += 2;
        fromFront++;
    }

    let fromBack = 0;
    page = n % 2 === 0 ? n - 1 : n - 2;

    // Count flips from the back
    while (page > p) {
        page -= 2;
        fromBack++;
    }

    return Math.min(fromFront, fromBack);
}


function convertToBinary(n){
  let res = "";
  while(n>0){
    if(n%2==1) res += 1;
    else res += 0;
    n = Math.floor(n/2);
  }
  return res.split("").reverse().join("");
}

console.log(convertToBinary(11));


function convertToDecimal(n){
  n = n.toString().split("").reverse();
  let ans = 0;
  for(let i=0; i<n.length; i++){
    ans += n[i] * Math.pow(2,i);
  }
  return ans;
}

console.log(convertToDecimal(1011));


function gcd(x, y) {
    while (y) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

function lcm(x, y) {
    return (x * y) / gcd(x, y);
}

function getTotalX(a, b) {
    // Step 1: Find LCM of array a
    let l = a[0];
    for (let i = 1; i < a.length; i++) {
        l = lcm(l, a[i]);
    }

    // Step 2: Find GCD of array b
    let g = b[0];
    for (let i = 1; i < b.length; i++) {
        g = gcd(g, b[i]);
    }

    // Step 3: Count multiples of l that divide g
    let count = 0;
    for (let i = l; i <= g; i += l) {
        if (g % i === 0) count++;
    }

    return count;
}


function countingSort(arr) {
    let freq = new Array(100).fill(0);

    for (let num of arr) {
        freq[num]++;
    }

    let sorted = [];
    for (let i = 0; i < freq.length; i++) {
        while (freq[i] > 0) {
            sorted.push(i);
            freq[i]--;
        }
    }

    return sorted;
}

function separateNumbers(s) {
    let found = false;
    
    for(let i=1; i <= Math.floor(s.length/2); i++){
        let firstNum = s.slice(0,i);
        
        if (firstNum.startsWith("0")) continue;
        
        let num = BigInt(firstNum);
        let builtStr = "";
        
        while(builtStr.length < s.length){
            builtStr += num;
            num += 1n;
        }
        
        if (builtStr === s) {
            console.log(`YES ${firstNum}`);
            found = true;
            break;
        }
    
    }
    
    if(!found) console.log("NO")
}

function minimumAbsoluteDifference(arr) {
    arr.sort((a, b) => a - b);
    let min = Infinity;

    for (let i = 1; i < arr.length; i++) {
        let diff = Math.abs(arr[i] - arr[i - 1]);
        min = Math.min(min, diff);
    }

    return min;
}

function luckBalance(k, contests) {
    let luck = 0;
    const important = [];

    for (const [value, importance] of contests) {
        if (importance === 0) {
            luck += value; // always lose unimportant contests
        } else {
            important.push(value); // store important ones
        }
    }

    // Sort important contests in descending order
    important.sort((a, b) => b - a);

    // Lose the k most valuable important contests
    for (let i = 0; i < important.length; i++) {
        if (i < k) {
            luck += important[i];
        } else {
            luck -= important[i]; // have to win the rest
        }
    }

    return luck;
}
