const withPWA = require('next-pwa')

module.exports = {
    images: {
      domains: ['http://localhost:8210', 'localhost', 'develop'],
    },
    pwa: {
        dest: 'public'
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: {
          // test: /\.(js|ts)x?$/,
          // for webpack 5 use
          and: [/\.(js|ts)x?$/]
        },
        
        use: ['@svgr/webpack'],
    });
        return config;

    },
    module: {
      rules: [
        {
          test: /pdf\.worker\.(min\.)?js/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[contenthash].[ext]',
                publicPath: '_next/static/worker',
                outputPath: "static/worker"
              },
            },
          ],
        },
      ],
    },
    reactStrictMode: true,
    env: {
      BASE_URL: process.env.BASE_URL,
    }
}