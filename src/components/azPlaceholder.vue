<template>
  <div class="az-placeholder">
    {{ placeholder }}
  </div>
</template>

<script lang="ts" setup>
interface Props {
  placeholder: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.az-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #63666e;
}
</style>
