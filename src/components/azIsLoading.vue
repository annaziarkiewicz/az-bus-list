<template>
  <div class="az-is-loading">
    {{ label }}
  </div>
</template>

<script lang="ts" setup>
interface Props {
  label: string;
}
defineProps<Props>();
</script>

<style lang="scss" scoped>
.az-is-loading {
  background: hotpink;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  border-radius: 4px;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
}
</style>
