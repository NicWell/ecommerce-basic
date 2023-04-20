function cadCliente(){
    let valida = false;
    var RegraValida=document.getElementById("cpf").value; 
    let nome = String(document.getElementById("nome").value).split(""); 
	var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;	 
    let regex = /\S+@\S+\.\S+/;
    let email = document.getElementById('email').value;
    let rua = String(document.getElementById('rua').value).split("");
    let bairro = String(document.getElementById('bairro').value).split("");
    let cidade = String(document.getElementById('cidade').value).split("");
    let uf = String(document.getElementById('uf').value);
    let num = String(document.getElementById('num').value);
    // let check = document.getElementById('func').checked;
    let phone = String(document.getElementById('phone').value).split("");
	if (!cpfValido.test(RegraValida) == true){ 
	    alert("Cpf Invalido");
	    document.getElementById("cpf").focus();
	} else	if (!regex.test(email)) {
        alert("preencha o campo de email corretamente");
        document.getElementById("email").focus();
    } else  if(nome==='' || nome.length <3){
        alert("preencha o nome corretamente");
        document.getElementById("nome").focus();
    } else if(rua ==='' ||  rua.length <5){
        document.getElementById("rua").focus();
        alert("preencha o nome da rua");
    } else if(bairro ==='' || bairro.length <5){
        document.getElementById("bairro").focus();
        alert("preencha o nome do bairro");
    } else if (cidade ==='' || cidade.length <5){
        document.getElementById("cidade").focus();
        alert("preencha o nome do cidade");
    } else if (uf ===''){
        alert("selecione a uf do cliente");
        document.getElementById("uf").focus();
    } else if(num==''){
        document.getElementById("num").value='S/N';
    } else if(phone.length <11 || phone ===''){
        document.getElementById("phone").focus();
        alert("preecha o número de contato");
    } else {
        valida = true;
    }
    if(valida){
        formCard.submit();
    }
}
function fMasc(objeto,mascara) {
    obj=objeto;
    masc=mascara;
    setTimeout("fMascEx()",1);
}
    
function fMascEx() {
    obj.value=masc(obj.value);
}
    
function mCPF(cpf){
    cpf=cpf.replace(/\D/g,"");
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2");
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2");
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
    return cpf;
}