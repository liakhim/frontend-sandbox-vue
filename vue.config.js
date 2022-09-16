// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: '@import "~@/styles/_main.scss";'
            }
        }
    }
}
