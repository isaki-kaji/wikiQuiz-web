export const shuffleTitleList = (titleList: string[]): string[] => {
  for (let i = titleList.length - 1; 0 < i; i--) {
    let r = Math.floor(Math.random() * (i + 1));
    let tmp = titleList[i];
    titleList[i] = titleList[r];
    titleList[r] = tmp;
  }
  return titleList;
};
