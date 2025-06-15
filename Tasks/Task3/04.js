
// async function foo(){
//     return "hello world"
// }

// const result = await foo()
// console.log(result);


let str = 'hello world kya ho rha hai lodu'

function makeFirstUpperCase(str){
    let strArray = str.split(" ");
    let newStr = '';

    for(let i=0; i<strArray.length; i++){
        let char = strArray[i];
        newStr += char[0].toUpperCase() + char.slice(1) + " ";
    }
    
    return newStr;
}

console.log(makeFirstUpperCase(str));