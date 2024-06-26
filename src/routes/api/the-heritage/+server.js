import { json } from '@sveltejs/kit';
import { heritage }  from '$shared'


export async function GET(event) {
	return json(heritage);
}
