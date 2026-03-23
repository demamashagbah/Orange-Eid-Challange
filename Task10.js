function reconstructQueue(people) {
  people.sort((a, b) => {
    if (a.height !== b.height) {
      return b.height - a.height;
    }
    return a.inFront - b.inFront;
  });

  const queue = [];
  for (let person of people) {
    queue.splice(person.inFront, 0, person);
  }
  return queue;
}