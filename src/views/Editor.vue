<template>
  <div class="container">
    <a-row>
      <a-col :span="4">
        <a-row>
          <a-col :span="24">
            <ComponentPanel/>
          </a-col>
          <a-col :span="24">
            <NodePanel/>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="14">
        <a-row>
          <a-col :span="24">
            <ToolPanel/>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <StagePanel/>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="6">
        <PropPanel/>
      </a-col>
    </a-row>
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
  data() {
    return {
      mountedList: [],
    }
  },
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
}
</style>