<script setup lang="ts">
import { useCopy } from '@/composable/copy';
import type { lib } from 'crypto-js';
import { MD5, enc } from 'crypto-js';
import { convertHexToBin } from '../hash-text/hash-text.service';
import { useQueryParam } from '@/composable/queryParams';
const algos = { MD5 } as const;

type AlgoNames = keyof typeof algos;
type Encoding = keyof typeof enc | 'Bin';

const encoding = useQueryParam<Encoding>({ defaultValue: 'Hex', name: 'encoding' });

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
const from = ref('zh');
const to = ref('en');
const sign = ref('');
const ResultCon = ref('');

const optionsFrom = [
  { label: '中文', value: 'zh' },
  { label: '英文', value: 'en' },
  { label: '韩语', value: 'kor' },
  { label: '日语', value: 'jp' },
  { label: '繁体中文', value: 'cht' },
  { label: '自动检测', value: 'auto' },
];

const optionsTo = [
  { label: '中文', value: 'zh' },
  { label: '英文', value: 'en' },
  { label: '韩语', value: 'kor' },
  { label: '日语', value: 'jp' },
  { label: '繁体中文', value: 'cht' },
  { label: '自动检测', value: 'auto' },
];

const translateText = () => {
  if (q.value === '') {
    console.log('文本禁止为空!');
    return;
  }
  // console.log('未处理前的字符串：', appid + q.value + salt + key);
  sign.value = hashText('MD5', appid + q.value + salt + key); //里面是固定的字符串格式
  // console.log('🚀 ~ translateText ~ MD5后的字符串:', sign.value);
  $.ajax({
    url: 'https://api.fanyi.baidu.com/api/trans/vip/translate',
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
    success: function (res: any) {
      console.log(res);
      ResultCon.value = res.trans_result[0].dst;
    },
  });
};

const resetCon = () => {
  //清空文本
  q.value = '';
  ResultCon.value = '';
};
const { copy: copyCon } = useCopy({ source: ResultCon, text: '内容复制成功!' });
</script>

<template>
  <div>
    <c-card>
      <div style="display: flex; width: 100%; text-align: center; justify-content: space-around">
        <c-select v-model:value="from" :options="optionsFrom" size="small" mb-2 style="width: 100px" />
        <div>转</div>

        <c-select v-model:value="to" :options="optionsTo" size="small" mb-2 style="width: 100px" />
      </div>

      <div>
        <n-form-item>
          <c-input-text
            v-model:value="q"
            rows="5"
            multiline
            style="width: 100%"
            :show-button="false"
            placeholder="请输入需翻译的内容"
          />
        </n-form-item>
        <c-button variant="basic" type="default" size="small" mx-1 @click="translateText">翻译</c-button>
        <div mt-10>结果如下:</div>
        <div class="result" mt-5>{{ ResultCon }}</div>
        <c-button variant="basic" type="primary" size="small" autofocus @click="copyCon()" mt-10 mr-5> Copy </c-button>
        <c-button variant="basic" type="primary" size="small" autofocus @click="resetCon()" mt-10> Reset </c-button>
      </div>
    </c-card>
  </div>
</template>

<style lang="less" scoped>
.result {
  font-size: 15px;
  height: 120px;
  overflow: auto;
}
</style>
