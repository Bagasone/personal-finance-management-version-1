const sortByHighest = (data, value) => data.sort((a, b) => b[value] - a[value]);
const sortByLowest = (data, value) => data.sort((a, b) => a[value] - b[value]);

export { sortByHighest, sortByLowest };
