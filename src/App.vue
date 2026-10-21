<script setup lang="ts">
import { onMounted } from 'vue';
import { useSystemStore } from '@/stores/modules/system';

const systemStore = useSystemStore();

// 关键：应用一启动（含刷新后重新挂载）就拉一次系统配置，
// 这样刷新后 appTitle 也会被重新写入 store，不再 undefined
onMounted(async () => {
  await systemStore.fetchAppTitle();
});
</script>

<template>
  <router-view />
</template>

<style scoped lang="scss"></style>
