<template>
  <div>
    <el-row :gutter="20" class="p-7">
      <el-col :span="6" style="display: flex">
        <p class="w-43">输入英文转大写:</p>
        <el-input v-model="toUppercase" />
      </el-col>
      <el-col :span="6">
        结果:
        <!-- <el-input v-model="toUppercaseA" readonly></el-input> -->
        <div style="position: relative">
          <el-input type="textarea" v-model="toUppercaseA" :autosize="{ minRows: 12, maxRows: 16 }" readonly></el-input>
          <el-icon @click="copyAnswer(toUppercaseA)" style="float: right; position: absolute; right: 10px; top: 10px">
            <DocumentCopy />
          </el-icon>
        </div>
      </el-col>
    </el-row>

    <hr />
  </div>
</template>

<script setup>
import copy from 'copy-to-clipboard'

let toUppercase = ref('')
let toUppercaseA = ref('')
watch(
  () => toUppercase.value,
  (toUppercase) => {
    console.log('xxxxx')
    toUppercaseA.value = toUppercase.toUpperCase()
  },
  {
    deep: true,
  },
)

const copyAnswer = async (copyData) => {
  console.log('copyData', copyData)
  if (copyData === '') {
    ElMessage.warning('请输入文本再复制')
    return
  }
  try {
    await copy(copyData)
    ElMessage.success(`复制: ${copyData} 成功！`)
  } catch (error) {
    ElMessage.warning(`复制失败: ${error} ！`)
    console.error(error)
  }
}
</script>

<style lang="scss" scoped></style>
