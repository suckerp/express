//durch den type PostRepository gibt es keine offensichtlichen Hinweis auf eine weitere Datei oder Abhängigkeit
//Keine Abhängigkeit vonm Controller und Model

type PostRepository = {
    createPost(userID:number, title:string, text:string):Promise<any>
}

export class PostController{
    
    constructor(
        private posts:PostRepository
    ){}

    public createPost = (req,res) => {
        const {userID, title, text} = req.params
        this.posts.createPost(userID, title, text)
            .then(user => {
                res.json(user)
            })
            .catch(error => {
                res.json(error)
            })
    }

}