<template>
  <div class="container">
    <div class="left">
      <div class="node-panel-container">
        <NodePanel />
      </div>
      <div class="conponent-panel-container">
        <ComponentPanel />
      </div>
    </div>
    <div class="center">
      <div class="tool-panel-container">
        <ToolPanel />
      </div>
      <div class="stage-panel-container">
        <StagePanel />
      </div>
    </div>
    <div class="right">
      <div class="prop-panel">
        <PropPanel />
      </div>
    </div>
  </div>
</template>

<script>
import NodePanel from '@/views/NodePanel.vue'
import ComponentPanel from '@/views/ComponentPanel.vue'
import PropPanel from '@/views/PropPanel.vue'
import ToolPanel from '@/views/ToolPanel.vue'
import StagePanel from '@/views/StagePanel.vue'

export default {
  name: 'Editor',
  components: {
    NodePanel,
    ComponentPanel,
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
html,
body {
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
  height: 100%;
  vertical-align: top;
}

.left {
  position: absolute;
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
  right: 0px;
  top: 0px;
  width: 400px;
  height: 100%;
  border: 1px dashed black;
  overflow: auto;
}

.node-panel-container {
  width: 100%;
  max-height: 50%;
  border: 1px dashed black;
}

.component-panel-container {
  width: 100%;
  max-height: 50%;
  border: 1px dashed black;
}

.tool-panel-container {
  width: 100%;
  height: 48px;
  border: 1px dashed black;
}

.stage-panel-container {
  width: 100%;
  height: calc(100% - 48px);
  border: 1px dashed black;
}

.prop-panel {
  width: 100%;
  height: 100%;
  border: 1px dashed black;
}

</style>