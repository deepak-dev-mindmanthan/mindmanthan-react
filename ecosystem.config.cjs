module.exports = {
  apps: [
    {
      name: 'mindmanthan',
      script: 'main.js',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'development',
        PORT: 5173
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 5173
      }
    }
  ]
};
