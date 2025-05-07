
function funnyString(s) {
    let rev = s.split('').reverse().join('');
    
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

        if (char >= 'A' && char <= 'Z') {
            // Uppercase letter
            let newChar = String.fromCharCode(((code - 65 + k) % 26) + 65);
            result += newChar;
        } else if (char >= 'a' && char <= 'z') {
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
    const expected = 'SOS';
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
        if (char >= 'a' && char <= 'z') {
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

