# API Specification

## Create Users

Request :

- Method : POST
- Endpoint : `/users`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "username": "string",
  "password": "string",
  "nama": "string",
  "email": "string",
  "photo": "string"
}
```

Response :

```json
{
  "username": "string",
  "password": "string",
  "nama": "string",
  "email": "string",
  "photo": "string",
  "_id": "string, unique",
  "createdAt": "date",
  "updatedAt": "date",
  "__v": "number"
}
```

## Get All Users

Request :

- Method : GET
- Endpoint : `/users`
- Header :
  - Accept: application/json

Response :

```json
{
  "username": "string",
  "password": "string",
  "nama": "string",
  "email": "string",
  "photo": "string",
  "_id": "string, unique",
  "createdAt": "date",
  "updatedAt": "date",
  "__v": "number"
}
```

## Get User By Id

Request :

- Method : GET
- Endpoint : `/users/{id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "username": "string",
  "password": "string",
  "nama": "string",
  "email": "string",
  "photo": "string",
  "_id": "string, unique",
  "createdAt": "date",
  "updatedAt": "date",
  "__v": "number"
}
```

## Update User By Id

Request :

- Method : PUT
- Endpoint : `/users/{id}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "username": "string",
  "password": "string",
  "nama": "string",
  "email": "string",
  "photo": "string"
}
```

Response :

```json
{
  "message": "string"
}
```

## Delete User By Id

Request :

- Method : DELETE
- Endpoint : `/users/{id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "message": "string"
}
```

## Create Result Parameter

Request :

- Method : POST
- Endpoint : `/result_parameter`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "condition_parameter": "string",
  "description": "string",
  "max_score": "number",
  "min_score": "number"
}
```

Response :

```json
{
  "condition_parameter": "string",
  "description": "string",
  "max_score": "number",
  "min_score": "number",
  "_id": "string, unique",
  "__v": "number"
}
```

## Get All Result Parameter

Request :

- Method : GET
- Endpoint : `/result_parameter`
- Header :
  - Accept: application/json

Response :

```json
{
  "condition_parameter": "string",
  "description": "string",
  "max_score": "number",
  "min_score": "number",
  "_id": "string, unique",
  "__v": "number"
}
```

## Get Result Parameter By Id

Request :

- Method : GET
- Endpoint : `/result_parameter/{id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "condition_parameter": "string",
  "description": "string",
  "max_score": "number",
  "min_score": "number",
  "_id": "string, unique",
  "__v": "number"
}
```

## Update Result Parameter

Request :

- Method : PUT
- Endpoint : `/result_parameter/{id}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "condition_parameter": "string",
  "description": "string",
  "max_score": "number",
  "min_score": "number"
}
```

Response :

```json
{
  "message": "string"
}
```

## Delete Result Parameter

Request :

- Method : DELETE
- Endpoint : `/result_parameter/{id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "status": "string"
}
```
