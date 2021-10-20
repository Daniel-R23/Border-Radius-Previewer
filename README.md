# Visualizador de Border Radius

## User Stories

[x] Usuário deve visualizar uma caixa que possui a propriedade border-radius aplicada à ela

[x] Usuário deve conseguir mudar os 4 valores do border-radius que são aplicados à caixa(top-left, top-right, bottom-left, bottom-right)

[x] Usuário deve conseguir copiar o CSS resultante para área de transferência

## Bonus features

[X] Usuário deve conseguir mudar todos os 8 possíveis valores do border-radius na ordem para criar uma forma complexa

## Resultado

![Resultado](https://user-images.githubusercontent.com/53978097/138125770-7a0f7017-cb6e-46b5-afb5-f74a1df8ab34.gif)

## Como funciona o border-radius?

O valor da propriedade corresponde ao raio de um círculo inscrito em um quadrado cujo vértice coincide com o vértice do elemento que deverá ter a borda arredondada.
Podemos visualizar melhor na seguinte imagem:

![Funcionamento do border-radius](https://user-images.githubusercontent.com/53978097/138124376-4a786465-db55-4c1b-8e81-202e8f3d2ff2.png)

Os oito valores do border-radius são equivalentes à altura e largura do retângulo cujo círculo está inscrito. Quando definimos valores diferentes para largura e altura, ou seja, desenhamos um retângulo que não é quadrado, criamos uma elipse que definirá a forma como o elemento arredondará aquele canto.

## Possíveis melhorias
 - Mudança no type dos inputs de number para range
 - Definir tamanho da div personalizado
 - Implementar responsividade
