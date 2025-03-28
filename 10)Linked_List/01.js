// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   insertAtFirst(val) {
//     this.size++;
//     let newNode = new Node(val);
//     if (this.head == null) {
//       this.head = newNode;
//       return;
//     }

//     newNode.next = this.head;
//     this.head = newNode;
//   }

//   insertAtLast(val) {
//     this.size++;
//     let newNode = new Node(val);
//     if (this.head == null) {
//       this.head = newNode;
//       return;
//     }
//     let cur = this.head;
//     while (cur.next != null) {
//       cur = cur.next;
//     }
//     cur.next = newNode;
//   }

//   deleteAtFirst() {
//     this.size--;
//     if (this.head == null) {
//       console.log("no node found");
//       return;
//     }
//     if (this.head.next == null) {
//       this.head = null;
//       return;
//     }
//     this.head = this.head.next;
//   }

//   deleteAtLast() {
//     this.size--;
//     if (this.head == null || this.head.next == null) {
//       this.head = null;
//       return;
//     }
//     let cur = this.head;
//     while (cur.next.next != null) {
//       cur = cur.next;
//     }
//     cur.next = null;
//   }

//   insertAtPos(val, pos) {
//     if (pos < 1 || this.size + 1 < pos) {
//       console.log("out of bound");
//       return;
//     }
//     if (pos == 1) {
//       this.insertAtFirst(val);
//       return;
//     }
//     if (pos == this.size + 1) {
//       this.insertAtLast(val);
//       return;
//     }
//     this.size++;
//     let cur = this.head;
//     let i = 1;
//     while (i < pos - 1) {
//       cur = cur.next;
//       i++;
//     }
//     let newNode = new Node(val);
//     newNode.next = cur.next;
//     cur.next = newNode;
//   }

//   deleteAtPos(pos) {
//     if (pos < 1 || this.size < pos) {
//       console.log("out of bound");
//       return;
//     }
//     if (pos == 1) {
//       this.deleteAtFirst();
//       return;
//     }
//     if (pos == this.size) {
//       this.deleteAtLast();
//       return;
//     }
//     this.size--;
//     let i = 1;
//     let cur = this.head;
//     while (i < pos - 1) {9
//       cur = cur.next;
//       i++;
//     }
//     cur.next = cur.next.next;
//   }

//   print() {
//     if (this.head == null) {
//       console.log("no found node");
//       return;
//     }
//     let cur = this.head;
//     let arr = [];
//     while (cur != null) {
//       arr.push(cur.val);
//       cur = cur.next;
//     }
//     console.log(arr.join("->") + "->null");
//   }
// }

// let obj = new LinkedList();
// console.log(obj);

// obj.insertAtFirst(10);
// obj.insertAtFirst(20);
// obj.insertAtFirst(30);
// obj.print();
// // obj.insertAtLast(40);
// // obj.insertAtLast(50);
// // obj.insertAtLast(60);
// // obj.print()
// // obj.deleteAtFirst();
// // obj.print()
// // obj.deleteAtLast();
// // obj.print()
// // obj.insertAtPos(150,10)
// // obj.print()
// // obj.deleteAtPos(3);
// // obj.print()
