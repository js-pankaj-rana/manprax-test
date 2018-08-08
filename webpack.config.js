const path = require('path');

module.exports = {
    entry: './entry.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js' 
    },

    module : {
        rules: [
                {
                    test: /\.js$/,
                    use: 'babel-loader',
                    exclude: path.join(__dirname, 'node_module')
                },
                {
                    test: /\.scss$/,
                    loaders: 'style-loader!css-loader!sass-loader',
                    exclude: path.join(__dirname, 'node_module')
                },
                {
                    test: /\.(pdf|jpg|png|gif|svg|ico)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: '[path][name].[ext]',
                            }
                        },

                    ]
                }
           ]
        },
        //setting the source map file
        devtool: 'cheap-module-eval-source-map',
        //setting the development server
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            port: 3000
          }
    }