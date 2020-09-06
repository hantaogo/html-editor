<template>
  <div class="container">
    <div class="left">
      <div class="conponent-panel-container"><ComponentPanel /></div>
      <div class="node-panel-container"><NodePanel /></div></div>
    <div class="center">
      <div class="tool-panel-container"><ToolPanel /></div>
      <div class="stage-panel-container"><StagePanel /></div>
    </div>
    <div class="right"><PropPanel /></div>
  </div>
</template>

<script>
import ComponentPanel from '@/views/ComponentPanel.vue'
import NodePanel from '@/views/NodePanel.vue'
import PropPanel from '@/views/PropPanel.vue'
import ToolPanel from '@/views/ToolPanel.vue'
import StagePanel from '@/views/StagePanel.vue'

export default {
  name: 'Editor',
  components: {
    ComponentPanel,
    NodePanel,
    PropPanel,
    ToolPanel,
    StagePanel,
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>

html, body {
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
}

.left {
  position: relative;
  left: 0px;
  top: 0px;
  width: 400px;
  height: 100%;
  border: 1px dashed black;
  overflow: auto;
}

.center {
  position: absolute;
  left: 400px;
  top: 0px;
  width: calc(100% - 800px);
  height: 100%;
  overflow: hidden;
}

.right {
  position: absolute;
  left: calc(100% - 400px);
  top: 0px;
  width: 400px;
  height: 100%;
  border: 1px dashed black;
  overflow: auto;
}

.component-panel-container {
  position: relative;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 50%;
  border: 1px dashed black;
  overflow: auto;
}

.node-panel-container {
  position: relative;
  left: 0px;
  top: 50%;
  width: 100%;
  height: calc(100% - 400px);
  border: 1px dashed black;
  overflow: auto;
}

.tool-panel-container {
  width: 100%;
  height: 48px;
  border: 1px dashed black;
  overflow: hidden;
}

.stage-panel-container {
  width: 100%;
  height: calc(100% - 48px);
  border: 1px dashed black;
  overflow: hidden;
}

</style>