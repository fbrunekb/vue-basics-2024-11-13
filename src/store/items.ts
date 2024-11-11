import { ref } from 'vue';
import type { ItemDetails } from '@/types';
import Cookies from 'js-cookie';

const defaultItems = [
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
];
const itemsCookies = Cookies.get('items');
const lastItemIndexCookies = Cookies.get('lastItemIndex');

export const items = ref<ItemDetails[]>(itemsCookies ? JSON.parse(itemsCookies) : defaultItems);
export const lastItemIndex = ref<number>(parseInt(lastItemIndexCookies) ?? items.value.length);

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

export function saveItems() {
  Cookies.set('items', JSON.stringify(items.value));
  Cookies.set('lastItemIndex', lastItemIndex.value);
}
