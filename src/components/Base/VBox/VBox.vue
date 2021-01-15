<template>
  <div class="vbox" :style="JSON.parse(attrMap.style)">
    <div class="item" v-for="(item, index) in items" :key="index" >
      <Node>
        <component :is="item.component"></component>
      </Node>
    </div>
  </div>
</template>

<script>
import cuid from 'cuid'
import Node from '@/components/Node'

export default {
  name: 'VBox',
  components: {
    Node,
  },
  data() {
    return {
      items: [],
      attrMap: {
        name: cuid(),
        style: '{}',
      },
      attrDescMap: {
        name: {
          type: 'input',
          label: '名字',
        },
        style: {
          type: 'style',
          label: '样式',
        },
      },
    }
  },
  methods: {
    addComp(path) {
      console.log(`Vbox增加子组件: ${path}`)
      if (path === 'Base/VBox') {
        this.$message.warning('不允许嵌套VBox')
        return
      }
      this.items.push({ component: () => import(`@/components/${path}`) })
    }
  }
};
</script>

<style lang="less" scoped>
.item {
  display: inline;
}
</style>