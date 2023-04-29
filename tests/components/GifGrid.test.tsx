import { render, screen } from "@testing-library/react"
import React from "react"
import { GifGrid  } from "../../src/components/GifGrid";
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs');

describe('GifGrid component', () => {
    const category = 'Dragon Ball'; 
    test('should display the loading', () => { 
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true
        })

        // jest.spyOn(hooks,'useFetchGifs').mockReturnValue({
        //     images:[],
        //     isLoading:true
        // })
        
        render(<GifGrid category={category} />)
        expect(screen.getByRole('heading',{level:1}).innerHTML).toBe('Cargando!!');
        expect(screen.getByText(category)).toBeTruthy();
    })

    test('should display the images loaded', () => { 

        const mock = [
            {
                id:'ABC',
                title: 'Saitama',
                url:'http://localhost/saitama.png'
            },
            {
                id:'123',
                title: 'Dragon Ball',
                url:'http://localhost/dragon.png'
            },
        ]

        useFetchGifs.mockReturnValue({
            images:mock,
            isLoading:false
        })

        render(<GifGrid category={category} />)
        expect(screen.getAllByRole('img').length).toBeTruthy();
    })
})