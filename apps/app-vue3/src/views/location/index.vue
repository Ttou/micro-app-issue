<template>
  <div class="view">
    <div class="content">
      <el-button @click="handleJump"> 点击跳转 /vue2/#/location </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    function handleJump() {
      const baseRouter = window.microApp?.router.getBaseAppRouter()
      baseRouter.push({ name: 'vue2', path: '/vue2/#/location' })
    }

    return {
      handleJump
    }
  }
})
</script>

<style lang="scss" scoped>
.view {
  .content {
    max-width: 740px;
    margin: 0 auto;
    text-align: center;
  }
}
</style>
