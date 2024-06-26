import { json } from '@sveltejs/kit';
import { otherBoardgames }  from '$shared'


export async function GET(event) {
	return json(otherBoardgames);
}
