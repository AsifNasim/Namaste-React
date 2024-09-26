import { render, screen } from "@testing-library/react";
import Help from "./Help";
import "@testing-library/jest-dom";

test('should load Help component', () => { 
    render(<Help />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument(); // Corrected matcher name here
    
});


test("should load button inside Help Component", () => {
    render(<Help />);

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
})

test('should load placeholder inside an input', () => { 
    render(<Help />);

    const placeholder = screen.getByPlaceholderText("firstname")
    expect(placeholder).toBeInTheDocument();
 });

 test('should load 2 input boxes in the Help Component ', () => {
    render(<Help />)
    const textboxes = screen.getAllByRole('textbox');
    expect(textboxes.length).toBe(2);
    
 })