// import Vue from 'vue'

export default {
  state() {
    return {
      pkgList: [
        {
          pkg: 'Base',
          name: '基础组件',
          components: [
            { type: 'Box', name: '盒子', width: 300, height: 200 },
            { type: 'HBox', name: '水平盒子', width: 300, height: 200 },
            { type: 'VBox', name: '垂直盒子', width: 300, height: 200 },
            { type: 'Grid', name: '格子', width: 300, height: 200 },
            { type: 'TextField', name: '文字', width: 200, height: 40 },
            { type: 'Image', name: '图片', width: 200, height: 200 },
          ]
        },
        {
          pkg: 'AntDesign',
          name: 'AntDesign组件',
          components: [
            { type: 'Button', name: '按钮' },
            { type: 'Icon', name: '图标' },
          ]
        },
        {
          pkg: 'My',
          name: '我的组件',
          components: [
            { type: 'Loading', name: '加载' },
            { type: 'Carousel', name: '轮播' },
          ]
        }
      ]
    }
  },
  mutations: {
    // createComponent(state, compPath) {
    //   const [pkg, type] = compPath.split('.')
    //   state.currentNode = node
    //   console.log('设置当前节点：', node)
    //   Vue.$bus.emit('setCurrentNode', node)
    // },
  },
  actions: {
  },
}
