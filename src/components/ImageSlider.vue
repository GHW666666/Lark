<template>
   <van-swipe :autoplay="3000" lazy-render class="h-30">
  <van-swipe-item v-for="image in images" :key="image">
    <img :src="image" class="w-full h-full rounded-lg"/>
  </van-swipe-item>
</van-swipe>

</template>

<script setup lang="ts">
const images = [
    'https://img2.baidu.com/it/u=3569028837,3948269640&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067',
    'https://img2.baidu.com/it/u=3569028837,3948269640&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067',
]
</script>

