<!-- 默认消息列表页 -->
<script setup lang="ts">
import { ref } from "vue";
import ChatSender from "@/components/ChatSender/index.vue";
import WelecomeText from "@/components/WelecomeText/index.vue";
import { useUserStore } from "@/stores";
import { useSessionStore } from "@/stores/modules/session";
import type { FilesCardProps } from "vue-element-plus-x/types/FilesCard";

const userStore = useUserStore();
const sessionStore = useSessionStore();

const senderValue = ref("");
const senderRef = ref<InstanceType<typeof ChatSender> | null>(null);

async function handleSubmit(content: string, fileList: FilesCardProps[]) {
  //  let filesStoreList = filesStore.filesList;
  //     filesStoreList.forEach((val: any) => {
  //       if (val.fileId) {
  //         ossIdsData.push(val.fileId);
  //       }
  //     });
  //     ossIds.value = ossIdsData;
  // filesStore.setFilesList([...filesStore.filesList, ...fileList]);
  const defautFildIds: any = [];
  fileList.forEach((val: any) => {
    if (val.fileId) {
      defautFildIds.push(val.fileId);
    }
  });
  localStorage.setItem("chatContent", content);
  localStorage.setItem("defautFildIds", defautFildIds.join(","));
  localStorage.setItem("enableThinking", String(senderRef.value?.isReasoningEnabled || false));
  localStorage.setItem("defaultFileList", JSON.stringify(fileList));

  senderValue.value = "";
  await sessionStore.createSessionList({
    userId: userStore.userInfo?.userId as number,
    sessionContent: content,
    sessionTitle: content.slice(0, 10),
    remark: content.slice(0, 10),
  });
}
</script>

<template>
  <div class="chat-defaul-wrap">
    <WelecomeText />
    <ChatSender ref="senderRef" v-model="senderValue" @submit="handleSubmit" />
  </div>
</template>

<style scoped lang="scss">
.chat-defaul-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  min-height: 450px;
}
</style>
