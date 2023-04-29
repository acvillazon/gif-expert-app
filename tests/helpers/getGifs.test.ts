import { getGifts } from "../../src/helpers/getGifs";
describe('getGifs Helper', () => { 
    test('should return an array of images', async() =>{
        const category = 'Goku';
        const images = await getGifts(category);
        expect(images.length).toBeGreaterThan(0);
        expect(images.at(0)).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });

    });
})