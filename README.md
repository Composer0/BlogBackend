# Blog: Backend Portion - Server and API
Creating the Server side for the Blog

### Node modules used:
*dotenv*, *express*, *mongoose*, *multer*, *nodemon*

- *dotenv* is used to create an .env file that will hide the link to the MongoDB server. In our project, data is being stored on Railway.app.
- *multer* will be used for store data for avatar images.


## Day 1
- Connected index.js to Railway.app.
- Pathway to Railway.app is stored inside of .env which is naturally a hidden file.
- Creating models for the different types of information to be stored within the database.
- In auth.js used the Routher method with post method to establish what a newUser is and save that information into the database.
- Created an app.use method to allow posting newUser json tokens.
- Tested with Postman and was able to make Nandor the first registered user.



### Additional Lesson
- Learned more about the appropriate structure for storing files in folders for Express and Node.Js projects.
- https://dev.to/nermineslimane/how-to-structure-your-express-and-nodejs-project-3bl#:~:text=1%20%2FControllers-%20This%20folder%20would%20contain%20all%20the,would%20also%20lie%20over%20here.%20...%20More%20items

- *models* = database models
- *routes* = routes controllers for all the endpoints of the app.
- *controllers* = functions for our APIs
- *config* = Environemnt variables and configuration related stuff
- *middlewares* = contains all the middleware needed
- *utils* = common functions that would be used repeatedly.
- *templates* = if you code requires you to send certain emails/HTML code o the client-side, store it in this file.

## Day 2
- Added bcrypt to create hashed passwords in the event that someone hacks into the blog account. 
- Deleted Nandor for, the database and added myself into the Railway.app Mongo Database to test and the bcrypt code does indeed work in creating a hashed password.

## Day 3
- Added login validation post route.

## Day 4
- Created CRUD functions for users.js. Update, Delete and Read.
- Post comment left in Delete section. Once Post route is enabled, this will be enabled.
- Updated index to allow for User route.
- Created CRUD functionality for posts and categories routes. Now possible through Postman to create posts for users and create categories.
- Implemented Multer. It is now possible with Postman on desktop to upload a file to the images folder to be stored for users.

### Additional Lesson
- Getting better at learning how to read and write try...catch statements as well as learning proper http codes.
- 200 - Success
- 401 - Unauthorized
- 404 - Page not found
- 500 - Server error
- When trying to upload files with Postman, you have to actually have a local desktop version of it running. The web app will not allow you to upload the file. So now... I have Postman installed on my desktop.

### Note regarding Categories API CRUD
- Category CRUD functionality is only intended for Admin and may be reserve to be used outside of the final app through Postman. I will only be having 4 categories created at launch which will be [Life, Code, Music, Food].
