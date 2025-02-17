import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Contact } from '@/types/contacts'
export const useContactsStore=defineStore('constants',()=>{

const contacts=ref<Contact[]>([
    {  name: '外部联系人', icon: 'user-circle-o' ,color:"purple"},
    {  name: '新的联系人', icon: 'contact-o' ,color:"blue"},
    { name: '星标联系人', icon: 'star-o' ,color:"yellow"},
    {  name: '邮箱通讯录', icon: 'envelop-o' ,color:"orange"},
    {  name: '我的群组', icon: 'friends-o',color:"green" }
])
return {
    contacts
}
})