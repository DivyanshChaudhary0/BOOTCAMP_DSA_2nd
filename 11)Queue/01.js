
// class Node{
//     constructor(val){
//         this.val = val
//         this.next = null
//     }
// }

// class Queue{
//     constructor(){
//         this.front = null
//         this.rare = null
//         this.size = 0
//     }

//     enqueue(val){
//         let newNode = new Node(val)
//         if(this.rare === null){
//             this.front = this.rare = newNode;
//         }else{
//             this.rare.next = newNode;
//             this.rare = newNode;
//         }
//         this.size++;
//     }

//     dequeue(){
//         if(this.rare === null){
//             console.log("Queue is empty");
//             return;
//         }
//         this.front = this.front.next;
//         if(this.front === null) this.rare = null;
//         this.size--;
//     }

//     display(){
//         if(this.front === null){
//             console.log("Queue is empty");
//             return;
//         }

//         let temp = this.front;
//         let arr = [];
//         while(temp !== null){
//             arr.push(temp.val);
//             temp = temp.next;
//         }
//         console.log(arr.join("-"));
//     }

//     empty(){
//         if(this.rare === null) return;
//         this.front = this.rare = null;
//         this.size = 0;
//     }
// }

// let obj = new Queue()
// obj.enqueue(10)
// obj.enqueue(20)
// obj.enqueue(30)
// obj.enqueue(40)

// obj.empty();

// // obj.dequeue()
// // obj.dequeue()
// // obj.dequeue()

// obj.display()
