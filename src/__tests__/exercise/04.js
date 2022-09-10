// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'
import faker from 'faker';
import { build, fake } from '@jackfranklin/test-data-bot';

// function buildLoginForm({ username, password } = {}) {
//   return {
//     username: username ?? faker.internet.userName(),
//     password: password ?? faker.internet.password(),
//   }
// }

const buildLoginForm = build({
  fields: {
    username: fake(f => f.internet.userName()),
    password: fake(f => f.internet.password()),
  },
})

test('submitting the form calls onSubmit with username and password', async () => {
  // 🐨 create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted
  // 💰 if you need a hand, here's what the handleSubmit function should do:
  // const handleSubmit = data => (submittedData = data)

  const handleSubmit = jest.fn();
  //
  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  
  const { container, getByLabelText, getByRole } = render(<Login onSubmit={handleSubmit} />);

  const usernameField = getByLabelText(/username/i);
  const passwordField = getByLabelText(/password/i);
  const submitButton = getByRole('button', { name: /submit/i })

  const loginForm = buildLoginForm();

  await userEvent.type(usernameField, loginForm.username);
  await userEvent.type(passwordField, loginForm.password)
  await userEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledWith(loginForm);
  expect(handleSubmit).toHaveBeenCalledTimes(1);

  //
  // 🐨 get the username and password fields via `getByLabelText`
  // 🐨 use `await userEvent.type...` to change the username and password fields to
  //    whatever you want
  //
  // 🐨 click on the button with the text "Submit"
  //
  // assert that submittedData is correct
  // 💰 use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
})

/*
eslint
  no-unused-vars: "off",
*/
