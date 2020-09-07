export default {
  'Base': {
    package: 'Base',
    name: '基础组件',
    components: {
      'Box': { type: 'Box', name: '盒子' },
      'HBox': { type: 'HBox', name: '水平盒子' },
      'VBox': { type: 'VBox', name: '垂直盒子' },
      'Grid': { type: 'Grid', name: '格子' },
      'Text': { type: 'Text', name: '文字' },
      'Image': { type: 'Image', name: '图片' },
    }
  },
  'AntDesign': {
    package: 'AntDesign',
    name: 'AntDesign组件',
    components: {
      'Button': { type: 'Button', name: '按钮' },
      'Icon': { type: 'Icon', name: '图标' },
    }
  },
  'My': {
    package: 'My',
    name: '我的组件',
    components: {
      'Loading': { type: 'Loading', name: '加载' },
      'Carousel': { type: 'Carousel', name: '轮播' },
    }
  }
}