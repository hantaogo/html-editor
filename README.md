# Html Editor
Html Editor - 可视化编辑器

## 特性：
* 目标：让非专业人士可以很方便快捷的修改网站，减少代码编写
```
组件设计器
    外观
        所见即所得
            尽量与运行时外观一致
        操作体验好
            选择
                编辑时是否可见
                锁定（锁定后不可选择）
                从节点树操作
                是否可见
            拖拽移动
            拖拽放置到子节点
            编辑内容
                宽
                高
                最小宽度
                最小高度
                最大宽度
                最大高度
                边框尺寸
                坐标（相对定位容器内有效）
        内置组件
            文本
                文本内容（是否只是编辑时有效）
                字体
                字体尺寸
                字体粗细
                横向对齐方式
                纵向对齐方式
            图标
            图片
            栅格容器
            相对定位容器
    数据
        数据可视化
        固定数据
        编辑时数据（为了编辑时看效果）
        挂载脚本(人工编写)
    事件
        发送事件
        监听事件
        事件处理脚本(人工编写)
    生成
        组件索引json
        每种组件一个json文件
        生成后保存到服务器

运行器
    加载并运行组件json

路由管理器
    设置路由

框架
    数据库操作：创建数据库表，定制列表展示，增删改查
    常用功能：用户，角色，权限，业务流程，第三方服务接口
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Compiles and minifies for development
```
npm run build-dev
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
