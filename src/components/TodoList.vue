<script lang="ts" setup>
import TodoListItem from '@/components/TodoListItem.vue';

function onAdd(event: Event) {
  console.log(event.target);
}

type ItemDetails = {
  inputId: string;
  label: string;
};

const items: ItemDetails[] = [
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
];
</script>

<template>
  <div class="main-content">
    <div>
      <input class="default-size-item add-input" type="text" />
      <button class="default-size-item add-button" @click.prevent="onAdd">add</button>
    </div>
    <h3>Items:</h3>
    <div>
      <TodoListItem :input-id="items[0].inputId" :label="items[0].label" />
      <TodoListItem :input-id="items[1].inputId" :label="items[1].label" />
      <TodoListItem :input-id="items[2].inputId" :label="items[2].label" />
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
