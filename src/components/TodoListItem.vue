<script lang="ts" setup></script>

<template>
  <div class="default-size-item item-container">
    <input id="item1" type="checkbox" />
    <label class="item-label" for="item1">first Item</label>
  </div>
</template>

<style scoped>
.item-container {
  display: flex;
  align-items: center;
  background: #eeeeee;
  margin-top: 12px;

  &:first-child {
    margin-top: 0;
  }
}

.item-label {
  padding-left: 8px;
}
</style>
