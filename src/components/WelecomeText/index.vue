<!-- 欢迎提示词 -->
<script setup lang="ts">
import { Typewriter } from 'vue-element-plus-x';
import { useTimeGreeting } from '@/hooks/useTimeGreeting';
import { useUserStore } from '@/stores';
import {useSystemStore} from '@/stores/modules/system';
const systemStore = useSystemStore();
const greeting = useTimeGreeting();
const userStore = useUserStore();

const username = computed(() => userStore.userInfo?.username ?? `我是 ${systemStore.appTitle} 智能助手`);
</script>

<template>
  <div
    class="welcome-text w-full flex flex-wrap items-center justify-center text-center text-lg font-semibold mb-32px mt-12px font-size-32px line-height-32px"
  >
    <Typewriter
      :content="`${greeting}好，${username}`"
      :typing="{
        step: 2,
        interval: 45,
      }"
      :is-fog="{
        bgColor: '#fff',
      }"
    />
  </div>
</template>

<style scoped lang="scss">
:deep {
  .typer-container {
    overflow: initial;
  }
}
</style>
