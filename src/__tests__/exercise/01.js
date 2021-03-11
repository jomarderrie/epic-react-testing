// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react';
import ReactDOM from 'react-dom';
import Counter from '../../components/counter';

test('counter increments and decrements when the buttons are clicked', () => {
	// 🐨 create a div to render your component to (💰 document.createElement)
	const root = document.createElement('div');
	// 🐨 append the div to document.body (💰 document.body.append)
	document.body.append(root);
	// 🐨 use ReactDOM.render to render the <Counter /> to the div
	ReactDOM.render(<Counter />, root);
	const message = root.firstChild.querySelector('div');
	console.log(message.textContent);
	// 🐨 get a reference to the increment and decrement buttons:
	//   💰 div.querySelectorAll('button')
	// const { decrement, increment } = root.querySelectorAll('button');
	// // 🐨 get a reference to the message div:
	// //   💰 div.firstChild.querySelector('div')

	// // 🐨 expect the message.textContent toBe 'Current count: 0'
	// expect(root.firstChild.querySelectorAll('div').textContent, 'Current count: 0');
	// // 🐨 click the increment button (💰 increment.click())
	// increment.click();
	// // 🐨 assert the message.textContent
	// expect(root.firstChild.querySelectorAll('div').textContent, 'Current count: 1');
	// // 🐨 click the decrement button (💰 decrement.click())
	// decrement.click();
	// // 🐨 assert the message.textContent
	// expect(root.firstChild.querySelectorAll('div').textContent, 'Current count: 0');
	// // 🐨 cleanup by removing the div from the page (💰 div.remove())
	// root.remove();
	// 🦉 If you don't cleanup, then it could impact other tests and/or cause a memory leak
});

/* eslint no-unused-vars:0 */
