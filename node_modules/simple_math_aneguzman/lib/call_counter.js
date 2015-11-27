var internalCallCounter = 0;

function countCall(){
	++internalCallCounter;
	console.log('You have made ' + internalCallCounter + ' calls');
}

module.exports = countCall;