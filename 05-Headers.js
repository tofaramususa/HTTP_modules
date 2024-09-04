function logContentType(resp) {
	console.log(resp.headers.get('Content-Type'));
}

// Main execution
(async () => {
	const apiKey = generateKey(); // Generate API key
	const bootdevAPIDomain = 'api.boot.dev';

	// Load items and log their content type
	const load = async () => {
		const items = await getItemData(bootdevAPIDomain);
		logContentType(items);
	};

	await load(); // Call the load function

	const generatedApiKey = generateKey(); // Generate a new API key
	const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/locations/52fdfc07-2182-454f-963f-5f0f9a621d72';
	const newLocationData = {
		'discovered': false,
		'id': '52fdfc07-2182-454f-963f-5f0f9a621d72',
		'name': 'Bloodstone Swamp',
		'recommendedLevel': 10
	};

	// Get old location
	const oldLocation = await getLocationResponse(generatedApiKey, url);
	console.log('Got old location:');
	console.log(`- name: ${oldLocation.name}, recommendedLevel: ${oldLocation.recommendedLevel}`);
	console.log('---');

	// Update location
	await putLocation(generatedApiKey, url, newLocationData);
	console.log('Location updated!');
	console.log('---');

	// Get new location
	const newLocation = await getLocationResponse(generatedApiKey, url);
	console.log('Got new location:');
	console.log(`- name: ${newLocation.name}, recommendedLevel: ${newLocation.recommendedLevel}`);
	console.log('---');
})();

// Function to get item data from the API
async function getItemData(domain) {
	const response = await fetch(`https://${domain}/v1/courses_rest_api/learn-http/items/0194fdc2-fa2f-4cc0-81d3-ff12045b73c8`, {
		method: 'GET',
		mode: 'cors',
		headers: {
			'X-API-Key': generateKey(), // Use a generated key for the request
			'Content-Type': 'application/json'
		}
	});
	return response; // Return the response object
}

// Function to get location response
async function getLocationResponse(apiKey, url) {
	const response = await fetch(url, {
		method: 'GET',
		mode: 'cors',
		headers: {
			'X-API-Key': apiKey,
			'Content-Type': 'application/json'
		}
	});
	return response.json(); // Return the parsed JSON response
}

// Function to update location
async function putLocation(apiKey, url, data) {
	const response = await fetch(url, {
		method: 'PUT',
		mode: 'cors',
		headers: {
			'X-API-Key': apiKey,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data) // Convert data to JSON string
	});
	return response.json(); // Return the parsed JSON response
}

// Function to generate a random API key
function generateKey() {
	const characters = 'ABCDEF0123456789';
	let result = '';
	for (let i = 0; i < 16; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result; // Return generated key
}