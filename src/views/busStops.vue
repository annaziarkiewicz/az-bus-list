<template>
  <AzTabs>
    <AzContainer class="az-view-bus-stops">
      <AzBusStops :placeholder="false" />
    </AzContainer>
  </AzTabs>
</template>

<script lang="ts" setup>
import AzBusStops from "@/components/azBusStops.vue";
import AzContainer from "@/components/azContainer.vue";
import AzTabs from "@/components/azTabs.vue";
</script>

<style lang="scss" scoped>
.az-view-bus-line {
  flex-grow: 1;
}
</style>
