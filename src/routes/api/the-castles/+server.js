import { json } from '@sveltejs/kit';
import { castles }  from '$shared'

export async function GET(event) {
	return json(castles);
}
