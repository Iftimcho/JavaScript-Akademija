const fs = require('fs');

const read = (filePath) => {
    try {
        const fileExists = fs.existsSync(filePath);

        if(fileExists) {
            const content = fs.readFileSync(filePath, 'utf-8');
            return {
                success: true,
                data: content 
            }
                
        } else {
            throw {
                success: false,
                message: 'File does not exists'
            }
        }
    } catch(error) {
        return error;
    }
}

const readContent = read('./file.txt');

console.log(readContent);
console.log(readContent.data);