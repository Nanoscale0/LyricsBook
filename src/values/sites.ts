const siteList = [
    'KKBoxTW',
    'KKBoxHK'
] as const;

type Site = typeof siteList[number];

export { siteList };
export type { Site };
