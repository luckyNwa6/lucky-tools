<script setup lang="ts">
import { useCopy } from '@/composable/copy';
import type { lib } from 'crypto-js';
import { MD5, enc } from 'crypto-js';
import { convertHexToBin } from '../hash-text/hash-text.service';
import { useQueryParam } from '@/composable/queryParams';
const algos = { MD5 } as const;

type AlgoNames = keyof typeof algos;
type Encoding = keyof typeof enc | 'Bin';
const algoNames = Object.keys(algos) as AlgoNames[];
const encoding = useQueryParam<Encoding>({ defaultValue: 'Hex', name: 'encoding' });
const clearText = ref('');

function formatWithEncoding(words: lib.WordArray, encoding: Encoding) {
  if (encoding === 'Bin') {
    return convertHexToBin(words.toString(enc.Hex));
  }

  return words.toString(enc[encoding]);
}

const hashText = (algo: AlgoNames, value: string) => formatWithEncoding(algos[algo](value), encoding.value);

//md5转换可以用，jq也可以用
// console.log('cess', hashText('MD5', '20230908001809439helloluckyNwa666PEXtjvB3p2CoLF5TNEa3'));
// console.log($);

const appid = '20230908001809439';
const key = 'PEXtjvB3p2CoLF5TNEa3';
const salt = 'luckyNwa666';
const q = ref('');
const q2 = ref('');
const from = ref('zh');
const to = ref('en');
const sign = ref('');
const ResultEn = ref('');
const ResultZh = ref('');

const translateText = () => {
  console.log('未处理前的字符串：', appid + q.value + salt + key);
  sign.value = hashText('MD5', appid + q.value + salt + key); //里面是固定的字符串格式
  console.log('🚀 ~ translateText ~ MD5后的字符串:', sign.value);

  $.ajax({
    url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
    type: 'get',
    dataType: 'jsonp',
    data: {
      q: q.value,
      appid: appid,
      salt: salt,
      from: from.value,
      to: to.value,
      sign: sign.value,
    },
    success: function (res) {
      console.log(res);
      ResultEn.value = res.trans_result[0].dst;
    },
  });
};
const translateText2 = () => {
  console.log('未处理前的字符串：', appid + q2.value + salt + key);
  sign.value = hashText('MD5', appid + q2.value + salt + key); //里面是固定的字符串格式
  console.log('🚀 ~ translateText ~ MD5后的字符串:', sign.value);

  $.ajax({
    url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
    type: 'get',
    dataType: 'jsonp',
    data: {
      q: q2.value,
      appid: appid,
      salt: salt,
      from: 'en',
      to: 'zh',
      sign: sign.value,
    },
    success: function (res) {
      console.log(res);
      ResultZh.value = res.trans_result[0].dst;
    },
  });
};

// const outputRoman = computed(() => arabicToRoman(inputNumeral.value));

// const inputRoman = ref('XLII');
// const outputNumeral = computed(() => romanToArabic(inputRoman.value));

const { copy: copyEn } = useCopy({ source: ResultEn, text: '英文复制成功!' });
const { copy: copyZh } = useCopy({
  source: () => String(ResultZh),
  text: '中文复制成功！',
});
</script>

<template>
  <div>
    <c-card title="中文 转 英文 ">
      <div flex items-center justify-between>
        <n-form-item>
          <c-input-text v-model:value="q" :min="1" style="width: 200px" :show-button="false" placeholder="请输入中文" />
        </n-form-item>
        <c-button variant="basic" type="default" size="small" mx-1 @click="translateText2">===点===</c-button>
        <div class="result">{{ ResultEn }}</div>
        <c-button autofocus @click="copyEn()"> Copy </c-button>
      </div>
    </c-card>
    <c-card title="英文 转 中文" mt-5>
      <div flex items-center justify-between>
        <c-input-text v-model:value="q2" placeholder="请输入英文" style="width: 200px" />
        <c-button variant="basic" type="default" size="small" mx-1 @click="translateText">===点===</c-button>
        <div class="result">{{ ResultZh }}</div>
        <c-button @click="copyZh()"> Copy </c-button>
      </div>
    </c-card>
  </div>
</template>

<style lang="less" scoped>
.result {
  font-size: 22px;
}
</style>
