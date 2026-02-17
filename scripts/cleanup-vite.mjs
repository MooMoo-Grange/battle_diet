import { rmSync, unlinkSync, existsSync } from 'fs';

const sandboxBase = '/vercel/share/v0-next-shadcn';

// Remove Vite binary symlinks
const viteBin = `${sandboxBase}/node_modules/.bin/vite`;
if (existsSync(viteBin)) {
  try {
    unlinkSync(viteBin);
    console.log('Removed vite binary');
  } catch (e) {
    console.log('Could not remove vite binary:', e.message);
  }
}

// Remove Vite package
const viteDir = `${sandboxBase}/node_modules/vite`;
if (existsSync(viteDir)) {
  try {
    rmSync(viteDir, { recursive: true, force: true });
    console.log('Removed vite package directory');
  } catch (e) {
    console.log('Could not remove vite directory:', e.message);
  }
}

// Remove any index.html if it exists
const indexHtml = `${sandboxBase}/index.html`;
if (existsSync(indexHtml)) {
  try {
    unlinkSync(indexHtml);
    console.log('Removed index.html');
  } catch (e) {
    console.log('Could not remove index.html:', e.message);
  }
}

console.log('Cleanup complete');
