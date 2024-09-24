<template>
  <div class="az-sorting">
    <div class="az-sorting__order">
      <svg
        class="az-sorting__icon"
        :data-testid="`az-sorting-asc`"
        :class="{
          'az-sorting__icon--active': !disabled && activeOrder === 'asc',
        }"
        viewBox="0 0 21 21"
        @click="setSorting('asc')"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.4766 13.991C16.2423 14.2254 15.8624 14.2254 15.6281 13.991L9.65234 8.0153L3.67661 13.991C3.44229 14.2254 3.06239 14.2254 2.82808 13.991C2.59376 13.7567 2.59376 13.3768 2.82808 13.1425L9.22808 6.74251C9.46239 6.50819 9.84229 6.50819 10.0766 6.74251L16.4766 13.1425C16.7109 13.3768 16.7109 13.7567 16.4766 13.991Z"
        />
      </svg>
    </div>

    <div class="az-sorting__order">
      <svg
        class="az-sorting__icon"
        :data-testid="`az-sorting-desc`"
        :class="{
          'az-sorting__icon--active': !disabled && activeOrder === 'desc',
        }"
        viewBox="0 0 21 21"
        @click="setSorting('desc')"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.62886 6.34246C3.86318 6.10814 4.24307 6.10814 4.47739 6.34246L10.4531 12.3182L16.4289 6.34246C16.6632 6.10814 17.0431 6.10814 17.2774 6.34246C17.5117 6.57677 17.5117 6.95667 17.2774 7.19099L10.8774 13.591C10.6431 13.8253 10.2632 13.8253 10.0289 13.591L3.62886 7.19099C3.39455 6.95667 3.39455 6.57677 3.62886 6.34246Z"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TSort } from "@/types/types";

const emit = defineEmits(["sorting"]);

interface Props {
  activeOrder: TSort;
  disabled?: boolean;
}
defineProps<Props>();

const setSorting = (order: TSort) => {
  emit("sorting", order);
};
</script>

<style lang="scss" scoped>
.az-sorting {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20px;

  &__order {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12px;
    height: 8px;
  }

  &__icon {
    width: 12px;
    fill: #9b9da3;

    &--active {
      fill: #1952e1;
    }

    &:not(.az-sorting__icon--active):hover {
      fill: #33373c;
      cursor: pointer;
    }
  }
}
</style>
