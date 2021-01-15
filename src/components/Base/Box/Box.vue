<template>
  <div class="box">
    <div
      class="item"
      v-for="(item, index) in items"
      :key="index"
      :style="item.style"
      @mouseenter="(event) => onEnter(index, event)"
      @mouseleave="(event) => onLeave(index, event)"
      @dragenter="(event) => onEnter(index, event)"
      @dragleave="(event) => onLeave(index, event)"
      draggable="true"
      @dragstart="(event) => onDragStart(index, event)"
      @dragend="(event) => onDragEnd(index, event)"
    >
      <Node :ref="'node' + index">
        <component :is="item.component"></component>
      </Node>
    </div>
  </div>
</template>

<script>
import Node from '@/components/Node'
import { getDropPos, getDragPos } from '@/utils/helper'

export default {
  name: 'Box',
  components: {
    Node
  },
  data() {
    return {
      items: [],
      selectedIndex: -1
    }
  },
  methods: {
    onEnter(index) {
      console.log('进入：', index)
      this.selectedIndex = index
    },
    onLeave(index) {
      console.log('离开：', index)
      if (this.selectedIndex === index) {
        this.selectedIndex = -1
      }
      console.log('离开后：', this.selectedIndex)
    },
    onDrop(event) {
      if (this.selectedIndex !== -1) {
        return
      }
      const compAdd = event.dataTransfer.getData('application/component-add')
      if (compAdd) {
        const p = getDropPos(event)
        console.log('丢到盒子里：', compAdd, event, p.left, p.top)
        const [pkg, type] = compAdd.split('.')
        // 获取组件基本信息
        const info = this.$store.state.packages[pkg].components[type]
        // 添加组件
        this.items.push({
          info,
          left: p.left,
          top: p.top,
          lastOffsetX: event.offsetX,
          lastOffsetY: event.offsetY,
          style: {
            display: 'block',
            position: 'relative',
            // left: `${p.left - info.width / 2}px`,
            // top: `${p.top - info.height / 2}px`,
            left: `0px`,
            top: `0px`,
            width: `${info.width}px`,
            height: `${info.height}px`,
          },
          component: () => import(`@/components/${pkg}/${type}`)
        })
        event.preventDefault()
      }
      const compMove = event.dataTransfer.getData('application/component-move')
      if (compMove) {
        event.preventDefault()
      }
    },
    onDragStart(index, event) {
      console.log('ComponentPanel onDragStart', event)
      event.dataTransfer.setData('application/component-move', 'move')
      const item = this.items[index]
      item.lastOffsetX = event.offsetX
      item.lastOffsetY = event.offsetY
    },
    onDragEnd(index, event) {
      console.log('ComponentPanel onDragEnd', event)
      const p = getDragPos(event)
      console.log('拖拽结束：', event, p.left, p.top)
      const item = this.items[index]
      console.log(event.offsetX, event.offsetY, item.lastOffsetX, item.lastOffsetY)
      item.left += event.offsetX - item.lastOffsetX
      item.top += event.offsetY - item.lastOffsetY
      item.style.left = `${item.left}px`
      item.style.top = `${item.top}px`
      this.$set(this.items, index, item)
    }
  }
};
</script>

<style lang="less" scoped>
</style>