function enviar() {
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var rg = document.getElementById("rg").value;
    var fone = document.getElementById("fone").value;

    //validando campos
    if(nome == "" ){
        document.getElementById("content-error").style.display = "block";
        var error = document.getElementById("error").innerHTML;
        document.getElementById("error").innerHTML = "" + "<li>O campo nome esta em branco</li>";
        document.getElementById("sucess").style.display = "none";
    } else  {
        document.getElementById("content-error").style.display = "none";
        document.getElementById("sucess").style.display = "block";
        document.getElementById("msg").innerHTML = "Parabéns "+ nome;
        document.getElementById("cadastro").reset();
    }

    if(cpf == ""){
        document.getElementById("content-error").style.display = "block";
        var error = document.getElementById("error").innerHTML;
        document.getElementById("error").innerHTML = error + "<li>Campo CPF esta em branco </li>";
        document.getElementById("sucess").style.display = "none";
    }else  {
        document.getElementById("content-error").style.display = "none";
        document.getElementById("sucess").style.display = "block";
        document.getElementById("msg").innerHTML = "Parabéns "+ nome;
        document.getElementById("cadastro").reset();
    }

    if(rg  == "" ){
        document.getElementById("content-error").style.display = "block";
        var error = document.getElementById("error").innerHTML;
        document.getElementById("error").innerHTML = error + "<li>Campo RG esta em branco </li>";
        document.getElementById("sucess").style.display = "none";
    }else  {
        document.getElementById("content-error").style.display = "none";
        document.getElementById("sucess").style.display = "block";
        document.getElementById("msg").innerHTML = "Parabéns "+ nome;
        document.getElementById("cadastro").reset();
    }

    if(fone == "" ){
        document.getElementById("content-error").style.display = "block";
        var error = document.getElementById("error").innerHTML;
        document.getElementById("error").innerHTML = error + "<li>Campo TELEFONE esta em branco </li>";
        document.getElementById("sucess").style.display = "none";
    }else  {
        document.getElementById("content-error").style.display = "none";
        document.getElementById("sucess").style.display = "block";
        document.getElementById("msg").innerHTML = "Parabéns "+ nome;
        document.getElementById("cadastro").reset();
    }
}
var nome = prompt("Insira o nome:");

while (nome == ""){
    nome = prompt("Insira o nome:");
}

