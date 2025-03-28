
// find unique element in an array by set
let arr = [10,12,10,12,4,1,2,4,2];
// let set = new Set(arr);
// console.log(set);

// find one unique element in the array
let set = new Set();
for(let i=0;i<arr.length;i++){
    if(set.has(arr[i])) set.delete(arr[i]);
    else set.add(arr[i]);
}

console.log(set);

// 1832 Leetcode -> check panagram
// sentence contains at least one of every letter of the English alphabet. return true or false
let sentence = "thequickbrownfoxjumpsoverthelazydog"
function panagram(sentence){
    let count = 0;
    let obj = {};
    for(let i=0;i<sentence.length;i++){
        obj[sentence[i]] = sentence[i];
    }

    for(let key in obj){
        count++;
        // console.log(count);
    }
    
    if(count === 26) return true;
    return false;
}
console.log(panagram(sentence));
console.log(panagram("Leetcode"))

// 771 Leetcode -> jewels & stones
// Output: 3
let jewels = "aA";
let stones = "aAAbbbb"
let count =0;

for(let i=0;i<jewels.length;i++){
    for(let j=0;j<stones.length;j++){
        if(jewels[i]===stones[j]) count++;
    }
}
console.log(count);

// 575 Leetcode ->