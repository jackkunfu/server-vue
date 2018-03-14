// 创建vue实例
const Vue = require('vue');
// const app = new Vue({
//     template: `<div>Hello World</div>`
// })

// 创建renderer
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.temp.html', 'utf-8')
});

// 将vue实例渲染成html
// renderer.renderToString(app, (err, html) => {
//     if(err) throw err
//     console.log(html)
// })

// 与服务端集成
const server = require('express')()
server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            reqUrl: req.url
        },
        template: '<div></div>'
    })
    var transData = {
        title: 'server-vue'
    }
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