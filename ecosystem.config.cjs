module.exports = {
  apps: [
    {
      name: 'mindmanthan',
      script: 'main.js',
      instances: 'max',   
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'development',
        PORT: 5173
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
};