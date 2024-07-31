module.exports = {
  apps : [{
    script: 'npm run start',
  }],

  deploy : {
    production : {
	   // key: 'key.pem',
	    user : 'root',
      host : '194.58.126.86',
      ref  : 'origin/main',
      repo : 'git@github.com:LehaRybkoha/wood-house.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
	'ssh_options': 'ForwardAgent=yes'
    }
  }
};
