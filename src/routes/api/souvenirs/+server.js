import { json } from '@sveltejs/kit';
import { souvenirs }  from '$shared'


export async function GET(event) {
	return json(souvenirs);
}
