// testing with context and a custom render method
// http://localhost:3000/easy-button

import * as React from 'react'
// This render is "artificial" and is already wrapped in all the contexts we need
import {render, screen} from '../../test/test-utils';
// import {ThemeProvider} from '../../components/theme'
import EasyButton from '../../components/easy-button'

// function renderWithProvider(ui, { theme = 'light', ...options } = {}) {
//   const Wrapper = ({ children }) => (
//     <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
//   ) 
//
//   return render(ui, {wrapper: Wrapper, ...options});
// }
//
test('renders with the light styles for the light theme', () => {
  render(<EasyButton>Easy</EasyButton>)
  const button = screen.getByRole('button', {name: /easy/i})
  expect(button).toHaveStyle(`
    background-color: white;
    color: black;
  `)
})

test('renders with the dark styles for the dark theme', () => {
  render(<EasyButton>Easy</EasyButton>, {theme: 'dark'})
  const button = screen.getByRole('button', {name: /easy/i})
  expect(button).toHaveStyle(`
    background-color: black;
    color: white;
  `)
})
/* eslint no-unused-vars:0 */
