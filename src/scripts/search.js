import FlexSearch from 'flexsearch';

export const searchIndex = new FlexSearch.Index({
    tokenize: "forward",
    resolution: 9,
    depth: 3,
});

export const searchData = [];

export function addToIndex(id, title, content) {
    searchIndex.add(id, `${title} ${content}`);
    searchData.push({ id, title });
}

export function search(query) {
    const results = searchIndex.search(query);
    return results.map(id => searchData.find(item => item.id === id));
}
