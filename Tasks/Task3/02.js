
let arr = [1,5,3,1,3,5,6];
arr.sort((a, b) => a-b);

for(let i=0;i<arr.length;i++){
    let count = 0;
    for(let j=i;j<arr.length;j++){
        if(arr[i]===arr[j])
            count++;
    }
    
    console.log(arr[i] + "=" + count);
    arr.splice(i,count-1);
}
