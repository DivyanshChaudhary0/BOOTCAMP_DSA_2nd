
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
