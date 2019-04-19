'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async test() {
    const { ctx } = this;
    ctx.body = {
      status: 200
    };
  }
}

module.exports = HomeController;
