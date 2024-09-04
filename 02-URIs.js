// Function to print sections of a URL
function printURLParts(urlString) {
	const urlObj = new URL(urlString);
	const keys = ["protocol", "username", "password", "hostname", "port", "pathname", "search", "hash"];
  
	for (let item of keys) { // Use 'of' for better readability
		const property = urlObj[item];
		let result = `${item}: ${property}`;
		console.log(result);
	}
}

// Main execution
(async () => {
	const fantasyQuestURL = 'http://dragonslayer:pwn3d@fantasyquest.com:8080/maps?sort=rank#id';
	printURLParts(fantasyQuestURL); // Print parts of the Fantasy Quest URL
  
	const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/locations';
  
	const apiKey = generateKey(); // Generate API key
	const response = await fetch(url, {
		method: 'GET',
		mode: 'cors',
		headers: {
			'X-API-Key': apiKey,
			'Content-Type': 'application/json'
		}
	});

	const responseData = await response.json(); // Parse JSON response
	logLocations(responseData); // Log locations from the response
})();

// Function to generate a random API key
function generateKey() {
	const characters = 'ABCDEF0123456789';
	let result = '';
	for (let i = 0; i < 16; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result; // Return generated key
}

// Function to log locations
function logLocations(locations) {
	for (const location of locations) {
		console.log(`Location: ${location.name}, Recommended Character Level: ${location.recommendedLevel}`);
	} 
}
