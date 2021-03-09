# Express Starter

This starter repo will be used for building applications using React, Material-UI, React-Router, Node, & Express.js.

## Getting started

The project is broken down into a client and server folder.

-  Open your terminal and be sure you are in the right directories for both the client and server folders.
-  Run the command `npm install` or `yarn install` in both the client and server folders to install all the dependencies required.
-  For the server folder, you'll need to set up your database by following the steps in the "Setting up database" section.
-  Start the server by running `npm dev` or `yarn dev`.

## Setting up database.

The database used in this project is postgres with sequelize as the ORM.

-  To get started, you need to have postgres and the sequelize cli installed on your machine. It is preferable to install the CLI globally, otherwise, you'll need to prefix the sequelize command with `./node_modules/.bin` before running it.
-  Create a postgres user with a password (if you wish).
-  Afterwards, create the database you want all your tables to be saved in.
-  In the root of the server folder, create a `.env` file and store the database name, user and password variables using the format shown in the `.env.example` file in the server folder.
-  Run `yarn migrate` or `npm migrate` to create the required tables and store them in the database.
-  NOTE: If you don't have the sequelize cli installed globally, run `./node_modules/.bin sequelize db:migrate` on your terminal to create the required tables and store them in the database.
