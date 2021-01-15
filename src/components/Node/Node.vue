<template>
  <div
    class="node"
    :style="[JSON.parse(attrMap.style), overStyle]"
    @dragenter="onDragEnter"
    @dragover="onDragOver"
    @dragleave="onDragLeave"
    @drop="onDrop"
    @click.stop="onClick"
  >
    <slot></slot>
  </div>
</template>

<script>
import cuid from 'cuid'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Node',
  data() {
    return {
      dragover: false,
      attrMap: {
        name: cuid(),
        style: `{ "width": "100%", "height": "100%" }`,
      },
      attrDescMap: {
        name: {
          type: 'input',
          label: '名字名字名字名字',
        },
        style: {
          type: 'style',
          label: '样式',
        },
      },
    }
  },
  computed: {
    ...mapState({
      currentNode: state => state.editor.currentNode
    }),
    overStyle: function() {
      if (this.dragover) {
        return {
          'outline': '#736e21 dashed 1px',
          'outline-offset': '-1px',
        }
      } else {
        return {
        }
      }
    },
  },
  methods: {
    ...mapMutations(['setCurrentNode']),
    getComponent() {
      return this.$slots.default[0].componentInstance
    },
    getAttrDescMap() {
      return this.attrDescMap
    },
    getAttrMap() {
      return this.attrMap
    },
    setAttr(name, value) {
      this.attrMap[name] = value
    },
    getComponentAttrDescMap() {
      return this.$slots.default[0].componentInstance.attrDescMap
    },
    getComponentAttrMap() {
      return this.$slots.default[0].componentInstance.attrMap
    },
    setComponentAttr(name, value) {
      this.$slots.default[0].componentInstance.attrMap[name] = value
    },
    onDragEnter(event) {
      this.dragover = true
      this.$emit('dragenter', event)
      return false
    },
    onDragOver() {
      event.preventDefault()
    },
    onDragLeave(event) {
      this.dragover = false
      event.preventDefault()
      this.$emit('dragleave', event)
    },
    onDrop(event) {
      const instance = this.$slots.default[0].componentInstance
      if (instance.onDrop instanceof Function) {
        instance.onDrop(event)
        this.dragover = false
      }
    },
    onClick() {
      const newCurrentNode = !this.dragover ? this : null
      this.setCurrentNode(newCurrentNode)
    },
    handleSetCurrentNode(node) {
      this.dragover = (node === this)
    },
    handleAddComp(path) {
      if (this.currentNode !== this) {
        return
      }
      if (!this.$slots.default || !this.$slots.default[0]) {
        return
      }
      const addComp = this.$slots.default[0].componentInstance.addComp
      if (typeof addComp === 'function') {
        addComp(path)
      }
    },
  },
  created() {
    this.$bus.on('setCurrentNode', this.handleSetCurrentNode)
    this.$bus.on('addComp', this.handleAddComp)
  },
};
</script>

<style lang="less" scoped>
</style>