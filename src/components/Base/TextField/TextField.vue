<template>
  <div class="textfield" :style="JSON.parse(attrMap.style)">{{ attrMap.text }}</div>
</template>

<script>
import cuid from 'cuid'

export default {
  name: 'TextField',
  data() {
    return {
      attrMap: {
        name: cuid(),
        text: 'TextField',
        style: `{ "font-size": "14px" }`,
      },
      attrDescMap: {
        name: {
          type: 'input',
          label: '名字',
        },
        text: {
          type: 'input',
          label: '文本内容',
        },
        style: {
          type: 'style',
          label: '样式',
        },
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>