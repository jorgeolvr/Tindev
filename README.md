![Alt Text](https://github.com/jorgeolvr/tindev/raw/master/mobile/src/assets/logo@2x.png)

Códigos desenvolvidos durante a **Semana Oministack 8.0** da plataforma [RocketSeat](https://rocketseat.com.br/). O objetivo da aplicação é ter um fluxo similar ao do Tinder utilizando Node, React e MongoDB.

## Como testar na própria máquina?

Para baixar, basta clonar este repositório na sua máquina:

```sh
git clone https://github.com/jorgeolvr/tindev.git
```
## Bibliotecas
As seguintes bibliotecas foram utilizadas na implementação do projeto:

### Backend
- [Express](https://www.npmjs.com/package/express) (Framework projetado para criar aplicativos da Web e APIs)
- [cors Package](https://www.npmjs.com/package/cors) (Define meios para um servidor permitir que seus recursos sejam acessados por uma aplicação de domínio diferente)
- [Mongoose](https://mongoosejs.com/) (Biblioteca do Node.js que proporciona uma solução baseada em esquemas para modelar os dados)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Serviço de DBaaS *Banco de Dados como Serviço* oferecido pela MongoDB)
- [Socket.io](https://socket.io/) (Biblioteca que permite comunicação bidirecional em tempo real entre clientes da web e servidores)

### Frontend
- [React.js](https://pt-br.reactjs.org/) (Framework JavaScript de código aberto com foco em criar interfaces de usuário em páginas web)
- [Axios](https://www.npmjs.com/package/axios) (Cliente HTTP para realizar requisições Ajax)
- [Socket.io Client](https://socket.io/docs/client-api/) (Biblioteca usada no lado do cliente para conectar ao Socket do servidor)

### Mobile
- [React Native](https://facebook.github.io/react-native/) (Framework JavaScript para desenvolver aplicativos de forma nativa)
- [Axios](https://www.npmjs.com/package/axios) (Cliente HTTP para realizar requisições Ajax)
- [Socket.io Client](https://socket.io/docs/client-api/) (Biblioteca usada no lado do cliente para conectar ao Socket do servidor)

## Configurar MongoDB<br>
Crie uma conta no <a href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a>, copie a URL e cole no arquivo de conexão(backend/src/server.js) para que fique no seguinte formato:<br>
```
mongoose.connect('mongodb+srv://<user>:<password>@cluster0-cmkt2.mongodb.net/<database>?retryWrites=true&w=majority', { useNewUrlParser: true });
```
## Endpoints da API REST

- **<code>GET</code>devs**
- **<code>GET</code>devs/all**
- **<code>GET</code>devs/:id**
- **<code>POST</code>devs**
- **<code>POST</code>devs/:id/likes**
- **<code>POST</code>devs/:id/dislikes**
- **<code>DELETE</code>devs/:id**

## Inicialização da aplicação
### Dentro das pastas *frontend e backend* rode:
```
yarn install && yarn start
```

### Dentro da pasta *mobile* rode:

Para usar em um simulador do iOS
```
yarn install && yarn react-native run-ios
```
ou se desejar executar em simulador de android...
```
yarn install && yarn react-native run-android 
```
