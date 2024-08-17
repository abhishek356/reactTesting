import {render,screen} from '@testing-library/react'
import  Application  from './Applications'
import { act } from 'react'
import React from 'react'

describe('Application',()=>{

    test('checking for roles',()=>{

        act(()=>{
            render(<Application/>)

        })

        let roleText = screen.getByRole('textbox')

        let roleSelect = screen.getByRole('combobox')

        let roleCheckbox = screen.getByRole('checkbox')

        // let roleCheckh1 = screen.getByRole('heading',{
        //     level:1
        // })

        // let  getElementLabel =  screen.getByLabelText('name',
        //     {selector:'input'} 
        // );

        // let getElementPlaceholder = screen.getByPlaceholderText('Enter full nme');

        let getElemenetByDisplay= screen.getByDisplayValue('This is the default valu')
        expect(getElemenetByDisplay).toBeInTheDocument();
        // expect(getElementPlaceholder).toBeInTheDocument()
        // expect(getElementLabel).toBeInTheDocument();
        // expect(roleCheckh1).toBeInTheDocument()
        // expect(roleText).toBeInTheDocument();
        // expect(roleSelect).toBeInTheDocument();
        // expect(roleCheckbox).toBeInTheDocument();

    })
})




export{}

