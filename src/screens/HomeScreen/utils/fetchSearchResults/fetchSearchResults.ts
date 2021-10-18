import * as cheerio from 'cheerio';
import { Site } from '../../../../values/sites';
import KKBox from './sites/KKBox';

const fetchSearchResults = async (keyword: string, site: Site) => {
    switch(site) {
        case "KKBoxTW":
            return await KKBox(keyword, site);
        case "KKBoxHK":
            return await KKBox(keyword, site);
        default:
            return [];
    }
};

export default fetchSearchResults;