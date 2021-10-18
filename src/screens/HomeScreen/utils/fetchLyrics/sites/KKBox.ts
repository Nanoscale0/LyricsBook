import * as cheerio from 'cheerio';

const KKBox = async (url: string) => {
    const response = await fetch(`https://www.kkbox.com${url}`);
    const html = await response.text();
    const $ = cheerio.load(html);

    const lyricsText = $(".track-content>.lyrics>p:nth-of-type(2)").text().replace(/^[\s\r\n]+|[\s\r\n]+$/g,"");
    return lyricsText;
};

export default KKBox;