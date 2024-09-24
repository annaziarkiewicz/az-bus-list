<template>
  <AzContainer :bg="true" class="az-bus-lines">
    <AzViewTitle title="Select Bus Line" />
    <AzIsLoading v-if="isLoading" label="Bus line list is loading..." />

    <ul v-else class="az-bus-lines__line-list">
      <li v-for="line in lines" :key="line" class="az-bus-lines__line-item">
        <span v-if="line === active" class="az-bus-lines__line-text">{{
          line
        }}</span>
        <button
          v-else
          class="az-bus-lines__line-button"
          @click="setActiveLine(line)"
        >
          {{ line }}
        </button>
      </li>
    </ul>
  </AzContainer>
</template>

<script lang="ts" setup>
import AzContainer from "@/components/azContainer.vue";
import AzIsLoading from "@/components/azIsLoading.vue";
import AzViewTitle from "@/components/azViewTitle.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const emit = defineEmits(["active-line"]);

interface Props {
  active?: number;
}

defineProps<Props>();

const isLoading = computed(() => store.getters["isLoading"]);

const lines = computed(() =>
  Object.keys(store.getters["parsedBuses"]).map(Number)
);

const setActiveLine = (line: number) => {
  emit("active-line", line);
};
</script>

<style lang="scss" scoped>
.az-bus-lines {
  flex-grow: 0;
  margin-bottom: 18px;
  padding-bottom: 24px;

  &__line-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__line-text,
  &__line-button {
    display: flex;
    justify-content: center;
    width: 54px;
    padding: 8px 16px;
    border-radius: 4px;
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
  }

  &__line-text {
    background: #313e6b;
  }

  &__line-button {
    background: #1952e1;

    &:hover {
      background: #2548c2;
    }
  }
}
</style>
