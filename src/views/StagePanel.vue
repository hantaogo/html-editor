<template>
  <div class="container" @dragenter="onDragEnter" @dragover="onDragOver" @dragleave="onDragLeave" @drop='onDrop'>
    <div ref="root"></div>
  </div>
</template>

<script>
export default {
  name: 'StagePanel',
  data() {
    return {
    }
  },
  methods: {
    onDragEnter() {
      console.log('进入')
      return false
    },
    onDragOver(event) {
      event.preventDefault()
    },
    onDragLeave() {
      console.log('离开')
      event.preventDefault()
    },
    onDrop(event) {
      console.log('StagePanel onDrop', event)
      event.preventDefault()
      const compType = event.dataTransfer.getData('application/component-add')
      console.log('拖拽数据：', compType)
      const node = document.createElement('p')
      const textNode = document.createTextNode(compType)
      node.appendChild(textNode)
      this.$refs.root.appendChild(node)
    }
  }
};
</script>

<style lang="less" scoped>
.container:-moz-drag-over {
  border: 4px solid green;
}
</style>