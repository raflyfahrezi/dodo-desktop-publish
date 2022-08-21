const nextConfig = {
    experimental: {
        emotion: true,
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.target = 'electron-renderer'
        }

        return config
    },
}

module.exports = nextConfig
