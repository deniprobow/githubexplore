import React from 'react';
import { act, fireEvent, queryByTestId, queryByText, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom'

/** *****************************************************************
  | Author            : @deniprobow
  | Name              : App Test
  | Updater           : @deniprobow
  | last_change       : 2023-04-05
  | Description_update: -
  | Description       : All test case posibilities using Jest and React Testing Library
  *******************************************************************/
describe('Check any posibilities and any methods',()=>{
  test('check if page have input username and search button', () => {
    render(<Provider store={store}><App /></Provider>);
    expect(screen.getByRole("textbox"))
      .toHaveAttribute("name", "username");
    expect(screen.getByRole("button"))
      .toHaveAttribute("id", "search");
  });
  

  test('check if nothing search by user, it doesnt show anything when button search not click ', () => {
    render(<Provider store={store}><App /></Provider>);
    expect(screen.getByRole("textbox"))
      .toHaveValue("");
    expect(screen.findAllByText("Showing users for")).toBeNull;
    
  });

  test('check if nothing search by user, it doesnt show anything when button search was clicked ', async () => {
    render(<Provider store={store}><App /></Provider>);
    expect(screen.getByRole("textbox"))
      .toHaveValue("");
    const buttonSearch = screen.getByRole("button");
    fireEvent.click(buttonSearch);
    
    await waitFor(() =>  {
      expect( screen.findAllByText("Showing users for")).toBeNull;
    });
  });

  test('check if username search input length is less than 3, so it doesnt show anything when button search was clicked', async () => {
    render(<Provider store={store}><App /></Provider>);
    const input = screen.getByPlaceholderText<HTMLInputElement>("Enter Username");
    fireEvent.change(input, {target: {value: 'ab'}})
    expect(input.value.length).toBeLessThan(3);

    const buttonSearch = screen.getByRole("button");
    fireEvent.click(buttonSearch);
    await waitFor(() =>  {
      expect( screen.findAllByText("Showing users for")).toBeNull;
    });
  });

  test('check if username search input length is greater than 3, so it will show anything when button search was clicked', async () => {
    render(<Provider store={store}><App /></Provider>);
    const input = screen.getByPlaceholderText<HTMLInputElement>("Enter Username");
    fireEvent.change(input, {target: {value: 'denipro'}})
    expect(input.value.length).toBeGreaterThan(3);
    const buttonSearch = screen.getByRole("button");
    fireEvent.click(buttonSearch);
    await waitFor(() =>  {
      expect( screen.findAllByText("Showing users for")).toBeInTheDocument;
    });
  });

  test('check if data that showed correctly,  when button search was clicked', async () => {
    const dom  = render(<Provider store={store}><App /></Provider>);
    const input = screen.getByPlaceholderText<HTMLInputElement>("Enter Username");
    fireEvent.change(input, {target: {value: 'denipro'}})
    expect(input.value.length).toBeGreaterThan(3);
    const buttonSearch = screen.getByRole("button");
    fireEvent.click(buttonSearch);
    await waitFor(async () =>  {
      expect( screen.findAllByText("Showing users for")).toBeInTheDocument;
      expect( screen.getAllByText("deniprobow")).toBeInTheDocument;
      const checkbox = screen.getByTestId("itemDetail28450501")
      fireEvent.click(checkbox);
      const itemDetail =  screen.findAllByText("asb.github.io");
      expect(itemDetail  ).toBeInTheDocument;
    
  });
          
       
  });
});
  
