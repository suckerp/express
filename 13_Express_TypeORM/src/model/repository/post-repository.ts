import { getRepository } from 'typeorm'
import { Post } from '../entity/Post'
import { User } from '../entity/User'

export class PostRepository{
    //Erstellen einer Auto-Dokumentation mit ** nach dem /
    /** 
    * speichert einen post in der Datenbank
    * @param {userID} userID ID des Users
    * @param {title} title Text des Posts
    * @param {text} text Text des Posts
    * 
    */
    createPost(userID:number, title:string, text:string){

        //Prüfen, ob der User in der Datenbank vorhanden ist
        return getRepository(User).findOne({id:userID})
            .then(user => {
                //Post wird dem User zugewiesen
                const post = new Post()
                post.text = text
                post.titel = title
                post.author = user
                return getRepository(Post).save(post)
            })
    }

    getPostsFromUserID(userID){

    }

    deletePost(postID){

    }
}