<template>
  <div>
    <c-card id="calculator">
      <div class="buttons">
        <button v-for="button in buttons" :key="button" @click="handleClick(button)" class="calc-button">
          {{ button }}
        </button>
      </div>
    </c-card>
    <c-card mb-5> Running: {{ result2 }} </c-card>
    <c-input-text
      v-model:value="expression"
      rows="1"
      multiline
      placeholder="特别版的数学计算(ex: 2*sqrt(6) )..."
      raw-text
      monospace
      autofocus
      autosize
    />

    <c-card v-if="result !== ''" title="Result" mt-5>
      {{ result }}
    </c-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { evaluate } from 'mathjs';

// 从默认工具中导入错误处理
import { withDefaultOnError } from '@/utils/defaults';

// 响应式变量
const expression = ref('');
const result2 = ref('');

// 按钮列表，添加一个 "X" 按钮用于清空
const buttons = ['7', '8', '9', '=', 'X', '4', '5', '6', '+', '-', '1', '2', '3', '*', '/', '.', '0'];

// 处理按钮点击事件
const handleClick = (button: string) => {
  if (button === 'X') {
    result2.value = '';
  } else if (button === '=') {
    calculate();
  } else {
    result2.value += button;
  }
};

// 计算结果
const calculate = () => {
  try {
    result2.value = evaluate(result2.value).toString();
  } catch (error) {
    result2.value = 'Error';
  }
};

// 计算结果的计算属性
const result = computed(() => withDefaultOnError(() => evaluate(expression.value) ?? '', ''));
</script>

<style scoped>
#calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 10px;
}

.result-input {
  width: 200px;
  height: 40px;
  font-size: 18px;
  text-align: right;
  margin-bottom: 10px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}

.buttons:first-of-type {
  grid-template-columns: repeat(5, 1fr);
}

.calc-button {
  width: 50px;
  height: 50px;
  font-size: 16px;
}
</style>
