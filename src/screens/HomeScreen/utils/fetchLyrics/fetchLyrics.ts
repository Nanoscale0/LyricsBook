import * as cheerio from 'cheerio';
import { Site } from '../../../../values/sites';
import KKBox from './sites/KKBox';

const fetchLyrics = async (url: string, site: Site) => {
    switch(site) {
        case "KKBoxTW":
            return KKBox(url);
        case "KKBoxHK":
            return KKBox(url);
        default:
            return "";
    }
};

export default fetchLyrics;