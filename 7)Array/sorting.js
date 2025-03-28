
// Insertion Sort
let arr = [4,2,7,2,8,3,1];

function insertion_Sort(arr){
    for(let i=1;i<arr.length;i++){
        let key = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}

// Selection Sort
function selection_Sort(arr){
    let minIndex = 0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex])
                minIndex = j;
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

// console.log(selection_Sort(arr));

// Bubble Sort
function bubble_Sort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

// console.log(bubble_Sort(arr))

// Merge Sort (devide and conqueror)

let l = [1,3,5,7]
let r = [2,4,6,8]

function merge(l,r){
    let i = 0;
    let j = 0;
    let k = 0;
    let arr = new Array(l.length + r.length);
    while(i< l.length && j< r.length){
        if(l[i] < r[j]){
            arr[k] = l[i];
            k++;
            i++;
        }
        else{
            arr[k] = r[j];
            k++;
            j++;
        }
    }
    while(i< l.length){
        arr[k] = l[i];
        k++;
        i++;
    }
    while(j< r.length){
        arr[k] = r[j];
        k++;
        j++;
    }

    return arr;
}

console.log(merge(l,r))

// Cyclic Sort

function cyclic_Sort(arr){
    let i=0;
    while(i<arr.length){
        let index = arr[i]-1;
        if(arr[i]!==arr[index]){
            let temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }
        else i++;
    }
    return arr;
}

// console.log(cyclic_Sort([5,2,1,4,3,6]));
