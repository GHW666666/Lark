<template>
    <div class="bg-gray-50 p-6 text-gray-900 h-[100rem]">
      <header class="flex items-center border-b border-gray-200 pb-4">
        
        <div class="flex items-center space-x-4">   <!-- 每个子元素x轴4px -->
         
          <img
            src="https://tse3-mm.cn.bing.net/th/id/OIP-C.Z-8XwG2kFkLIzWkExqH9fQHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            class="rounded-full h-16 w-16 border-2 border-gray-300"
          />
          <div class="text-xl font-semibold">翰文</div>
        </div>
    
     
        <div class="text-lg text-gray-600 ml-10">
          消息
        </div>
    
       
        <div class="flex space-x-4 text-gray-600 ml-auto">
          <van-icon name="search" class="text-xl hover:text-gray-400" />
          <van-icon name="add-o" class="text-xl hover:text-gray-400" />
        </div>
      </header>
  
      <main class="mt-6">
        <div v-for="(message, index) in massages" :key="index" class="border-b border-gray-200 pb-1 mb-1 group hover:bg-gray-100 transition duration-200 active:shadow-lg group-active:shadow-xl">
          <div class="flex items-center space-x-4">
            
            <van-badge :content="message.likes > 0 ? message.likes : ''">
       <img :src="message.avatar" class="rounded-full h-12 w-12 border-2 border-gray-300" />
          </van-badge>

            <div class="flex flex-col">
              <div class="text-lg font-semibold">{{ message.name }}</div>
              <div class="text-gray-500">{{ message.massage }}</div>
              <div class="text-sm text-gray-400 mt-1">
                <span>{{ message.data }}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
  
      <!-- Back to Top Button -->
      <van-back-top />
    </div>
</template>

<script setup lang="ts">
  import { toRefs } from 'vue'
  import { useMassageStore } from '@/store/massageStore'
  import { Badge, BackTop } from 'vant'  // Import the Badge and BackTop components
  
  const MassagesStore = useMassageStore()
  const { massages } = toRefs(MassagesStore)
  console.log(massages)
</script>
