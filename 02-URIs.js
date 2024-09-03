//Sections of a URL
function printURLParts(urlString) {
	const urlObj = new URL(urlString)
	const keys = ["protocol", "username", "password", "hostname", "port", "pathname", "search", "hash"]
  
	for (let item in keys)
	{
	  const property = urlObj[keys[item]];
	  let result = `${keys[item]}: ${property}` 
	  console.log(result)
	}
  }
  
  // don't touch below this line
  
  const fantasyQuestURL = 'http://dragonslayer:pwn3d@fantasyquest.com:8080/maps?sort=rank#id'
  printURLParts(fantasyQuestURL)
  
  