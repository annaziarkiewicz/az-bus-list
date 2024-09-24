<template>
  <AzContainer :bg="true" :outline="placeholder" class="az-bus-stops">
    <AzPlaceholder
      v-if="placeholder"
      placeholder="Please select the bus line first"
    />

    <template v-else>
      <AzViewTitle v-if="activeLine" :title="'Bus line: ' + activeLine" />
      <AzSearchBar v-else @search="(phrase: string) => searching = phrase" />
      <AzIsLoading
        v-if="!activeLine && isLoading"
        label="Bus stop list is loading..."
      />

      <AzTable
        v-else
        :columns="columns"
        :items="stops"
        :active="activeStop"
        :flat="!activeLine"
        @set-active="(stop) => setActiveStop(stop)"
      >
        <template #header-cell-stop>
          <AzSorting
            :active-order="sorting"
            :disabled="!stops.length"
            @sorting="(order) => sortTable(order)"
          />
        </template>
      </AzTable>
    </template>
  </AzContainer>
</template>

<script lang="ts" setup>
import AzContainer from "@/components/azContainer.vue";
import AzIsLoading from "@/components/azIsLoading.vue";
import AzPlaceholder from "@/components/azPlaceholder.vue";
import AzSearchBar from "@/components/azSearchBar.vue";
import AzSorting from "@/components/azSorting.vue";
import AzTable from "@/components/azTable.vue";
import AzViewTitle from "@/components/azViewTitle.vue";
import {
  TSort,
  BusesResponse,
  BusStopTimeline,
  ParsedBuses,
} from "@/types/types";
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const emit = defineEmits(["active-stop"]);

interface Props {
  placeholder?: boolean;
  activeLine?: number;
  activeStop?: BusStopTimeline | null;
}
const props = defineProps<Props>();

const isLoading = computed(() => store.getters["isLoading"]);

const columns = [{ field: "stop", label: "Bus Stops" }];

const sorting = ref<TSort>("asc");
const searching = ref<string>("");

const stops = computed(() => {
  const buses = store.getters["buses"] as BusesResponse[];
  const parsedBuses = store.getters["parsedBuses"] as ParsedBuses;
  const busStops = props.activeLine
    ? parsedBuses[props.activeLine]
    : [...new Set(buses.map(({ stop }) => stop))].map((stop) => ({
        stop,
        time: [],
      }));
  const filteredBusStops = searching.value
    ? busStops.filter(({ stop }) =>
        stop.toLowerCase().includes(searching.value)
      )
    : busStops;

  return filteredBusStops.sort((busStopA, busStopB) => {
    const sortAValue = busStopA.stop;
    const sortBValue = busStopB.stop;
    const result = sortAValue > sortBValue ? 1 : -1;

    return sorting.value === "asc" ? result : result * -1;
  });
});

const sortTable = (order: TSort) => {
  sorting.value = order;
};

const setActiveStop = (stop: BusStopTimeline) => {
  emit("active-stop", stop);
};
</script>

<style lang="scss" scoped></style>
