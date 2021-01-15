<template>
  <div class="stage-panel" ref="stagePanel" :style="[stagePanelStyle]">
    <div class="stage" ref="stage" :style="[stageStyle]">
      <Node>
        <VBox ref="root"/>
      </Node>
    </div>
  </div>
</template>

<script>
import Node from '@/components/Node'
import VBox from '@/components/Base/VBox'

export default {
  name: 'StagePanel',
  components: {
    Node,
    VBox,
  },
  computed: {
    stagePanelStyle: function() {
      return {
        cursor: this.cursor
      }
    },
    stageStyle: function() {
      return {
        position: 'relative',
        width: `${this.width}px`,
        height: `${this.height}px`,
        left: `${this.left}px`,
        top: `${this.top}px`,
      }
    },

  },
  data() {
    return {
      // 舞台面板数据
      grab: false,
      currentComp: null, // 当前选中的组件
      // 舞台数据
      width: 800,
      height: 600,
      left: 0,
      top: 0,
      cursor: null,
    }
  },
  created() {
  },
  mounted() {
    window.addEventListener('mousemove', (event) => {
      if (this.grab) {
        this.left += event.movementX
        this.top += event.movementY
      }
    })
    this.$refs.stagePanel.addEventListener('mousedown', (event) => {
      // console.log('按下：', event)
      // 鼠标中键
      if (event.which === 2) {
        this.grab = true
        this.cursor = 'grab'
      }
    })
    this.$refs.stagePanel.addEventListener('mouseup', (event) => {
      // console.log('抬起', event)
      // 鼠标中键
      if (event.which === 2) {
        this.grab = false
        this.cursor = null
      }
    })
  }
};
</script>

<style lang="less" scoped>

.stage-panel {
  width: calc(100% - 16px);
  min-height: 600px;
  margin: 8px;
  background-color: gainsboro;
  overflow: hidden;
}
.stage {
  position: relative;
  // left: 0;
  // top: 0;
  // width: 800px;
  // height: 600px;
}
</style>