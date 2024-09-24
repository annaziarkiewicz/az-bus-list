<template>
  <AzContainer :bg="true" :outline="placeholder" class="az-bus-stops">
    <AzPlaceholder
      v-if="placeholder"
      :placeholder="`Please select the bus ${
        activeLine ? 'stop' : 'line'
      } first`"
    />

    <template v-else>
      <AzViewTitle :title="'Bus Stop: ' + activeStop?.stop" />

      <AzTable :columns="columns" :items="times" :flat="true">
        <template #body-cell-time="{ row }">
          {{ row }}
        </template>
      </AzTable>
    </template>
  </AzContainer>
</template>

<script lang="ts" setup>
import AzContainer from "@/components/azContainer.vue";
import AzPlaceholder from "@/components/azPlaceholder.vue";
import AzTable from "@/components/azTable.vue";
import AzViewTitle from "@/components/azViewTitle.vue";
import { BusStopTimeline } from "@/types/types";
import { computed } from "vue";

interface Props {
  placeholder?: boolean;
  activeLine?: number;
  activeStop: BusStopTimeline | null;
}

const props = defineProps<Props>();

const times = computed(() =>
  (props.activeStop?.time || []).sort((a, b) => {
    const sortAValue = a.length === 4 ? `0${a}` : a;
    const sortBValue = b.length === 4 ? `0${b}` : b;

    return sortAValue > sortBValue ? 1 : -1;
  })
);

const columns = [{ field: "time", label: "Time" }];
</script>

<style lang="scss" scoped></style>
