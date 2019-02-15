const URL = 'http://gallery.dev.webant.ru'

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: URL,
                ws: true,
                changeOrigin: true
            },
            '/media': {
                target: URL
            },
            '/oauth': {
                target: URL

            }
        }
    }
}

