
// 2404 Most frequent even number
let arr = [0,1,2,2,4,4,1]
let map = new Map();
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        if(map.has(arr[i])) map.set(arr[i],map.get(arr[i])+1)
        else map.set(arr[i],1)
    }
}

let ans = {
    max: -1,
    count: 0
}

for(let key of map.keys()){
    if(ans.count < map.get(key)){
        ans.count = map.get(key);
        ans.max = key; 
    }
    else if(ans.count === map.get(key) && ans.max > key){
        ans.max = key;
    }
}
console.log(ans.max);
