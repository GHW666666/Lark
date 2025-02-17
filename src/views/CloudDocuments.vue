<template>
    <div class="bg-gray-50 p-6 text-gray-900 h-[100rem]">
      <header class="flex items-center border-b border-gray-200 pb-4">
        <!-- 头像和名字部分 -->
        <div class="flex items-center space-x-4">
          <img
            src="https://img2.baidu.com/it/u=3569028837,3948269640&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067"
            class="rounded-full h-16 w-16 border-2 border-gray-300"
          />
          <div class="text-xl font-semibold">翰文</div>
        </div>
  
        <!-- 标题部分 -->
        <div class="text-lg text-gray-600 ml-10">
          云文档
        </div>
  
        <!-- 右侧图标 -->
        <div class="flex space-x-4 text-gray-600 ml-auto">
          <van-icon name="search" class="text-xl hover:text-gray-500" />
          <van-icon name="user" class="text-xl hover:text-gray-500" />
        </div>
      </header>
      
      <main>
        <!-- 第一个 session，菜单项 -->
        <!-- 修改后的第一个session -->
<section class="flex flex-row justify-around w-full py-4">
  <div 
    v-for="(item, index) in menu" 
    :key="index" 
    class="flex flex-col items-center justify-center space-y-2"
    style="min-width: 20%"
  >
    <van-icon 
      :name="item.icon" 
      class="text-3xl p-2 bg-gray-100 rounded-full" 
    />
    <span class="text-sm text-gray-600 text-center">{{ item.name }}</span>
  </div>
</section>
      
<div class="relative">
          <span class="absolute left-25">最近</span>
          <span class="absolute left-40">目录</span>
        </div>
  <br />
        <!-- 第二个 session，列表项 -->
        <section>
          <div v-for="(item, index) in list" :key="index" class="flex items-center space-x-4 mt-4">
            <img  :src="item.img"  class="w-10 h-10 object-cover rounded-full" />
            <div class="flex-1">
              <div class="font-semibold text-gray-800">{{ item.documentname || '未命名文档' }}</div>
              <div class="text-gray-600 text-sm">{{ item.date || '暂无日期' }}</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import { toRefs } from 'vue'
  import { useCloudDocumentsStore } from '@/store/cloudDocumentsStore'
  
  const cloudDocuments = useCloudDocumentsStore()
  const { menu, list } = toRefs(cloudDocuments)
  </script>
  