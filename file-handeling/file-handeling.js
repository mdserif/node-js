const fs =require("fs");
const os =require("os")

// fs= file system
// Synchronous or Blocking write and read

// fs.writeFileSync("./test.txt","hello world")
// const result = fs.readFileSync("./contact.txt","utf-8")
// console.log(result)

//Asynchronous or Non-Blocking read and write

// fs.writeFile("./test.txt","my name is md serif",(err)=>{})
// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(result)
//     }
// })

// // Sync append 
// fs.appendFileSync("./test.txt",Date.now().toLocaleString())

// //sync copy
// fs.cpSync()

// // sync delete
// fs.unlink()

console.log(os.cpus().length)
//we can increase our thread upto our cpu cores of our machine