
// class node{
//     constructor(val){
//         this.val = val
//         this.next = null
//     }
// }


// class LinkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     insertAtFirst(val){
//         this.size++;
//         let newNode = new node(val);
//         if(this.head === null){
//             this.head = newNode;
//             return;
//         }
//         newNode.next = this.head;
//         this.head = newNode;
//     }

//     insertAtLast(val){
//         this.size++;
//         let newNode = new node(val);
//         if(this.head === null){
//             this.head = newNode;
//             return;
//         }
//         let temp = this.head;
//         while(temp.next !== null){
//             temp = temp.next
//         }
//         temp.next = newNode;
//     }

//     deleteAtFirst(){
//         this.size--;
//         if(this.head === null){
//             console.log("No node found");
//             return;
//         }
//         if(this.head.next === null){
//             this.head = null;
//             return;
//         }
//         this.head = this.head.next;
//     }

//     deleteAtLast(){
//         this.size--;
//         if(this.head === null || this.head.next === null){
//             this.head = null;
//             return;
//         }
//         let temp = this.head;
//         while(temp.next.next !== null){
//             temp = temp.next;
//         }
//         temp.next = null;
//     }

//     insertAtPos(idx,val){
//         if(idx < 0 || idx > this.size){
//             console.log("Index is Out of bound");
//             return;
//         }
//         if(idx === 0){
//             this.insertAtFirst(val);
//             return;
//         }
//         if(idx === this.size){
//             this.insertAtLast(val);
//             return;
//         }
//         let newNode = new node(val);
//         let temp = this.head;
//         let count = 0;
//         while(count < idx - 1){
//             temp = temp.next;
//             count++;
//         }
//         newNode.next = temp.next;
//         temp.next = newNode;
//         this.size++;
//     }

//     deleteAtPos(idx){
//         if(idx < 0 || idx > this.size){
//             console.log("Index is out of bound");
//             return
//         }
//         if(idx === 0){
//             this.deleteAtFirst();
//             return;
//         }
//         if(idx === this.size){
//             this.deleteAtLast();
//             return;
//         }
//         let count = 0;
//         let temp = this.head;
//         while(count < idx - 1){
//             temp = temp.next;
//             count++;
//         }
//         temp.next = temp.next.next;
//     }
    
//     print(){
//         if(this.head === null){
//             console.log("No node found");
//             return;
//         }
//         let curr = this.head;
//         let arr = [];
//         while(curr !== null){
//             arr.push(curr.val)
//             curr = curr.next;
//         }
//         console.log(arr.join("-> ") + "-> " + "null");
//     }
// }

// let obj = new LinkedList();
// obj.insertAtFirst(50)
// obj.insertAtFirst(40)
// obj.insertAtPos(0,5)
// obj.insertAtPos(1,60)
// obj.insertAtPos(2,15)
// // obj.deleteAtPos(0);
// // obj.deleteAtPos(1);
// obj.deleteAtPos(5);

// obj.print()
