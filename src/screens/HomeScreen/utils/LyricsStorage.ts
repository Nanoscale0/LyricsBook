import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';
import Fuse from 'fuse.js';
import ReactNativeBlobUtil from 'react-native-blob-util';
import { ToastAndroid } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const fuseOptions: Fuse.IFuseOptions<SavedItem> = {
    keys: [["songData", "title"]],
    includeScore: true
}

export default class LyricsStorage {
    private static storage = new Storage({
        size: 1000,
        storageBackend: AsyncStorage,
        defaultExpires: null,
        enableCache: true
    });
    private static LyricsMap: Map<string, SavedItem> | null = null;

    private static async load() {
        try {
            const ret = await this.storage.load({ key: "lyricsList" });
            this.LyricsMap = new Map(ret);
            console.log("Storage Loaded");
        } catch(err) {
            await this.storage.save({
                key: "lyricsList",
                data: []
            });
            this.LyricsMap = new Map();
            console.log("Storage Initialized");
        };
    }

    private static async save() {
        if (this.LyricsMap === null) await this.load();
        this.storage.save({
            key: "lyricsList",
            data: [...this.LyricsMap!]
        });
    }

    static async add(item: SavedItem) {
        if (this.LyricsMap === null) await this.load();
        this.LyricsMap!.set(item.id, item);
        this.save();
    }

    static async get(id: string) {
        if (this.LyricsMap === null) await this.load();
        return this.LyricsMap!.get(id);
    }

    static async remove(id: string) {
        if (this.LyricsMap === null) await this.load();
        this.LyricsMap!.delete(id);
        this.save();
    }

    static async getArrayList(): Promise<SavedList> {
        if (this.LyricsMap === null) await this.load();
        return [...this.LyricsMap!.values()];
    }

    static async search(keyword: string) {
        const list = await this.getArrayList();
        const fuse = new Fuse(list, fuseOptions);
        return fuse.search(keyword);
    }

    static export() {
        const path = ReactNativeBlobUtil.fs.dirs.SDCardDir + '/lyricsbook_export.json';
        console.log(path);

        ReactNativeBlobUtil.fs.writeFile(path, JSON.stringify([...this.LyricsMap!]), "utf8")
            .then(() => {
                ToastAndroid.show("Export: " + path, ToastAndroid.SHORT);
            })
            .catch((err) => {
                ToastAndroid.show("Export Failed: " + err, ToastAndroid.SHORT);
            });
    }

    static async import() {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            const data = JSON.parse(await ReactNativeBlobUtil.fs.readFile(res[0].uri, "utf8"));

            this.LyricsMap = new Map(data);
            this.storage.save({
                key: "lyricsList",
                data: data
            });

            ToastAndroid.show("Import Success", ToastAndroid.SHORT);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                ToastAndroid.show("Import Error", ToastAndroid.SHORT);
                throw err;
            }
        }
    }
}