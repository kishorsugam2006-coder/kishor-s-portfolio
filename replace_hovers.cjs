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

    // Replace hover:text-blue-500 dark:hover:text-cyan-400 with hover:text-[var(--hover-text)]
    content = content.replace(/hover:text-blue-500 dark:hover:text-cyan-[0-9]{3}/g, 'hover:text-[var(--hover-text)]');
    content = content.replace(/hover:text-blue-500/g, 'hover:text-[var(--hover-text)]');
    
    // Replace group-hover:text-blue-500
    content = content.replace(/group-hover:text-blue-500 dark:group-hover:text-cyan-[0-9]{3}/g, 'group-hover:text-[var(--hover-text)]');
    content = content.replace(/group-hover:text-blue-500/g, 'group-hover:text-[var(--hover-text)]');
    
    // Replace hover:bg-blue-500/10
    content = content.replace(/hover:bg-blue-500\/10/g, 'hover:bg-[rgba(var(--hover-rgb),0.10)]');
    
    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
    }
});
