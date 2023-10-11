# node base hexagonal

This is a base project prepared to start a new project using hexagonal architecture with nodejs.

# How to use

To use this base project, follow these steps:

1. Clone this repository in your local machine
2. Install the dependencies with `npm install` or `yarn install` in the root folder
3. Run the project with `npm run start` or `yarn start`
4. Access the application in the browser at `http://localhost:3000`

You can how start building your own project using the hexagonal architecture pattern.

# Getting Started

Now that you have the base project set up, you can start building your own project using the hexagonal architecture pattern. Here are some key points to get you started:

- Define your application's core domain, which includes the business logic and use cases.
- Create adapters to connect the core domain with external systems, such as databases and external services.
- Implement your application's business logic within the core domain using the hexagonal architecture principles.

# Documentation

Pre requisites: It is necessary to have the project running to be able to raise the swagger
To be able to see the swagger with all the api documentation enter the path

## Swagger

```bash
http://localhost:3000/docs
```

## Code Documentation

To be able to see the code documentation please run the following command, it will generate a folder called docs with the documentation and create a server to be able to see it in the browser at the following url http://localhost:8080

```bash
npm run docs
```

# Collaborators

- Matias Capuano
