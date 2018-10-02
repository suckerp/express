import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import express = require('express')
import { Post } from "./entity/Post";
import { connect } from "tls";
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from "constants";

createConnection().then(connection => {

    const app = express()

    app.get('/posts/add/:userID/:titel/:text', (req,res) => {
        const {userID, titel, text} = req.params

        const post = new Post()
        post.text = text
        post.titel = titel
        connection.getRepository(Post).save(post)
            .then (post => connection.getRepository(User).findOne({id:userID}))
            .then(user => {
                console.log(user)
                if (user.posts){
                    user.posts = [...user.posts, post]
                    console.log("if")
                }
                else {
                    user.posts = [post]
                    console.log("else")
                }
                return connection.manager.save(user)
            })
            .then(user => {
                console.log(user)
                res.json(user)
            })
            .catch(error => {
                console.log(error)
                res.json(error)
            })
    })

    app.get('/user', (req,res)=>{
        connection.getRepository(User).find()
        .then(user => {
            console.log(user)
            res.json(user)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
    })


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