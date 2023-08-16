const nextConfig = {
	experimental: {
	  appDir: true,
	},
	images: {
	  domains: ['lh3.googleusercontent.com'],
	},
	webpack(config) {
	  config.experiments = {
			...config.experiments,
			topLevelAwait: true,
	  };
	  return config;
	},
	
};
  
module.exports = nextConfig;
  