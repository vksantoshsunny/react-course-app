const path = require('path')

module.exports = {
    context: __dirname,
    entry: "./src/app.js",
    devtool: "cheap-eval-source-map",
    output: {
        path: path.join(__dirname, 'public/scripts'),
        filename:'app.js'
    },
    resolve: {
        extensions: ['.js','.jsx','.json'],
        modules: [
            path.join(__dirname, "node_modules")
          ]
    },
    stats: {
        colors:true,
        reasons:true,
        chunks:true
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                loader:'babel-loader'

            }
        ]
    }
   
}