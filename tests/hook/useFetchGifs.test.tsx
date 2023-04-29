import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('useFetchGifs Hook Test', () => { 
    test('should return the initial state of the hook', () => { 

        const { result } = renderHook( () => useFetchGifs('One Punch'));
        const { isLoading, images } = result.current;

        expect(isLoading).toBeTruthy();
        expect(images.length).toBe(0);
    })
    
    test('should return images and isLoading in false', async() => { 

        const { result } = renderHook( () => useFetchGifs('One Punch'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { isLoading, images } = result.current;

        expect(isLoading).toBeFalsy();
        expect(images.length).toBeGreaterThan(0);
    })
})