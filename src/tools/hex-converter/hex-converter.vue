<template>

  <c-card title="十进制转小端十六进制(两位)">
    <div>
      转化小端十六进制结果：
    </div>

    <div class="result">
      {{ inputNum?hexResult||'-- --':'-- --' }}
    </div>
    <c-input-text
      v-model:value="inputNum"
      :validation="numInputValidation"
      placeholder="请输入0~65535之间的数据"
      @change="clearHexResult"
    />
    <div
      flex
      justify-center
      mt-5
    >
      <c-button @click="toNumConverterHex">
        转化
      </c-button>
    </div>
  </c-card>

  <c-card title="小端十六进制（两位）转十进制">
    <div>
      转化十进制结果：
    </div>
    <div class="result">
      {{ inputHex?numResult||'--':'--' }}
    </div>
    <c-input-text
      v-model:value="inputHex"
      :validation="hexInputValidation"
      placeholder="请输入四字节的十六进制数据"
      @change="clearNumResult"
    />
    <div
      flex
      justify-center
      mt-5
    >
      <c-button @click="toHexConverterNum">
        转化
      </c-button>
    </div>
  </c-card>

</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useValidation } from '@/composable/validation';
import { number } from 'mathjs';
// 十六进制结果
const hexResult = ref('');
// 十进制结果
const numResult = ref(null);

// 输入的十进制数据
const inputNum = ref('');
// 校验
const numInputValidation = useValidation({
  source: inputNum,
  rules: [
    {
      message: '请输入0~65535之间的数据',
      validator: (value: string | number) => {
        let valueData = number(value);
        if (valueData >= 0 && valueData <= 65535) {
          return true;
        } else {
          return false;
        }
      },
    },
  ],
});

// 输入的十进制数据
const inputHex = ref('');
// 校验
const hexInputValidation = useValidation({
  source: inputHex,
  rules: [
    {
      message: '请输入四字节的十六进制数据',
      validator: (value: string) => {
        const hexRegex = /^([0-9A-Fa-f]{4}\s)*[0-9A-Fa-f]{4}$/ as any;
        if (hexRegex.test(value) || value == '') {
          return true;
        } else {
          return false;
        }
      },
    },
  ],
});

// 转化十进制数据
const toNumConverterHex = () => {
  if (!numInputValidation.isValid) {
    return;
  }
  let numStr: string = numToHex(inputNum.value);
  hexResult.value = convertToLittleEndian(numStr).join(' ').toUpperCase();
};
const clearHexResult = () => {
  hexResult.value = '';
};
const clearNumResult = () => {
  numResult.value = null;
};

// 转化十六进制
const toHexConverterNum = () => {
  if (!hexInputValidation.isValid) {
    return;
  }
  let hexArr = [inputHex.value[0] + inputHex.value[1], inputHex.value[2] + inputHex.value[3]];

  numResult.value = convertToBigEndian(hexArr);
};

/**
 * 转小端处理（两位）
 * @param {string} data
 * 传入十六进制数据
 * @returns {string[]} 小端处理后的数据
 */
function convertToLittleEndian(data: string) {
  let outData = [];
  if (data.length % 2 === 1) {
    data = '0' + data;
  }
  // 使用for循环从后往前遍历字符串，避免使用额外的临时变量
  for (let i = data.length - 2; i >= 0; i -= 2) {
    outData.push(data.substring(i, i + 2));
  }
  // 使用while循环来确保输出数组的长度为2，避免使用固定的for循环次数
  while (outData.length < 2) {
    outData.push('00');
  }
  return outData;
}

/**
 * 转大端处理（两位）
 * @param {number[]} decimalArray
 * 传入十进制数组
 * @returns {number} 大端处理后的结果
 */
function convertToBigEndian(decimalArray: any) {
  if (decimalArray.length > 0) {
    // 使用map()方法将十进制数组转换为十六进制数组。
    const hexArray = decimalArray.map((num: any) => num.toString(16));
    // 使用reverse()方法反转十六进制数组
    const reversedHexArray = hexArray.reverse();
    // 使用map()方法和模板字符串或join()方法来拼接十六进制字符串
    let hexString = reversedHexArray
      .map((hex: string) => {
        hex = hex.padStart(2, 0);
        return hex;
      })
      .join('');
    return parseInt(hexString, 16);
  } else {
    let emptyString = null;
    return emptyString;
  }
}

/**
 * 十进制数转十六进制字符
 * @param {Object} num
 */
function numToHex(num: string) {
  let str: string = '';
  let number: number = parseInt(num);
  str = number.toString(16);
  str = str.padStart(4, '0');
  return str;
}
</script>
<style lang="less" scoped>
::v-deep(.n-upload-trigger) {
  width: 100%;
}
.result {
  font-weight: 800;
  text-align: center;
  font-size: 32px;
  height: 50px;
  line-height: 50px;
}
</style>
