<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { computed, onMounted, onUnmounted, ref } from 'vue';

const time = ref(Date.now());

let intervalId;
onMounted(() => {
  const oneMinute = 60 * 1000;
  intervalId = setInterval(() => {
    time.value = Date.now();
  }, oneMinute);
});

onUnmounted(() => clearInterval(intervalId));

const formattedTime = computed(() => {
  const dateTimeFormat = new Intl.DateTimeFormat('de-DE', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  });
  return dateTimeFormat.format(time.value);
});
</script>

<template>
  <div class="header-container">
    <FontAwesomeIcon icon="tasks" />
    <h2>Daily Tasks</h2>
    <span>Time: {{ formattedTime }} </span>
  </div>
</template>

<style scoped>
.header-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
}
</style>
