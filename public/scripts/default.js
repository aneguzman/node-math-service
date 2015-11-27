$(document).ready(function () {
	$('#btnAdd').on('click', addNumbers)
});
 
function addNumbers() {
	var x = document.getElementById('x').value;
	var y = document.getElementById('y').value;
	var result = document.getElementById('result');
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "/addition?x=" + x + "&y=" + y , false);
	xmlhttp.send();
	var jsonResponse = JSON.parse(xmlhttp.response);
	result.innerHTML = jsonResponse.result;
}