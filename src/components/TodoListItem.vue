<script lang="ts" setup>
defineProps<{
  inputId: string;
  label: string;
}>();
</script>

<template>
  <div class="default-size-item item-container">
    <input :id="inputId" type="checkbox" />
    <label :for="inputId" class="item-label">{{ label }}</label>
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
