function binarySearch(array, target, start, end) {

    if (start > end)
        return NOT_FOUND;
    if (array[start] === target)
        return start;
    if (array[end] === target)
        return end;
    let middle = (start + end) / 2
    if (array[middle] > target)
        return binarySearch(array, target, start + 1, middle);
    if (array[middle] < target)
        return binarySearch(array, target, middle, end - 1);
    return middle;
}
console.log(Math.round(binarySearch([1, 2, 3, 4, 5, 7, 8], 5, 0, 6)));

/* Another Method */
function binarySearch1(array, target) {
    let start = 0;
    let end = (array.length) - 1;
    let middle = ((start + end) / 2);
    if (array[start] === target) {
        return start + 1;
    }

    else if (array[end] === target) {
        return end;
    }
    else
        if (array[middle] > target) {

            return (binarySearch1(array.slice(start, middle), target)) + 1;
        }
        else if (array[middle] < target) {

            return middle + (binarySearch1(array.slice(middle, end + 1), target));
        }
        else {
            return middle + 1;
        }
}
console.log(Math.round(binarySearch1([1, 2, 3, 4, 5, 6, 7], 3)));
