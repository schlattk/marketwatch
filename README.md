**app to follow selected stocks and markets**

graphical illustration of price movements for selected stocks

created with create-react-app and chart js as well as node server for database api

with MongoDb database

to run:  

clone the repo  

npm install

I am using custom-env for switching between test and development database. In the root of the backend
directory -

create .env file with the following content:

APP_ENV=dev
DB_HOST='your path to mongodb dev here'

.env.test file with the following content:

APP_ENV=test
DB_HOST='your path to mongodb dev here'

npm start starts backend server and react server using concurrently

npm test to run tests  


Enter stock symbol - for example MSFT or FB and period and press submit.  

Uses an Api to fetch live data.  
