function hasCycle(nums) {
  let visited = new Set();
  let current = 0;

  while (current >= 0 && current < nums.length) {
    if (visited.has(current)) return true;
    visited.add(current);
    current += nums[current];
  }
  return false;
}