var callCounter = require('./call_counter.js');

function add(x, y){
	callCounter();
	return x + y;
}

function subtract(x, y){
	callCounter();
	return x - y;
}

module.exports = {
	addition: add,
	subtraction: subtract
}