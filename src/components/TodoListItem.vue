<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

defineProps<{
  inputId: string;
  label: string;
}>();
</script>

<template>
  <div class="default-size-item item-container">
    <div class="labelled-checkbox">
      <input :id="inputId" type="checkbox" />
      <label :for="inputId" class="item-label">{{ label }}</label>
    </div>
    <FontAwesomeIcon class="delete-icon" icon="trash" />
  </div>
</template>

<style scoped>
.item-container {
  display: flex;
  align-items: center;
  background: #eeeeee;
  margin-top: 12px;
  justify-content: space-between;

  &:first-child {
    margin-top: 0;
  }
}

.labelled-checkbox {
  display: flex;
  align-items: center;
  padding: 4px;
}

.item-label {
  padding-left: 8px;
}

.delete-icon {
  margin-left: 12px;

  &:hover {
    color: darkred;
  }
}
</style>
