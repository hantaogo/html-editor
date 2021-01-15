<template>
  <div>
    <a-input-group class="input-group" v-for="(item, index) in items" :key="index" compact>
      <a-input style="width: 40%" size="small" :value="item.name" @blur="event => handleStyleNameBlur(index, event.target.value)"/>
      <a-input style="width: 60%" size="small" :value="item.value" @blur="event => handleStyleValueBlur(index, event.target.value)"/>
    </a-input-group>
    <a-button :style="{ width: '100%', border: '1px dashed black', }" size="small" @click="handleAdd">+</a-button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      items: []
    }
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  watch: {
    value: function(val) {
      this.updateItems(val)
    }
  },
  mounted() {
    this.updateItems(this.value)
  },
  methods: {
    updateItems(val) {
      if (!val) {
        this.items = []
      } else {
        const items = []
        const obj = JSON.parse(val)
        for(const k in obj) {
          items.push({ name: k, value: obj[k] })
        }
        this.items = items
      }
    },
    afterChange() {
      const obj = {}
      for (const item of this.items) {
        if (item.name && item.value) {
          obj[item.name] = item.value
        }
      }
      this.$emit('change', JSON.stringify(obj))
    },
    handleStyleNameBlur(index, val) {
      if (!val) {
        this.items.splice(index, 1)
      } else {
        this.items[index].name = val
      }
      this.afterChange()
    },
    handleStyleValueBlur(index, val) {
      if (!val) {
        this.items.splice(index, 1)
      } else {
        this.items[index].value = val
      }
      this.afterChange()
    },
    handleAdd() {
      this.items.push({
        'name': '',
        'value': '',
      })
      this.afterChange()
    },
    handleRemove(index) {
      this.items.splice(index, 1)
      this.afterChange()
    },
  }
}
</script>

<style lang="less" scoped>
.input-group {
  margin: 4px 0;
}
</style>