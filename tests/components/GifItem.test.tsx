import React from "react";
import { render, screen } from "@testing-library/react"
import { GifItem} from '../../src/components/GifItem'

describe('GifItem tests', () => { 
    test('should take an snapshot of the component', () => { 
        const title = 'Andres';
        const url = 'URL';
        const id = '19827';
        const {container} = render(<GifItem title={title} url={url} id={id}/>)
        expect(container).toMatchSnapshot();
    })

    test('should display the URL of the image with its respective ALT', () =>{
        const title = 'Andres';
        const url = 'http://andres.villazon/test';
        const id = '19827';
        render(<GifItem title={title} url={url} id={id}/>)
        const {src, alt}: HTMLImageElement = screen.getByRole('img');
        expect( src ).toBe(url);
        expect( alt ).toBe(title);
    });

    test('should display the title passed', () =>{
        const title = 'Andres';
        const url = 'http://andres.villazon/test';
        const id = '19827';
        render(<GifItem title={title} url={url} id={id}/>)
        const titleSearch  = screen.getByText(title);
        expect( titleSearch ).toBeTruthy();
    });
});