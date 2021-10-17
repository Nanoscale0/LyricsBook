import * as cheerio from 'cheerio';

const fetchSearchResults = async (keyword: string) => {
    console.log("Search");
    const response = await fetch(`https://www.kkbox.com/tw/tc/search.php?word=${keyword}&search=song`);
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
            hasLyrics: true
        };
        searchResult.push(item);
    });

    return searchResult;
};

export default fetchSearchResults;