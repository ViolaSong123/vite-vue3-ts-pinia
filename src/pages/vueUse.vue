<template>
 <h5> 测试 vueUse 的鼠标坐标</h5>
 <h3>Mouse: {{x}} x {{y}}</h3>
</template>

<script lang="ts" setup>
   import { useMouse } from '@vueuse/core'

   const { x, y } = useMouse()
</script>
<style lang="scss" scoped>
h5{
    color: red;
}
</style>
