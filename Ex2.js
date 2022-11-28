import fs from 'fs' 

function myCallBack(error, content) {
    const lines = content.split("\n");
    const data = [];

  for (let line of lines) {
        console.log("line =>", line);
        const parts = line.split(",");
    
        const file_parts = {};
        file_parts.name = parts[0];
        file_parts.file_content = parts[1];

        data.push(file_parts);
        console.log(data);
        
    }

    for (let item of data) {
        const file_name = item.name;
        const content_of_file = item.file_content;

        fs.writeFile(file_name, content_of_file, function (error){
            if (error) throw new Error ('File not created!');
            console.log('Saved!');
        })
    }
    
}

fs.readFile('./file.csv', 'utf-8', myCallBack);