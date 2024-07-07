function createSortedId(id1, id2) {
    // Create an array with the IDs
    let ids = [id1, id2];

    // Sort the IDs in lexicographical order
    ids.sort();

    // Join the sorted IDs with a colon
    return ids.join(':');
}
module.exports = { createSortedId };
