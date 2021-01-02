let operande; // saves inputed value
let operation; // saves inputed sign
let output = document.getElementById('value'); // saves inputed "value" in an "output" var
let history = [];
let output_history = document.getElementById('history'); // saves ul history element into var

// to save inputed number(s)
function v(num) {
	if (output.value == '0') {
		output.value = num;
	} else {
		output.value = output.value + num;
	}
};

// to save inputed calculus sign
function calculus(type) {
	operande = output.value;
	operation = type;
	output.value = 0;
}

// negative number function
 function negative() {
 	output.value = -output.value;
 }

// to allow floating numbers
function point() {
	if (output.value.indexOf('.') < 0) {
		output.value = output.value + '.';
	}
}

// to delete & reinitialize calculator
 function reinitialize() {
 	output.value = 0;
 	operande = 0;
 	history = [];

 	output_history.innerHTML = `<li>No history!</li>`;
 }

// to calculate and print result
 function result() {

 	let entry1 = '';
 	

 	switch (operation) {
 		case 1 : 
 		entry1 = `${operande} + ${output.value} = `
 		output.value = parseFloat(operande) + parseFloat(output.value);
 		entry1 += output.value
 		break;

 		case 2 : 
 		entry1 = `${operande} - ${output.value} = `
 		output.value = operande - output.value;
 		entry1 += output.value
 		break;

 		case 3 :
 		entry1 = `${operande} * ${output.value} = ` 
 		output.value = operande * output.value;
 		entry1 += output.value
 		break;

 		case 4 : 
 		entry1 = `${operande} / ${output.value} = `
 		output.value = operande / output.value;
 		entry1 += output.value
 		break;

 	}
	
	output_history.innerHTML = `<li>${history}</li>`;
	history.push(entry1);
 	displayHistory(history);
 }

// to print calculator history
function displayHistory(history) {

	output_history.innerHTML = `<li>${history}</li>`;
	operande = '';
} 


