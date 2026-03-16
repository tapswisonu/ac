import fs from 'fs';
import path from 'path';

const marketingDir = path.join(process.cwd(), 'app', '(marketing)');

// Create directory
if (!fs.existsSync(marketingDir)) {
  fs.mkdirSync(marketingDir, { recursive: true });
}

// Files/folders to move
const itemsToMove = ['page.tsx', 'about', 'privacy-policy', 'startup-services'];

itemsToMove.forEach(item => {
  const oldPath = path.join(process.cwd(), 'app', item);
  const newPath = path.join(marketingDir, item);
  
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Moved ${item} to (marketing)`);
  } else {
    console.log(`${item} does not exist in app/`);
  }
});
