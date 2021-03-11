// mocking HTTP requests
// http://localhost:3000/login-submission

import * as React from 'react';
// 🐨 you'll need to grab waitForElementToBeRemoved from '@testing-library/react'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { build, fake } from '@jackfranklin/test-data-bot';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
// 🐨 you'll need to import rest from 'msw' and setupServer from msw/node
import Login from '../../components/login-submission';

const buildLoginForm = build({
	fields: {
		username: fake((f) => f.internet.userName()),
		password: fake((f) => f.internet.password())
	}
});

const server = setupServer(
	rest.post('https://auth-provider.example.com/api/login', async (req, res, ctx) => {
		return res(ctx.json({ username: req.body.username, password: req.body.password }));
	})
);

// 🐨 get the server setup with an async function to handle the login POST request:
// 💰 here's something to get you started

// you'll want to respond with an JSON object that has the username.
// 📜 https://mswjs.io/
beforeAll(() => server.listen().then(() => console.log(`Listening at port `)));

afterAll(() => server.close());
// 🐨 before all the tests, start the server with `server.listen()`
// 🐨 after all the tests, stop the server with `server.close()`

test(`logging in displays the user's username`, async () => {
	render(<Login />);
	const { username, password } = buildLoginForm();

	userEvent.type(screen.getByLabelText(/username/i), username);
	userEvent.type(screen.getByLabelText(/password/i), password);
	// 🐨 uncomment this and you'll start making the request!
	userEvent.click(screen.getByRole('button', { name: /submit/i }));
	screen.debug();
	// as soon as the user hits submit, we render a spinner to the screen. That
	// spinner has an aria-label of "loading" for accessibility purposes, so
	// 🐨 wait for the loading spinner to be removed using waitForElementToBeRemoved
	// 📜 https://testing-library.com/docs/dom-testing-library/api-async#waitforelementtoberemoved

	// once the login is successful, then the loading spinner disappears and
	// we render the username.
	// 🐨 assert that the username is on the screen
});

setupServer.close();
