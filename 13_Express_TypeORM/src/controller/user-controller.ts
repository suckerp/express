type UserRepository = {
    getUserPosts():Promise<any>
}

export class UserController{

    constructor(
        private user:UserRepository
    ){}

    public getUserPosts = (req,res)=>{
        this.user.getUserPosts()
        .then(user => {
            console.log(user)
            res.json(user)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
    }
}