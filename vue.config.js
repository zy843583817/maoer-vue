module.exports={
    devServer:{
        proxy:{
            '/ajax':{
                target:'https://www.missevan.com',
                changeOrigin:true,
                 pathRewrite:{
                    '^/ajax':''
                },
                secure: false,
                ws: true
            },
        },
        disableHostCheck: true
    }
}