<template>
  <AzContainer class="az-tabs">
    <AzTabsHeader />

    <AzContainer class="az-tabs__body">
      <slot />
    </AzContainer>
  </AzContainer>
</template>

<script lang="ts" setup>
import AzContainer from "@/components/azContainer.vue";
import AzTabsHeader from "@/components/azTabsHeader.vue";
</script>

<style lang="scss" scoped>
.az-tabs {
  flex-grow: 1;

  &__body {
    flex-grow: 1;
  }
}
</style>
