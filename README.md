一、项目介绍
【小柚智汇】是一个方便好用的学习生活集成平台，小柚帮你记录美好生活，让你不止”小有智慧“，更让你做一个有效学习，高效管理的西邮人。
【柚子时光】回忆不变址，帮你记录迭代学习，节省存储空间，留住你的学习日志。
【柚子打卡】帮你定位签到，日常打卡
【柚新通知】班委，老师通知一部到位，迅速通知到位
【每周柚记】每周总结，让你的学习更有成就
【柚子体积】个人等级，交流点赞。
二、项目下载
这个仓库是前端代码组
1.npm install

2.npm run serve
三、项目架构
```
|-- xuzh  					#项目根目录
  |--public                     #项目入口文件
  |--src                        #程序代码
    |--common                           #公用方法和样式
    |--componets                        #公共组件
    |--assets                           #静态资源文件目录
    |--router                           #路由相关
    |--utils                            #第三方工具和api
    |--views                            #vue组件
    |--App.vue                          #全局vue入口文件
    |--main.js			                #vue入口文件			
  |--.browerslistrc
  |--.editorconfig                  #定义代码格式
  |--.eslintrc.js                   #ES6语法规范配置
  |-- .gitignore 					#不提交到库中的文件配置
  |--babel.config.js                #es6转码配置
  |--package.json                   #包管理文件配置
  |-- vue.config.js 				#打包配置文件
