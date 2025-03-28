
// class Node{
//     constructor(val){
//         this.val = val
//         this.next = null
//     }
// }

// class Stack{
//     constructor(){
//         this.top = null
//         this.size = 0
//     }

//     push(val){
//         let newNode = new Node(val);
//         if(this.top !== null){
//             newNode.next = this.top;
//         }
//         this.top = newNode
//         this.size++;
//     }

//     pop(){
//         if(this.top === null) return null
//         let res = this.top.val;
//         this.top = this.top.next;
//         this.size--;
//         return res;
//     }

//     isEmpty(){
//         return this.size === 0;
//     }

//     empty(){
//         this.top = null;
//         this.size = 0;
//     }

//     display(){
//         let temp = this.top;
//         let arr = [];
//         while(temp !== null){
//             arr.push(temp.val);
//             temp = temp.next
//         }
//         console.log(arr.reverse().join("->"));
//     }

// }

// let obj = new Stack();

// obj.push(10)
// obj.push(20)
// obj.push(30)

// obj.display()

// console.log(obj.pop());
// console.log(obj.pop());

// obj.display();
