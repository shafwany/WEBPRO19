// write your code here
// tulis kodingan disini
function validasi(){
	var name = document.getElementById("nama").value;
	var mail = document.getElementById("email").value;
	var street = document.getElementById("alamat").value;
	if(name!='' && mail!='' && street!=''){
		alert("Halo "+name+" selamat datang!");
	}else{
		alert("Anda harus mengisi data dengan lengkap!");
	}
}
// function gmbr() {
// 	document.Body.image.innerHTML=(URL'image.jpg')
// }