<script lang="ts" setup>
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
      <div class="default-size-item item-container">
        <input id="item1" type="checkbox" />
        <label class="item-label" for="item1">first Item</label>
      </div>
      <div class="default-size-item item-container">
        <input id="item2" type="checkbox" />
        <label class="item-label" for="item2">second Item</label>
      </div>
      <div class="default-size-item item-container">
        <input id="item3" type="checkbox" />
        <label class="item-label" for="item3">third Item</label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.default-size-item {
  border-radius: 8px;
  padding: 8px;
  font-size: 16px;
}

.item-container {
  display: flex;
  align-items: center;
  background: #eeeeee;
  margin-top: 12px;

  &:first-child {
    margin-top: 0;
  }
}

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

.item-label {
  padding-left: 4px;
}
</style>
