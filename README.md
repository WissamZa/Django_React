# Django with React Project


## Introduction

This project combines the power of Django as a backend framework with React as a frontend library to create a robust and scalable web application.

## Getting Started

### Backend (Django)
  Open Terminal window in backend folder then use the following commands:
  * `python .\manage.py makemigrations api`
  * `python .\manage.py migrate`

### Frontend (React)
 Open another Terminal in frontend folder then use the following command:
  * `npm install`




## Development

### Backend

* Run `python manage.py runserver` to start the Django development server.
* Use `python manage.py shell` to interact with the Django shell.

### Frontend

* Run `npm run dev` to start the React development server.
* Use `npm run build` to build the React app for production.

## Deployment

### Backend

* Use `python manage.py collectstatic` to collect static files.
* Use `python manage.py migrate` to apply database migrations.
* Deploy the Django app to a production environment (e.g. Heroku, AWS).

### Frontend

* Use `npm run dev` start the development server.
* Use `npm run build` to build the React app for production.
* Deploy the React app to a production environment (e.g. Netlify, Vercel).

