import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1635505318181_5502';

  // add your egg config in here
  config.middleware = [];

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '114.55.101.4',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'test',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  config.ejs = {
    // delimiter: '$',
  };

  config.session = {
    key: 'PANG_SESS', // 设置Key的默认值
    httpOnly: true, // 设置服务端操作
    maxAge: 1000 * 60, // 设置最大有效时间
    renew: true, // 页面有访问动作自动刷新session
  };

  // config.middleware = [ 'counter' ];

  config.static = {
    prefix: '/assets/',
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
