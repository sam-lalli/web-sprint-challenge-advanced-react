import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
});

test("form shows success message on submit with form details", () => {
    //Act 
    render(<CheckoutForm/>)
    //Arrange
        //inputs first name last name address city state zip
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const button = screen.getByRole('button', /checkout/i)
        //fill out form
    fireEvent.change(firstNameInput, {target: {name: 'firstName', value: 'Sam'}})
    fireEvent.change(lastNameInput, {target: {name: 'lastName', value: 'Lalli'}})
    fireEvent.change(addressInput, {target: {name: 'address', value: '123 4th street'}})
    fireEvent.change(cityInput, {target: {name: 'city', value: 'Townville'}})
    fireEvent.change(stateInput, {target: {name: 'state', value: 'UT'}})
    fireEvent.change(zipInput, {target: {name: 'zip', value: '84010'}})

    fireEvent.click(button);
    //Assert
    const newForm = screen.findByText(/You have ordered some plants! Woo-hoo! 🎉 Your new green friends will be shipped to: Sam Lalli 123 4th street Townville, UT 84010/i)

});
