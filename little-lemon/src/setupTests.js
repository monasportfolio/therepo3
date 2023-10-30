// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import BookingForm from './Components/BookingForm';

test('Renders the bookingForm lable',() =>{
    render (<BookingForm />);
    const lableTag = screen.gitByText("Date");
    expect (lableTag).toBeInTheDocument();
});