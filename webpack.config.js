const path = require('path');

module.exports = {
    context: __dirname,
    entry: "./src/app.js",

    output: {
        path: path.join(__dirname, 'public/scripts'),
        filename:'app.js'
    }
   
};