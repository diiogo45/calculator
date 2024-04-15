function calculateMaturityAmount() {

	//Get input values from elements

	const principle = parseFloat(document.getElementById('principle').value);
	const interestRate = parseFloat(document.getElementById('interestRate').value);
	const tenure = parseFloat(document.getElementById('tenure').value);

	// Perfom the calculation

	const maturityAmount =  principle * ( principle * interestRate * tenure)/100;

	// Display the Result.

	document.getElementById('result').innerText = `Mature amount: ${maturityAmount.toFixed(2)}`;


}

// Attach the event LIstener to the calculation Button

document.getElementById('calculateBtn').addEventListener('click', calculateMaturityAmount);