<template>
  <header v-if="title" class="az-header">
    <h1 class="az-header__title">
      {{ title }}
    </h1>
  </header>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
}
defineProps<Props>();
</script>

<style lang="scss" scoped>
.az-header {
  margin-bottom: 24px;

  &__title {
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #1a1a1a;
  }
}
</style>
