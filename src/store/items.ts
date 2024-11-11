import { ref } from 'vue';
import type { ItemDetails } from '@/types';

export const items = ref<ItemDetails[]>([
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
export const lastItemIndex = ref<number>(items.value.length);

export function appendItem(inputText: string) {
  lastItemIndex.value += 1;
  items.value = [
    ...items.value,
    {
      inputId: 'item' + lastItemIndex.value,
      label: inputText,
    },
  ];
}
