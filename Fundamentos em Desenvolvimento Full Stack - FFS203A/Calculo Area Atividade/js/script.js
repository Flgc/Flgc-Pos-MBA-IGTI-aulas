var largura = prompt('Largura: ');
var comprimento = prompt('Comprimento: ');
var metroQuadrado = prompt('Metro Quadrado: ');

largura = parseFloat(largura);
comprimento = parseFloat(comprimento);
metroQuadrado = parseFloat(metroQuadrado);

var area = largura * comprimento;
var preco = area * metroQuadrado;

document.write('<h2>', 'Área = ', area, '<br>');
document.write('<h2>', 'Preço R$ = ', preco);
