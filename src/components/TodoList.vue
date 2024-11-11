<script lang="ts" setup>
import TodoListItem from '@/components/TodoListItem.vue';

function onAdd(event: Event) {
  console.log(event.target);
}
</script>

<template>
  <div class="main-content">
    <div>
      <input class="default-size-item add-input" type="text" />
      <button class="default-size-item add-button" @click.prevent="onAdd">add</button>
    </div>
    <h3>Items:</h3>
    <div>
      <TodoListItem input-id="item1" label="first Item" />
      <TodoListItem input-id="item2" label="second Item" />
      <TodoListItem input-id="item3" label="third Item" />
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
