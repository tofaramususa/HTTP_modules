// Function to generate a random API key
function generateKey() {
	const characters = 'ABCDEF0123456789';
	let result = '';
	for (let i = 0; i < 16; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
}

// Function to log users
function logUsers(users) {
	for (const user of users) {
		console.log(`Character name: ${user.characterName}, Class: ${user.class}, Level: ${user.level}, User: ${user.user.name}`);
	}
}

// Function to get users
async function getUsers(url, apiKey) {
	const response = await fetch(url, {
		method: 'GET',
		mode: 'cors',
		headers: {
			'X-API-Key': apiKey
		}
	});
	return response.json();
}

// Function to create a user
async function createUser(apiKey, url, data) {
	const response = await fetch(url, {
		method: 'POST',
		mode: 'cors',
		headers: {
			'X-API-Key': apiKey,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	return response.json();
}

// Function to delete a user
async function deleteUser(baseURL, id, apiKey) {
	const fullURL = `${baseURL}/${id}`;
	const response = await fetch(fullURL, {
		method: 'DELETE',
		mode: 'cors',
		headers: {
			'X-API-Key': apiKey,
			'Content-Type': 'application/json',
		},
	});

	if (response.ok) {
		console.log('User successfully deleted');
	} else {
		console.error('Failed to delete user:', response.status);
	}
}

// Main execution
(async () => {
	const generatedKey = generateKey();
	const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/users';

	const userToCreate = {
		characterName: 'Grendel',
		class: 'Warrior',
		level: 1,
		pvpEnabled: false,
		user: {
			name: 'Allan',
			location: 'USA',
			age: 27
		}
	};

	console.log('Retrieving initial user data...');
	const userDataFirst = await getUsers(url, generatedKey);
	logUsers(userDataFirst);
	console.log('---');

	console.log('Creating new character...');
	const creationResponse = await createUser(generatedKey, url, userToCreate);
	console.log(`Creation response body: ${JSON.stringify(creationResponse)}`);
	console.log('---');

	console.log('Retrieving updated user data...');
	const userDataSecond = await getUsers(url, generatedKey);
	logUsers(userDataSecond);
	console.log('---');

	// Note: The deleteUser function is not called in this example
	// If you want to test it, you would need to provide a user ID
	// console.log('Deleting a user...');
	// await deleteUser(url, 'some-user-id', generatedKey);
})();