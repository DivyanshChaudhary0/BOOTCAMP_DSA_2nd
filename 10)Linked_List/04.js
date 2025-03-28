
// let arr = [1,2,3,4];

// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// function arrayToLinkedList(arr){
//     let head = new Node(arr[0]);
//     let temp = head;

//     for(let i=1; i<arr.length; i++){
//         let newNode = new Node(arr[i]);
//         temp.next = newNode;
//         temp = newNode;
//     }
//     return head;
// }

// function print(head){
//     let temp = head;
//     let arr = [];
//     while(temp !== null){
//         arr.push(temp.val);
//         temp = temp.next;
//     }
//     console.log(arr.join("->") + "->null");
// }

// function sizeOfLL(head){
//     let temp = head;
//     let count = 0;
//     while(temp){
//         temp = temp.next;
//         count++;
//     }
//     return count;
// }

// function isElementExist(head,val){
//     let temp = head;
//     while(temp){
//         if(temp.val === val) return "yes"
//         temp = temp.next;
//     }
//     return "no"
// }

// function deleteHead(head){
//     if(head === null) return
//     head = head.next;
//     return head;
// }

// function deleteTail(head){
//     let temp = head;
//     if(head === null || head.next === null){
//         head = null;
//     }
//     else{
//         while(temp.next.next !== null){
//             temp = temp.next;
//         }
//         temp.next = null;
//     }
//     return head;
// }

// function deleteByIndex(head,idx){
//     if(idx === 1){
//         head = head.next;
//         return head;
//     }
//     let temp = head;
//     let prev = null;
//     let count = 1;
//     while(temp !== null){
//         if(count === idx){
//             prev.next = prev.next.next;
//             break;
//         }
//         prev = temp;
//         temp = temp.next;
//         count++;
//     }
//     return head;
// }

// function deleteByValue(head,val){
//     let temp = head;
//     let prev = null;
//     if(head.val === val){
//         head = head.next;
//         return head;
//     }

//     while(temp !== null){
//         if(temp.val === val){
//             prev.next = prev.next.next;
//             break;
//         }
//         prev = temp;
//         temp = temp.next;
//     }
//     return head;
// }

// let head = arrayToLinkedList(arr);
// // print(deleteHead(head));
// // print(deleteTail(head));

// // print(deleteByIndex(head,5))
// print(deleteByValue(head,5))
