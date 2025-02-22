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
       <!-- 头像加姓名部分 -->
        <!-- 页面名称-->
        <div class="text-lg text-gray-600 ml-10">
          通讯录
        </div>
  
        <!-- 页面header右侧 -->
        <div class="flex space-x-4 text-gray-600 ml-auto">
          <van-icon  name="search" class="text-xl hover:text-gray-500" />
          <van-icon name="friends-o" class="text-xl hover:text-gray-500" />
        </div>
      </header>
  
      <main class="mt-6">
        <ul class="space-y-2">
  <li
    v-for="(contact, index) in contacts"
    :key="contact.name"
    class="flex items-center py-3 px-4 border-b border-gray-200 rounded-md group hover:bg-gray-100 transition duration-200 active:shadow-lg group-active:shadow-xl"
  >
  <!-- group-active 类会在点击时应用样式，而 group 类会确保它作用于整个元素 -->
    <label
      :for="'contact-' + index"
      class="flex w-full items-center "
    >
    <!-- w-full让label占满父类 -->
      <van-icon :name="contact.icon" :color="contact.color" class="text-xl mr-4" />
      <span class="text-lg font-medium text-gray-800">{{ contact.name }}</span>
      <span class="ml-auto text-sm text-gray-400"> ></span>
    </label>
  </li>
</ul>

      </main>
     

    </div>
  </template>
  
  <script setup lang="ts">
  import { useContactsStore } from '@/store/contactsStore'
  import { toRefs } from 'vue'
  
  const contactsStore = useContactsStore()
  const { contacts } = toRefs(contactsStore)
  console.log(contacts)
  </script>
  
  <style scoped>
  /* No additional custom styles needed as Tailwind classes are used directly */
  </style>
  