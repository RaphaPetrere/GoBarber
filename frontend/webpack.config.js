const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            //Each and every rule is inside an object. Each object is a different Loader
            {
                //The first one will understand how to convert JS files using BABEL
                test: /\.js$/, //The string NEEDS to end with a .js extension, that's why we use the $
                exclude: /node_modules/, //Node_Modules files won't run this BABEL process, since it should be done by the library itself
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
};