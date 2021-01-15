<template>
  <div class="container" @dragenter="onDragEnter" @dragover="onDragOver" @dragleave="onDragLeave" @drop='onDrop'>
    <div class="item" v-for="(item, index) in items" :key="index" >
      <component :is="item.component"></component>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HBox',
  data() {
    return {
      items: []
    }
  },
  methods: {
    onDragEnter() {
      return false
    },
    onDragOver(event) {
      event.preventDefault()
    },
    onDragLeave() {
      event.preventDefault()
    },
    onDrop(event) {
      event.preventDefault()
      const compName = event.dataTransfer.getData('application/component-add')
      console.log('丢到水平盒子里', compName, event.target)
      const [pkg, type] = compName.split('.')
      this.items.push({ component: () => import(`@/components/${pkg}/${type}`) })
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  border: 4px solid green;
}
.item {
  display: inline-block;
}
</style>