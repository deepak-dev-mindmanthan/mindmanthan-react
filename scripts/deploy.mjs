import { spawn } from 'node:child_process';
import os from 'node:os';

const isWindows = os.platform() === 'win32';

const EC2_HOST = process.env.EC2_HOST || '51.20.34.132';
const EC2_USER = process.env.EC2_USER || 'ubuntu';
const EC2_PORT = process.env.EC2_PORT || '22';
const EC2_APP_DIR = process.env.EC2_APP_DIR || '/home/ubuntu/Mindmanthan';
const EC2_SSH_KEY =
  process.env.EC2_SSH_KEY ||
  (isWindows
    ? 'C:/Users/Sandh/Downloads/ubuntu.pem'
    : '/c/Users/Sandh/Downloads/ubuntu.pem');

const remoteScript = `
set -euo pipefail
export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  . "$NVM_DIR/nvm.sh"
  set +u
  nvm use --lts >/dev/null
  set -u
else
  echo "nvm not found at $NVM_DIR"
  exit 1
fi
echo " Changing directory to ${EC2_APP_DIR}"
cd "${EC2_APP_DIR}"
echo " Fetching latest code..."
git fetch --all --prune
echo "♻️ Resetting to origin/main..."
git reset --hard origin/main
echo " Installing dependencies..."
npm ci
echo "️ Building project..."
npm run build
echo "⚙️ Checking PM2 process..."
if pm2 describe mindmanthan >/dev/null 2>&1; then
  echo " Reloading existing PM2 process..."
  pm2 reload ecosystem.config.cjs --env production
else
  echo " Starting new PM2 process..."
  pm2 start ecosystem.config.cjs --env production
fi
echo " Saving PM2 process list..."
pm2 save
echo "✅ Deployment completed successfully!"
`;

console.log('Starting deployment...');
console.log(`Connecting to ${EC2_USER}@${EC2_HOST}...`);

const sshArgs = [
  '-i',
  EC2_SSH_KEY,
  '-p',
  EC2_PORT,
  '-o',
  'StrictHostKeyChecking=accept-new',
  `${EC2_USER}@${EC2_HOST}`,
  'bash',
  '-s'
];

const child = spawn('ssh', sshArgs, {
  stdio: ['pipe', 'inherit', 'inherit']
});

child.stdin.write(remoteScript);
child.stdin.end();

child.on('close', (code) => {
  if (code !== 0) {
    process.exit(code ?? 1);
  }
  console.log('All done!');
});
