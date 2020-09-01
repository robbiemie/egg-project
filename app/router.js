'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // 发布文章
  router.post('/article/create', controller.article.create)
  // 获取列表
  router.get('/article/lists', controller.article.lists)
  router.get('/prodution', controller.prodution.index)
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
};
