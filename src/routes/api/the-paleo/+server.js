import { json } from '@sveltejs/kit';
import { paleo }  from '$shared'


export async function GET(event) {
	return json(paleo);
}
