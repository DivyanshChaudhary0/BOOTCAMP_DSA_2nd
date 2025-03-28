
// Left rotation by K steps
let arr1 = [10,20,30,40,50];
let k = 2;
k = k % arr1.length;
function reverse(arr,i,j){
    while(i<j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}

reverse(arr1,0,k-1);
reverse(arr1,k,arr1.length-1);
reverse(arr1,0,arr1.length-1);

console.log(arr1);


// Right rotation by K steps
/*
    reverse(arr,length-k-1,length-1)
    reverse(arr,length-k,length-1)
    reverse(arr,0,length-1)
*/
let arr2 = [1,2,3,4,5];
reverse(arr2,arr2.length-k-1,arr2.length-1);
reverse(arr2,arr2.length-k,arr2.length-1);
reverse(arr2,0,arr2.length-1);

console.log(arr2);

//
let arr = [10,20,3,40,50];
let target = 110;
let idx = -1;
for(let i=0;i<arr.length;i++){
    if(target === arr[i]){
        idx = i;
        break;
    }
}
if(idx !== -1) console.log(`${target} found in array at index ${idx}`);
else console.log(`${target} not found at any index`);
