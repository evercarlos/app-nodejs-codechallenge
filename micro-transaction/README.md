<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# Microservicios antifraude aplicando arquitectura hexagonal 
## Requisitos
- nodejs: v 18.20.4

## Estructura del Proyecto Basado en Aplication, Domain, Infrastructure
1) ``Capa Application``
2) ``Capa de Dominio (núcleo-core)``
3) ``Capa de Infraestructura``

## Funcionalidad
- Probar por postman : 
```bash
curl --location 'localhost:3000/transactions' \
--header 'Content-Type: application/json' \
--data '{
  "tranferTypeId": 1,
  "value": 2
}'

```
## Running the app
- npm run start:dev

```bash
# watch mode
$ npm run start:dev
```
