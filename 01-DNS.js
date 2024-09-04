// Extract IP address from the response object
function extractIPAddress(object) {
  if (object.Answer && Array.isArray(object.Answer) && object.Answer.length > 0) {
    const ipAddress = object.Answer[0].data;
    const ipAddressString = ipAddress.split('.');
    if (ipAddressString.length === 4) {
      return ipAddress; // Return valid IP address
    } else {
      return null; // Return null for invalid IP address
    }
  }
  return null; // Return null if no valid answer
}

// Fetch IP address for a given domain
async function fetchIPAddress(domain) {
  const resp = await fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=A`, {
    headers: {
      'accept': 'application/dns-json'
    }
  });
  const respObject = await resp.json();
  return extractIPAddress(respObject); // Return extracted IP address
}

// Main execution
(async () => {
  const domain = 'example.com'; // Define the domain to fetch
  const ipAddress = await fetchIPAddress(domain); // Fetch the IP address
  if (!ipAddress) {
    console.log('Something went wrong in fetchIPAddress');
  } else {
    console.log(`Found IP address for domain ${domain}: ${ipAddress}`);
  }
})();
