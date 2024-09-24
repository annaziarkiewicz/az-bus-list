<template>
  <AzContainer :bg="true" class="az-tabs-header">
    <ul class="az-tabs-header__tab-list">
      <li
        v-for="tab in tabsName"
        :key="tab.name"
        :class="{ 'az-tabs-header__tab-item--active': tab.name === route.name }"
        class="az-tabs-header__tab-item"
      >
        <span v-if="tab.name === route.name">
          {{ tab.name }}
        </span>
        <RouterLink v-else :to="tab.path">
          {{ tab.name }}
        </RouterLink>
      </li>
    </ul>
  </AzContainer>
</template>

<script lang="ts" setup>
import AzContainer from "@/components/azContainer.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const tabsName = [
  { name: "Bus Lines", path: "/" },
  { name: "Stops", path: "/stops" },
];
</script>

<style lang="scss" scoped>
.az-tabs-header {
  margin-bottom: 20px;
  flex-grow: 0;

  &__tab-list {
    display: flex;
    flex-direction: row;
  }

  &__tab-item {
    position: relative;

    span,
    a {
      text-decoration: none;
      display: block;
      padding: 20px 24px;
      font-family: Inter, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
    }

    a {
      color: #9a9da4;
    }

    span {
      color: #33373c;
    }

    &--active {
      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        display: block;
        height: 2px;
        width: 100%;
        background: #1952e1;
      }
    }
  }
}
</style>
