const fs = require('fs');

const rename =  (oldPath, newPath) => {
    try {
      const oldFileExists = fs.existsSync(oldPath);
      const newFileExists = fs.existsSync(newPath);

      if(newFileExists) {
        throw {
            success: false,
            message: 'File already you are trying to rename already exists'
        };
      } else {

      }

      if(oldFileExists) {
        fs.renameSync(oldPath, newPath);
        return {
            success: true,
            message: 'File successfully renamed'
        };
      } else {
        throw {
            success: false,
            message: 'File does not exists'
        };
      }

    } catch (error) {
        return error;
    }
};


const msg = rename('./file123.txt' , './file2.txt');

console.log(msg);