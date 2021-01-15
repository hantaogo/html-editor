<template>
  <div>
    <a-collapse :default-active-key="['Base']" :bordered="false">
      <a-collapse-panel v-for="item in pkgList" :key="item.pkg" :header="item.name">
        <div
          v-for="(comp, index) in item.components"
          :key="index"
          class="button"
          @click="onClick(item.pkg + '/' + comp.type)"
        >{{ comp.name }}</div>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ComponentPanel',
  computed: {
    ...mapState({
      pkgList: state => state.pkg.pkgList
    })
  },
  methods: {
    onClick(path) {
      this.$bus.emit('addComp', path)
    },
  },
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
  cursor: pointer;
}
</style>
