import axios from 'axios';

async function fetchData<T extends object>(url: string): Promise<T> {
	try {
		const response = await axios.get(url);
		return response.data as T;
	} catch (error) {
		throw new Error(`Error fetching from ${url}: ${error}`);
	}
}

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
	return { ...objA, ...objB };
}
