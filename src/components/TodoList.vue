<script lang="ts" setup>
import TodoListItem from '@/components/TodoListItem.vue';
import { ref } from 'vue';
import type { ItemDetails } from '@/types';
import { appendItem, items, saveItems } from '@/store/items';

function onAdd() {
  if (inputText.value) {
    appendItem(inputText.value);
    inputText.value = '';
  } else {
    console.log('empty value not allowed');
  }
}

function onSave() {
  saveItems();
  console.log('items saved');
}

function deleteFromList(item: ItemDetails) {
  items.value = items.value.filter((i) => i.inputId != item.inputId);
}

function toggle(item: ItemDetails) {
  item.isDone = !item.isDone;
}

const inputText = ref<string>('');
</script>

<template>
  <div class="main-content">
    <div class="top-row">
      <div>
        <input v-model="inputText" class="default-size-item add-input" type="text" @keydown.enter="onAdd" />
        <button class="default-size-item add-button" @click.prevent="onAdd">add</button>
      </div>
      <button class="default-size-item" @click.prevent="onSave">save</button>
    </div>
    <h3>Items:</h3>
    <div>
      <TodoListItem
        v-for="item of items"
        :key="item.inputId"
        :item="item"
        @delete="deleteFromList(item)"
        @toggle="toggle(item)"
      />
    </div>
  </div>
</template>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 20px;
}

.top-row {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.add-input {
  outline: 2px solid #cccccc;
  outline-offset: -2px;
  border: none;

  &:focus {
    outline: 2px solid #aaaaaa;
  }
}

.add-button {
  margin-left: 12px;
}

button {
  border: none;
}
</style>
