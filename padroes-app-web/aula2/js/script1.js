/**console.log("Ola Mundo");
console.log(typeof "Ola");
console.log(typeof 3);
console.log(typeof true);
console.log(typeof document);

// debugger;
//VARIAVEIS
var variavel_explicita;
var variavel_explicita_inicializada = 3;
variavel_implicita = 5;

console.log(variavel_explicita);
console.log(variavel_explicita_inicializada);
console.log(variavel_implicita);

delete variavel_explicita;
console.log(variavel_explicita);
**/
//Arrays
var x = [2,5];
var y = new Array();

y.push(3);
y.push(5);

console.dir(y);
console.log(y[0]);

if (y[0] <x [0] )
    console.log("Deu certo");

//Repetição
x.forEach(function (el,i,a) {
   console.log(i + " = " + el + " array values: "+ a);
});

// For..of
for(el of x) {
    console.log(el);
}

// For .. in
for(el in x) {
    console.log(el);
}

// console.log(window);

// alert("Ola Mundo !!");
//Confirm
var escolha = confirm("Tem certeza?");
console.log(escolha);

// Prompt
    var nome = prompt("Insira o nome sasass");
    console.log(nome);

//   Navigador
    console.dir(navigator);
    console.log(navigator.onLine);
    console.log(navigator.userAgent);
//    Location
    console.dir(location);

    document.write("Ola Mundo");
    document.body.textContent += '<h2>Teste</h2>';
    document.body.innerText += '<h2>Teste</h2>';

    console.dir(document.forms[0]);

    //Screen
    console.dir(screen);

//    Função Estatica
    function mensagem(msg) {
        return( "Ola " + msg);
    }

    alert(mensagem("mundo"));
//    Função anonima
    var anonimato = function (){
      alert("Função anonima")
    };

    // anonimato();

    function subtracaoPor(valor) {
        return function (valor2){
            return valor - valor2;
        }
    }

    var x2 = subtracaoPor(2);
    var x3 = subtracaoPor(2);

    console.log(x2(4));
    console.log(x3(4));

    // (function () {
    //     console.log("Executando Indiretamente");
    // })
    function soma() {
        var total = 0 ;
        for (valor in arguments){
            total += +valor;
        }
        return total;

    }

    document.write(soma(1,2,3,4));

    function teste(el) {
        console.log(el);
    }

