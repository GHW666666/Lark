import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Menu,List } from '@/types/cloudDocuments'
export const useCloudDocumentsStore=defineStore('cloudDocuments',()=>{

const menu=ref<Menu[]>([
    {  icon: 'sort' ,name:'云盘'},
    {  icon: 'hot' ,name:'知识库'},
    {  icon: 'star' ,name:'收藏'},
    {  icon: 'service' ,name:'离线'},
])
const list=ref<List>([
    { 
        title:'最近使用',
        items:[
        {img:"https://tse4-mm.cn.bing.net/th/id/OIP-C.R11z1OF56iN12BEa0x-ZHAAAAA?w=166&h=178&c=7&r=0&o=5&dpr=1.5&pid=1.7",documentname:'2024人工智能...',date:'最近访问与22:08'},
        {img:'https://tse4-mm.cn.bing.net/th/id/OIP-C.hkkoQCdrpdwW19dhUul38gHaHa?w=188&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7',documentname:'玩转云文档',date:'最近访问与昨天'},
    
    ]
    },
    { 
        title:'目录',
        items:[
        {img:"https://tse3-mm.cn.bing.net/th/id/OIP-C.CX0COqmJ9irsjgBVmINaMAAAAA?w=164&h=178&c=7&r=0&o=5&dpr=1.5&pid=1.7",documentname:'我的文档库',date:'最近访问与16:08'},
        
        
    ]
    },
 
])
return {
    menu,
    list
}
})

