import { ref } from 'vue'
import { defineStore } from 'pinia'
import  type {WorkSpace} from '@types/workSpace'
export const useWorkSpaceStore = defineStore('workSpace', () => {
    const apps=ref<WorkSpace[]>([
        { 
            title:'最近使用',
            items:[
            {icon:'user-circle-o',appname:'审批'},
            {icon:'user-circle-o',appname:'工资单'},
            {icon:'user-circle-o',appname:'假期'},
            {icon:'user-circle-o',appname:'飞书OKR'},
            {icon:'user-circle-o',appname:'飞书提醒'},
            {icon:'user-circle-o',appname:'汇报'},
            {icon:'user-circle-o',appname:'飞书帮助中心'},
            {icon:'user-circle-o',appname:'公告'},
            
        ]
        },
        { 
            title:'综合人事',
            items:[
            {icon:'user-circle-o',appname:'假勤'},
        
        ]
        },
        {title:'项目管理',
            items:[
            {icon:'user-circle-o',appname:'飞书提醒'},
        
        ]},
        { title:'问卷调研',
            items:[
            {icon:'user-circle-o',appname:'飞书问卷'},
           
        ]},
    ])
    return {
        apps
    } 
})