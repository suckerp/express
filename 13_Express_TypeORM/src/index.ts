import "reflect-metadata";
import { createConnection } from "typeorm"
import express = require('express')

import { PostRepository } from './model/repository/post-repository'
import { PostController } from './controller/post-controller'

import { UserRepository } from './model/repository/user-repository'
import { UserController } from './controller/user-controller'


createConnection().then(connection => {

    const app = express()

    //hier werden Controller und Model wieder zusammengesetzt
    const postRepository = new PostRepository()
    //Dependency Injection
    const postController = new PostController(postRepository)

    const userRepository = new UserRepository()
    const userController = new UserController(userRepository)
    
    app.get('/posts/add/:userID/:title/:text', postController.createPost)

    app.get('/user', userController.getUserPosts)

    app.listen(3000)



}).catch(error => console.log(error));

/*
createConnection().then(async connection => {

    const app = express()

    app.listen(3000)


    
    
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);
    
    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    const users2 = await connection.manager.getRepository(User).find({id:1});
    console.log("Loaded users: ", users);
     
    console.log("Here you can setup and run express/koa/any other framework.");
    
}).catch(error => console.log(error));*/