import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Massage } from '@/types/massage'

export const useMassageStore = defineStore('massage', () => {
  
    const massages= ref<Massage[]>([
      {
        avatar: "https://img2.baidu.com/it/u=3569028837,3948269640&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067", 
        name: '你的专属提效工具',
        massage: '来看看为你量身定制的效率工具',
        data: '2024年12月26日',
        likes:'0'
      },
      {
        avatar: 'path/to/avatar2.jpg',
        name: '账号安全中心',
        massage: '安全登录通知',
        data: '昨天',
        likes:'0'
      },
      {
        avatar: 'path/to/avatar3.jpg', 
        name: '你的专属提效工具',
        massage: '来选择你的第一份多维表格效率工具吧',
        data: '2024年12月20日',
        likes:'0'
      },
      {
        avatar: 'path/to/avatar4.jpg', 
        name: '云文档助手',
        massage: '@提醒',
        data: '2024年12月19日',
        likes:'5'
      },
      {
        avatar: 'path/to/avatar5.jpg', 
        name: '审批',
        massage: '免费使用，快来开启审批之旅吧',
        data: '2024年12月18日',
        likes:'2'
      },
      {
        avatar: 'path/to/avatar6.jpg', 
        name: '在龚翰文玩转云文档',
        massage: '云文档助手: @龚翰文麻烦关注下这…',
        data: '2024年12月18日',
        likes:'1'
      }
    ])
    return {
        massages
    }

});