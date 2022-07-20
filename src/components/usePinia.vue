<template>
<div>{{useStore.name}}</div>
<button @click="changeName">更新用户名</button>
</template>
<script lang="ts" setup>
    import { useUserStore } from '@/store/user';
    const useStore = useUserStore()
    const changeName = ()=>{
        useStore.updateName ('陈芊芊')
    }
</script>
<style ></style>