
# Task-Manager
Backend for Task manager app | End to End APIs for login and tasks
## Author

- [@mogileeswar](https://github.com/mogili1402)


## Features

- Simple APIs

- Cross platform



## Installation

Install node 

```bash
  sudo apt install node
```

    
## Run Locally

Clone the project

```bash
  git clone https://github.com/mogili1402/task-manager
```

Go to the project directory

```bash
  cd project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Tech Stack


**Server:** Node, Express


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`
`JWT_SECRET`
`DATABASE_URL`



## Feedback

If you have any feedback, please reach out to us at mogileeswarreddygundluri842@gmail.com


## API Reference

#### Signup new user

```http
  POST /users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**|
| `password` | `string` | **Required**|
| `age` | `int` | **Optional**|

#### Login user

```http
  POST /users/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required** username to Login |
| `password`      | `string` | **Required**  |

#### Get user profile

```http
  GET /users/me
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required** username to Login |
| `password`      | `string` | **Required**  |
| `api_key`      | `string` | **Required**  |


#### Create new task

```http
  POST /tasks
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `task name`      | `string` | **Required**  |
| `completed`      | `boolean` | **Optional**  |
| `api_key`      | `string` | **Required**  |




#### Update task

```http
  PATCH /tasks/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `taskid`      | `string` | **Required**  |
| `completed`      | `boolean` | **Optional**  |
| `api_key`      | `string` | **Required**  |
