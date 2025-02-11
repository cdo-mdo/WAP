import { get_items, add_item, update_item_title_by_id } from './exercise-01-1';

console.log(get_items());
console.log(add_item({id: '12345', title: 'abc'}));
console.log(get_items());
console.log(update_item_title_by_id('12', 'new title'));
console.log(update_item_title_by_id('12345', 'new title'));
console.log(get_items());
