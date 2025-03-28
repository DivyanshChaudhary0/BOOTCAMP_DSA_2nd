
// 202 Happy Number

let n = 2;
function happpyNumber(n){
    let set = new Set();
    while(true){
        let sum = 0;
        while(n>0){
            let digit = n%10;
            sum += digit*digit;
            n = Math.floor(n/10);
        }
        if(sum === 1) return true;
        else if(set.has(sum)) return false;
        else set.add(sum);
        n = sum;
    }
}

console.log(happpyNumber(n))