// exercise 1

export type Item = { id: string, title: string; };

let data: Readonly<Item[]> = Object.freeze([]);

export function get_items(): readonly Item[] {
    return data;
}

/** 
 * add item if id does not exist 
 * return true if item is added successfully, false otherwise
 * 
*/
export function add_item(new_item: Item): boolean {
    
    const exists = data.some(item => item.id === new_item.id);
    if (exists) {
        // return false if the id already exist
        return false;
    }
    // Add the new item
    data = Object.freeze([...data, new_item]);
    return true;
}

/** update the title of an item by its id */
export function update_item_title_by_id(id: string, new_title: string): boolean {
    const itemIndex = data.findIndex(item => item.id === id);
    if (itemIndex === -1) {
        // return false if the item does not exist.
        return false;
    }

    // update the item title
    const updatedItems = [...data];
    updatedItems[itemIndex] = {...updatedItems[itemIndex], title: new_title};
    data = Object.freeze(updatedItems);
    return true;
}

/** delete and item by its id */
export function delete_item_by_id(id: string): boolean {
    const itemExists = data.some(item => item.id === id);
    if (!itemExists) {
        return false;
    }

    data = Object.freeze(data.filter(item => item.id !== id));
    return true;
}

export function get_item_title_by_id(id: string): string {
    const item = data.find(item => item.id === id)
    return item ? item.title : '';
}
