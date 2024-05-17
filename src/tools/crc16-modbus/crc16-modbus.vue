<!--
 * @Author: Zhihui Zhou
 * @Date: 2024-05-17 17:15:15
 * @LastEditors: Zhihui Zhou
 * @LastEditTime: 2024-05-17 18:22:58
 * @Description: 
-->
<template>
  <c-card title="CRC-16/MODBUS  x16+x15+x2+1">
    <div>
      需要校验的数据：
    </div>
    <c-input-text
      v-model:value="inputStr"
      multiline
      placeholder="请输入16进制数据，形如：31 32 33 34 或 31323334"
      rows="10"
      mb-2
      :validation="strInputValidation"
    />

    <div
      mt-5
      flex
      justify-center
    >
      <c-button @click="toCalculation">
        计算
      </c-button>
    </div>
    <n-divider />
    <div>
      计算结果(低位在前，高位在后)：
    </div>
    <c-input-text
      v-model:value="crcResult"
      placeholder="结果待计算"
      readonly
      autosize
    />
    <div
      flex
      justify-center
      mt-5
    >
      <c-button @click="copyResult()">
        复制
      </c-button>
    </div>
  </c-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useCopy } from '@/composable/copy';
import { useValidation } from '@/composable/validation';
import { crcYu } from './crc16-modbus-yu.ts';

// 输入的字符串
const inputStr = ref('');
// 校验
const strInputValidation = useValidation({
  source: inputStr,
  rules: [
    {
      message: '请输入十六进制字符',
      validator: (value: string) => {
        const reg = /[\t\r\f\n\s]*/g;
        value = value.replace(reg, '');
        const hexRegex = /^[0-9A-Fa-f]+$/;
        if (hexRegex.test(value) || value == '') {
          return true;
        } else {
          return false;
        }
      },
    },
  ],
});

const crcResult = ref('');

// 复制方法
const { copy } = useCopy({ source: crcResult, text: '复制成功' });

// 复制结果
const copyResult = () => {
  if (crcResult.value != '') {
    copy();
  }
};

// 计算校验结果
const toCalculation = () => {
  let hexData = inputStr.value;
  // 分割输入字符
  let hexArr = splitData(hexData);
  if (hexArr.length == 0) {
    return false;
  }
  // 处理展示数据
  inputStr.value = hexArr.join(' ');
  let numArr = hexArrtoNumArr(hexArr);

  // 计算结果
  let crcData = crcYu(numArr, numArr.length);
  // console.log('校验结果', crcData);
  // 展示结果
  crcResult.value = crcData.join(' ');
};

// 分割字符为十六进制数组
const splitData = (str: string) => {
  let strArr = [];
  let strData: string = trim(str);
  for (let i = 0; i < strData.length; i = i + 2) {
    let pushStr = strData.slice(i, i + 2);
    pushStr = pushStr.padStart(2, '0');
    strArr.push(pushStr);
  }
  // console.log('十六进制数据', strArr);
  return strArr;
};

// 转化十六进制数组为十进制数组
const hexArrtoNumArr = (hexArr: any) => {
  let numArr = [];
  for (let i in hexArr) {
    let num = parseInt(eval('0x' + hexArr[i]).toString(10));
    numArr.push(num);
  }
  // console.log('十进制数据', numArr);
  return numArr;
};

// 过滤所有空格
const trim = (str: string) => {
  const reg = /[\t\r\f\n\s]*/g;
  let trimStr = '';
  if (typeof str === 'string') {
    trimStr = str.replace(reg, '');
  }
  return trimStr;
};
</script>

<style lang="less" scoped>
</style>