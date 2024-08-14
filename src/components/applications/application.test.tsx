import {render,screen} from '@testing-library/react'
import  Application  from './Applications'
import { act } from 'react'
import React from 'react'

describe('Application',()=>{

    test('checking for roles',()=>{

        act(()=>{
            render(<Application/>)

        })

        let roleText = screen.getAllByRole('textbox')

        let roleSelect = screen.getAllByRole('combobox')

        let roleCheckbox = screen.getAllByRole('checkbox')
        expect(roleText).toBeInTheDocument();
        expect(roleSelect).toBeInTheDocument();
        expect(roleCheckbox).toBeInTheDocument();

    })
})


export{}

