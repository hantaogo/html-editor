<template>
  <div>
    <a-collapse v-model="activeKey">
      <a-collapse-panel v-for="item in $store.state.packages" :key="item.package" :header="item.name">
        <div
          v-for="comp in item.components"
          :key="item.package + '-' + comp.type"
          class="button"
          draggable="true"
          @dragstart="onDragStart($event, comp.type)"
          @dragend="onDragEnd"
        >{{ comp.name }}</div>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
export default {
  name: 'ComponentPanel',
  data() {
    return {
      activeKey: []
    }
  },
  mounted() {
  },
  methods: {
    onDragStart(event, compType) {
      console.log('ComponentPanel onDragStart', event)
      event.dataTransfer.setData('application/component-add', compType)
    },
    onDragEnd(event) {
      console.log('ComponentPanel onDragEnd', event)
    }
  }
};
</script>

<style lang="less" scoped>

.button {
  width: 100%;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border: 2px solid gray;
  border-radius: 6px;
  margin: 8px 0 ;
  background-color: white;
}

</style>
