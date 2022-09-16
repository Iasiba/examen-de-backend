//* Dependencias
const express = require("express");
const passport = require("passport");
require("./middleware/auth.middleware")(passport)
const path = require('path')
//*Archivos de rutas
const authRouter = require("./auth/auth.router").router
const userRouter = require("./users/users.router").router
const rolesRouter = require("./Roles/roles.router").router
const PostsRouter = require("./Posts/posts.router").router
const CommentsRouter = require("./Comments/comments.router").router
const defaultData = require ("./utils/defaultData")

const initModels = require('./models/initModels')
//* Configuraciones iniciales

const {db} = require('./utils/database')

//* Configuraciones iniciales
const app = express();

initModels()

db.authenticate()
  .then(() => console.log('Database Authenticated'))
  .catch(err => console.log(err))

  if(process.env.NODE_ENV === 'production'){
    db.sync()
    .then(() => {
      console.log('Database synced')
      defaultData()
    })
    .catch(err => console.log(err))
  } else{
    db.sync({force:true})
    .then(() => {
      console.log('Database synced')
      defaultData()
    })
    .catch(err => console.log(err))
  }
/*
db.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err))
*/
//? Esta configuracion es para habilitar el req.body
app.use(express.json());



app.get("/", (req, res) => {
  res.status(200).json({ message: "All ok!" });
});
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/roles",rolesRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/publications",PostsRouter)
app.use("/api/v1/publications",CommentsRouter)
app.listen(8000, () => {
  console.log("Server started at port 8000");
});

exports.default = app
exports.app = app
module.exports = app