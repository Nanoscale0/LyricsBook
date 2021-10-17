interface SongData {
    artwork: string;
    title: string;
    artists: string;
    album: string;
}

interface SearchResultItem {
    songData: SongData,
    url: string,
    hasLyrics: boolean | null
}

interface SavedItem {
    id: string,
    songData: SongData,
    lyricsText: string
}

type SearchResult = SearchResultItem[];
type SavedList = SavedItem[];