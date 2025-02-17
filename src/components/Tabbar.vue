<template>
    <van-tabbar v-model="active" class="flex w-full p-0">
      <!-- 每个tabbar-item外层用相同结构 -->
      <div class="flex-1 flex justify-center">
        <van-badge :content="likesNumber">
          <van-tabbar-item icon="wap-home" to="/massage" class="w-full text-center">消息</van-tabbar-item>
        </van-badge>
      </div>
  
      <div class="flex-1 flex justify-center">
        <van-tabbar-item icon="shopping-cart" to="/workspace" class="w-full text-center">工作台</van-tabbar-item>
      </div>
  
      <div class="flex-1 flex justify-center">
        <van-tabbar-item icon="manager" to="/clouddocuments" class="w-full text-center">云文档</van-tabbar-item>
      </div>
  
      <div class="flex-1 flex justify-center">
        <van-tabbar-item icon="manager" to="/contacts" class="w-full text-center">通讯录</van-tabbar-item>
      </div>
    </van-tabbar>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import { toRefs } from 'vue';
  import { useMassageStore } from '@/store/massageStore';
  
  const active = ref<number>(0);
  
  onMounted(() => {
    const route = useRoute();
    if (route.path === "/massage") {
      active.value = 0;
    } else if (route.path === "/workspace") {
      active.value = 1;
    } else if (route.path === "/clouddocuments") {
      active.value = 2;
    } else if (route.path === "/contacts") {
      active.value = 3;
    }
  });
  
  const MassagesStore = useMassageStore();
  const { massages } = toRefs(MassagesStore);
  
  const likesNumber = ref<number>(0);
  for (let i = 0; i < massages.value.length; i++) {
    likesNumber.value += Number(massages.value[i].likes);
  }
  </script>
  
  