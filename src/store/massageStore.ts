import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Massage } from '@/types/massage'

export const useMassageStore = defineStore('massage', () => {
  
    const massages= ref<Massage[]>([
      {
        avatar: "https://tse1-mm.cn.bing.net/th/id/OIP-C.PxIx21S3krLQLvjdyR7PYgHaHa?w=184&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7", 
        name: '你的专属提效工具',
        massage: '来看看为你量身定制的效率工具',
        data: '2024年12月26日',
        likes:'0'
      },
      {
        avatar: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.wbs24rFGqgEKCqp_Yj4SOgHaHa?w=184&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7',
        name: '账号安全中心',
        massage: '安全登录通知',
        data: '昨天',
        likes:'0'
      },
      {
        avatar: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.EwO29AfeHN_M-7_wouCJ9wHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7', 
        name: '你的专属提效工具',
        massage: '来选择你的第一份多维表格效率工具吧',
        data: '2024年12月20日',
        likes:'0'
      },
      {
        avatar: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.s1jdPO-QFb9encz7c8PxaAHaHa?w=184&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7', 
        name: '云文档助手',
        massage: '@提醒',
        data: '2024年12月19日',
        likes:'5'
      },
      {
        avatar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.8WoYDZCcau3hbyM0p0z_cgHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7', 
        name: '审批',
        massage: '免费使用，快来开启审批之旅吧',
        data: '2024年12月18日',
        likes:'2'
      },
      {
        avatar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.HRx1Ln35TrS5W1sE3M-J_wHaIY?w=163&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7', 
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