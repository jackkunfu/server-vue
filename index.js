// 创建renderer
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.temp.html', 'utf-8')
});

// 与服务端集成
const server = require('express')()
const createVue = require('./app')
server.get('*', (req, res) => {
    var transData = {
        title: 'server-vue',
        url: req.url
    }
    // var app = createVue({
    //     url: req.url
    // })
    var app = createVue()
    renderer.renderToString(app, transData, (err, html) => {
        if(err){
            console.log(err)
            res.status(500).end('Internal Server Error');
            return
        }
        
        // console.log(html)

        // 返回html片段
        // var boot = require('./boot');
        // res.end(boot.joinHtml(html))   // 用拼接的方式

        res.end(html)   // require('vue-server-renderer').createRenderer配置 template 指定模板的方式
    })
})
server.listen(3000);