async function getLocations(apiKey) {
	const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/locations';
	const response = await fetch(url, {
	  method: 'GET',
	  mode: 'cors',
	  headers: {
		'X-API-Key': apiKey,
		'Content-Type': 'application/json',
	  },
	});

	if (!response.ok) {
	  throw new Error(`HTTP error! status: ${response.status}`);
	}

	const responseData = await response.json();
	return responseData;
}

// Function to generate a random API key
function generateKey() {
	const characters = 'ABCDEF0123456789';
	let result = '';
	for (let i = 0; i < 16; i++) {
	  result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
}

// Main execution
(async () => {
	const apiKey = generateKey(); // Generate API key
	console.log('Got some locations from the server.');

	try {
	  const locations = await getLocations(apiKey); // Fetch locations
	  for (const location of locations) {
		console.log(`- name: ${location.name}, recommendedLevel: ${location.recommendedLevel}`);
	  }
	} catch (error) {
	  console.error('Error fetching locations:', error);
	}
})();
