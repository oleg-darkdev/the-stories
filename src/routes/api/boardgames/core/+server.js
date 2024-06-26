import { json } from '@sveltejs/kit';
import { boardgamesList }  from '$shared'


export async function GET(event) {
	return json(boardgamesList);
}
