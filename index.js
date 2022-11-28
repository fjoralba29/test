import fs from 'fs'; 

function myCallBack (error, content) {
  const lines = content.split("\n");
  const data = [];

  for (let line of lines) {
        console.log("line =>", line);
        const tokens = line.split(",");
    
        const clear_data = {};
        clear_data.sec = tokens[0];
        clear_data.word = tokens[1];

        data.push(clear_data); 
    
   }
  for (let item of data) {
      const number = item.sec; 
      setTimeout(() => {
        console.log(item.word)
      }, number);
    }
        
}

fs.readFile('./data.csv', 'utf-8', myCallBack);