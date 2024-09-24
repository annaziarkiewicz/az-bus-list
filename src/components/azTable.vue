<template>
  <table class="az-table" :class="{ 'az-table--flat': flat }">
    <thead class="az-table__head">
      <tr class="az-table__row">
        <th
          v-for="column in columns"
          :key="column.field"
          class="az-table__cell"
        >
          {{ column.label }}
          <slot :name="'header-cell-' + column.field" />
        </th>
      </tr>
    </thead>
    <tbody class="az-table__body">
      <tr
        v-for="item in items"
        :key="typeof item === 'object' ? item.stop : item"
        class="az-table__row"
      >
        <td
          v-for="column in columns"
          :key="'td-' + column.field"
          class="az-table__cell"
          :class="{
            'az-table__cell--active':
              active && item[column.field as keyof typeof item] === active[column.field as keyof typeof item],
          }"
          @click="emit('set-active', item)"
        >
          <slot
            v-if="$slots[`body-cell-${column.field}`]"
            :name="'body-cell-' + column.field"
            :row="item"
            :cell="item[column.field as keyof typeof item]"
          />
          <template v-else>
            {{ item[column.field as keyof typeof item] }}
          </template>
        </td>
      </tr>
      <tr v-if="items.length === 0" class="az-table__row">
        <td class="az-table__cell">No results</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { BusStopTimeline } from "@/types/types";

const emit = defineEmits(["set-active"]);
interface Props {
  columns: { field: string; label: string }[];
  items: BusStopTimeline[] | string[];
  active?: BusStopTimeline | null;
  flat?: boolean;
}
const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.az-table {
  margin: 0 -24px;

  &__row {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #f3f4f9;
  }

  &__cell {
    display: flex;
    width: 100%;
    font-family: Inter, sans-serif;
    font-size: 12px;
    line-height: 16px;
    color: #33373c;
  }

  &__head {
    border-bottom: 1px solid #e2e4e9;

    .az-table__cell {
      padding: 10px 24px 20px;
      font-weight: 600;
    }
  }

  &__body {
    .az-table__cell {
      padding: 20px 24px;
      font-weight: 400;

      &--active {
        color: #1952e1;
      }
    }
  }

  &:not(.az-table--flat) {
    .az-table__body {
      .az-table__cell {
        &:not(.az-table__cell--active):hover {
          background: #f8f8fb;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
