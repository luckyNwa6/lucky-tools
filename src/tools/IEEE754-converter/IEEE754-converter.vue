<!--
 * @Author: Zhihui Zhou
 * @Date: 2024-05-20 09:56:51
 * @LastEditors: Zhihui Zhou
 * @LastEditTime: 2024-05-20 14:20:35
 * @Description: 
-->
<template>
  <c-card>
    <div>
      {{isInputNum?'十进制转IEEE 754 单精度浮点数':'IEEE 754 单精度浮点数转十进制'}}结果：
    </div>
    <div class="result">
      {{ (inputHex||inputNum)?IEEE754Result||'--':'--' }}
    </div>
    <n-divider />
    <n-form-item
      label="十进制转IEEE 754 单精度浮点数"
      label-placement="left"
    >
      <n-switch
        v-model:value="isInputNum"
        @change="clearResult"
      />
    </n-form-item>

    <n-form-item
      label="输入数据高低位是否互换"
      label-placement="left"
      v-if="!isInputNum"
    >
      <n-switch v-model:value="highChange" />
    </n-form-item>
    <n-form-item
      label="小数点位数"
      label-placement="left"
      v-if="!isInputNum"
    >
      <n-slider
        v-model:value="length"
        :step="1"
        :min="0"
        :max="12"
      />
    </n-form-item>
    <c-input-text
      v-model:value="inputHex"
      :validation="hexInputValidation"
      placeholder="请输入单精度浮点数"
      @change="clearResult"
      v-if="!isInputNum"
    />
    <c-input-text
      v-model:value="inputNum"
      :validation="numInputValidation"
      placeholder="请输入十进制数"
      @change="clearResult"
      v-else
    />
    <div
      flex
      justify-center
      mt-5
    >
      <c-button @click="toHexConverter">
        转化
      </c-button>
    </div>
  </c-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useValidation } from '@/composable/validation';
import { number } from 'mathjs';
import { getIee754Value, decimalToBinaryString } from './IEEE754-converion.js';

// 是否输入十进制数据
const isInputNum = ref(false);

// 结果小数位
const length = ref(2);

// 是否高低位互换
const highChange = ref(false);

// 转化结果
const IEEE754Result = ref('');

// 输入的十六进制数据
const inputHex = ref('');
// 校验
const hexInputValidation = useValidation({
  source: inputHex,
  rules: [
    {
      message: '请输入八位十六进制数据',
      validator: (value: string) => {
        const hexRegex = /^([0-9A-Fa-f]{8}\s)*[0-9A-Fa-f]{8}$/ as any;
        if (hexRegex.test(value) || value == '') {
          return true;
        } else {
          return false;
        }
      },
    },
  ],
});

// 输入的十进制数据
const inputNum = ref('');
// 校验
const numInputValidation = useValidation({
  source: inputNum,
  rules: [
    {
      message: '请输入长度1~25间的数据',
      validator: (value: string) => {
        let valueData = number(value);
        let valueDataLen = value.length;
        if ((valueDataLen >= 1 && valueDataLen <= 25) || value == '') {
          return true;
        } else {
          return false;
        }
      },
    },
  ],
});

const clearResult = () => {
  IEEE754Result.value = '';
};

const toHexConverter = () => {
  if (!numInputValidation.isValid) {
    return;
  }
  if (!isInputNum.value) {
    IEEE754Result.value = getIee754Value(inputHex.value, highChange.value, length.value);
  } else {
    IEEE754Result.value = decimalToBinaryString(number(inputNum.value));
  }
};
</script>

<style scoped>
.result {
  font-weight: 800;
  text-align: center;
  font-size: 32px;
  height: 50px;
  line-height: 50px;
}
</style>