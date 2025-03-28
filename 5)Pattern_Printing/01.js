

// Q-1
// let n = 4;
// for(let i=1;i<=n;i++){
//     let row = "";
//     for(let j=1;j<=n;j++){
//         row += "* ";
//     }
//     console.log(row);
// }

// Q-2
// let n = 4;
// for(let i=1;i<=n;i++){
//     let row = "";
//     for(let j=1;j<=n;j++){
//         row += j + " ";
//     }
//     console.log(row);
// }

// Q-3
// let n = 4;
// for(let i=1;i<=n;i++){
//     let row = "";
//     for(let j=1;j<=n;j++){
//         row += j + " ";
//     }
//     console.log(row);
// }

// Q-4
// let n = 8;
// for(let i=1;i<=n;i++){
//     let row = "";
//     for(let j=1;j<=n+1-i;j++){
//         row += "* ";
//     }
//     console.log(row);
// }

// +++++ Second Method +++++
// let n = 8;
// for(let i=1;i<=n;i++){
//     let row = "";
//     for(let j=n;j>=i;j--){
//         row += "* ";
//     }
//     console.log(row);
// }

// +++++ Third Method +++++
// let n = 8;
// for(let i=n;i>=1;i--){
//     let row = "";
//     for(let j=1;j<=i;j++){
//         row += "* ";
//     }
//     console.log(row);
// }

// Q-5
// let n = 5;
// for(let i=1;i<=n;i++){
//     let row = "";
//     for(let j=1;j<=i;j++){
//         row += j+" ";
//     }
//     console.log(row);
// }

// Q-6
// let n = 4;
// for(let i=1;i<=n;i++){
//     let row = "";
//     for(let j=1;j<=n+1-i;j++){
//         row += j+" ";
//     }
//     console.log(row);
// }

// Q-7
// let n = 4;
// for(let i=1;i<=n;i++){
//     let row = "";
//     for(let j=1;j<=2*n-1;j++){
//         if(j%2!==0)
//             row += j+" ";
//     }
//     console.log(row);
// }

// Q-8
// let n = 4;
// for(let i=1;i<=n;i++){
//     let row = "";
//     for(let j=1;j<=2*n-1;j+=2){
//         if(j%2!==0)
//             row += j+" ";
//     }
//     console.log(row);
// }

// +++++ Using extra variable ++++++

// let n = 4;
// for(let i=1;i<=n;i++){
//     let a =1;
//     let row = "";
//     for(let j=1;j<=n;j++){
//         row += a+" ";
//         a+=2;
//     }
//     console.log(row);
// }

// Q-9
// let n = 4;
// for(let i=1;i<=n;i++){
//     let a =1;
//     let row = "";
//     for(let j=1;j<=i;j++){
//         row += a+" ";
//         a+=2;
//     }
//     console.log(row);
// }

// Q-10
// let n = 5;
// for(let i=1;i<=n;i++){
//     let row = "";
//     let num = 65;
//     for(let j=1;j<=n;j++){
//         row += String.fromCharCode(num)+" ";
//         num++;
//     }
//     console.log(row);
// }

// Q-10
// let n = 5;
// for(let i=1;i<=n;i++){
//     let row = "";
//     let num = 65;
//     for(let j=1;j<=i;j++){
//         row += String.fromCharCode(num)+" ";
//         num++;
//     }
//     console.log(row);
// }

// Q-11
// let n=5;
// for(let i=1;i<=n;i++){
//     let row = "";
//     let ch = 65;
//     for(let j=1;j<=i;j++){
//         if(i%2){
//             row += j+" ";
//         }
//         else{
//             row += String.fromCharCode(ch)+" ";
//             ch++;
//         }
//     }
//     console.log(row);
// }

// Q-12
// let n=7;   // given number is always odd
// for(let i=1;i<=n;i++){
//     let row = "";
//     for(let j=1;j<=n;j++){
//         let a = Math.floor(n/2+1);
//         if(i==a || j==a)
//             row += "*"
//         else
//             row += " ";
//     }
//     console.log(row);
// }

// Q-13
// let n=10;
// for(let i=1;i<=n;i++){
//     let row = "";
//     for(let j=1;j<=n;j++){
//         if(i==1 || i==n || j==1 || j==n)
//             row += "*"
//         else
//             row += " ";
//     }
//     console.log(row);
// }

// Q-14
// let n=5;  //number can only be odd...
// for(let i=1;i<=n;i++){
//     let row = "";
//     for(let j=1;j<=n;j++){
//         if(i==j || j==n+1-i)
//             row += "* "
//         else
//             row += " ";
//     }
//     console.log(row);
// }

// ++++++ Second Method ++++++

// let n=5;  //number can only be odd...
// for(let i=1;i<=n;i++){
//     let row = "";
//     for(let j=1;j<=n;j++){
//         if(i==j || i+j==n+1)
//             row += "* "
//         else
//             row += " ";
//     }
//     console.log(row);
// }

// Q-15

// let n = 4;
// let a = 1;
// for(let i=1;i<=n;i++){
//     let row = "";
//     for(let j=1;j<=i;j++){
//         row += a+" ";
//         a++;
//     }
//     console.log(row);
// }

// let num=5;
// for(let i=1;i<=num;i++){
//     let row="";
//     for(let j=num;j>=i;j--){
//         row += "* ";
//     }
//     console.log(row);
// }

// let n = 5;
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i;j++){
//         process.stdout.write(" ");
//     }
//     for(let k=1;k<=i;k++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

// let n = 5;
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i==j || (j==n+1-i)) process.stdout.write("* ");
//         else process.stdout.write("  ")
//     }
//     console.log();
// }

// let n = 9;
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=2*n-1;j++){
//         if(i==j || i+j==2*n) process.stdout.write("* ");
//         else process.stdout.write("  ")
//     }
//     console.log();
// }

let n = 10;

function butterfly(n){
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            process.stdout.write("* ");
        }
        for(let k=1;k<=n-i;k++){
            process.stdout.write("  ");
        }
        for(let k=1;k<=n-i;k++){
            process.stdout.write("  ");
        }
        for(let j=1;j<=i;j++){
            process.stdout.write("* ");
        }
        console.log();
    }
    for(let i=1;i<=n-1;i++){
        for(let j=1;j<=n-i;j++){
            process.stdout.write("* ");
        }
        for(let j=1;j<=i;j++){
            process.stdout.write("  ");
        }
        for(let j=1;j<=i;j++){
            process.stdout.write("  ");
        }
        for(let j=1;j<=n-i;j++){
            process.stdout.write("* ");
        }
        console.log();
    }
}

butterfly(n);