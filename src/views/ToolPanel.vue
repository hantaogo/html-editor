<template>
  <div class="container">
    <a-button type="primary" icon="cloud-download"></a-button>
    <a-button type="primary" icon="cloud-upload"></a-button>
    <a-button type="primary" icon="setting"></a-button>
    <a-divider type="vertical" />
    <a-button type="primary" icon="plus"></a-button>
    <a-button type="primary" icon="delete"></a-button>
    <a-divider type="vertical" />
    <a-button type="primary" icon="undo"></a-button>
    <a-button type="primary" icon="redo"></a-button>
    <a-divider type="vertical" />
    <a-button type="primary" icon="edit"></a-button>
    <a-button type="primary" icon="drag"></a-button>
    <a-divider type="vertical" />
    <a-button type="primary" icon="zoom-in"></a-button>
    <a-button type="primary" icon="zoom-out"></a-button>
    <a-divider type="vertical" />
    <a-button type="primary" icon="align-left"></a-button>
    <a-button type="primary" icon="align-center"></a-button>
    <a-button type="primary" icon="align-right"></a-button>
    <a-divider type="vertical" />
    <a-button type="primary" icon="vertical-align-top"></a-button>
    <a-button type="primary" icon="vertical-align-middle"></a-button>
    <a-button type="primary" icon="vertical-align-bottom"></a-button>
    <a-divider type="vertical" />
    <a-button type="primary" icon="lock"></a-button>
    <a-button type="primary" icon="unlock"></a-button>
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
  .container {
    display: flex;
  }

  .container > * {
    margin: 8px;
  }

  .container > .ant-divider {
    height: 32px;
  }
</style>