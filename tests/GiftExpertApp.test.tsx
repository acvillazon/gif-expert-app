import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { GiftExpertApp } from "../src/GiftExpertApp";

describe('Unit Test <GiftExpertApp/>', () => { 
    test('should add the new category' , () => { 
        const category = 'South Park';
        render(<GiftExpertApp/>);
        const input: HTMLTextAreaElement = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target:{value:category}});
        fireEvent.submit(form);
        screen.debug()  

        expect(screen.getByText(category)).toBeTruthy();
    })

    test('should does not repeat category' , () => { 
        const category = 'South Park';
        render(<GiftExpertApp/>);
        const input: HTMLTextAreaElement = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target:{value:category}});
        fireEvent.submit(form);

        fireEvent.input(input, {target:{value:category}});
        fireEvent.submit(form);
        screen.debug()  

        expect(screen.getAllByText(category).length).toBe(1);
    })
    
    test('should render the title of the app with a specific class' , () => { 
        render(<GiftExpertApp/>);
        expect(screen.getByText('Gift Expert App')).toBeTruthy();
    })
})