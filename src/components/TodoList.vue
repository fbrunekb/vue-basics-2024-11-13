<script lang="ts" setup>
import TodoListItem from '@/components/TodoListItem.vue';
import { ref } from 'vue';

function onAdd() {
  if (inputText.value) {
    lastItemIndex.value += 1;
    items.value = [
      ...items.value,
      {
        inputId: 'item' + lastItemIndex.value,
        label: inputText.value,
      },
    ];
    inputText.value = '';
  } else {
    console.log('empty value not allowed');
  }
}

function deleteFromList(item: ItemDetails) {
  items.value = items.value.filter((i) => i.inputId != item.inputId);
}

const inputText = ref<string>('');

type ItemDetails = {
  inputId: string;
  label: string;
};

const lastItemIndex = ref<number>(4);
const items = ref<ItemDetails[]>([
  {
    inputId: 'item1',
    label: 'first item',
  },
  {
    inputId: 'item2',
    label: 'second item',
  },
  {
    inputId: 'item3',
    label: 'third item',
  },
  {
    inputId: 'item4',
    label: 'fourth item',
  },
]);
</script>

<template>
  <div class="main-content">
    <div>
      <input v-model="inputText" class="default-size-item add-input" type="text" />
      <button class="default-size-item add-button" @click.prevent="onAdd">add</button>
    </div>
    <h3>Items:</h3>
    <div>
      <TodoListItem
        v-for="item of items"
        :key="item.inputId"
        :input-id="item.inputId"
        :label="item.label"
        @delete="deleteFromList(item)"
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

.add-input {
  outline: 2px solid #cccccc;
  outline-offset: -2px;
  border: none;

  &:focus {
    outline: 2px solid #aaaaaa;
  }
}

.add-button {
  border: none;
  margin-left: 12px;
}
</style>
