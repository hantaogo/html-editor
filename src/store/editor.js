import Vue from 'vue'

export default {
  state() {
    return {
      currentNode: null, // 当前节点，VueComponent：@/Components/Node
    }
  },
  mutations: {
    setCurrentNode(state, node) {
      state.currentNode = node
      Vue.bus.emit('setCurrentNode', node)
    },
  },
  actions: {
  },
}
