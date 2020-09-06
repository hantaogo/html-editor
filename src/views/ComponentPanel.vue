<template>
  <div>
    <a-collapse v-model="activeKey">
      <a-collapse-panel key="1" header="基础组件">
        <div style="text-align:left">
          <p>盒子</p>
          <p>水平盒子</p>
          <p>垂直盒子</p>
          <p>格子</p>
          <p>文字</p>
          <p>图片</p>
        </div>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="AntDesign组件">
        <div style="text-align:left">
          <a-divider>General 通用</a-divider>
          <p>Button 按钮</p>
          <p>Icon 图标</p>
          <a-divider>Layout 布局</a-divider>
          <p>Grid 栅格</p>
          <p>Layout 布局</p>
          <p>Space 间距</p>
          <a-divider>Navigation 导航</a-divider>
          <p>Affix 图钉</p>
          <p>Breadcrumb 面包屑</p>
          <p>Dropdown 下拉菜单</p>
          <p>Menu 导航菜单</p>
          <a-divider>Data Entry 数据录入</a-divider>
          <p>AutoComplete 自动完成</p>
          <p>Cascader 级联选择</p>
          <p>Checkbox 多选框</p>
          <p>DataPicker 日期选择框</p>
          <p>Form 表单</p>
          <p>FormModel 表单</p>
          <p>Input 输入框</p>
          <p>InputNumber 数字输入框</p>
          <p>Mentions 提及</p>
          <p>Radio 单选框</p>
          <p>Rate 评分</p>
          <p>Select 选择</p>
        </div>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="我的组件">
        <div style="text-align:left">
          <p>Loading 加载</p>
          <p>Carousel 轮播</p>
        </div>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
export default {
  name: 'ComponentPanel',
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
