# egg-project


## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org


## Controller(控制器)



```js
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // 返回纯文本
    ctx.body = 'hello, egg';
    // 返回
  }
}
module.exports = HomeController;

```


## Router(路由)

路由设置不同的请求类型，具体格式如下:

```js
  // 接收get请求
  router.get('/prodution/detail', controller.prodution.detail)
  // 接收动态路由参数
  router.get('/prodution/detail2/:id', controller.prodution.detail2)
  // 接收post请求
  router.post('/prodution/create', controller.prodution.create)
  // 接收put请求
  router.put('/prodution/update/:id/:sub', controller.prodution.update)
  // 接收delete请求
  router.delete('/prodution/delete/:id', controller.prodution.delete)
```

## Service(服务)

```js
const Service = require("egg").Service

class ProdutionService extends Service {
  async index() {
    return {
      id: 100,
      name: "测试"
    }
  }
}

module.exports = ProdutionService
```


## 模板引擎

```js
// config/plugin.js
// 插件配置
exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};
// config/config.default.js
// 模板配置
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
```

https://github.com/eggjs/egg-view-nunjucks