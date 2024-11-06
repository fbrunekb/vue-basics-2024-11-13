<script lang="ts" setup>
import DefaultHeader from '@/components/DefaultHeader.vue';
import TodoList from '@/components/TodoList.vue';
</script>

<template>
  <header>
    <DefaultHeader headline="Daily Tasks" />
  </header>

  <main>
    <TodoList />
  </main>
</template>
