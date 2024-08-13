import React from "react"
import Greet from "./greet"
import { render,screen } from "@testing-library/react"

test('testing the presence of  hell',()=>{

    render(<Greet/>);
    const testingText = screen.getByText(/hello/i);
    expect(testingText).toBeInTheDocument();

})

test('testing for hello upper case',()=>{
    render(<Greet/>)
    let  text  =  screen.getByText('Hello');
    expect(text).toBeInTheDocument()
})

test('To contain hello with the name of person',()=>{
    render(<Greet name='Vishwas'/>)
    let text  = screen.getByText('Hello Vishwas')
    expect(text).toBeInTheDocument()
})