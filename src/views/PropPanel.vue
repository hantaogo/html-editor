<template>
  <div>
    <a-collapse :default-active-key="['nodeAttr', 'componentAttr']" :bordered="false">
      <a-collapse-panel key="nodeAttr" header="节点属性" size="small">
        <div v-if="currentNode">
          <div class="attr-item" v-for="(attr, key) in currentNode.getAttrDescMap()" :key="key">
            <div class="attr-name">{{ attr.label }}</div>
            <div class="attr-value">
              <a-input v-if="attr.type === 'input'" size="small" :value="currentNode.getAttrMap()[key]" @blur="event => handleNodeAttrChange(key, event.target.value)"></a-input>
              <StyleEditor v-if="attr.type === 'style'" :value="currentNode.getAttrMap()[key]" @change="val => handleNodeAttrChange(key, val)"></StyleEditor>
            </div>
          </div>
        </div>
      </a-collapse-panel>
      <a-collapse-panel key="componentAttr" header="组件属性">
        <div v-if="currentNode">
          <div class="attr-item" v-for="(attr, key) in currentNode.getComponentAttrDescMap()" :key="key">
            <div class="attr-name">{{ attr.label }}</div>
            <div class="attr-value">
              <a-input v-if="attr.type === 'input'" size="small" :value="currentNode.getComponentAttrMap()[key]" @blur="event => handleComponentAttrChange(key, event.target.value)"></a-input>
              <StyleEditor v-if="attr.type === 'style'" :value="currentNode.getComponentAttrMap()[key]" @change="val => handleComponentAttrChange(key, val)"></StyleEditor>
            </div>
          </div>
        </div>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import StyleEditor from './StyleEditor'

export default {
  name: 'PropPanel',
  components: {
    StyleEditor,
  },
  computed: {
    ...mapState({
      currentNode: state => state.editor.currentNode,
    })
  },
  methods: {
    handleNodeAttrChange(key, val) {
      this.currentNode.setAttr(key, val)
    },
    handleComponentAttrChange(key, val) {
      this.currentNode.setComponentAttr(key, val)
    },
  },
};
</script>

<style lang="less" scoped>
.attr-item {
  margin-bottom: 12px;
}
.attr-name {
  text-align: left;
  font-size: 12px;
  margin-bottom: 4px;
}
.attr-value {
  font-size: 12px;
}
</style>
