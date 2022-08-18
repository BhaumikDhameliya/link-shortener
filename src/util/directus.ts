import { Directus } from '@directus/sdk';
import 'dotenv/config';

const directusToken = process.env.DIRECTUS_API_TOKEN;
const directusUrl = process.env.DIRECTUS_URL;

debugger;

if (!directusToken) {
	throw new Error('Please include a directus token');
}

if (!directusUrl) {
	throw new Error('Please include a directus url');
}

export const directus = new Directus(directusUrl, {
	auth: {
		staticToken: directusToken
	}
});
