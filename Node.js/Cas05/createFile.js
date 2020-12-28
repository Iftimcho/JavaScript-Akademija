const fs = require('fs');

// fs.exists();
// Ovaa funkcija se koristi za da se proveri dali postoi nekoj fajl.
// fs.existsSync();
// fs.exists();

const create = (filePath, content) => {
    try {
        const fileExists = fs.existsSync(filePath);
        if(fileExists) {
            // na ovoj nacin vo javaScript se vrakja greska. Ke se frli dokolku postoi fajlot.
            throw {
                success: false,
                message: 'File already exists'
            };
        } else {
            // ako ne postoi fajlot go kreirame
            fs.writeFileSync(filePath, content);
            return {
                success: true,
                message: 'The file has been created'
            };
        }
    } catch (error) {
        return error;
    }
};

// const data = {
//     firstName: 'LeBron',
//     lastName: 'James',
// }

create('./create_file.txt', 'Some text to createFile');