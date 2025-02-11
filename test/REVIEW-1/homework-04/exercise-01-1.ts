export type Item = {
    id: string,
    title: string
};

let data: Readonly<Item[]> = Object.freeze([]);

export function get_items(): readonly Item[] {
    return data;
}

export function add_item(newItem: Item): boolean {
    if (data.some(item => item.id === newItem.id)) {
        return false;
    }

    data = Object.freeze([...data, newItem]);
    return true;
}

export function update_item_title_by_id(id: string, newTitle: string) {
    const index = data.findIndex(item => item.id === id);
    if (index == -1) {
        return false;
    }
    data = [...data];
    data[index].title = newTitle;
    Object.freeze(data);
    return true;
}

