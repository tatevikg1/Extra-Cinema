const path = require('path');

process.env.VUE_APP_API_URL = "http://127.0.0.1:8000"

// process.env.VUE_APP_API_URL = "http://213.139.210.97"

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "COM": path.join(__dirname, 'client/src/components/'),
            }
        }
    },
}