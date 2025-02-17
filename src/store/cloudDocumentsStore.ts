import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Menu,List } from '@/types/cloudDocuments'
export const useCloudDocumentsStore=defineStore('cloudDocuments',()=>{

const menu=ref<Menu[]>([
    {  icon: 'user-circle-o' ,name:'云盘'},
    {  icon: 'user-circle-o' ,name:'知识库'},
    {  icon: 'user-circle-o' ,name:'收藏'},
    {  icon: 'user-circle-o' ,name:'离线'},
])
const list=ref<List>([
    {img:"https://img2.baidu.com/it/u=3569028837,3948269640&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067",documentname:'2024人工智能...',date:'最近访问与22:08'},
    {img:'',documentname:'在线玩转云文档',date:'最近访问与22:04'},
    {img:'',documentname:'',date:''},
    {img:'',documentname:'',date:''},
 
])
return {
    menu,
    list
}
})