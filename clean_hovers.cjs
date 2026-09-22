const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
        }
    });
    return results;
}

const files = walk('./src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // We specifically want to target these tailwind hover classes that break the unified theme
    content = content.replace(/hover:border-[a-z]+-[0-9]+(\/[0-9]+)?/g, '');
    content = content.replace(/hover:-translate-y-[0-9]+/g, '');
    content = content.replace(/hover:scale-\[?[0-9.]+\]?/g, '');
    content = content.replace(/hover:shadow-[a-zxl2]+/g, '');
    
    // Clean up multiple spaces
    content = content.replace(/\s{2,}/g, ' ');
    content = content.replace(/ className=" /g, ' className="');

    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log(`Cleaned ${file}`);
    }
});
