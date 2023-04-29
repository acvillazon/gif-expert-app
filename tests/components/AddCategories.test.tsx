import React from "react";
import { AddCategories } from "../../src/components/AddCategories";
import { fireEvent, render, screen } from "@testing-library/react";
describe('AddCategories Component', () => { 
    test('should change the value of the text', () =>{
        render(<AddCategories onNewCategories={()=>{}}  />)
        const input: HTMLTextAreaElement = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Andres'} });

        expect(input.value).toBe('Andres');
    });

    test('should call onNewCategories if the input has a value', () => { 
        const inputText = 'Andres';
        const onNewCategories = jest.fn();
        render(<AddCategories onNewCategories={onNewCategories}  />)
        const input: HTMLTextAreaElement = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target:{value:inputText}});
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategories).toHaveBeenCalledTimes(1);
        expect(onNewCategories).toHaveBeenCalledWith(inputText);
    });

    test('should NOT call onNewCategories if the input has a value', () => { 
        const inputText = '';
        const onNewCategories = jest.fn();
        render(<AddCategories onNewCategories={onNewCategories}  />)
        const input: HTMLTextAreaElement = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target:{value:inputText}});
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategories).toHaveBeenCalledTimes(0);
        expect(onNewCategories).not.toHaveBeenCalled();
    });
 })