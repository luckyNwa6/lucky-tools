<template>
  <div>这是子组件的值：{{ childValue }}</div>
</template>

<script>
export default defineComponent({
  props: {
    value: String, // 与父组件中 v-model 绑定的值同步
  },
  setup(props, { emit }) {
    const childValue = ref(props.value)
    watch(
      () => props.value,
      (newValue) => {
        console.log('🚀 ~ setup ~ newValue:', newValue)
        childValue.value = newValue // 当父组件的值发生变化时，更新子组件中的值
      },
    )
    return {
      childValue,
    }
  },
})
</script>
