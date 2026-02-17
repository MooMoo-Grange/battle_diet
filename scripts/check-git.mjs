import { execSync } from 'child_process';

// Check what the original main branch had
try {
  const log = execSync('git log --oneline --all -20', { cwd: '/vercel/share/v0-project', encoding: 'utf-8' });
  console.log('Git log:');
  console.log(log);
} catch (e) {
  console.log('Git log error:', e.message);
}

// Check what files were in the initial commit
try {
  const files = execSync('git show --stat HEAD~1 2>/dev/null || git log --diff-filter=A --name-only --format="" HEAD', { cwd: '/vercel/share/v0-project', encoding: 'utf-8' });
  console.log('Files in recent commits:');
  console.log(files);
} catch (e) {
  console.log('Files error:', e.message);
}

// Check the original main branch files
try {
  const mainFiles = execSync('git ls-tree --name-only -r origin/main 2>/dev/null || git ls-tree --name-only -r main', { cwd: '/vercel/share/v0-project', encoding: 'utf-8' });
  console.log('Original main branch files:');
  console.log(mainFiles);
} catch (e) {
  console.log('Main files error:', e.message);
}

// Check what dev script was in original package.json
try {
  const origPkg = execSync('git show main:package.json 2>/dev/null || echo "not found"', { cwd: '/vercel/share/v0-project', encoding: 'utf-8' });
  console.log('Original package.json:');
  console.log(origPkg);
} catch (e) {
  console.log('Original package.json error:', e.message);
}
