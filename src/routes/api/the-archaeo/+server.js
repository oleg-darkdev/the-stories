import { json } from '@sveltejs/kit';
import { archaeo }  from '$shared'


export async function GET(event) {
	return json(archaeo);
}
