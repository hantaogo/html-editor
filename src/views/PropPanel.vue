<template>
  <div>
    <a-collapse v-model="activeKey">
      <a-collapse-panel key="1" header="节点属性">
        <div style="text-align:left">
          <p>名字：容器1</p>
          <p>尺寸：200 X 100</p>
          <p>水平对齐：左</p>
          <p>垂直对齐：中心</p>
          <p>水平间距：40px</p>
          <p>垂直间距：20px</p>
          <p>外边距：16 16px 16px 16px</p>
          <p>内边距：16 16px 16px 16px</p>
        </div>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="节点事件">
        <div style="text-align:left">
          <p>增加：onAdd</p>
          <p>删除：onDelete</p>
          <p>显示：onShow</p>
          <p>隐藏：onHide</p>
          <p>尺寸改变：onResize</p>
          <p>点击：onClick</p>
          <p>鼠标经过：onMouseOver</p>
          <p>鼠标移开：onMouseOut</p>
          <p>鼠标按下：onMouseDown</p>
          <p>鼠标抬起：onMouseUp</p>
          <p>拖拽开始：onDragStart</p>
          <p>拖拽结束：onDragEnd</p>
        </div>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="组件属性">
        <div style="text-align:left">
          <p>名字：横向盒子</p>
          <p>对齐方式：左</p>
          <p>间距：20px</p>
        </div>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="组件事件">
        <div style="text-align:left">
          <p>数据改变：onDataChange</p>
        </div>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
export default {
  name: 'PropPanel',
  data() {
    return {
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      activeKey: ['1']
    }
  },
  watch: {
    activeKey(key) {
      console.log(key)
    }
  }
};
</script>
