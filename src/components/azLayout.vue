<template>
  <AzContainer class="az-page">
    <AzHeader title="Timetable" />
    <slot />
    <AzFooter />
  </AzContainer>
</template>

<script setup lang="ts">
import AzContainer from "@/components/azContainer.vue";
import AzHeader from "@/components/azHeader.vue";
import AzFooter from "@/components/azFooter.vue";
</script>

<style lang="scss">
.az-page {
  min-height: 100vh;
  padding: 24px;
}
</style>
