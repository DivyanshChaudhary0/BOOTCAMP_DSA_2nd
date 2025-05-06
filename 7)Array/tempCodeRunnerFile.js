
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
