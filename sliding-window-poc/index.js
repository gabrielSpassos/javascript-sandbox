function main() {
    return 'Hello World!';
}

function slidingWindow(array) {
    if (!Array.isArray(array)) {
        throw "Invalid array";
    }

    let windows = [];
    let left = 0;
    for (let i = left + 1; i < array.length - 1; i++) {
        let right = i + 1;
        let window = [array[left], array[i], array[right]];
        windows.push(window);
        left++;
    }

    return windows;
}

module.exports = { main, slidingWindow };

console.log(main());
array = [1, 2, 3, 4, 5, 6]
console.log(slidingWindow(array));