import { getRepository } from 'typeorm'
import { User } from '../entity/User'

export class UserRepository{
    getUserPosts(){
        return getRepository(User).find({relations:["posts"]})
    }
}