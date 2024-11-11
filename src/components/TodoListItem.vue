<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

defineProps<{
  inputId: string;
  label: string;
}>();

const emit = defineEmits(['delete']);
</script>

<template>
  <div class="default-size-item item-container">
    <div class="labelled-checkbox">
      <FontAwesomeIcon :icon="faSquare" />
      <span class="item-label">{{ label }}</span>
    </div>
    <FontAwesomeIcon :icon="faTrash" class="delete-icon" @click.prevent="emit('delete')" />
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
