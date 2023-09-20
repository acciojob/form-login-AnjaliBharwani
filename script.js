function getFormvalue() {
    //Write your code here
	let doc = document.getElementById("form")
	let firstname = document.getElementById("input")[0].value
	let lastname = document.getElementById("input")[1].value
	
	alert(firstname + " " + lastname);
}
