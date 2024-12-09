<script setup lang="ts">
import { ref } from 'vue';

// 定义响应式变量
const inputText = ref('');
const regexPattern = ref('');
const matchResult = ref('');

// 匹配函数
const matchRegex = () => {
  try {
    // 创建正则表达式对象
    const pattern = new RegExp(regexPattern.value);
    // 执行匹配
    const result = inputText.value.match(pattern);
    // 更新结果显示
    matchResult.value = result ? result.join(',') : '无匹配';
  } catch (error) {
    matchResult.value = '无效的正则表达式';
  }
};

// 模拟生成随机25字文本
// const autoText = () => {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let randomText = '';
//   for (let i = 0; i < 25; i++) {
//     randomText += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   inputText.value = randomText;
// };
</script>

<template>
  <div>
    <c-card title="在线正则表达式测试">
      <div style="padding: 20px">
        <!-- 输入文本 -->
        <c-input-text
          v-model:value="inputText"
          multiline
          rows="6"
          placeholder="请输入文本"
          style="margin-bottom: 10px"
        ></c-input-text>
        <!-- 输入正则表达式 -->
        <c-input-text
          v-model:value="regexPattern"
          placeholder="请输入正则表达式,已被//包裹"
          style="margin-bottom: 10px"
        ></c-input-text>
        <!-- 匹配按钮和模拟生成按钮 -->
        <c-button variant="basic" style="margin-bottom: 10px" type="default" size="small" @click="matchRegex"
          >匹配</c-button
        >
        <!-- <c-button variant="basic" style="margin-bottom: 10px" type="default" size="small" @click="autoText"
          >模拟生成随机25字文本</c-button
        > -->
        <!-- 输出框 -->
        <c-input-text v-model:value="matchResult" placeholder="暂无数据" multiline rows="4" readonly></c-input-text>
      </div>
    </c-card>
  </div>
</template>

<style lang="less" scoped>
/* 样式可以根据需要调整 */
</style>
