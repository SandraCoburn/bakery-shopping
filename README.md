# Bakery Shopping

[Deployed page with Heroku](https://bakery-shopping-test.herokuapp.com/)
Created a Mongodb atlas database to be used in production.

## Project created using:

- ReactJS
- CSS
- Redux
- MongoDB
- NodeJS
- ExpressJS
- Mongoose
- React Reveal

## Start project

- `npm start` will start the server in port 3000
- `npm run server` will start the backend server in port 5000
- `npm run build` will create production files

[Planning files](https://docs.google.com/spreadsheets/d/1FJmWOccfixDTCKLDPWry_m_17rO_fgB8FsR5KwVpQvw/edit?usp=sharing)

## To redeploy changes to Heroku CLI

```
$ heroku login
$ heroku git:clone -a bakery-shopping-test
$ cd bakery-shopping-test

Make some changes to the code you just cloned and deploy them to Heroku using Git.
$ git add .
$ git commit -am "make it better"
$ git push heroku main
```
