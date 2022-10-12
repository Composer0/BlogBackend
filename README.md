# BlogBackend
Creating the Server side for the Blog

### Node modules used:
dotenv, express, mongoose, multer, nodemon

- *dotenv* is used to create an .env file that will hide the link to the MongoDB server. In our project, data is being stored on Railway.app.
- *multer* will be used for store data for avatar images.


## Day 1
- Connected index.js to Railway.app.
- Pathway to Railway.app is stored inside of .env which is naturally a hidden file.
- Creating models for the different types of information to be stored within the database.



### Primary Lesson
- Learned more about the appropriate structure for storing files in folders for Express and Node.Js projects.
- https://dev.to/nermineslimane/how-to-structure-your-express-and-nodejs-project-3bl#:~:text=1%20%2FControllers-%20This%20folder%20would%20contain%20all%20the,would%20also%20lie%20over%20here.%20...%20More%20items

- *models* = database models
- *routes* = routes controllers for all the endpoints of the app.
- *controllers* = functions for our APIs
- *config* = Environemnt variables and configuration related stuff
- *middlewares* = contains all the middleware needed
- *utils* = common functions that would be used repeatedly.
- *templates* = if you code requires you to send certain emails/HTML code o the client-side, store it in this file.
