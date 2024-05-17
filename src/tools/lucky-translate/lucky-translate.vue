<script setup lang="ts">
import { useCopy } from '@/composable/copy';

const inputNumeral = ref('');
// const outputRoman = computed(() => arabicToRoman(inputNumeral.value));
const outputRoman = ref('');
// const inputRoman = ref('XLII');
// const outputNumeral = computed(() => romanToArabic(inputRoman.value));

const { copy: copyRoman } = useCopy({ source: outputRoman, text: 'Roman number copied to the clipboard' });
const { copy: copyArabic } = useCopy({
  source: () => String(outputNumeral),
  text: 'Arabic number copied to the clipboard',
});
</script>

<template>
  <div>
    <c-card title="中文 转 英文 ">
      <div flex items-center justify-between>
        <n-form-item>
          <c-input-text
            v-model:value="inputNumeral"
            :min="1"
            style="width: 200px"
            :show-button="false"
            placeholder="请输入中文"
          />
        </n-form-item>
        <div class="result">11</div>
        <c-button autofocus @click="copyRoman()"> Copy </c-button>
      </div>
    </c-card>
    <c-card title="英文 转 中文" mt-5>
      <div flex items-center justify-between>
        <c-input-text v-model:value="inputRoman" placeholder="请输入英文" style="width: 200px" />
        <div class="result">22</div>
        <c-button @click="copyArabic()"> Copy </c-button>
      </div>
    </c-card>
  </div>
</template>

<style lang="less" scoped>
.result {
  font-size: 22px;
}
</style>
