import { Service } from "egg";

// const Service = require('egg').Service;

class LeeService extends Service {
  async getGirl(id) {
    // 因为没有真实连接数据库，所以模拟数据
    return {
      id,
      name: "小红",
      age: 18,
    };
  }
}

module.exports = LeeService;
