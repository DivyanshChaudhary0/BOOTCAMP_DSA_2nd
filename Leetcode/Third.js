
// 1346. Check If N and Its Double Exist

// let arr = [10,2,5,3];
let arr = [-2,0,10,-19,4,6,-8];

function checkIfExist(arr){
    let set = new Set();
    for(let i=0;i<arr.length;i++){
        if(set.has(arr[i]*2)) return true;
        if(set.has(arr[i]/2)) return true;
        set.add(arr[i]);
    }
    return false;
}

console.log(checkIfExist(arr));
