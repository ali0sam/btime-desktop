import electronStore from "electron-store";


export interface StoreKey {
    bounds: {
        x: number
        y: number
        width: number
        height: number
    }
    alwaysOnTop: boolean,
    theme: "system" | "light" | "dark"
}
export const store = new electronStore<StoreKey>({
    defaults: {
        bounds: {
            x: 0,
            y: 0,
            height: 0,
            width: 0
        },
        alwaysOnTop: false,
        theme: "light"

    },
    name: "bTime.1",
});