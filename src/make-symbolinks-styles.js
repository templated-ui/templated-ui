const fs = require('fs');
const path = require('path');
const stylesContent = fs.readFileSync(path.join(__dirname, 'styles.scss'), { encoding: 'utf-8' });
const validExts = {
    eot: 1, ttf: 1, woff: 1, woff2: 1, ijmap:true, svg: 1
}
for (const line of stylesContent.split('\n')) {
    const m = /['][~](.+)[']/.exec(line);
    if (!m) continue;
    const pathStyleMod = m[1].split('/');
    const path0 = path.join(process.cwd(), 'node_modules', pathStyleMod.slice(0, pathStyleMod.length - 1).join('/'));
    const childFiles = fs.readdirSync(path0);
    for (const childFile of childFiles) {
        const ext = path.extname(childFile).replace('.', '');
        if (!validExts[ext]) continue;
        const fullPath=path.join(path0,childFile);
        try{ 
        fs.symlinkSync(fullPath,path.join(process.cwd(),'dist',childFile),'file');
        }catch(exc){}
        console.log( fullPath);
    }
}