export const shuffleList = (list: string[]): string[] => {
  for (let i = list.length - 1; 0 < i; i--) {
    let r = Math.floor(Math.random() * (i + 1));
    let tmp = list[i];
    list[i] = list[r];
    list[r] = tmp;
  }
  return list;
};
