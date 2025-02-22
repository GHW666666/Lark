<template>
    <div class="bg-gray-50 p-6 text-gray-900 h-[100rem]">
      <header class="flex items-center border-b border-gray-200 pb-4">
       
        <div class="flex items-center space-x-4">
          <img
            src="https://tse3-mm.cn.bing.net/th/id/OIP-C.Z-8XwG2kFkLIzWkExqH9fQHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            class="rounded-full h-16 w-16 border-2 border-gray-300"
          />
          <div class="text-xl font-semibold">翰文</div>
        </div>
  
       
        <div class="text-lg text-gray-600 ml-10">
          工作台
        </div>
  
       
        <div class="flex space-x-4 text-gray-600 ml-auto">
          <van-icon  name="search" class="text-xl hover:text-gray-500" />
          <van-icon name="setting-o" class="text-xl hover:text-gray-500" />
        </div>
      </header>
      <ImageSlider></ImageSlider>
      <main >
        <van-tabs :active="active" swipeable>
       <van-tab 
      v-for="(app, index) in apps" 
      :key="index" 
      :title="app.title"
    >
    <!-- gap-2间距 -->
      <div class="grid grid-cols-4 gap-2 p-2">
        <div 
          v-for="(item, itemIndex) in app.items"
          :key="itemIndex"
          class="flex flex-col items-center p-4 rounded-xl active:scale-95 transition-all"
        >
          <van-icon 
            :name="item.icon"
            class="text-[28px] mb-3 text-blue-500 p-2 bg-blue-50 rounded-full"
          />
          <span class="text-xs font-medium text-gray-600">
            {{ item.appname }}
          </span>
        </div>
      </div>
    </van-tab>
  </van-tabs>
 
      </main>
      
    </div>
  </template>
<script setup lang="ts">
import ImageSlider from '@/components/ImageSlider.vue'
import { toRefs ,ref} from 'vue'
import { useWorkSpaceStore } from '@/store/workSpaceStore'
const workSpaceStore = useWorkSpaceStore()
const {apps} = toRefs(workSpaceStore)
const active = ref(0)
</script>

<style scoped>

</style>