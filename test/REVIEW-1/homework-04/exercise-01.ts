export type Item = {id: string, title: string};

let data: Readonly<Item[]> = Object.freeze([]);

export function get_items(): readonly Item[] {
    return data;
}

/** check if id already exist */
export function add_item(newItem: Item): boolean {
    for (const item of data) {
        if (item.id === newItem.id) {
            return false;
        }
    }
    data = Object.freeze([newItem,...data]);
    return true;
}

export function update_item_title_by_id(id: string, newTitle: string): boolean {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            data[i].title = newTitle;
            return true;
        }
    }
    return false;
}
