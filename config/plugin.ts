import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
};


export default plugin;
