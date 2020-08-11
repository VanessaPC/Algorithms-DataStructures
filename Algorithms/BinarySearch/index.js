const binary_search = (input_array, value) => {
  let first = 0,
    found = false;
  const last = input_array.length - 1;

  while (first <= last && !found) {
    const mid = (first + last) / 2;

    if (input_array[mid] === value) {
      found = true;
      return Object.keys(input_array[value]);
    } else {
      if (value < input_array[mid]) {
        last = mid - 1;
      } else {
        first = mid + 1;
      }
    }

    return -1;
  }
};

const test_list = [1, 3, 9, 11, 15, 19, 29];
const test_val1 = 25;
const test_val2 = 15;
console.log(binary_search(test_list, test_val1));
console.log(binary_search(test_list, test_val2));
