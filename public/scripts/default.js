$(document).ready(function () {
	$('#btnAdd').on('click', addNumbers);
	$('#btnSubtract').on('click', subtractNumbers);
	$('#btnMultiplication').on('click', multiplyNumbers);
	$('#btnDivision').on('click', divideNumbers);
});
 
function addNumbers() {
	var data = getData();
	serverAddition(data).done(displayResults).fail(displayError);
}

function subtractNumbers(){
	var data = getData();
	serverSubtraction(data).done(displayResults).fail(displayError);
}

function multiplyNumbers(){
	var data = getData();
	serverMultiplication(data).done(displayResults).fail(displayError);
}
function divideNumbers(){
	var data = getData();
	serverDivision(data).done(displayResults).fail(displayError);
}

function getData(){
	var x = $('#x').val();
	var y = $('#y').val();
	return {'x' : x,	'y': y	};
}

function displayResults(serverData){
	$('#result').html(serverData.result);
}

function serverAddition(data){
	return $.getJSON('/addition', data);
}

function serverSubtraction(data){
	return $.post('/subtraction', data, 'json');
}

function serverMultiplication(data){
	return $.ajax({
		url: '/multiply',
		data: data,
		type: "PUT",
		dataType: "json",
		cache: false
	});
}

function serverDivision(data){
	return $.ajax({
		url: '/divide',
		data: data,
		type: "DELETE",
		dataType: "json",
		cache: false
	});
}

function displayError(serverData, error) {
	var value = 'No result';
	if ('result' in serverData) value = serverData.result;
	$('#result').html(value + ' - ' + error);
}