import { defineStore } from "pinia"

export const useUserStore = defineStore({
    id: 'user', //id必须填而且要唯一
    state:()=>{
        return {
            name: '张三'
        }
    },
    actions:{
        // pinia的actions支持同步和异步
        updateName(name:string){
            this.name = name
        }
    }
})