# koa-init

  ---------


## Dependent

```
"koa": "~0.14.0",
"koa-bodyparser": "~1.3.0",
"koa-logger": "~1.2.2",
"koa-mount": "~1.3.0",
"koa-router": "~3.8.0",
"koa-static": "~1.4.8",
"lodash": "~2.4.1",
"log4js": "~0.6.21",
"xtemplate": "~4.1.3",
"xtpl": "~3.1.9"
```

## Test

```
npm test
```


## Run in local  

```
npm start
```

## Deploy

```
npm run deploy
```

## Tree

```
├── README.md
├── app.js              // 程序入口文件
├── makefile            // 构建脚本
├── package.json   
├── routes.js           // 路由
├── config.js           // 配置
├── common      
│   ├── helper.js       // 通用方法
│   ├── middleware.js   // 中间件
│   └── xtemplate.js    // xtpl helpers
├── controller
│   └── common.js
├── test                // 测试文件夹
└── view                // 视图
```
