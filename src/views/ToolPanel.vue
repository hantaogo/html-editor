<template>
  <div class="tool-panel">
    <div class="icon-group">
      <a-icon class="icon" type="cloud-download"/>
      <a-icon class="icon" type="cloud-upload"/>
      <a-icon class="icon" type="setting"/>
    </div>
    <div class="icon-group">
      <a-icon class="icon" type="plus"/>
      <a-icon class="icon" type="delete"/>
    </div>
    <div class="icon-group">
      <a-icon class="icon" type="undo"/>
      <a-icon class="icon" type="redo"/>
    </div>
    <div class="icon-group">
      <a-icon class="icon" type="edit"/>
      <a-icon class="icon" type="drag"/>
    </div>
    <div class="icon-group">
      <a-icon class="icon" type="zoom-in"/>
      <a-icon class="icon" type="zoom-out"/>
    </div>
    <div class="icon-group">
      <a-icon class="icon" type="align-left"/>
      <a-icon class="icon" type="align-center"/>
      <a-icon class="icon" type="align-right"/>
    </div>
    <div class="icon-group">
      <a-icon class="icon" type="vertical-align-top"/>
      <a-icon class="icon" type="vertical-align-middle"/>
      <a-icon class="icon" type="vertical-align-bottom"/>
    </div>
    <div class="icon-group">
      <a-icon class="icon" type="lock"/>
      <a-icon class="icon" type="unlock"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToolPanel',
  data() {
    return {
      colSpan: 1
    }
  }
};
</script>

<style lang="less" scoped>
.tool-panel {
  background-color: #dcdcdc;
  margin: 8px;
}
.icon-group {
  display: inline-block;
  border: 2px dashed black;
  margin: 8px;
}
.icon {
  margin: 8px 8px;
  cursor: pointer;
  font-size: 24px;
}
</style>