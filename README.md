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
