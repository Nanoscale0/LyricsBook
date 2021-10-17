import * as cheerio from 'cheerio';

const fetchLyrics = async (url: string) => {
    const response = await fetch(`https://www.kkbox.com${url}`);
    const html = await response.text();
    const $ = cheerio.load(html);

    const lyricsText = $(".track-content>.lyrics>p:nth-of-type(2)").text();
    return lyricsText;
};

export default fetchLyrics;