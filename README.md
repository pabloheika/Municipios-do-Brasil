# Desafio 2 - JavaScript, DOM e Fetch API

Este desafio tem como objetivo a implementação de uma tela em HTML e CSS, seguindo um layout desenvolvido para esta atividade. O layout pode ser encontrado neste [link](https://www.figma.com/file/xJGTYOuvNS3iuLr1meqx5u/Entrega-3?type=design&node-id=0%3A1&t=yyDpjMU6RozT27ZG-1) do Figma. Embora a implementação da tela em si não seja difícil, o desafio consiste em fazer com que a tabela exiba todos os municípios da UF selecionada.

Para isso, será necessário utilizar a API do IBGE para buscar os dados dos municípios de um estado. A documentação da API pode ser encontrada neste [link](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-Municipios-estadosUFMunicipiosGet). A ferramenta javascript que faz requisições http para uma api é o [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch). O endpoint a ser utilizado é o de municípios por UF, que retorna um array de objetos com os dados dos municípios. A partir desses dados, a tabela deverá ser populada com o nome de todos os municípios da UF selecionada.

Caso surjam dúvidas, você pode utilizar o canal da capacitação no Slack, contatar algum membro do seu squad ou pedir ajuda.

Você deve realizar um fork deste repositório para a sua conta pessoal no GitHub. A entrega só será considerada válida se estiver incluída em uma release no GitHub. Caso você não saiba como realizar um fork, commit, push e criar uma release no GitHub, será necessário pesquisar ou pedir ajuda. A autonomia também será avaliada neste desafio.

## Requisitos Funcionais

- A tela deve ser implementada de acordo com o layout fornecido.
- A tabela deve ser preenchida com os dados dos municípios da UF selecionada.
- A caixa de seleção de UF deve apresentar todas as UFs do Brasil.
  - É possível utilizar o endpoint de UFs da API do IBGE para buscar os dados das UFs, que pode ser encontrado neste [link](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-UFs-estadosGet), mas essa etapa não é obrigatória.
- Inicialmente, a tabela deve estar vazia e a caixa de seleção deve exibir "Selecione uma UF" como valor padrão.

## Requisitos Não-Funcionais

- O trainee deve utilizar HTML e CSS para implementar a tela. Neste desafio, diferente dos anteriores, é permitido o uso de frameworks CSS, como Bootstrap, Materialize, entre outros.
- O JavaScript deve estar em um arquivo separado.
- O código do projeto deve ser organizado, indentado e legível. Tão importante quanto um programa funcional é um código-fonte fácil de modificar e entender.

## Entrega

- A entrega do desafio deve ser feita por meio de uma Release no GitHub.
  - Crie a release no seu repositório pessoal e envie o arquivo ZIP pelo Google Classroom.
- O trainee não deve excluir o repositório nem a release após a entrega, pois a utilização do GitHub será avaliada.
