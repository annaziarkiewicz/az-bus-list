<template>
  <form class="az-search-bar">
    <input
      v-model="searchPhrase"
      class="az-search-bar__input"
      data-testid="az-search-bar"
      placeholder="Search..."
      @keyup="startSearching(searchPhrase)"
    />
    <svg
      class="az-search-bar__icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.83325 7.33337C1.83325 4.29581 4.29569 1.83337 7.33325 1.83337C10.3708 1.83337 12.8333 4.29581 12.8333 7.33337C12.8333 10.3709 10.3708 12.8334 7.33325 12.8334C4.29569 12.8334 1.83325 10.3709 1.83325 7.33337ZM7.33325 0.833374C3.7434 0.833374 0.833252 3.74352 0.833252 7.33337C0.833252 10.9232 3.7434 13.8334 7.33325 13.8334C8.9482 13.8334 10.4256 13.2444 11.5624 12.2696L13.6464 14.3536C13.8416 14.5489 14.1582 14.5489 14.3535 14.3536C14.5487 14.1583 14.5487 13.8418 14.3535 13.6465L12.2695 11.5625C13.2443 10.4257 13.8333 8.94832 13.8333 7.33337C13.8333 3.74352 10.9231 0.833374 7.33325 0.833374Z"
      />
    </svg>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const emit = defineEmits(["search"]);

const searchPhrase = ref<string>("");

const startSearching = (phrase: string) => {
  emit("search", phrase.toLowerCase());
};
</script>

<style lang="scss" scoped>
.az-search-bar {
  position: relative;
  margin: 8px 0 18px -18px;
  width: 100%;
  max-width: 288px;

  &__input {
    display: flex;
    width: 100%;
    padding: 12px 32px 12px 16px;
    border-radius: 4px;
    border: 1px solid #e2e4ea;
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    &:focus,
    &:active {
      border-color: #1952e1;
      & + .az-search-bar__icon {
        fill: #1952e1 !important;
      }
    }
  }
  &__icon {
    position: absolute;
    top: 12px;
    right: 12px;
    fill: #9a9da4;
  }
}
</style>
