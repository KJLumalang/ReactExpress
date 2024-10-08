# Portfolio Website

This is my portfolio website built using the MERN (MongoDB, Express, React, Node.js) stack with SQL support (Sequelize). It showcases my work and skills, including interactive elements, animations, and a section to test my REST API.

## Features

- **MERN SQL Stack**: Combines the best of both worlds—MERN for the front and back end and SQL for database management.
- **Sequelize ORM**: Used to interact with a relational database for smooth and efficient data handling.
- **Framer Motion**: Adds smooth animations and interactive UI transitions.
- **Typewriter Effect**: Provides a dynamic typing animation effect for engaging headers.
- **Tailwind CSS**: Simplifies the process of styling with utility-first CSS.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, Framer Motion, typewriter-effect
- **Backend**: Node.js, Express.js
- **Database**: SQL (via Sequelize ORM)
- **Animations**: Framer Motion
- **REST API**: Built with Express and Sequelize

## Installation and Setup

### Clone the Repository

```bash
git clone https://github.com/KJLumalang/ReactExpress.git
```

## Install Dependencies
### Frontend (kawaii-frontend):
```bash
cd kawaii-frontend
npm install
```

## Backend (kawaii-backend):
```bash
cd ../kawaii-backend
npm install
```

## Set Up Environment Variables:
```bash
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
DB_DATABASE=kawaii
DB_HOST=127.0.0.1
DB_DIALECT=mysql
```

## Run Database Migrations
### From the kawaii-backend directory, run the following command to set up the database tables:
```bash
npx sequelize-cli db:migrate
```

## Run the Application
### Backend:
```bash
cd kawaii-backend
npm start
```


## Frontend:
```bash
cd ../kawaii-frontend
npm start
```

### Open your browser and go to http://localhost:3000 to view the website.

## Contact
### Feel free to reach out if you have any questions or want to collaborate!

### Email: kimjeirolumalang@gmail.com
### GitHub: https://github.com/KJLumalang
