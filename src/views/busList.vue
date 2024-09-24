<template>
  <AzTabs>
    <AzBusLines
      :active="activeLine"
      @active-line="(line: number) => setActiveLine(line)"
    />

    <AzContainer class="az-view-bus-line" display="row">
      <AzBusStops
        :active-line="activeLine"
        :active-stop="activeStop"
        :placeholder="!activeLine"
        @active-stop="(stop: BusStopTimeline) => activeStop = stop"
      />
      <AzBusTimes
        :active-line="activeLine"
        :active-stop="activeStop"
        :placeholder="!activeStop"
      />
    </AzContainer>
  </AzTabs>
</template>

<script lang="ts" setup>
import AzBusLines from "@/components/azBusLines.vue";
import AzBusStops from "@/components/azBusStops.vue";
import AzBusTimes from "@/components/azBusTimes.vue";
import AzContainer from "@/components/azContainer.vue";
import AzTabs from "@/components/azTabs.vue";
import { BusStopTimeline } from "@/types/types";
import { ref } from "vue";

const activeLine = ref<number>();
const activeStop = ref<BusStopTimeline | null>(null);

const setActiveLine = (line: number) => {
  activeLine.value = line;
  activeStop.value = null;
};
</script>

<style lang="scss" scoped>
.az-view-bus-line {
  flex-grow: 1;
}
</style>
