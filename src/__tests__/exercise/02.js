// simple test with React Testing Library
// http://localhost:3000/counter

import { fireEvent, render } from '@testing-library/react';

import * as React from 'react';
import Counter from '../../components/counter';
// 💣 remove this. React Testing Library does this automatically!

test('counter increments and decrements when the buttons are clicked', () => {
	// 💣 remove these two lines, React Testing Library will create the div for you
	const { container: div } = render(<Counter />);

	// 🐨 swap ReactDOM.render with React Testing Library's render
	// Note that React Testing Library's render doesn't need you to pass a `div`
	// so you only need to pass one argument. render returns an object with a
	// bunch of utilities on it. For now, let's just grab `container` which is
	// the div that React Testing Library creates for us.
	// 💰 const {container} = render(<Counter />)

	// 🐨 instead of `div` here you'll want to use the `container` you get back
	// from React Testing Library
	const [ decrement, increment ] = div.querySelectorAll('button');
	const message = div.firstChild.querySelector('div');

	expect(message.textContent).toHaveTextContent('Current count: 0');

	// 🐨 replace the next two statements with `fireEvent.click(button)`
	fireEvent.click(increment);
	expect(message.textContent).toHaveTextContent('Current count: 1');

	fireEvent.click(decrement);

	expect(message.textContent).toHaveTextContent('Current count: 0');
});
