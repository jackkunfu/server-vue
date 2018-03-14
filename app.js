// 服务端需要构造个工厂函数，每个用户的浏览器中都是新的vue实例
const Vue = require('vue');
module.exports = function(ctx){
    return new Vue({
        data: ctx || {},
        template: '<div></div>'
    })
}