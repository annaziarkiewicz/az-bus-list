<template>
  <AzLayout id="app">
    <router-view />
  </AzLayout>
</template>

<script lang="ts" setup>
import AzLayout from "@/components/azLayout.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();

onMounted(async () => {
  await store.dispatch("getBuses");
});
</script>

<style lang="scss">
body {
  background: #f3f4f9 !important;
}
</style>
