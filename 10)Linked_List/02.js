
// class node{
//     constructor(val){
//         this.val = val
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//     }

//     insertAtFirst(val){
//         let newNode = new node(val);
//         if(this.head === null){
//             this.head = newNode
//             return
//         }
//         newNode.next = this.head;
//         this.head = newNode;
//     }

//     insertAtLast(val){
//         let newNode = new node(val);
//         if(this.head === null){
//             this.head = newNode
//         }
        
//         let cur = this.head;
//         while(cur.next !== null){
//             cur = cur.next;
//         }
//         cur.next = newNode
//     }

//     print(){
//         if(this.head === null){
//             console.log("no node found");
//             return
//         }
//         let curr = this.head;
//         let ans = []
//         while(curr !== null){
//             ans.push(curr.val)
//             curr = curr.next;
//         }
//         console.log(ans.join("->") + "->null");
//     }

// }

// let obj = new LinkedList();
// obj.insertAtFirst(10);
// obj.insertAtFirst(20);
// obj.insertAtLast(30)
// obj.print()

























// // let a = new node(10)
// // let b = new node(20)
// // let c = new node(30)
// // let d = new node(40)

// // a.next = b;
// // b.next = c;
// // c.next = d;

// // console.log(a);