// WAF to find the greatest number from given array of any size
function find_greatest(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
console.log(find_greatest([10, 20, 30, 40, 50, 88]));

// WAF to find the smallest number from given array of any size
function find_smallest(arr) {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}
console.log(find_smallest([10, 20, 30, 40, 50, 88]));

// WAF to sort an array of any size (Bubble sort algorithm)
function sort(arr) {
    let n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        // Reduce the range of the inner loop
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                // Set flag to indicate a swap occurred
                swapped = true;
            }
        }

        // If no swaps were made, the array is already sorted
        if (!swapped) break;
    }

    return arr;
}
console.log(sort([5, 2, 4, 3, 1]));

// WAF to rotate an array by n position in d direction. (1 for right,-1 for left)
function rotate(arr,n,d){
    if(d==1){
        n=n%arr.length;
        for(let i=1;i<=n;i++){
            let temp=arr[arr.length-1];
            for(let j=arr.length-1;j>0;j--){
                arr[j]=arr[j-1];
            }
            arr[0]=temp;
        }
        return arr;
    }
    else if(d==-1){
        n=n%arr.length;
        for(let i=1;i<=n;i++){
            let temp=arr[0];
            for(let j=0;j<arr.length-1;j++){
                arr[j]=arr[j+1];
            }
            arr[arr.length-1]=temp;
        }
        return arr;
    }
    else{
        return "Invalid direction";
    }
}
console.log(rotate([10,20,30,40,50],2,1));

//WAF to find the first occurrrence of adjacent duplicate values in an aaray.
function firstAdjacentDuplicate(arr){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]===arr[i+1]){
            return arr[i];
        }
    }
    return null;
}
console.log(firstAdjacentDuplicate([1, 2, 2, 3, 4, 4, 5])); // Output: 2
console.log(firstAdjacentDuplicate([1, 2, 3, 4, 5])); //null

// WAF to swap elements to a secified index
function swap_Specified_Index(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    console.log(arr);
}
swap_Specified_Index([10,2,30,40,50],1,4);

// WAF to count the total duplicates in an array
function count_Total_Duplicates(arr){
    let count =0,i=0,j=1;
    sort(arr);
    while(i<arr.length-1){
        if(arr[i]===arr[j]){
            count++;
            while(arr[i]===arr[j])
                j++;
        }
        i=j;
        j++;
    }
    return count;
}
console.log(count_Total_Duplicates([2,2,1,1,2,1,3,3,3,4,4,5,6]));

// WAF to count all unique elements in an array
function all_Unique_Elements(arr){
    let unique_Elements = [];
    for(let i=0;i<arr.length;i++){
        let temp = -1;
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                temp=1;
                break;
            }
        }
        if(temp === -1){
            unique_Elements.push(arr[i])
        }
    }
    return unique_Elements;
}

console.log(all_Unique_Elements([1,2,3,2,4,5,5,6]))
// ye remove duplicates ban gya hai 