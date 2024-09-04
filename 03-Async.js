const applyDamage = (damage, currentHP) => {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
		if((damage - currentHP) < 0)
	  {
		  reject(`The player suffers ${damage} points of damage and has fallen unconscious.`)
	  }
	  else
	  {
		  resolve(`The player suffers ${damage} points of damage and has ${damage - currentHP} hit points remaining`)
	  }
	  }, 1000)
	})
  }

  // Main execution
  (async () => {
    // Function to run damage test
    function runApplyDamageTest(damage, currentHP) {
      console.log(`Applying ${damage} damage to player with ${currentHP} HP...`);
      applyDamage(damage, currentHP)
        .then((message) => {
          console.log(`...applyDamage resolved with: ${message}`);
        })
        .catch((message) => {
          console.log(`...applyDamage rejected with: ${message}`);
        });
    }

    // Run tests with delays
    await runApplyDamageTest(27, 50);
    await sleep(1100);
    await runApplyDamageTest(50, 50);
    await sleep(1100);
    await runApplyDamageTest(110, 100);
    await sleep(1100);
  })();

  // Function to create a sleep delay
  async function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
  }