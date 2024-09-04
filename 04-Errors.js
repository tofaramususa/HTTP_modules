// Function to print character stats
function printCharacterStats(level) {
  if (isNaN(level)) {
    throw new Error('Parameter is not a number!');
  }
  console.log(`Your character is level ${level}!`);
}

// Main execution
(async () => {
  // Error handling for character stats
  try {
    printCharacterStats(4);
    printCharacterStats('ten'); // This will throw an error
    printCharacterStats(10);
  } catch (err) {
    console.log(err.message); // Log the error message
  }

  // Fetch leaderboard data
  async function fetchLeaderBoard() {
    const response = await fetch('https://fantasyquest.servers');
    return response.json();
  }

  // Main function to handle leaderboard fetching
  async function main() {
    try {
      const leaderboard = await fetchLeaderBoard();
      console.log(leaderboard);
    } catch (err) {
      console.log(`This is the error: ${err}`);
    }
  }

  await main(); // Call the main function
})();