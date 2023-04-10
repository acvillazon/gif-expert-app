export const getGifts = async (category: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=aWiYU3w3j68nqXbZqA7jsgUzNV2qAgby&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifts = data.map((img:any) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifts;
};