<template>
  <div class="main">
    <n-grid x-gap="12" :cols="4">
      <n-gi>
        &nbsp;
      </n-gi>
      <n-gi>
        设置背景图片关键字
      </n-gi>
      <n-gi>
        <n-input v-model:value="Keyword"></n-input>
      </n-gi>
    </n-grid>
    <n-grid x-gap="12" :cols="4">
      <n-gi>
        &nbsp;
      </n-gi>
      <n-gi>
        设置透明度
      </n-gi>
      <n-gi>
        <n-slider :min="0.5" :max="1" :step="0.1" v-model:value="ggopacity"></n-slider>
      </n-gi>
    </n-grid>
    <n-grid x-gap="12" :cols="4">
      <n-gi>
        &nbsp;
      </n-gi>
      <n-gi>
        <n-button type="tertiary" @click="search">
          搜索关键字
        </n-button>
      </n-gi>
      <n-gi>
        <n-button @click="save" type="primary">保存</n-button>
      </n-gi>
    </n-grid>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { NButton, NGi, NGrid, NInput, NSlider, useNotification } from 'naive-ui'
import { getSearchCountApi } from "../conn/wallhaven";


export default defineComponent({
  name: 'optionsView',
  components: {
    NButton,
    NGi,
    NGrid,
    NInput,
    NSlider
  },
  setup() {
    let Keyword = ref('rikka')
    let ggopacity = ref(0.8)

    chrome.storage.sync.get('Keyword', function (result) {
      Keyword.value = result.Keyword ?? 'rikka'
    })

    chrome.storage.sync.get('ggopacity', function (result) {
      ggopacity.value = result.ggopacity ?? 0.8
    })

    let notification = useNotification()

    let save = () => {
      chrome.storage.sync.set({
        Keyword: Keyword.value,
        ggopacity: ggopacity.value
      }, () => {
        notification.success({
          title: '保存成功',
          content: '保存成功',
          duration: 3000
        })
      })
    }

    let search = () => {
      getSearchCountApi(Keyword.value).then(cout => {
        console.log(cout);
        notification.success({
          title: '搜索成功',
          content: '一共有' + cout + "张图片",
          duration: 3000
        })
      })
    }

    return {
      Keyword,
      ggopacity,
      notification,
      save,
      search,
    }
  }
})

</script>

<style >
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
