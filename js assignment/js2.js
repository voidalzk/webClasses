/*
segurança
function remover_caracteres(string) {
  const caracteresEspeciais = ['<', '>', '.', '/'];
  let novaString = '';

  for (let i = 0; i < string.length; i++) {
    if (!caracteresEspeciais.includes(string[i])) {
      novaString += string[i];
    }
  }

  return novaString;
}
let texto = "<script>virus.js</script>";
console.log(remover_caracteres(texto));
*/

/*
extensao
function procuraExt() {
  const divNome = imagemRecebida.split('.');
  const extensao = divNome[divNome.length - 1];

  if (minhasExtensoes.includes(extensao)) {
    console.log('recebido');
  } else {
    console.log('formato inválido');
  }
}
const minhasExtensoes = ['png', 'gif'];
let imagemRecebida = 'logoUFPR.jpg';

procuraExt(imagemRecebida);
*/

/*
aleatorio
const tags = [
  '<p>Parágrafo</p>',
  '<h1>Título 1</h1>',
  '<a href="#">Link</a>',
  '<div>Div</div>',
  '<script>//js aqui</script>'
];

function TagAleatoria() {
  const i = Math.floor(Math.random() * tags.length);
  console.log(tags[i]);
}

TagAleatoria();
*/

/*
dropdatabase
let textoRecebido = "DROP DATABASE UFPR;";
let incluido = 'DROP DATABASE';

function procuraTxt() {
  const extensao = textoRecebido[textoRecebido.length - 1];
  var contem;
  if (textoRecebido.includes(incluido)) {
    contem = true;
    console.log("nice try!")
  } else {
    contem = false;
  }
}

procuraTxt(textoRecebido);
*/
