// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {renderHook, act} from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'

// 🐨 create a simple function component that uses the useCounter hook
// and then exposes some UI that our test can interact with to test the
// capabilities of this hook
// 💰 here's how to use the hook:
// const {count, increment, decrement} = useCounter()

test('exposes the count and increment/decrement functions', () => {
  // const result = {};
  //
  // function TestComponent(props) {
  //   Object.assign(result, useCounter(props));
  //   return null;
  // }


  const { result } = renderHook(useCounter);
  expect(result.current.count).toBe(0)
  act(() => result.current.increment())
  expect(result.current.count).toBe(1)
  act(() => result.current.decrement())
  expect(result.current.count).toBe(0)
})

test('allows customization of the initial count', () => {
  // const result = {};
  //
  // function TestComponent(props) {
  //   Object.assign(result, useCounter(props));
  //   return null;
  // 

  const initialCount = 2;

  const { result } = renderHook(useCounter, { initialProps: { initialCount }})
  expect(result.current.count).toBe(initialCount)
})


test('allows customization of the step', () => {
  // const result = {};
  //
  // function TestComponent(props) {
  //   Object.assign(result, useCounter(props));
  //   return null;
  // }

  const step = 3;

  const { result } = renderHook(useCounter, {initialProps: { step } })
  expect(result.current.count).toBe(0);
  act(() => result.current.increment())
  expect(result.current.count).toBe(3)
  act(() => result.current.decrement())
  expect(result.current.count).toBe(0)
})

// testing without using the result = {} technique
// test('exposes the count and increment/decrement functions', async () => {
//   // 🐨 render the component
//   render(<TestComponent />);
//   // 🐨 get the elements you need using screen
//   const incBtn = screen.getByText(/increment/i)
//   const decBtn = screen.getByText(/decrement/i)
//   const count = screen.getByText(/current count/i)
//
//   // 🐨 assert on the initial state of the hook
//   expect(count).toHaveTextContent('current count: 0');
//
//   await userEvent.click(incBtn);
//   expect(count).toHaveTextContent('current count: 1');
//
//   await userEvent.click(decBtn);
//   expect(count).toHaveTextContent('current count: 0');
//   // 🐨 interact with the UI using userEvent and assert on the changes in the UI
// })

/* eslint no-unused-vars:0 */
