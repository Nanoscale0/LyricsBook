import * as cheerio from 'cheerio';
import { Site } from '../../../../../values/sites';

const KKBox = async (keyword: string, site: Site) => {
    console.log("Search");
    const url = site === "KKBoxTW"
        ? `https://www.kkbox.com/tw/tc/search.php?word=${keyword}&search=song`
        : `https://www.kkbox.com/hk/tc/search.php?word=${keyword}&search=song`;
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    
    const searchResult: SearchResult = [];

    $(".search-group .song-item").each((i, elem) => {
        const artwork = $(elem).find(".song-cover img").attr("src") || "";
        const title = $(elem).find(".song-title").attr("title") || "";
        const artists = $(elem).find(".song-artist-album a:nth-of-type(1)").attr("title") || "";
        const album = $(elem).find(".song-artist-album a:nth-of-type(2)").attr("title") || "";
        const songData: SongData = { artwork, title, artists, album };
        const url = $(elem).find(".song-title").attr("href") || "";
        const item: SearchResultItem = {
            songData,
            url,
            site,
            hasLyrics: true
        };
        searchResult.push(item);
    });

    return searchResult;
};

export default KKBox;