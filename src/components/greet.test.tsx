import React from "react"
import Greet from "./greet"
import { render,screen } from "@testing-library/react"
import { act } from "react"



describe('Greet',()=>{

    test('testing the presence of  hell',()=>{

        act(()=>{
            render(<Greet name={'amit' }/>);

        })
        render(<Greet name={'amit' }/>);
        const testingText = screen.getByText(/hello/i);
        expect(testingText).toBeInTheDocument();
    
    })

    describe('nested describe',()=>{

        
test('testing for hello upper case',()=>{

    act(()=>{
        render(<Greet/>)
    })
    let  text  =  screen.getByText('Hello');
    expect(text).toBeInTheDocument()
})

test('To contain hello with the name of person',()=>{
    act(()=>{
        render(<Greet name='Vishwas'/>)

    })
    let text  = screen.getByText('Hello Vishwas')
    expect(text).toBeInTheDocument()
})


    })

})