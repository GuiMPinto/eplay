# Faça as Configurações iniciais

* git clone https://github.com/GuiMPinto/eplay.git
Clone o projeto inicial.

* npm i
Instala o NPM, com as dependências básicas do REACT e TYPESCRIPT.

* npm i --save styled-components react-router-dom
Instala as duas bibliotecas.

* npm start
Comando para inicializar o projeto

* npx eslint --fix
Cada o erro de PRETTIER. Aperte 'Control + C' para sair do terminal depois entre
com este comando para corrigir e logo em seguida entre com com 'npm start'.

Coloca a fonte ROBOTO dentro de ./public/index.html logo abaixo da
tag <Tiltle>EPLAY - A sua loja de games</Tiltle>

Criaremos a documento de estilo global ./src/styles.ts



# Construa o cabeçalho

Cria uma pasta assets src/assets e coloque o logo.svg

Cria uma pasta components e Header também um documentos index para o pasta
que também é um componente. src/components/Header/index.tsx

Cria a estrutura do index.tsx do Header, importamos para o App.tsx onde o
componente será usado. Cria-se também styles.ts para o componente Header.



# Crie o banner

Colocar a imagem 'banner-homem-aranha.png' em assets/images. Criamos um componente
Banner. Criamos uma pasta components/Banner, com dois documentos index.tsx e styles.ts.

Colocar o componente Banner no App.tsx logo abaixo do componente Header.



# Componentize - Parte I

Criamos um botão verde que será reaproveitado em vários componentes. Chamaremos de este
componente de tag. Criamos uma pasta components/Tag, com dois documentos index.tsx e styles.ts.



# Componentize - Parte II

Criaremos os carts dos produtos. Criaremos o componente Product; uma pasta components/Product,
com dois documentos index.tsx e styles.ts.

Criaremos os carts para a lista de produtos. Criaremos o componente ProductList; uma pasta
components/ProductList, com dois documentos index.tsx e styles.ts.


# Construa as páginas

Criaremos uma pasta 'pages' onde cada página será da aplicação terá uma pasta com o seu nome
e dentro desta terá um documento 'index.tsx' e um 'styles.ts'.

Começaremos por criar a página Home, src/pages/Home. Recortamos o código correspondente a Home
de App.tsx para a index.tsx, pages/Home/index.tsx .

No documento App.tsx importamos o docmento Home e colocamos no lugar do códgio que foi recortado.

Mudaremos o componete ProductList que está  é um conteúdo estático (hard coded), para um conteúdo
dinâmico (conteúdo que tenha uma interação com a API). Para isso usaremos a dinâmica do 'Models',
Criando a pasta 'models', src/models. Quando usamos com o models trabalhamos com classes.

Dentro pasta models criaremos a classe games, src/models/Game.ts . Esta classe representa um jogo
da lista de produtos. Sendo assim o componente ProductList usará esta classe para jogo de sua lista.

Criamos um documento 'src/routes.tsx' onde colocamos as rotas, que são os caminhos de uma página a
outra através da interação do usuário.
