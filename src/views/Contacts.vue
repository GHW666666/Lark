<template>
    <div class="bg-gray-50 p-6 text-gray-900 h-[100rem]">
      <header class="flex items-center border-b border-gray-200 pb-4">
        <!-- Avatar and Name Section -->
        <div class="flex items-center space-x-4">
          <img
            src="https://img2.baidu.com/it/u=3569028837,3948269640&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067"
            class="rounded-full h-16 w-16 border-2 border-gray-300"
          />
          <div class="text-xl font-semibold">翰文</div>
        </div>
  
        <!-- Title Section -->
        <div class="text-lg text-gray-600 ml-10">
          通讯录
        </div>
  
        <!-- Icons on the right -->
        <div class="flex space-x-4 text-gray-600 ml-auto">
          <van-icon  name="search" class="text-xl hover:text-gray-500" />
          <van-icon name="user" class="text-xl hover:text-gray-500" />
        </div>
      </header>
  
      <main class="mt-6">
        <ul class="space-y-3">
          <li
            v-for="(contact, index) in contacts"
            :key="contact.name"
            class="flex items-center py-3 px-4 border-b border-gray-200 rounded-md group hover:bg-gray-100 transition duration-200"
          >
            <!-- Hidden radio input to toggle state -->
            <input type="radio" name="activeContact" :id="'contact-' + index" class="hidden peer" />
            
            <label
              :for="'contact-' + index"
              class="flex w-full items-center cursor-pointer peer-checked:bg-gradient-to-r peer-checked:from-gray-300 peer-checked:to-gray-500 peer-checked:shadow-md peer-checked:text-gray-900 peer-focus:bg-gradient-to-r peer-focus:from-gray-300 peer-focus:to-gray-500"
            >
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
  