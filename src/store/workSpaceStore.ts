import { ref } from 'vue'
import { defineStore } from 'pinia'
import  type {WorkSpace} from '@types/workSpace'
export const useWorkSpaceStore = defineStore('workSpace', () => {
    const apps=ref<WorkSpace[]>([
        { 
            title:'最近使用',
            items:[
            {icon:'user-circle-o',appname:'审批'},
            {icon:'user-circle-o',appname:'审批'},
            {icon:'user-circle-o',appname:'审批'},
            {icon:'user-circle-o',appname:'审批'},
            {icon:'user-circle-o',appname:'审批'},
            {icon:'user-circle-o',appname:'审批'},
            {icon:'user-circle-o',appname:'审批'},
            {icon:'user-circle-o',appname:'审批'},
        ]
        },
        { 
            title:'最近使用',
            items:[
            {icon:'user-circle-o',appname:'审批'},
            {icon:'user-circle-o',appname:'审批'},
            {icon:'user-circle-o',appname:'审批'},
            {icon:'user-circle-o',appname:'审批'},
        ]
        },
        {title:'最近使用',
            items:[
            {icon:'user-circle-o',appname:'审批'},
            {icon:'user-circle-o',appname:'审批'},
            {icon:'user-circle-o',appname:'审批'},
            {icon:'user-circle-o',appname:'审批'},
        ]},
        { title:'最近使用',
            items:[
            {icon:'user-circle-o',appname:'审批'},
            {icon:'user-circle-o',appname:'审批'},
            {icon:'user-circle-o',appname:'审批'},
            {icon:'user-circle-o',appname:'审批'},
        ]},
    ])
    return {
        apps
    } 
})