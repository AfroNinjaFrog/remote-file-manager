const fs = require('fs');
export class FileBl {
    static readDirectory(directory: string): string[] {
        console.log(directory);
        return fs.readdirSync(directory);
    }

}