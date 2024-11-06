<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const getTime = () => {
  const dateTimeFormat = new Intl.DateTimeFormat('de-DE', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23', // 24-Stunden-Format erzwingen
  });
  return dateTimeFormat.format(Date.now());
};
</script>

<template>
  <header>
    <div style="display: flex; flex-direction: row; align-items: center; width: 100%; justify-content: space-between">
      <FontAwesomeIcon icon="tasks" />
      <h2>Daily Tasks</h2>
      <span>Time: {{ getTime() }} </span>
    </div>
  </header>

  <main>some main content</main>
</template>
