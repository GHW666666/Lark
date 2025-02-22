<template>
    <div class="bg-gray-50 p-6 text-gray-900 h-[100rem]">
      <header class="flex items-center border-b border-gray-200 pb-4">
        <!-- 头像和名字部分 -->
        <div class="flex items-center space-x-4">
          <img
            src="https://tse3-mm.cn.bing.net/th/id/OIP-C.Z-8XwG2kFkLIzWkExqH9fQHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
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
          <van-icon name="ellipsis" class="text-xl hover:text-gray-500" />
        </div>
      </header>
      
      <main>
        <!-- 第一个 session，菜单项 -->
        <!-- 第一个session -->
<section class="flex flex-row justify-around w-full py-4">
  <div 
    v-for="(item, index) in menu"                                  
    :key="index" 
    class="flex flex-col items-center  space-y-2"
    style="min-width: 20%"
  >
    <van-icon 
      :name="item.icon"                           
      class="text-3xl p-2 bg-gray-100 rounded-full" 
    />
    <span class="text-sm text-gray-600 text-center">{{ item.name }}</span>
  </div>
  </section>
      
  <section>
    <!-- 第二个 session，文档列表 -->
    <van-tabs :active="active" swipeable>
      <van-tab v-for="(items, index) in list" :key="index" :title="items.title" >
        <div v-for="(documents, index) in items.items" :key="index" class="border-b border-gray-200 pb-2 mb-1 group hover:bg-gray-100 transition duration-200 active:shadow-lg group-active:shadow-xl">
          <div class="flex items-center space-x-4">
            <!-- 头像 -->
           
       <img :src="documents.img" class="rounded-full h-12 w-12 border-2 border-gray-300" />
        
            <div class="flex flex-col mb-2 mt-4">
              <div class="text-lg font-semibold">{{ documents.documentname }}</div>
              <div class="text-gray-500">{{ documents.date }}</div>
  
            </div>
          </div>
        </div>
      </van-tab>
   </van-tabs>
  </section>
  
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import { toRefs ,ref} from 'vue'
  import { useCloudDocumentsStore } from '@/store/cloudDocumentsStore'
  
  const cloudDocuments = useCloudDocumentsStore()
  const { menu, list } = toRefs(cloudDocuments)
  const active = ref(0)
  </script>
  