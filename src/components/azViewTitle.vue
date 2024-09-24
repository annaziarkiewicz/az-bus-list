<template>
  <h2 class="az-view-title">
    {{ title }}
  </h2>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
}
defineProps<Props>();
</script>

<style lang="scss" scoped>
.az-view-title {
  margin: 24px 0;
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #1a1a1a;
}
</style>
