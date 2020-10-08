import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://jsonplaceholder.typicode.com/posts',
	headers: {
		'Content-Type': 'application/json',
		'x-token-access': 'random'
	}
});
