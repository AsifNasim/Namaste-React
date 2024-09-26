import Restaurant from "../Restaurant";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockdata.json";

xtest('should render Restaurant card component with props data', () => { 
    render(<Restaurant props = {MOCK_DATA}/>);

    // const name = screen.getByText("Chinese Wok");
    // expect(name).toBeInTheDocument();
 })

 xtest('should render Restaurant card component with promoted label', () => { 
    // Homework
    render(<Restaurant props = {MOCK_DATA}/>);

    // const name = screen.getByText("Chinese Wok");
    // expect(name).toBeInTheDocument();
 })