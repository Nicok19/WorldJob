module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.externals = config.externals || [];
        config.externals.push({
          'jest': 'jest',
        });
      }
      return config;
    },
  };