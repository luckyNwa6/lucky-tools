<template>
  <c-input-text
    v-model:value="picWidth"
    placeholder="请输入图片的宽度(默认带像素)"
    raw-text
    label="宽度："
    label-position="left"
    label-align="right"
    label-width="60px"
    clearable
  />
  <c-input-text
    v-model:value="picHeight"
    placeholder="请输入图片的高度(默认带像素)"
    raw-text
    label="高度："
    label-position="left"
    label-align="right"
    label-width="60px"
    clearable
  />
  <c-input-text
    v-model:value="picNum"
    placeholder="请输入图片的数量"
    raw-text
    label="数量："
    label-position="left"
    label-align="right"
    label-width="60px"
    clearable
  />
  <div flex justify-center gap-2>
    <c-tooltip tooltip="浏览器会缓存哒">
      <c-button @click="genPicS()" type="primary"> 生成 </c-button>
    </c-tooltip>
    <c-tooltip tooltip="由于图片地址是动态的下载，所以下载不会是下面原图，也是随机的">
      <c-button @click="loadPicS()" type="primary"> 全下载 </c-button>
    </c-tooltip>
    <c-button @click="restPicS()" type="warning"> 清空图片 </c-button>
  </div>
  <c-card style="width: 100%; height: 500px; overflow: auto">
    <div v-for="(item, index) in picList" v-if="showPic">
      <img :src="`http://picsum.photos/${item.width}/${item.height}?${index + 1}`" :alt="`pic${index + 1}`" />
    </div>
  </c-card>
</template>

<script setup>
const picNum = ref('10');
const picWidth = ref('200');
const picHeight = ref('100');

const showPic = ref(false);
const picList = reactive([]);
//获取自定义大小图片
const genPicS = () => {
  restPicS();
  if (!picWidth.value && !picHeight.value) {
    ElMessage({
      type: 'error',
      message: '宽度和高度不能同时为空！',
    });
    return false;
  }
  showPic.value = true;
  let arr = [];
  for (let index = 0; index < picNum.value; index++) {
    arr.push({
      height: picHeight.value,
      width: picWidth.value,
    });
  }
  picList.splice(0, picList.length, ...arr);
  // console.log('🚀 ~ genPicS ~ picList:', toRef(picList, 'value'));
};

//清空图片
const restPicS = () => {
  showPic.value = false;
};

//下载生成
const loadPicS = async () => {
  for (const index in picList) {
    let link = document.createElement('a');
    link.href = `http://picsum.photos/${picList[index].width}/${picList[index].height}?${Number(index) + 1}`;
    link.download = `W${picList[index].width}H${picList[index].height}${Number(index)}.png`;
    link.style.display = 'none'; // 隐藏元素
    document.body.appendChild(link); // 添加到文档中

    try {
      const response = await fetch(link.href);
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      link.href = imageUrl;

      setTimeout(() => {
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(imageUrl);
      }, 100);
    } catch (error) {
      console.error('下载图片时出错:', error);
    }
  }
};

onMounted(() => {
  genPicS();
});
</script>

<style lang="scss" scoped></style>
