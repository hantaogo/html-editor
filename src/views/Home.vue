<template>
  <div>
    <a-result title="HTML Editor - 可视化编辑器">
      <template #icon>
        <a-icon type="smile" theme="twoTone" />
      </template>
      <template #extra>
        <a-button type="primary" @click="play" shape="circle" icon="caret-right" size="large"></a-button>
      </template>
    </a-result>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    }
  },
  methods: {
    play() {
      this.$router.push('/editor')
    }
  }
}
</script>
