export const getAssetsImage = (src) => {
    return new URL(`../assets/${src}`, import.meta.url).href
}
