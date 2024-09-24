<template>
  <div
    class="az-container"
    :class="{
      'az-container--bg': bg,
      'az-container--outline': outline,
      col: display === 'col',
      row: display === 'row',
    }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    bg?: boolean;
    display?: string;
    outline?: boolean;
  }>(),
  {
    bg: false,
    display: "col",
    outline: false,
  }
);
</script>

<style lang="scss" scoped>
.az-container {
  display: flex;
  width: 100%;

  &--bg {
    background: #ffffff;
    border-radius: 4px;
    padding: 0 24px;
  }

  &--outline {
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='%239A9DA4FF' stroke-width='4' stroke-dasharray='33%2c 27' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 4px;
  }

  &.col {
    flex-direction: column;
  }
  &.row {
    flex-direction: row;
    margin: 0;
    padding: 0;
    gap: 24px;
  }
}
</style>
