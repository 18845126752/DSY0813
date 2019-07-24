const path = require("path");0
module.exports={
    entry:{
        index:"./src/index.js"
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:'[name].js',
    },
    // plugins:[
    //     new HtmlWebpackPlugin({
    //         minify:{
    //             removeArrtibuteQuotes:true
    //         },
    //         hash:true,
    //         filename:'index.html',
    //         template:'src/index.html',
    //     })
    // ],
    // devServer:{
    //     contentBase:path.resolve(__dirname,"dist"),
    //     host:"localhost",
    //     compress:true,
    //     port:"8081",
    // }
}