export const generateHeavyList = (count = 10000) => {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push({ id: 1, name: `Item ${i}` });
  }

  return items;
};
