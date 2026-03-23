function minWindowSubarray(arr, target) {
  let targetCount = {};
  for (let x of target) targetCount[x] = (targetCount[x] || 0) + 1;

  let windowCount = {};
  let left = 0, right = 0;
  let required = Object.keys(targetCount).length;
  let formed = 0;
  let minLen = Infinity;
  let minWindow = [];

  while (right < arr.length) {
    let char = arr[right];
    windowCount[char] = (windowCount[char] || 0) + 1;

    if (targetCount[char] && windowCount[char] === targetCount[char]) {
      formed++;
    }

    while (formed === required) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minWindow = arr.slice(left, right + 1);
      }

      let leftChar = arr[left];
      windowCount[leftChar]--;
      if (targetCount[leftChar] && windowCount[leftChar] < targetCount[leftChar]) {
        formed--;
      }
      left++;
    }
    right++;
  }
  return minWindow;
}