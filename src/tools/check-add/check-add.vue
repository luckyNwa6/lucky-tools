<!--
 * @Author: Zhihui Zhou
 * @Date: 2024-05-21 09:39:13
 * @LastEditors: Zhihui Zhou
 * @LastEditTime: 2024-05-21 10:08:03
 * @Description: 
-->
<template>
  <c-card title="校验和计算">
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
      计算结果：
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
  let checkAddData = checkAdd(numArr);
  // console.log('校验结果', checkAddData);
  // 展示结果
  crcResult.value = checkAddData;
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

// 累加检验和
function checkAdd(c_dp: number[]) {
  let sum_a = 0,
    sum_b = 0;
  for (let i = 0; i < c_dp.length; i++) {
    sum_a += c_dp[i]; // 从数组第一个元素开始累加
    sum_b ^= c_dp[i];
  }
  let result_a = decimalToHex(sum_a);
  let result_b = numToHex(sum_b).toUpperCase();
  if (result_a.length > 2) {
    return result_a;
  } else {
    return result_a + ' ' + result_b;
  }
}

// 十进制转一位十六进制字符
function decimalToHex(decimalData: number) {
  // 将十进制数据转换为二进制字符串
  const binaryString = decimalData.toString(2);

  // 如果二进制字符串长度不足八位，则在左侧填充0，直到长度为八位
  const paddedBinary = binaryString.padStart(8, '0');
  // 截取二进制字符串的后八位
  let eightBits = '';
  // 将截取的八位二进制字符串转换为十六进制
  let hexValue = '';
  if (paddedBinary.length > 16) {
    eightBits = paddedBinary.slice(-16);
    let hexStr = parseInt(eightBits, 2).toString(16).toUpperCase().padStart(4, '0');
    hexValue = hexStr[2] + hexStr[3] + ' ' + hexStr[0] + hexStr[1];
  } else {
    eightBits = paddedBinary.slice(-8);
    hexValue = parseInt(eightBits, 2).toString(16).toUpperCase().padStart(2, '0');
  }

  return hexValue;
}

/**
 * 十进制数转十六进制字符
 * @param {Object} num
 */
function numToHex(num: number) {
  let str = '';
  let number = parseInt(num);
  str = number.toString(16);
  str = str.length == 1 ? '0' + str : str;
  return str;
}
</script>

<style lang="less" scoped>
</style>