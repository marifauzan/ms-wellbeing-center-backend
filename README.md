# API Specification

Dokumentasi API = https://documenter.getpostman.com/view/18634031/UVXerxnB

## Create Account (Register)

Request :

- Method : POST
- Endpoint : `/register`
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
  "success": "boolean",
  "message": "string",
  "data": {
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
}
```
## Create Token (Login)

Request :

- Method : POST
- Endpoint : `/login`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "password": "string",
  "email": "string",
}
```

Response :

```json
{
  "success": "boolean",
  "message": "string",
  "data": "string, unique"
}
```

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
  "success": "boolean",
  "message": "string",
  "data": {
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
  "success": "boolean",
  "message": "string",
  "data": [
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
    },
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
  ]
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
  "success": "boolean",
  "message": "string",
  "data": {
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
  "success": "boolean",
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
  "success": "boolean",
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
  "success": "boolean",
  "message": "string",
  "data": {
    "condition_parameter": "string",
    "description": "string",
    "max_score": "number",
    "min_score": "number",
    "_id": "string, unique",
    "__v": "number"
  }
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
  "success": "boolean",
  "message": "string",
  "data": [
    {
      "condition_parameter": "string",
      "description": "string",
      "max_score": "number",
      "min_score": "number",
      "_id": "string, unique",
      "__v": "number"
    },
    {
      "condition_parameter": "string",
      "description": "string",
      "max_score": "number",
      "min_score": "number",
      "_id": "string, unique",
      "__v": "number"
    },
    {
      "condition_parameter": "string",
      "description": "string",
      "max_score": "number",
      "min_score": "number",
      "_id": "string, unique",
      "__v": "number"
    }
  ]
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
  "success": "boolean",
  "message": "string",
  "data": {
    "condition_parameter": "string",
    "description": "string",
    "max_score": "number",
    "min_score": "number",
    "_id": "string, unique",
    "__v": "number"
  }
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
  "success": "boolean",
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
  "success": "boolean",
  "message": "string"
}
```

## Create Answers

Request :

- Method : POST
- Endpoint : `/answers`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "answer": "string",
  "score": "number"
}
```

Response :

```json
{
  "success": "boolean",
  "message": "string",
  "data": {
    "answer": "string",
    "score": "number",
    "_id": "string, unique",
    "__v": "number"
  }
}
```

## Get All Answers

Request :

- Method : GET
- Endpoint : `/answers`
- Header :
  - Accept: application/json

Response :

```json
{
  "success": "boolean",
  "message": "string",
  "data": [
    {
      "_id": "string, unique",
      "answer": "string",
      "score": "number",
      "__v": "number"
    },
    {
      "_id": "string, unique",
      "answer": "string",
      "score": "number",
      "__v": "number"
    }
  ]
}
```

## Get Answers By Id

Request :

- Method : GET
- Endpoint : `/answers/{id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "success": "boolean",
  "message": "string",
  "data": {
    "answer": "string",
    "score": "number",
    "_id": "string, unique",
    "__v": "number"
  }
}
```

## Update Answers By Id

Request :

- Method : PUT
- Endpoint : `/answers/{id}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "answer": "string",
  "score": "number"
}
```

Response :

```json
{
  "success": "boolean",
  "message": "string"
}
```

## Delete Answers By Id

Request :

- Method : DELETE
- Endpoint : `/answers/{id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "success": "boolean",
  "message": "string"
}
```

## Create Questions

Request :

- Method : POST
- Endpoint : `/questions`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "question": "string",
  "choices": ["string, unique", "string, unique"]
}
```

Response :

```json
{
  "success": "boolean",
  "message": "string",
  "data": {
    "question": "string",
    "choices": ["string, unique", "string, unique"],
    "_id": "string, unique",
    "__v": "number"
  }
}
```

## Get All Questions

Request :

- Method : GET
- Endpoint : `/questions`
- Header :
  - Accept: application/json

Response :

```json
{
  "success": "boolean",
  "message": "string",
  "data": [
    {
      "_id": "string, unique",
      "question": "string",
      "choices": [
        {
          "_id": "string, unique",
          "answer": "string",
          "score": "number"
        },
        {
          "_id": "string, unique",
          "answer": "string",
          "score": "number"
        }
      ],
      "__v": "number"
    },
    {
      "_id": "string, unique",
      "question": "string",
      "choices": [
        {
          "_id": "string, unique",
          "answer": "string",
          "score": "number"
        },
        {
          "_id": "string, unique",
          "answer": "string",
          "score": "number"
        }
      ],
      "__v": "number"
    },
    {
      "_id": "string, unique",
      "question": "string",
      "choices": [
        {
          "_id": "string, unique",
          "answer": "string",
          "score": "number"
        },
        {
          "_id": "string, unique",
          "answer": "string",
          "score": "number"
        }
      ],
      "__v": "number"
    }
  ]
}
```

## Get Question By Id

Request :

- Method : GET
- Endpoint : `/questions/{id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "success": "boolean",
  "message": "string",
  "data": {
    "_id": "string, unique",
    "question": "string",
    "choices": [
      {
        "_id": "string, unique",
        "answer": "string",
        "score": "number"
      },
      {
        "_id": "string, unique",
        "answer": "string",
        "score": "number"
      }
    ],
    "__v": "number"
  }
}
```

## Update Question

Request :

- Method : PUT
- Endpoint : `/questions/{id}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "question": "string",
  "choices": ["string, unique", "string, unique"]
}
```

Response :

```json
{
  "success": "boolean",
  "message": "string"
}
```

## Delete Question

Request :

- Method : DELETE
- Endpoint : `/questions/{id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "success": "boolean",
  "message": "string"
}
```

## Create Result from Question

Request :

- Method : POST
- Endpoint : `/result_from_question`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "user": "string, unique",
  "result_parameter": "string, unique",
  "total_score": "number"
}
```

Response :

```json
{
  "success": "boolean",
  "message": "string",
  "data": {
    "user": "string, unique",
    "result_parameter": "string, unique",
    "total_score": "number",
    "_id": "string, unique",
    "createdAt": "date",
    "updatedAt": "date",
    "__v": "number"
  }
}
```

## Get All Result from Question

Request :

- Method : GET
- Endpoint : `/result_from_question`
- Header :
  - Accept: application/json

Response :

```json
{
  "success": "boolean",
  "message": "string",
  "data": [
    {
      "_id": "string, unique",
      "user": {
        "_id": "string, unique",
        "username": "string",
        "password": "string",
        "nama": "string",
        "email": "string",
        "photo": "string",
        "createdAt": "date",
        "updatedAt": "date"
      },
      "result_parameter": {
        "_id": "string, unique",
        "description": "string",
        "max_score": "number",
        "min_score": "number",
        "condition_parameter": "string"
      },
      "total_score": "number",
      "createdAt": "date",
      "updatedAt": "date",
      "__v": "number"
    },
    {
      "_id": "string, unique",
      "user": {
        "_id": "string, unique",
        "username": "string",
        "password": "string",
        "nama": "string",
        "email": "string",
        "photo": "string",
        "createdAt": "date",
        "updatedAt": "date"
      },
      "result_parameter": {
        "_id": "string, unique",
        "description": "string",
        "max_score": "number",
        "min_score": "number",
        "condition_parameter": "string"
      },
      "total_score": "number",
      "createdAt": "date",
      "updatedAt": "date",
      "__v": "number"
    },
    {
      "_id": "string, unique",
      "user": {
        "_id": "string, unique",
        "username": "string",
        "password": "string",
        "nama": "string",
        "email": "string",
        "photo": "string",
        "createdAt": "date",
        "updatedAt": "date"
      },
      "result_parameter": {
        "_id": "string, unique",
        "description": "string",
        "max_score": "number",
        "min_score": "number",
        "condition_parameter": "string"
      },
      "total_score": "number",
      "createdAt": "date",
      "updatedAt": "date",
      "__v": "number"
    }
  ]
}
```

## Get Result from Question By Id

Request :

- Method : GET
- Endpoint : `/result_from_question/{id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "success": "boolean",
  "message": "string",
  "data": {
    "_id": "string, unique",
    "user": {
      "_id": "string, unique",
      "username": "string",
      "password": "string",
      "nama": "string",
      "email": "string",
      "photo": "string",
      "createdAt": "date",
      "updatedAt": "date"
    },
    "result_parameter": {
      "_id": "string, unique",
      "description": "string",
      "max_score": "number",
      "min_score": "number",
      "condition_parameter": "string"
    },
    "total_score": "number",
    "createdAt": "date",
    "updatedAt": "date",
    "__v": "number"
  }
}
```

## Update Result from Question

Request :

- Method : PUT
- Endpoint : `/result_from_question/{id}`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "user": "string, unique",
  "result_parameter": "string, unique",
  "total_score": "number"
}
```

Response :

```json
{
  "success": "boolean",
  "message": "string"
}
```

## Delete Result from Question

Request :

- Method : DELETE
- Endpoint : `/result_from_question/{id}`
- Header :
  - Accept: application/json

Response :

```json
{
  "success": "boolean",
  "message": "string"
}
```
