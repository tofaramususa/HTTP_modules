//Communicating with the web

async function main() {
  const items = await getItemData()
  logItems(items)
}

// Helper functions
function generateKey() {
  const characters = 'ABCDEF0123456789'
  let result = ''
  for (let i = 0; i < 16; i++){
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

async function getItemData() {
  const apiKey = generateKey()
  const response = await fetch('https://api.boot.dev/v1/courses_rest_api/learn-http/items', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

function logItems(items) {
  for (const item of items) {
    console.log(item.name)
  }
}

// Run the main function
main().catch(error => console.error('An error occurred:', error))
