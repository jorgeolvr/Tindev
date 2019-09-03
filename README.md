# Tindev

Códigos desenvolvidos durante a **Semana Oministack 8.0** da plataforma [RocketSeat](https://rocketseat.com.br/). O objetivo da aplicação é ter um fluxo similar ao do Tinder utilizando Node, React e MongoDB.

## Como testar na minha máquina?

Para baixar, basta clonar este repositório na sua máquina:

```sh
git clone https://github.com/jorgeolvr/tindev.git
```

## Backend

- [Express](https://www.npmjs.com/package/express)
- [cors Package](https://www.npmjs.com/package/cors)
- [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Socket.io](https://socket.io/)

## Frontend

- [React.js](https://pt-br.reactjs.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [Socket.io Client](https://socket.io/docs/client-api/)

## Mobile
- [React Native](https://facebook.github.io/react-native/)
- [Axios](https://www.npmjs.com/package/axios)
- [Socket.io Client](https://socket.io/docs/client-api/)


### Configurar MongoDB<br>
Crie uma conta no <a href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a>, copie a URL e cole no arquivo de conexão(backend/src/server.js) para que fique no seguinte formato:<br>
```
mongoose.connect('mongodb+srv://<user>:<password>@cluster0-cmkt2.mongodb.net/<database>?retryWrites=true&w=majority', { useNewUrlParser: true });
```

### Dentro das pastas (frontend e backend) rode:
```
yarn install
```
```
yarn start
```

### Dentro da pasta (mobile) rode:
```
yarn install
```
```
yarn react-native run-ios ou yarn react-native run-android 
```
